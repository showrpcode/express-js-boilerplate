const fs = require('node:fs');
const path = require('path');

const printLogOnConsole = true;
const printLogOnFile = true;

class Logger {

  info(message = '', error = []) {
    this.#print(new Date(), `[INFO] ${message}`, error);
  }

  warning(message = '', error = []) {
    this.#print(new Date(), `[WARNING] ${message}`, error);
  }

  error(message = '', error = []) {
    this.#print(new Date(), `[ERROR] ${message}`, error);
  }

  log(message = '', error = []) {
    this.#print(new Date(), `[LOG] ${message}`, error);
  }

  // private method EC6 2022
  #print(date, message, error) {
    const printableData = `\n[${date.toISOString()}] ${message}`;
    if (printLogOnConsole) {
      console.log(printableData);
      if (error.length) console.error(error);
    }
    if (printLogOnFile) {
      try {
        const filePath = path.join('src', 'logs');
        fs.mkdirSync(filePath, { recursive: true });
        fs.appendFile(path.join(filePath, 'error.log'), printableData, function (error) {
          if (error) {
            console.log('Error : file Write Error', error.message);
          }
        });
      } catch (error) {
        console.log('Error : something went wrong', error.message);
      }
    }
  }
}


module.exports = new Logger;