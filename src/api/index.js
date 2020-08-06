import axios from 'axios';
const api = {
    historyapi : ()=>axios.get('https://api.spacexdata.com/v3/history').then(res=>{
        return res.data
    }),
    historyApiById : (id)=>axios.get(`https://api.spacexdata.com/v3/history?id=${id}`).then(res=>{
        console.log(res)
        return res.data
    }),
    payloadApi : ()=>axios.get("https://api.spacexdata.com/v3/payloads").then(res=>res.data).catch(err=>err.messae),
    payloadApiById : (id)=>axios.get(`https://api.spacexdata.com/v3/payloads?payload_id=${id}`).then(res=>res.data)
}

export default api;