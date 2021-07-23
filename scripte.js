createGrid();
//change grid size
const dimension=document.querySelector('.dimension');
dimension.addEventListener('click',()=>{
    let userInput=prompt('enter dimension of the grid');
    createGrid(userInput);
});
//rainbow colors
const rainbow=document.querySelector('.rainbow');
rainbow.addEventListener('click',()=>{
    resetColor();
    hoverColor();
});
//black gradient
const gradient=document.querySelector('.gradient');
gradient.addEventListener('click',()=>{
    let grad=255;
    resetColor();
    const divs=document.querySelectorAll('.container div');
    divs.forEach(div => {
        div.addEventListener('mouseover',() =>{
            div.style.backgroundColor='rgb('+grad--+','+grad--+','+grad--+')';
        });
    });
});

function createGrid(dim=16){
    const container=document.querySelector('.container');
    for(let i=0;i<dim*dim;i++){
        const content=document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
    }
    resetColor();
    hoverColor(0);
    if(dim!==16){
        const divs=document.querySelectorAll('.container div');
        divs.forEach(div => {
            div.classList.remove('divHover');
        });
        container.style['grid-template-columns']='repeat('+dim+','+480/dim+'px)';
        container.style['grid-template-rows']='repeat('+dim+','+480/dim+'px)';
    }
}

function hoverColor(color){
    const divs=document.querySelectorAll('.container div');
    divs.forEach(div => {
        div.addEventListener('mouseover',() =>{
            if(typeof color === 'number')
                div.style.backgroundColor='rgb('+color+','+color+','+color+')';
            else
                div.style.backgroundColor='rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')';
        });
    });
}

function resetColor(){
    const divs=document.querySelectorAll('.container div');
    divs.forEach(div => {
        div.style.backgroundColor='rgb(255,255,255)';
    });
}

function getRandomInt(max=256) {
    return Math.floor(Math.random() * max);
}



