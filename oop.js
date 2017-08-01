class HumanBeing{
    constructor(){
        //private properties in javascript are prefixed with an underscore. 
        this._head = 1;
        this._eyes = 2;
        this._nose = 1;
        this._hands = 2;
        this._legs = 2;
        
    }
    //access private properties: 
    //encapsulation
    getHead(){
        return this._head;
    }

    getNose(){
        return this._nose;
    }

    getHands(){
        return this._hands;
    }
    getLegs(){
        return this._legs;
    }
    getEyes(){
        return this._eyes;
    }

    kick(){
        return `I am kicking withh my ${this._legs}`;
    }

    play_ball(distance){
        this.kick();
        if(distance){
            return `I am going to kick the ball within ${hours} metres`;
        }
        return `Ronaldo style.`;
    }

    wink(person){
        if(person){
            return `I am winking at ${person}`;
        }else{
            return 'No one to wink to';
        }
    }

    speak(words){
        if(words){
            return words;
        }
        return 'I have nothing to say';
    }
}

class Employee extends HumanBeing{
    constructor(job_title){
        super(); //inherits HumanBeing
        this._job_title = job_title || "Engineer";
        this._respect = '';
    }

    receiveRespect(level){
        if(level == 'junior' && this._job_title === 'Engineer'){
            return this._respect + 'rookie';
        }else if(level === 'mid-level' && this._job_title === 'Engineer'){
            return this._respect + "Professional";
        }else if(level === 'senior' && this._job_title === 'Engineer'){
            return this._respect + "Boss";
        }else{
            return 'You dont seem to level up. Consult free code camp.';
        }
    }
}

module.exports = {
    HumanBeing: HumanBeing,
    Employee: Employee
}