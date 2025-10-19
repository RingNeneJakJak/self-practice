const CreateAccount = document.querySelector('button#submit')

CreateAccount.addEventListener('click',(e)=>{
    e.preventDefault()
    const Username = document.querySelector('input#username')
    const Email = document.querySelector('input#password')
    const Password = document.querySelector('input#password')
    const ConfirmPass = document.querySelector('input#confirm-password')

    const message = document.querySelector('p')

    if(Username.value.length === 0 || Email.value.length === 0){
        message.textContent =  "missing some values, please try again!"
        message.style.color = 'red'
    }

    if(Password.value !== ConfirmPass.value && Password.value.length !== ConfirmPass.value.length){
        message.textContent = "password and confirm do not match, check again"
        message.style.color = 'red'
    } else {
        message.textContent = "your data complete"
        message.style.color = 'green'
    }
    
})