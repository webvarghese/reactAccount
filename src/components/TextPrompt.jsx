const TextPrompt = ({ x, y, prompt, fillText}) => {
  return (
    <div className="prompt" style={{ position: "absolute", top: y, left: x }}>
     {prompt.map((p,i)=><div key={i} onClick={e=>fillText(e.target.textContent)}>{p}</div>)}
    </div>
  );
};
export default TextPrompt;
