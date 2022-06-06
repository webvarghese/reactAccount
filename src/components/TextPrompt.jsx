const TextPrompt = ({ x, y, prompt, fillText, closePrompt}) => {
  return (
    <div className="prompt" style={{ position: "absolute", top: y, left: x }}>
     {prompt.map((p,i)=><div key={i} onClick={()=>{fillText(p) 
      closePrompt()}}>{p.textField}</div>)}
    </div>
  );
};
export default TextPrompt;
