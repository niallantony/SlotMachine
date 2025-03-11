const WORDLIST = [
    "Amazing", "Annoying", "Boring", "Confusing",
    "Depressing", "Disappointing", "Embarrassing", "Encouraging",
    "Entertaining", "Exciting", "Exhausting", "Fascinating",
    "Frightening", "Frustrating", "Inspiring", "Interesting",
    "Overwhelming", "Relaxing", "Satisfying", "Shocking",
    "Surprising", "Terrifying", "Tiring"
];

const appearedOnce = []

const randomWord = (list) => {
    if (appearedOnce.length === list.length) {
        appearedOnce.length = 0;
    }
    let index = Math.floor(Math.random() * list.length)    
    while (appearedOnce.includes(index)) {
        console.log("In the loop")
        console.log("appeared once")
        index = Math.floor(Math.random() * list.length)
    }
    appearedOnce.push(index)
    return index
}

const createReel = (list, index) => {
    const reel = document.createElement('ul')
    reel.setAttribute('class', 'reel')

    wordNodes = list.map(word => {
        const wordNode = document.createElement('li');
        wordNode.textContent = word
        reel.appendChild(wordNode)
    })
    return reel
}

const getAdjustedList = (list, index) => {
    const newList = [];
    for (let i = index + 1; i < (list.length + index); i++){
       newList.push(list[i % list.length]) 
    }
    return newList;
}

const getNewReel = () => {
    const currentReels = document.querySelectorAll('.reel');
    console.log(currentReels)
    if (currentReels) {
        currentReels.forEach((node) => {
            node.parentNode.removeChild(node)
        })
    }
    const slotWindow = document.getElementById('slot-window');
    const thisList = getAdjustedList(WORDLIST, randomWord(WORDLIST))
    const reel = createReel(thisList)
    reel.style.animation = "spin 1.5s cubic-bezier(0.2, 1, 0.3, 1) forwards"; // Adding animation
    slotWindow.appendChild(reel)
}

const spinButton = document.getElementById("spin")
spinButton.addEventListener("click", getNewReel)
