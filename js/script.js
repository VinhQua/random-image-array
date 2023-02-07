const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getRandomImage = async function(){
    res = await fetch("https://picsum.photos/200");
    console.log(res);
};