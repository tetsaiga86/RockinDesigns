export default function getImage(langObj) {
  var images = [];
  if (!langObj) {
    return
  };
  var langArrs = Object.entries(langObj);
  langArrs.forEach((langArr) => {
    var language = langArr[0];
    switch (language) {
      case 'JavaScript':
        images.push('/images/icons/javascript/javascript-original.svg');
        break;
      case 'Ruby':
        images.push('/images/icons/rails/rails-original-wordmark.svg')
        break;
      case 'HTML':
        images.push('/images/icons/html5/html5-original-wordmark.svg')
        break;
      case 'CSS':
        images.push('/images/icons/css3/css3-original-wordmark.svg')
      case 'Assembly':

        break;
      case 'Java':
        images.push('/images/icons/java/java-original-wordmark.svg')
        break;
      case 'C#':
        images.push('/images/icons/csharp/csharp-line.svg')
        break;
    }
  })

  return images
}
