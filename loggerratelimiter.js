//Objective is to design a logger system that only returns true if a log hasn't
//been repeated in the last 10 seconds.


//Design of a logger rate limiter using a hashmap.

class LoggerLimiter {
    constructor() {
        this.map = {}
    }

    shouldPrintMessage(timestamp, message) {
        //If the message was already logged and the time between the
        //old and new one is less than 10 seconds
        if (this.map[message] !== undefined && timestamp - this.map[message] < 10) {
            return false
        }
        this.map[message] = timestamp
        return true
    }
}

let newLogger = new LoggerLimiter()
newLogger.shouldPrintMessage(10, 'foo')
newLogger.shouldPrintMessage(11, 'foo')