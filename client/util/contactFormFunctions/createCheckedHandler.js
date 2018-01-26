export default function createCheckedHandler(fieldName, This){
  return (e) => {
    This.setState({[fieldName]: e.target.checked})
  }
}
