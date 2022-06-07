const prompt = require('prompt-sync')({sigint: true});
//characters used to represent spaces on field, hat, and player
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
//Field Class that the game will be played on
class Field {
    //constructor method
    constructor(field=[[]]) {
      this.field = field;
      this.playerX = 0;
      this.playery = 0;
      this.field[0][0] = pathCharacter;
    }
    //method to display the field of play
    print() {
      for (let i = 0; i < this.field.length; i++){
        console.log(this.field[i].join(''));
      }
    }

//method to move the character
    move() {
    const answer = prompt('Which way? ').toUpperCase();
    switch (answer) {
      case 'U':
        this.locationY -= 1;
        break;
      case 'D':
        this.locationY += 1;
        break;
      case 'L':
        this.locationX -= 1;
        break;
      case 'R':
        this.locationX += 1;
        break;
      default:
        console.log('Enter U, D, L or R.');
        this.askQuestion();
        break;
    }
  }
//method to loop over the game
    gameLoop(){
      let playing = true;
      while (playing){
        this.print();
        this.move();
        this.field[this.playerY][this.playerX] = pathCharacter;
      }
    }
    //static method to generate a field if the user does not input one
    static generateField(width = 2, height = 2) {
        let map = []
        for (let y = 0; y < height; y++) {
            let row = []
            for (let x = 0; x < width; x++) {
              let pick = Math.round(Math.random()*10)
              if (pick === 0){
                row.push(hole);
              } else {
                row.push(fieldCharacter);
              }
            }
            map.push(row);
            row = []
        }
        map[height-1][width-1] = hat;
        map[0][0] = pathCharacter;
        return map;
    }
}
const myField = new Field(Field.generateField(5,5));
myField.gameLoop();

