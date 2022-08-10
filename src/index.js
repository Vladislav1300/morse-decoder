const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10));
    }
    
    let morse_arr = [];

    for (i in arr) {

        let morse_letter = '';

        for (let j = 0; j < arr[i].length; j+=2) {
            let n = arr[i].slice(j, j + 2);
            if(n === '10') morse_letter += '.';
            else if(n === '11') morse_letter += ('-');
        }   
        morse_arr.push(morse_letter);
    }

    let result = '';

    for (letter in morse_arr){
        if(MORSE_TABLE[morse_arr[letter]]) result += MORSE_TABLE[morse_arr[letter]];
        else result += ' ';
    }
    
    return result;
}

module.exports = {
    decode
}