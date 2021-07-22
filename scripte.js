createGrid();
function createGrid(dim=16){
    const container=document.querySelector('.container');
    for(let i=0;i<dim*dim;i++){
        const content=document.createElement('div');
        content.style.backgroundColor='rgb(255,255,255)';
        container.appendChild(content);
    }
    const divs=document.querySelectorAll('.container div');
    divs.forEach(div => {
        div.addEventListener('mouseover',(e) =>{
            div.style.backgroundColor='rgb(0,0,0)';
        });
    });
    if(dim!==16){
        divs.forEach(div => {
            div.classList.remove('divHover');
        });
        container.style['grid-template-columns']='repeat('+dim+','+480/dim+'px)';
        container.style['grid-template-rows']='repeat('+dim+','+480/dim+'px)';
    }
}
//change grid size
const refresh=document.querySelector('.refresh');
refresh.addEventListener('click',()=>{
    let userInput=prompt('enter dimension of the grid');
    createGrid(userInput);
});
//random colors
const random=document.querySelector('.random');
random.addEventListener('click',()=>{
    const divs=document.querySelectorAll('.container div');
    divs.forEach(div => {
        div.addEventListener('mouseover',(e) =>{
            div.style.backgroundColor='rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')';
        });
    });
});
function getRandomInt(max=256) {
    return Math.floor(Math.random() * max);
}
//shades of black
const shades=document.querySelector('.shades');
shades.addEventListener('click',()=>{
    let userInput=prompt('enter dimension of the grid');
    createGrid(userInput);
});


