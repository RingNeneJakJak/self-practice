const Input = document.querySelector("input#keyInput")
const Message = document.querySelector('div#keyLog')
Input.addEventListener('keydown',(e) => {
    const key = e.key
    const p = document.createElement('p')
    p.textContent = `You pressed: ${key}`

    if(key === 'Enter'){
        p.style.color = 'blue'
    } else {
        p.style.color ='black'
    }
    Message.appendChild(p)
})