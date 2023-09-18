let danielWords = ['lego', 'bike', 'football', 'chocolate', 'portal', 'den', 'cheeky', 'mega-hega', 'huggle', 'David Walliams', 'reading', 'creative', 'fun', 'mummy\'s jumper', 'Oswald Road', 'beaver camp', 'swimming', 'hungry', 'running fast', 'questions', 'thoughtful', 'happy', 'ice-cream', 'custard', 'Roald Dahl'];

makeRandom = (array) => {
    for (i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array.toString();
}

let randomized = makeRandom(danielWords).split(",");

let boxes = "";
for (let i = 0; i < randomized.length; i++) {
    boxes += '<div class="words">' + randomized[i] + '</div ></br>';
}

console.log(randomized)
console.log(boxes)
document.getElementById("bingo-card").innerHTML = boxes