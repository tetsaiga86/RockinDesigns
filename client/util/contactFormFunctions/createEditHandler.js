export default function createEditHandler(fieldName, This){
  return (e) => {
    This.setState({[fieldName]: e.target.value});
  }
}
