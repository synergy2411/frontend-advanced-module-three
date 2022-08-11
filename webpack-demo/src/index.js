import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
import { sum } from './utils/maths';
import jsonContent from './model/notes.json';
import textContent from './utils/test.txt';
import "./css/style.css";


const btnFetch = document.querySelector("#btnFetch")

btnFetch.addEventListener("click", () => {
    axios.get("https://reqres.in/api/user")
        .then(response => {
            console.log("RESPONSE ->>>> ", response)
        })
        .catch(console.log)
})



console.log("Hello World");

console.log("Sum : ", sum(2, 4));

console.log(jsonContent);

console.log(textContent);



// npm init -y
// npm i webpack webpack-cli -D | --save-dev
// setup the script in package.json file - "build" : "webpack"
// npm run build
// npm i bootstrap