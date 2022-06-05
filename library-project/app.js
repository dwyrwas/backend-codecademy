class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }

    get title(){
      return this._title;
    }

    get isCheckedOut(){
      return this._isCheckedOut;
    }

    get ratings(){
      return this._ratings;
    }

    toggleCheckoutStatus(){
        this._isCheckedOut = !this._isCheckedOutedOut;
    }
    
    getAverageRating(){
        let sumValue =this.ratings.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        let averageRating = sumValue/this._ratings.length;
        return averageRating;
    }

    addRating(rating){
        this.ratings.push(rating);
    }

    set isCheckedOut(value){
      this.isCheckedOut = value;
    }

}

class Book extends Media{
    constructor(author, title, pages){
        super(title);  
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(title, director, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckoutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating())