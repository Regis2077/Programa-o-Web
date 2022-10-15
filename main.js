const getEmail = document.querySelector('.email')
const getPassword = document.querySelector('.senha')
const listennerButton =  document.querySelector('.submit')
const buttonLogin = document.querySelector('.submitLogin')

const emailLogin = document.querySelector('.loginInput')
const passwordLogin = document.querySelector('.passwordInput')



//listennerButton.addEventListener('click', inputValues)
buttonLogin.addEventListener('click', inputValues())

const inputValues = (e) =>{
  e.preventDefault()
  const emailLoginValue = emailLogin.value
  const emailpasswordValue = passwordLogin.value
  const emailValue = getEmail.value
  const passwordValue = getPassword.value

  if (emailLoginValue == 'raissa') {
    alert('dados incorretos, tente novamente')
  }
  console.log({emailValue, passwordValue})
}
