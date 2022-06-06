
import {useState,useEffect} from 'react'

function TransactionLeftTab({show,toggleHeading}) { 
  
  const [showHeading, setShowHeading] = useState(true) 
  
  useEffect(()=>{
    setShowHeading(show)
  },[show])

  return (
    <>
      <ul className="nav" onClick={e=>toggleHeading(e)} >
        {showHeading ?
        <li className="tablet " >
        Reciept
      </li>
      :
      <li className="tablet" >
          Payment
        </li>
      }
      </ul>
    </>
  );
}

export default TransactionLeftTab;