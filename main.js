const controls = document.querySelectorAll(".control");
const item = document.querySelectorAll(".item");
const maxItems = item.length;
let card = document.querySelectorAll(".card")
let cabecalho = document.querySelector(".cabecalho")
let currentItem = 0;

const controls_one = document.querySelectorAll(".control_one");
const item_one = document.querySelectorAll(".item_one");
const maxItems_one = item_one.length;
let card_one = document.querySelectorAll(".card_one")
let currentItem_one = 0;


const controls_two = document.querySelectorAll(".control_two");
const item_two = document.querySelectorAll(".item_two");
const maxItems_two = item_one.length;
let card_two = document.querySelectorAll(".card_two")
let currentItem_two = 0;


const controls_three = document.querySelectorAll(".control_three");
const item_three = document.querySelectorAll(".item_three");
const maxItems_three = item_one.length;
let card_three = document.querySelectorAll(".card_three")
let currentItem_three = 0;


function iteM(){
    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('mouseover', function() {  
        card[i].style.display = 'block';
        card[i].style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
        
        });
      }
      
      for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('mouseout', function() {  
        card[i].style.display = 'none';
        });
    
      }    
}iteM();

function item_One(){

    for (let i = 0; i < item_one.length; i++) {
        item_one[i].addEventListener('mouseover', function() {  
        card_one[i].style.display = 'block';
        card_one[i].style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
        });
    }
    
    for (let i = 0; i < item_one.length; i++) {
        item_one[i].addEventListener('mouseout', function() {  
        card_one[i].style.display = 'none';
        card_one[i].style.zIndex='4'
        });

    }    
}item_One();

function item_twO(){
    for (let i = 0; i < item_two.length; i++) {
        item_two[i].addEventListener('mouseover', function() {  
        card_two[i].style.display = 'block';
        card_two[i].style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
        
        });
      }
      
      for (let i = 0; i < item_two.length; i++) {
        item_two[i].addEventListener('mouseout', function() {  
        card_two[i].style.display = 'none';
        });
    
      }    
}item_twO();


function item_threE(){
    for (let i = 0; i < item_three.length; i++) {
        item_three[i].addEventListener('mouseover', function() {  
        card_three[i].style.display = 'block';
        card_three[i].style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
        
        });
      }
      
      for (let i = 0; i < item_three.length; i++) {
        item_three[i].addEventListener('mouseout', function() {  
        card_three[i].style.display = 'none';
        });
    
      }    
}item_threE();


function control(){
    controls.forEach(control =>{
        control.addEventListener('click',()=>{
            const isLeft = control.classList.contains('arrow-left');
            
            if(isLeft){
                currentItem -= 1;
            }else{
                currentItem += 1;
            }
    
            if(currentItem >= maxItems){
                currentItem = 0;
            }
            if(currentItem < 0){
                currentItem = maxItems - 1;
            }
    
            item[currentItem].scrollIntoView({
                inline:"center"
            })
        })
    })
}control();

function control_one(){
controls_one.forEach(controll =>{
    controll.addEventListener('click',()=>{
        const isLeftt = controll.classList.contains('left');
        
        if(isLeftt){
            currentItem_one -= 1;
        }else{
            currentItem_one += 1;
        }

        if(currentItem_one >= maxItems){
            currentItem_one = 0;
        }
        if(currentItem_one < 0){
            currentItem_one = maxItems - 1;
        }

        item_one[currentItem_one].scrollIntoView({
            inline:"center"
        })
    })
})

}control_one();


function control_twOO(){
    controls_two.forEach(controlll =>{
        controlll.addEventListener('click',()=>{
            const isLefttt = controlll.classList.contains('leftt');
            
            if(isLefttt){
                currentItem_two -= 1;
            }else{
                currentItem_two += 1;
            }
    
            if(currentItem_two >= maxItems_two){
                currentItem_two = 0;
            }
            if(currentItem_two < 0){
                currentItem_two = maxItems_two - 1;
            }
    
            item_two[currentItem_two].scrollIntoView({
                inline:"center"
            })
        })
    })
    
    }control_twOO();

    
    function control_thrEe(){
        controls_three.forEach(controllll =>{
            controllll.addEventListener('click',()=>{
                const isLeftttt = controllll.classList.contains('lefttt');
                
                if(isLeftttt){
                    currentItem_three -= 1;
                }else{
                    currentItem_three += 1;
                }
        
                if(currentItem_three >= maxItems_three){
                    currentItem_three = 0;
                }
                if(currentItem_three < 0){
                    currentItem_three = maxItems_three - 1;
                }
        
                item_three[currentItem_three].scrollIntoView({
                    inline:"center"
                })
            })
        })
        
        }control_thrEe();
    
function scrollRolagem(){
window.addEventListener('scroll', function() {
    if (window.scrollY >= 300) {
      cabecalho.style.backgroundColor='rgba(0, 0, 0, 0.671)'
      
    }else{
        cabecalho.style.backgroundColor='transparent'
    }
  });
}scrollRolagem();