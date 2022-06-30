
import {useState,useEffect} from 'react'

function TransactionLeftTab({showHeading,toggleHeading}) { 
  
 
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