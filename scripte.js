const container=document.querySelector('.container');
createDiv();
function createDiv(dim=16){
    for(let i=0;i<dim*dim;i++){
        const content=document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
}

const divs=document.querySelectorAll('.content');
divs.forEach(div => {
    div.addEventListener('mouseover',changeColor);
});

function changeColor(e){
    this.classList.add('divHover');
}

const button=document.querySelector('.refresh');
button.addEventListener('click',removeColor);
function removeColor(e){
    const divs1=document.querySelectorAll('.content');
    divs1.forEach(div => {
        div.classList.remove('divHover');
    });
    let userInput=prompt('enter number of squares');
    createDiv(userInput);
    container.style['grid-template-columns']='repeat('+userInput+','+480/userInput+'px)';
    container.style['grid-template-rows']='repeat('+userInput+','+480/userInput+'px)';
    const divs2=document.querySelectorAll('.content');
    divs2.forEach(div => {
        div.addEventListener('mouseover',changeColor);
    });
}

