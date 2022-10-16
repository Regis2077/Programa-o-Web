const user = {
  email: 'emo_sad@hotmail.com',
  password: 'emosad123'
}
//Form login
const emailLogin = document.querySelector('.loginInput')
const passwordLogin = document.querySelector('.passwordInput')
const loginButton = document.querySelector('.submitLogin')



//função que valida se as informações que indicamos no user s
function userValidation(){
  const dataLogin = {
    email: emailLogin.value,
    password: passwordLogin.value
  }
  if(dataLogin.email === user.email && dataLogin.password === user.password){
    window.location = './index.html'
  }else{
    alert('login incorreto, tente novamente')
  }
}

loginButton.addEventListener("click", function (e){
  e.preventDefault()
  userValidation()
})

