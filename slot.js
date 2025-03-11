const WORDLIST =[
    "Amazing", "Amazed", "Annoying", "Annoyed", "Boring", "Bored", "Confusing", "Confused", 
    "Exciting", "Excited", "Shocking", "Shocked", "Fascinating", "Fascinated", "Tiring", "Tired"
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
        const wordNode = document.createElement('p');
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
    slotWindow.appendChild(reel)
}

const spinButton = document.getElementById("spin")
spinButton.addEventListener("click", getNewReel)

