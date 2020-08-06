import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { payloadFetch } from '../actions/payloadAction';
import './History.css';

const Payload = (props) => {
    const [pageCount,setPageCount] = useState(0);
    const [data,setData] = useState([]);
    useEffect(()=>{
        props.payloadFetch().then((data)=>{
            let copyArr = data.map((element)=>element);
            let noOfpages = Math.floor(copyArr.length/10);
            let pageRemain = (copyArr.length%10);
            if(pageRemain){
                noOfpages = noOfpages+1;
            }
            setData(prevState=>prevState.concat(copyArr.splice(0,10)))
            setPageCount(noOfpages)
        })
    },[])
    const handlePageClick=(e)=>{

        let copyArr = props.payloadData.map((element)=>element);
//        console.log(copyArr.splice(10*e.selected,10))
        setData([].concat(copyArr.splice(10*e.selected,10)))
    }
    return (
        <div>
            <h1>Payload</h1>
            {props.loading && <p>Loading...</p>}
            {
                !props.loading && data && data.length ?
                <div>
                <table className="table table-sm">
                <thead className="thead-light">
                    <tr>
                        <th>Payload Id</th>
                        <th>Nationality</th>
                        <th>Manufacturer</th>
                        <th>Payload Type</th>
                        <th>Payload weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((element)=>(
                    <tr key={element.payload_id}>
                        <td><Link to={`/payloads/${element.payload_id}`}>{element.payload_id}</Link></td>
                        <td><Link to={`/payloads/${element.payload_id}`}>{element.nationality}</Link></td>
                        <td>{element.manufacturer}</td>
                        <td>{element.payload_type}</td>
                        <td>{element.payload_mass_kg}</td>
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
           </div> : null
            }
        </div>
    )
}

function mapStateToProps(store){
    return{
        payloadData : store.payloadData.data,
        errinfo : store.payloadData.errinfo,
        loading : store.payloadData.loading,
    }
}

export default connect(mapStateToProps,{payloadFetch})(Payload)
