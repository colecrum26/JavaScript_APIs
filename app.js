// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let submitSearch = document.querySelector("#submitSearch");
let searchWord = document.querySelector("#searchWord");
let imgContainer = document.querySelector("#imageContainer");
let img = document.querySelector("#img");
let feedBack = document.createElement("p");

// Exercises 2-4 Section
console.log("EXERCISE 2:\n==========\n");

const apiKey = "api_key=4S3qelCPd4CXeS1I0PHxE1IWV2LWEUCY";
submitSearch.addEventListener("click", gifFetch)
function gifFetch(){
    fetch(`https://api.giphy.com/v1/gifs/translate?${apiKey}&s=${searchWord.value}`)
    .then((response)=>{
        const result = response.json();
        return result;
    })
    .then((object)=>{
        console.log(object.data.images.original.url);
        img.src = object.data.images.original.url;
        searchWord.value = "";
        feedBack.textContent = "";
    })
    .catch((err)=>{
        console.error(err);
        img.src = "";
        feedBack.textContent = err;
        imgContainer.appendChild(feedBack);
    })
};

