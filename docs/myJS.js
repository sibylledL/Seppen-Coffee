var coffe = document.getElementById('coffee');
var menu1 = document.getElementsByClassName('carte1');

var tea = document.getElementById('tea');
var menu2 = document.getElementsByClassName('carte2');

var food = document.getElementById('food');
var menu3 = document.getElementsByClassName('carte3');

var copain = document.getElementById('copain');
var menu4 = document.getElementsByClassName('carte4');

coffe.addEventListener("click",change1);
function change1(){
    menu1[0].style.display = 'flex';
    menu2[0].style.display = "none";
    menu3[0].style.display = "none";
    menu4[0].style.display = "none";
}

tea.addEventListener("click",change2);
function change2(){
  menu2[0].style.display = 'flex';
  menu1[0].style.display = "none";
  menu3[0].style.display = "none";
  menu4[0].style.display = "none";
}

food.addEventListener('click',change3);
function change3(){
  menu2[0].style.display = 'none';
  menu1[0].style.display = "none";
  menu3[0].style.display = "flex";
  menu4[0].style.display = "none";
}

copain.addEventListener('click',change4);
function change4(){
  menu2[0].style.display = 'none';
  menu1[0].style.display = "none";
  menu3[0].style.display = "none";
  menu4[0].style.display = "flex";
}
console.log(menu2)
