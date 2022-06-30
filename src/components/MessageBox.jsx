const MessageBox =({message,color})=>{
  return (
    <div className ={`msgBox ${color}`}>
      <p>{message}</p>
    </div>
  )
}
export default MessageBox