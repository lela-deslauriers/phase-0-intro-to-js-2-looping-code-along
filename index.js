function writeCards(arrayOfStringNames, eventName) {
    let card = [];
    for(let i = 0; i < arrayOfStringNames.length; i++){
        card.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return card;
}

function countDown(positiveInteger) {
    while (positiveInteger >=0) {
        console.log(positiveInteger);
        positiveInteger -= 1;
    }
}