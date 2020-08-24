let myArticle = document.querySelector('p');
myArticle.textContent = "Magda - JS";

console.log(myArticle);

let button = document.querySelector('button');
button.onclick = function(){
    alert("Klik działa!");
}