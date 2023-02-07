const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getRandomImages = async function(){
    res = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
    images = res.json();
    console.log(images);
};
getRandomImages();