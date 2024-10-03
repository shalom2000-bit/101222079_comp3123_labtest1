function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    try {
        const filteredArray = mixedArray
        .filter(item => typeof item === 'string')
        .map(item => item.toLowerCase());
      
      resolve(filteredArray);
    } catch (error) {
      reject('Error processing array');
    }
  });
}

const array = ['HELLO', 123, 'WORLD', true, 'JavaScript'];

lowerCaseWords(array)
  .then(result => console.log(result))   
  .catch(error => console.log(error));

