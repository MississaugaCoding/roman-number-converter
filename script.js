// grab references to html elements
const frmRoman = document.getElementById('frmRoman');   // querySelector(); querySelectorAll()
const inputNum = document.getElementById('inpNumber');
const btnSubmit = document.querySelector('button');
const result = document.querySelector('p');

frmRoman.addEventListener('submit', submitForm);

//console.log(inputNum);

function submitForm(event) {
    event.preventDefault();
    let romanNum = convertToRoman( inputNum.value );
    //result.innerHTML = `<h1>${romanNum}</h1>`;    
    result.textContent = romanNum;    
}


/*
  Loop through conv table (array)
    if input num <= dec number
       as long as input num <= dec
       save the Roman num
       input num minus dec number
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

        if (num >= conv.dec) {

            while (num >= conv.dec) {
                romanNum = romanNum + conv.rom; //XLII
                num = num - conv.dec;
            }  // while

        }  //if

    }  // for loop

    return romanNum;
}

