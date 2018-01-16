function nextState(currentTextState){
  var next = currentTextState+1
  if(next > 3){
    next = 1
  }
  return next
}

export default function toggle(This){
  var next = nextState(This.state.currentTextState);
  var propName = 'text'+next;
  This.setState({
    currentTextState: next,
    text1:false,
    text2:false,
    text3:false,
    [propName]: true
  })
}
