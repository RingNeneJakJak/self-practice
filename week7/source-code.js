function listFruits(){
    const ul = document.getElementById("fruits")
    const allfruits = ul.children
    Array.from(allfruits).forEach((fruit) => console.log(fruit.textContent))
}

function showBanana(){
    const ul = document.getElementById('fruits')
    const allfruits = ul.children
    const banana = allfruits[1]
    console.log(banana.previousElementSibling.textContent)
    console.log(banana.nextElementSibling.textContent)
}

function addFruit() {
    const ul = document.getElementById('fruits')
    const newfruits = document.getElementById('new-fruit')
    const text = newfruits.value.trim()
    if(text === "") return;

    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
    console.log(`add: ${text}`)
    newfruits.value = ""
}

function toggleBox(){
    const box = document.getElementById("box")

    if(box.style.display === "none"){
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}