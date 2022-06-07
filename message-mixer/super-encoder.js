// Import the encryptors functions here.
const encryptors = require('./encryptors.js');

const {caesarCipher, symbolCipher, reverseCipher} = encryptors;

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    let caesarText = caesarCipher(str, 4);
    let symbolText = symbolCipher(caesarText);
    let finalText = reverseCipher(symbolText);
    return finalText
  }
  
  const decodeMessage = (str) => {
    // Use the encryptor functions here.
    let finalText = reverseCipher(symbolCipher(caesarCipher(str, -4)));
  }
  
  // User input / output.
  
  const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
  }
  
  // Run the program.
  process.stdout.write('Enter the message you would like to encrypt...\n> ');
  process.stdin.on('data', handleInput);