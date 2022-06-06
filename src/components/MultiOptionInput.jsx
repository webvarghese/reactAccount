import {useState, useEffect,useMemo} from 'react'
import TextPrompt from "./TextPrompt";

const MultiOptionInput =({promptList, textField, idField, fillText,returnText})=>{
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [prompt, setPrompt] = useState([]);
    const [showPrompt, setShowPrompt] = useState(false);

    const whenChanged = (e) => {
        const str = e.target.value
        returnText(str)
        if (str.length < 1){
          setPrompt([])
          return
        } 
        setPrompt(promptList.filter((p) => p.textField.toLowerCase().indexOf(str.toLowerCase()) > -1));
        whenFocus(e)
      };
    const whenFocus = (e) => {
      setX(e.target.getBoundingClientRect().right);
      setY(e.target.getBoundingClientRect().top);
    };
    useMemo(() => {
      setShowPrompt(false);
      if(prompt.length > 0){
        setShowPrompt(true)
      }
    }, [prompt]);

    const closePrompt =()=>{
      setShowPrompt(false)
    }
      
      return(
          <>
          {showPrompt && <TextPrompt x={x} y={y} prompt ={prompt} fillText={fillText} closePrompt={closePrompt}/>}
          <input type="hidden" value={idField} />
          <input 
            type="text"
            placeholder="Enter here .."
            value={textField}
            onChange={(e) => whenChanged(e)} 
            />
          </>
      )
}

export default MultiOptionInput;