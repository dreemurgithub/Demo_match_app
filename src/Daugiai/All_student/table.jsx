import { useEffect, useState } from "react"


function Table(white,black,oppo_w,uid ){
    const url ='https://tdchess.ducminh27.repl.co/write_json'
    const [data,setdata] = useState(null)
    useEffect(()=>{
        fetch(url,{
            method: 'GET', withCredentials: true,   credentials:'include',
            headers: {   'authorization': uid,
            'Content-Type': 'application/json'  }  }  
          ).then(res=>res.json()).then(data=>setdata(data))
    },[])

    if(data!==null) return data
    if(data==null) return null
}

export default Table