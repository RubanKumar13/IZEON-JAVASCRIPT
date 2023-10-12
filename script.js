var first = document.querySelector("#img1");
var second = document.querySelector("#img2");
var third = document.querySelector("#img3");
var main = document.querySelector("#main");
var brand = document.querySelector("#name");
var year = document.querySelector("#year");
var price = document.querySelector("#price");
var c1 = document.querySelector("#c1");
var c2 = document.querySelector("#c2");
var c3 = document.querySelector("#c3");
var color = document.querySelector("#color");

second.addEventListener("click",function(){
    main.src='./images/download.jpg';
    brand.innerText = 'KTM';
    year.innerText = '2020';
    price.innerText = '4,20,000';
    
});
third.addEventListener("click",function(){
    main.src='./images/kawasaki.jpg';
    brand.innerText = 'KAWASAKI';
    year.innerText = '2022';
    price.innerText = '5,20,000';
});
first.addEventListener("click",function(){
    main.src='./images/honda.jpg';
    brand.innerText = 'HONDA';
    year.innerText = '2016';
    price.innerText = '1,20,000';
});

c1.addEventListener("click",function(){
    color.style.background='white';
    color.style.color='black';
})
c2.addEventListener("click",function(){
    color.style.background='red';
    color.style.color='white';
})
c3.addEventListener("click",function(){
    color.style.background='blue';
    color.style.color='white';
})