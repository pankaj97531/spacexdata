import React,{ useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { fetchSingleHistory } from '../actions/historyAction';
import { dateTimeConverter } from '../helper';
import CustomLink from './CustomLink';

const HistoryDetails = (props) => {
    const [loading,setLoading] = useState(true);
    const [historyData,setHisoryData] = useState([]);
    useEffect(()=>{
        props.fetchSingleHistory(props.match.params.id).then(data=>{
            //console.log(data)
            setHisoryData(data);
            setLoading(false);
        })
    },[])

    return (
        <div className="row" style={{marginTop:"20px"}}>
            {loading && <p>Loading...</p>}
            {!loading && historyData.length && 
            <div id="historydetils" className="col-md-12">
            <p><label>Title</label> : {historyData[0].title}</p>
            <p><label>Event Date Time</label> : {dateTimeConverter(historyData[0].event_date_unix)[0]}</p>
            <p><label>Flight No</label> : {historyData[0].flight_number}</p>
            <p><label>Details</label> : {historyData[0].details}</p>
            <p><label>Links</label> :
            <span className="historylink"><CustomLink href={historyData[0].links.article} name="Article" /></span> 
            <span className="historylink">
                <CustomLink href={historyData[0].links.reddit} name="Reddit" />
            </span>
            <span className="historylink">
                <CustomLink href={historyData[0].links.wikipedia} name="Wikipedia" />
            </span>
            </p>
                </div>}
            
        </div>
    )
}

export default connect(null,{ fetchSingleHistory })(HistoryDetails)
