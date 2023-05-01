const fs = require("fs")
const readline = require("readline")

const readStream = fs.createReadStream("Text.txt")


const rl = readline.createInterface({ input: readStream })

let counter = 0

rl.on("line", (line) => {
    const words = line.split(/\s+/)  // Поділ на слова
    if (words[0] != '') {            // Перевірка на пустий рядок
        counter += words.length      // Запис кількості слів лічильник
    }
});

rl.on("close", () => {
    console.log(`Кількість слів у тексті: ${counter}`)
});
