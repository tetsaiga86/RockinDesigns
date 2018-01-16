export default function checkValidation(vs){
  for (var key in vs){
    if (vs[key].state!='success') {
      return false
    }
  }
  return true
}
