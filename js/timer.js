// NOT USED CURRENTLY

class Timer {
    
    /**
     * Make a timer
     * @param {int} time in seconds
     * @throws TypeError if time is not a positive Integer  
     */
    constructor(time) {
        if (!isValid(time)) throw new TypeError(`${time} n'est pas un entier valide`);
        this.time = time;
    }


    /**
     * Predicate that show if the value of the timer is correctly set
     * @param {int} valueTest 
     * @return True if the predicate is verified
     *         False else
     */
    isValid(valueTest) {
        return Number.isInteger(valueTest) && valueTest > 0
    }

    /**
     * @return the current time
     */
    getTime() {
        return this.time
    }

    /**
     * Make start the timer
     */
    startTimer() {
        setTimeout(this.time--, 1000)
    }
}