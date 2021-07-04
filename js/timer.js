class Timer {
    
    /**
     * Make a timer
     * @param {int} time in seconds
     * @throws TypeError if time is not a positive Integer  
     */
    constructor(time) {
        if (!Number.isInteger(time) && time <= 0)
            throw new TypeError(`${time} is not valid`);
        this.time = time;
    }

    /**
     * Show the timer in a String version
     * in the format hh:mm:ss
     */
    toString() {
        function formatDigits(number) {
            return number.toLocaleString('en-US', {
                minimumIntegerDigits : 2,
                useGrouping : false}
            );
        }

        let hours = Math.floor(this.time / 3600);
        let minuts = Math.floor(this.time / 60) - hours * 60;
        let seconds = Math.floor(this.time % 60);

        return `${formatDigits(hours)}:`
               + `${formatDigits(minuts)}:`
               + `${formatDigits(seconds)}`
    }

    /** Decrement the value of the current time */
    decrement() {
        this.time--
    }

    /** @returns the current time */
    getTime() {
        return this.time;
    }
}