import $ from 'jquery'

export default function submit(This, submitURL){
  $.post(submitURL, This.state, () => {
    if(confirm('Request Submitted')){
      This.setState({
        name: "",
        email: "",
        website: false,
        android: false,
        windows: false,
        other: false,
        description: ""
      })
    }
  })
  console.log(This.state);
}
