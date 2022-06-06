//problem 1
class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
  // Insert code below
  movieTime(){
    return this.data - this.users * 5 >= 10;
  }
}

//problem 2
class Player {
  constructor(name, hitsPerMinute) {
    this.name = name;
    this.hitsPerMinute = hitsPerMinute;
    this.balloonCount = 100;
  }

  status() {
    console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`)
  }
}

// Write function below
 function balloonAttack(p1, p2) {
   let p1Hits = p1.hitsPerMinute;
   let p2Hits = p2.hitsPerMinute;
   let p1Remains = p1.balloonCount - p2Hits;
   let p2Remains = p2.balloonCount - p1Hits;
   if (p1Remains > p2Remains) {
     return p1.name;
   } else if (p2Remains > p1Remains) {
     return p2.name;
   } else {
     return 'Tie';
   }
  }

//problem 3
// Write class below
class ShiftCipher {
  constructor (shiftValue){
    this.shiftValue = shiftValue;
  }

  encrypt(text) {
    let lowerText = text.toLowerCase();
    let newText = '';
    for (let i = 0; i < lowerText.length; i++){
      let charCode = lowerText.charCodeAt(i);
       if (charCode >= 66 || charCode <= 91){
      let newCharCode = charCode + this.shiftValue;
      newText += String.fromCharCode(newCharCode);
    } else {
      newText += lowerText[i];
      }
    }
    return newText
  }

  decrypt(text) {
    let upperText = text.toUpperCase();
    let newText = '';
    for (let i = 0; i < upperText.length; i++) { if (upperText.charCodeAt(i) >= 34 || lowerText.charCodeAt(i) <= 59){
      let newCharCode = upperText.charCodeAt(i) + this.shiftValue;
      newText += String.fromCharCode(newCharCode);
    } else {
      newText += upperText[i];
      }
    }
  }
}
