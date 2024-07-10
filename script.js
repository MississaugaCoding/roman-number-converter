// grab references to html elements
const frmRoman = document.getElementById('frmRoman');   // querySelector(); querySelectorAll()
const inputNum = document.getElementById('inpNumber');
const btnSubmit = document.querySelector('button');
const result = document.querySelector('p');

frmRoman.addEventListener('submit', submitForm);

//console.log(inputNum);

function submitForm(event) {
    event.preventDefault();

    if( inputNum.value <= 3999 ) {
        let romanNum = convertToRoman( inputNum.value );
        //result.innerHTML = `<h1>${romanNum}</h1>`;    
        result.textContent = `Roman Numerals: ${romanNum}`;    
    } else {
        result.textContent = `Sorry, ${ inputNum.value } is out of range!`;    
    }
    
}


/*
  Loop through conv table (array)
    as long as inputNum >= dec number       
       save the Roman num
       subtract dec number from inputNum 
  */
function convertToRoman(num) {
    let romanNum = '';

    const convTable = [
        { rom: 'M', dec: 1000 },
        { rom: 'CM', dec: 900 },
        { rom: 'D', dec: 500 },
        { rom: 'CD', dec: 400 },
        { rom: 'C', dec: 100 },
        { rom: 'XC', dec: 90 },
        { rom: 'L', dec: 50 },
        { rom: 'XL', dec: 40 },
        { rom: 'X', dec: 10 },
        { rom: 'IX', dec: 9 },
        { rom: 'V', dec: 5 },
        { rom: 'IV', dec: 4 },
        { rom: 'I', dec: 1 },
    ];

    for (const conv of convTable) {        

        while (num >= conv.dec) {
            romanNum += conv.rom; 
            num -= conv.dec;
        }  // while loop        

    }  // for loop

    return romanNum;
}

