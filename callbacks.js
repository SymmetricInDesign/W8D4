class Clock {

    constructor(){
        let current_date = new Date();
        this.hours = current_date.getHours()
        this.minutes = current_date.getMinutes()
        this.seconds = current_date.getSeconds()
        this.printTime()
        // this._tick.bind(this)
        // setInterval.call(this, this._tick(), 1000)


        setInterval(this._tick.bind(this) , 1000)
    }

    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
    }

    _tick(){

        this.seconds += 1
        if (this.seconds === 60){
            this.seconds = 0;
            this.minutes += 1
            if (this.minutes === 60){
                this.minutes = 0
                this.hours += 1
                if (this.hours === 24){
                    this.hours = 0
                }
            }
        }
        console.clear()
        this.printTime()
    }



}
clock = new Clock()