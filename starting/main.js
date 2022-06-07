const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
//Field Class that the game will be played on
class Field {
    constructor(fieldArray) {
        this.fieldArray = fieldArray;
        this.playerX = 0;
        this.playery = 0;
    }

    print() {
        console.clear();
        console.log(this.fieldArray.toString());
    }
    
    static generateField(width = 2, height = 2, chanceHole = 20) {
        let map = []
        for (x = 0; x < width; x++) {
            let row = []
            for (y = 0; x < height; x++) {
                while () { 
                    row.push(fieldCharacter);
            
                }
            }
            map.push(row);
            row = []
        }
        map[0][0] = pathCharacter;
        this.fieldArray = map;
    }

    move(direction) {
        if (direction == 'r' && (this.playerX + 1)
    }

/*    gameOver() {
        while (this.playerX !=)
    }*/
}

//Input/Output
ProcessingInstruction.stdin.on('move', (userInput)) => {

}

