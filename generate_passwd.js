function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


function generatePassword(options) {

  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }
  // console.log('options', options)




  // create a collection to store user picked up 
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // console.log(collection)

  // remove some part that user don't wanted
  if (options.excludeCharacters) {

    /*collection = collection.filter((kkk) => {
      // console.log(kkk)

      // if (kkk === '0' || kkk === '4') {
      // if (options.excludeCharacters.includes(kkk)) {
      //   return false
      // } else {
      //   return true
      // }

      return !options.excludeCharacters.includes(kkk)

    })*/

    collection = collection.filter(
      kkk => !options.excludeCharacters.includes(kkk)
    )
  }

  // console.log(collection)

  // start to pick out the collection 

  //如果 collection.length === 0，則表示 collection 是一個空陣列，那麼就回傳錯誤提示 'You must select at least one character set'

  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  // console.log('sample(collection)', sample(collection))

  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }


  // console.log('password', password)
  // return the password
  return password
}

// export generatePassword function for other files to use
module.exports = generatePassword
