
//form cadastro
const getEmail = document.querySelector('.email')
const getPassword = document.querySelector('.senha')
const submitRegister =  document.querySelector('.submit')

//função para armazenar os dados do usuário e colocar no array
console.log(arr)
function registeredLogin(){
  const data ={
    email: getEmail.value,
    senha: getPassword.value
  }

  arr.push(data) //função para adicionar os objetos no login
  
  console.log(arr)
}

const arr = [] //array vazio para onde vão ser colocados os objetos 


submitRegister.addEventListener("click", function(e){
  e.preventDefault() //quando aperta o botão de submit é padrão que a página recarregue, essa função previne esse comportamento
  
  console.clear() //para limpar o console e não ficar acumulando  

  registeredLogin()

  window.location = './login.html'
}) 
/* essa função captura o botão de submit e o 'addEventListener' fica escutando o click do botão, assim que for 
cliclado ele executa tudo que tem dentro. No caso aí tem a função que fizemos em cima, sempre que clicado ele 
a executa novamente
*/
  



