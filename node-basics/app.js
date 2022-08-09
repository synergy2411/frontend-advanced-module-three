// CommonJS Module
// const chalk = require("chalk");

// ES6 Import
// import chalk from 'chalk';

// console.log(chalk.blue("JavaScript Loaded!!!"));
// console.log(chalk.red("JavaScript Loaded!!!"));
// console.log(chalk.green("JavaScript Loaded!!!"));
// console.log(chalk.inverse("JavaScript Loaded!!!"));
// console.log(chalk.rainbow("JavaScript Loaded!!!"));


// Process : Global variable

// const yargs = require("yargs");

// console.log(process.argv);          // []

// console.log(yargs.argv.title);                // {}
// console.log(yargs.argv.body);                // {}



// const os = require("os");

// console.log("Total Memory : ", os.totalmem());
// console.log("Free Memory : ", os.freemem());
// console.log("Architecture : ", os.arch());
// console.log("Number of CPU's : ", os.cpus().length);


// const path = require("path");

// const url = "http://www.example.com/public/index.html";

// console.log(path.dirname(url));
// console.log(path.extname(url));
// console.log(path.basename(url));


// const fs = require("fs");
// console.log("START");
// // const content = fs.readFileSync("./package-lock.json")
// // console.log(content.toString());

// fs.readFile("./package-lock.json", (err, data) => {
//     if (err) console.log(err)
//     console.log(data.toString())
// })
// console.log("END");


// const http = require("http");
// const { getDailyFortune, getLuckyNumber } = require("./utils/fortune")

// const server = http.createServer(function (request, response) {
//     console.log("URL === ", request.url)
//     console.log("METHOD : ", request.method)
//     response.write(getDailyFortune() + " -> " + getLuckyNumber());
//     response.end()
// })

// server.listen(3030)