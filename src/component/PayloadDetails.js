import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchSinglePayload } from '../actions/payloadAction';

const PayloadDetails = (props) => {
    const [loading,setLoading] = useState(true);
    const [payloadData,setHisoryData] = useState([]);
    useEffect(()=>{
        props.fetchSinglePayload(props.match.params.id).then(data=>{
            console.log(data)
            setHisoryData(data);
            setLoading(false);
        })
    },[])
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && payloadData.length && 
            <div>
                <div id="historydetils" style={{marginTop:"20px"}} className="col-md-12">
                <p><label>Payload Id</label> : {payloadData[0].payload_id}</p>
            <p><label>Norad Id</label> : {payloadData[0].norad_id &&payloadData[0].norad_id.length ? payloadData[0].norad_id.map((item,index)=><span key={index}>{item}</span>) : "NA" }</p>
            <p><label>Reused</label> : {payloadData[0].reused.toString()}</p>
                
                <p><label>Customers</label> : {payloadData[0].customers &&payloadData[0].customers.length && payloadData[0].customers.map((item,index)=><span key={index}>{item}</span>)}</p>    
                <p><label>Nationality</label> : {payloadData[0].nationality}</p>
                <p><label>Manufacturer</label> : {payloadData[0].manufacturer}</p>
                <p><label>Payload Type</label> : {payloadData[0].payload_type}</p>
                <p><label>Payload Weight In Kg</label> : {payloadData[0].payload_mass_kg ? payloadData[0].payload_mass_kg : "NA" }</p>    
                <p><label>Orbit</label> : {payloadData[0].orbit}</p>    
            </div>
            </div> 
            }
            
        </div>
    )
}

export default connect(null,{fetchSinglePayload})(PayloadDetails)
