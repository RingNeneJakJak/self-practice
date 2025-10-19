document.addEventListener('DOMContentLoaded', () => {
    const savedBg = localStorage.getItem('bgColor');
    const savedFont = localStorage.getItem('fontColor');
    const savedSize = localStorage.getItem('fontSize');

    if (savedBg) {
      document.body.style.backgroundColor = savedBg;
      document.getElementById('bgColor').value = savedBg;
    }
    if(savedBg) {
        document.body.style.color = savedFont;
        document.getElementById('fontColor') = savedFont;
    } 
    if(savedSize){
        applyfrontSize(savedSize);
        document.getElementById('fontSize') = savedSize;
    }
})

function applyfrontSize(size){
    if(size === "small" ){
        document.body.style.fontSize = "16px"
    }
    if(size === "medium" ){
        document.body.style.fontSize = "24px"
    }
    if(size === "large" ){
        document.body.style.fontSize = "36px"
    }
}

document.getElementById("saveBtn").addEventListener('click',() =>{
    const bgColor = document.getElementById('bgColor').value
    const fontColor = document.getElementById('fontColor').value
    const fontSize = document.getElementById('fontSize').value

    localStorage.getItem('bgColor',bgColor)
    localStorage.getItem('fontColor',fontColor)
    localStorage.getItem('fontSize',fontSize)

    document.body.style.backgroundColor =bgColor;
    document.body.style.color = fontColor;
    applyfrontSize(fontSize)
})

document.getElementById('resetBtn').addEventListener('click', () => {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('fontColor');
    localStorage.removeItem('fontSize');

    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.style.fontSize = '';

    document.getElementById('bgColor').value = '#ffffff';
    document.getElementById('fontColor').value = '#000000';
    document.getElementById('fontSize').value = 'medium';
});