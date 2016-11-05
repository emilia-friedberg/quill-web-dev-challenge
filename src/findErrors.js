module.exports = function findErrors(correctPassage, errorPassage) {
  const correctPassageArray = correctPassage.split(' ')
  const errorPassageArray = errorPassage.split(' ')
  const errors = []

  // this treats each list of single words separated by a comma as one error
  for (let i=0; i < correctPassageArray.length; i++ ) {

    if (correctPassageArray[i] !== errorPassageArray[i]) {

      if (correctPassageArray[i][correctPassageArray[i].length - 1] !== ',') {
        errors.push(correctPassageArray[i] + " / " + errorPassageArray[i])

      } else {
        // line below checks to see if this sequence has already been stored in errors
        if (correctPassageArray[i-1][correctPassageArray[i-1].length -1] !== ',') {
          let current = i
          const correctSequence = []
          const errorSequence = []

          while (correctPassageArray[current][correctPassageArray[current].length -1] === ',' &&
            current !== correctPassageArray.length - 1 &&
            correctPassageArray[current] !== errorPassageArray[current]) {
            correctSequence.push(correctPassageArray[current])
            errorSequence.push(errorPassageArray[current])
            current++
          }

          errors.push(correctSequence.join(' ') + " / " + errorSequence.join(' '))
        }
      }
    }
  }

  return errors
}
