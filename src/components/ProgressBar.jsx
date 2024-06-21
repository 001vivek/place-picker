import { useEffect, useState } from "react"

export default function ProgressBar({time}){
    const [timeRemaining,setTimeRemaing]=useState(time)
  
 useEffect(()=>{
   const interval= setInterval(()=>{
     console.log('INTERVAL')
     setTimeRemaing((prevTime)=> prevTime-10)
    },10)
    return ()=>{
      clearInterval(interval)
      console.log('CLEAR INTERVAL')
    }

  },[])
    return(
        <progress value={timeRemaining} max={time} />
    )
}