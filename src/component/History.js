import React,{ useEffect,useState } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { fetchHistory } from '../actions/historyAction';
import { Link } from 'react-router-dom';
import { dateTimeConverter } from '../helper';
import './History.css';

const History = (props) => {
//console.log(props.historyData)
    const [pageCount,setPageCount] = useState(0);
    const [data,setData] = useState([]);
    useEffect(()=>{
        props.fetchHistory().then((data)=>{
//            console.log(data);
            let copyArr = data.map((element)=>element);
            let noOfpages = Math.floor(copyArr.length/10);
        //    console.log(noOfpages)
            let pageRemain = (copyArr.length%10);
            if(pageRemain){
                noOfpages = noOfpages+1;
            }
            setData(prevState=>prevState.concat(copyArr.splice(0,10)))
            
            setPageCount(noOfpages)
        });

    },[])
    const handlePageClick=(e)=>{
        let copyArr = props.historyData.map((element)=>element);

        setData([].concat(copyArr.splice(10*e.selected,10)))
    }
    return (
        <div>
            <h2>History</h2>
            {props.loading && <p>Loading...</p>}
            {
                !props.loading && data && data.length &&
                <div>
                <table className="table table-sm">
                <thead className="thead-light">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Event Date</th>
                        <th>Flight No</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element)=>(
                    <tr key={element.id}>
                        <td><Link to={`/history/${element.id}`}>{element.id}</Link></td>
                        <td><Link to={`/history/${element.id}`}>{element.title}</Link></td>
                        <td>{dateTimeConverter(element.event_date_unix)[0]}</td><td>{element.flight_number}</td>
                    </tr>))}
                </tbody>
            </table>
             <ReactPaginate
             previousLabel={'previous'}
             nextLabel={'next'}
             breakLabel={'...'}
             breakClassName={'break-me'}
             pageCount={pageCount}
             marginPagesDisplayed={2}
             pageRangeDisplayed={5}
             onPageChange={handlePageClick}
             containerClassName={'pagination'}
             subContainerClassName={'pages pagination'}
             activeClassName={'active'}
           />
           </div>
            }
        </div>
    )
}
const mapStateToProp=(store)=>{
    return{
        historyData : store.historyData.data,
        loading : store.historyData.loading,
        errinfo : store.historyData.errinfo
    }
}
export default connect(mapStateToProp,{fetchHistory})(History)
