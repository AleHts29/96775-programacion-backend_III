import winston from "winston";


// levels
//   error: 0, 
//   warn: 1, <-- file
//   info: 2,
//   http: 3, <-- console
//   verbose: 4,
//   debug: 5,
//   silly: 6


const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: "http" }),
        new winston.transports.File({ filename: "logs/errors.log", level: "warn" }),
    ]
})


export default logger;

