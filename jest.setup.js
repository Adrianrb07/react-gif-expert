// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch

// Hacer que las advertencias de propTypes fallen las pruebas
const originalError = console.error;
console.error = (message) => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message);
  }
  originalError(message);
};