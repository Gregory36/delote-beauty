document.querySelector("#button_right_description").onclick = buttonRightDescriptionClicked;
document.querySelector('#button_right_description_exit').onclick = buttonRightDescriptionExitClicked;

function buttonRightDescriptionExitClicked(){
    let div = document.querySelector('.right_description');
    div.style.right = '-25%';
}

function buttonRightDescriptionClicked(){
    let div = document.querySelector('.right_description');
    div.style.right = '0%';
}

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        let div = document.querySelector('.right_description');
        div.style.right = '-25%';
    }
})