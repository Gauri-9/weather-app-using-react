import { useEffect, useState } from "react";

let AutoSave=()=>{

       let [message,setMessage]=useState();
       useEffect(()=>{
        let data = localStorage.getItem("msg");
        if(data){
            setMessage(data);
        }
       },[])
       useEffect(()=>{
        localStorage.setItem("msg",message);
       },[message])

        return(
            <>
            <form>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <p>Auto Save......</p>
            </form>
            
            </>
        )
}
export default AutoSave;