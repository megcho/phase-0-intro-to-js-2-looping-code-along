const name = ["Ada", "Brendan", "Ali"];

function writeCards(name) {
    for (let i = 0; i < name.length; i++) {
        console.log(`Thank you ${name[i]} for the wonderful birthday gift!`);
    }
    return name;
}

writeCards(name);



const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);

let countDown = 20;
while (countDown >= 0) {
  console.log(countDown--);
} 
