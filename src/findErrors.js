module.exports = function findErrors(correctPassage, errorPassage) {
  const correctPassageArray = correctPassage.split(' ')
  const errorPassageArray = errorPassage.split(' ')
  const errors = []

// this treats each word that ends in a comma as a separate error
  for (let i=0; i < correctPassageArray.length; i++ ) {
    console.log(errorPassageArray[1])
    if (correctPassageArray[i] !== errorPassageArray[i]) {
      errors.push(correctPassageArray[i] + " / " + errorPassageArray[i])
    }
  }

  return errors
}
