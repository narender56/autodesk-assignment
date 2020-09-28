const validateName = (value = '') => {
  const regex = /^[A-Za-z\s]{1,20}\w{3}$/
  return value.trim().length > 2 && regex.test(value)
}

const validatePassword = password => /[a-zA-Z0-9]\w{5}/.test(password)

const matchStrings = (str1, str2) => str1 === str2

const validateUser = user => {
  const validform = {}
  const { firstName, lastName, username, confirmUsername, password, confirmPassword } = user
  if (!firstName) {
    validform.firstName = 'Please enter your first name'
  }

  if (!lastName) {
    validform.lastName = 'Please enter your last name'
  }

  if (!validateName(username)) {
    validform.username = 'Please enter a valid username'
  }

  if (!validateName(confirmUsername)) {
    validform.confirmUsername = 'Please enter valid confirm username'
  }

  if (username && confirmUsername && !matchStrings(username, confirmUsername)) {
    validform.confirmUsername = 'Username\'s are not matched'
  }

  if (!validatePassword(password)) {
    validform.password = 'Please enter valid password'
  }

  if (!validatePassword(confirmPassword)) {
    validform.confirmPassword = 'Please enter valid confirm password'
  }

  if (password && confirmPassword && !matchStrings(password, confirmPassword)) {
    validform.confirmPassword = 'Password\'s are not matched'
  }

  const valid = !Boolean(Object.keys(validform).length)

  return { valid, ...validform }
}


export {
  validateName,
  validatePassword,
  matchStrings,
  validateUser
}