//HTML elemek
const statusDiv = document.querySelector('.status');
const newDiv = document.querySelector('.new');
const cellDivs = document.querySelectorAll('.game-cell');

//játék változói
let gameOn = true;
let xIsNext = true;
let winner = null;

const checkGameStatus = () => {
    const sor1oszlop1 = cellDivs[0].classList[2];
    const sor1oszlop2 = cellDivs[1].classList[2];
    const sor1oszlop3 = cellDivs[2].classList[2];
    const sor1oszlop4 = cellDivs[3].classList[2];
    const sor1oszlop5 = cellDivs[4].classList[2];
    const sor1oszlop6 = cellDivs[5].classList[2];
    const sor1oszlop7 = cellDivs[6].classList[2];
    const sor1oszlop8 = cellDivs[7].classList[2];
    const sor1oszlop9 = cellDivs[8].classList[2];
    const sor1oszlop10 = cellDivs[9].classList[2];

    const sor2oszlop1 = cellDivs[10].classList[2];
    const sor2oszlop2 = cellDivs[11].classList[2];
    const sor2oszlop3 = cellDivs[12].classList[2];
    const sor2oszlop4 = cellDivs[13].classList[2];
    const sor2oszlop5 = cellDivs[14].classList[2];
    const sor2oszlop6 = cellDivs[15].classList[2];
    const sor2oszlop7 = cellDivs[16].classList[2];
    const sor2oszlop8 = cellDivs[17].classList[2];
    const sor2oszlop9 = cellDivs[18].classList[2];
    const sor2oszlop10 = cellDivs[19].classList[2];

    const sor3oszlop1 = cellDivs[20].classList[2];
    const sor3oszlop2 = cellDivs[21].classList[2];
    const sor3oszlop3 = cellDivs[22].classList[2];
    const sor3oszlop4 = cellDivs[23].classList[2];
    const sor3oszlop5 = cellDivs[24].classList[2];
    const sor3oszlop6 = cellDivs[25].classList[2];
    const sor3oszlop7 = cellDivs[26].classList[2];
    const sor3oszlop8 = cellDivs[27].classList[2];
    const sor3oszlop9 = cellDivs[28].classList[2];
    const sor3oszlop10 = cellDivs[29].classList[2];

    const sor4oszlop1 = cellDivs[30].classList[2];
    const sor4oszlop2 = cellDivs[31].classList[2];
    const sor4oszlop3 = cellDivs[32].classList[2];
    const sor4oszlop4 = cellDivs[33].classList[2];
    const sor4oszlop5 = cellDivs[34].classList[2];
    const sor4oszlop6 = cellDivs[35].classList[2];
    const sor4oszlop7 = cellDivs[36].classList[2];
    const sor4oszlop8 = cellDivs[37].classList[2];
    const sor4oszlop9 = cellDivs[38].classList[2];
    const sor4oszlop10 = cellDivs[39].classList[2];

    const sor5oszlop1 = cellDivs[40].classList[2];
    const sor5oszlop2 = cellDivs[41].classList[2];
    const sor5oszlop3 = cellDivs[42].classList[2];
    const sor5oszlop4 = cellDivs[43].classList[2];
    const sor5oszlop5 = cellDivs[44].classList[2];
    const sor5oszlop6 = cellDivs[45].classList[2];
    const sor5oszlop7 = cellDivs[46].classList[2];
    const sor5oszlop8 = cellDivs[47].classList[2];
    const sor5oszlop9 = cellDivs[48].classList[2];
    const sor5oszlop10 = cellDivs[49].classList[2];

    const sor6oszlop1 = cellDivs[50].classList[2];
    const sor6oszlop2 = cellDivs[51].classList[2];
    const sor6oszlop3 = cellDivs[52].classList[2];
    const sor6oszlop4 = cellDivs[53].classList[2];
    const sor6oszlop5 = cellDivs[54].classList[2];
    const sor6oszlop6 = cellDivs[55].classList[2];
    const sor6oszlop7 = cellDivs[56].classList[2];
    const sor6oszlop8 = cellDivs[57].classList[2];
    const sor6oszlop9 = cellDivs[58].classList[2];
    const sor6oszlop10 = cellDivs[59].classList[2];

    const sor7oszlop1 = cellDivs[60].classList[2];
    const sor7oszlop2 = cellDivs[61].classList[2];
    const sor7oszlop3 = cellDivs[62].classList[2];
    const sor7oszlop4 = cellDivs[63].classList[2];
    const sor7oszlop5 = cellDivs[64].classList[2];
    const sor7oszlop6 = cellDivs[65].classList[2];
    const sor7oszlop7 = cellDivs[66].classList[2];
    const sor7oszlop8 = cellDivs[67].classList[2];
    const sor7oszlop9 = cellDivs[68].classList[2];
    const sor7oszlop10 = cellDivs[69].classList[2];

    const sor8oszlop1 = cellDivs[70].classList[2];
    const sor8oszlop2 = cellDivs[71].classList[2];
    const sor8oszlop3 = cellDivs[72].classList[2];
    const sor8oszlop4 = cellDivs[73].classList[2];
    const sor8oszlop5 = cellDivs[74].classList[2];
    const sor8oszlop6 = cellDivs[75].classList[2];
    const sor8oszlop7 = cellDivs[76].classList[2];
    const sor8oszlop8 = cellDivs[77].classList[2];
    const sor8oszlop9 = cellDivs[78].classList[2];
    const sor8oszlop10 = cellDivs[79].classList[2];

    const sor9oszlop1 = cellDivs[80].classList[2];
    const sor9oszlop2 = cellDivs[81].classList[2];
    const sor9oszlop3 = cellDivs[82].classList[2];
    const sor9oszlop4 = cellDivs[83].classList[2];
    const sor9oszlop5 = cellDivs[84].classList[2];
    const sor9oszlop6 = cellDivs[85].classList[2];
    const sor9oszlop7 = cellDivs[86].classList[2];
    const sor9oszlop8 = cellDivs[87].classList[2];
    const sor9oszlop9 = cellDivs[88].classList[2];
    const sor9oszlop10 = cellDivs[89].classList[2];

    const sor10oszlop1 = cellDivs[90].classList[2];
    const sor10oszlop2 = cellDivs[91].classList[2];
    const sor10oszlop3 = cellDivs[92].classList[2];
    const sor10oszlop4 = cellDivs[93].classList[2];
    const sor10oszlop5 = cellDivs[94].classList[2];
    const sor10oszlop6 = cellDivs[95].classList[2];
    const sor10oszlop7 = cellDivs[96].classList[2];
    const sor10oszlop8 = cellDivs[97].classList[2];
    const sor10oszlop9 = cellDivs[98].classList[2];
    const sor10oszlop10 = cellDivs[99].classList[2];

    //check winner
    //első sor
    if(sor1oszlop1 && sor1oszlop1 === sor1oszlop2 && sor1oszlop1 === sor1oszlop3 && sor1oszlop1 === sor1oszlop4 && sor1oszlop1 === sor1oszlop5){
        gameOn = false;
        winner = sor1oszlop1;
        statusDiv.innerHTML = `${sor1oszlop1} nyert!`;
    } else if (sor1oszlop2 && sor1oszlop2 === sor1oszlop3 && sor1oszlop2 === sor1oszlop4 && sor1oszlop2 === sor1oszlop5 && sor1oszlop2 === sor1oszlop6) {
        gameOn = false;
        winner = sor1oszlop2;
        statusDiv.innerHTML = `${sor1oszlop2} nyert!`;
    } else if (sor1oszlop3 && sor1oszlop3 === sor1oszlop4 && sor1oszlop3 === sor1oszlop5 && sor1oszlop3 === sor1oszlop6 && sor1oszlop3 === sor1oszlop7) {
        gameOn = false;
        winner = sor1oszlop3;
        statusDiv.innerHTML = `${sor1oszlop3} nyert!`;
    } else if (sor1oszlop4 && sor1oszlop4 === sor1oszlop5 && sor1oszlop4 === sor1oszlop6 && sor1oszlop4 === sor1oszlop7 && sor1oszlop4 === sor1oszlop8) {
        gameOn = false;
        winner = sor1oszlop4;
        statusDiv.innerHTML = `${sor1oszlop4} nyert!`;
    } else if (sor1oszlop5 && sor1oszlop5 === sor1oszlop6 && sor1oszlop5 === sor1oszlop7 && sor1oszlop5 === sor1oszlop8 && sor1oszlop5 === sor1oszlop9) {
        gameOn = false;
        winner = sor1oszlop5;
        statusDiv.innerHTML = `${sor1oszlop5} nyert!`;
    } else if (sor1oszlop6 && sor1oszlop6 === sor1oszlop7 && sor1oszlop6 === sor1oszlop8 && sor1oszlop6 === sor1oszlop9 && sor1oszlop6 === sor1oszlop10) {
        gameOn = false;
        winner = sor1oszlop6;
        statusDiv.innerHTML = `${sor1oszlop6} nyert!`;
    } 
    /*második sor*/ 
    else if (sor2oszlop1 && sor2oszlop1 === sor2oszlop2 && sor2oszlop1 === sor2oszlop3 && sor2oszlop1 === sor2oszlop4 && sor2oszlop1 === sor2oszlop5) {
        gameOn = false;
        winner = sor2oszlop1;
        statusDiv.innerHTML = `${sor2oszlop1} nyert!`;
    } else if (sor2oszlop2 && sor2oszlop2 === sor2oszlop3 && sor2oszlop2 === sor2oszlop4 && sor2oszlop2 === sor2oszlop5 && sor2oszlop2 === sor2oszlop6) {
        gameOn = false;
        winner = sor2oszlop2;
        statusDiv.innerHTML = `${sor2oszlop2} nyert!`;
    } else if (sor2oszlop3 && sor2oszlop3 === sor2oszlop4 && sor2oszlop3 === sor2oszlop5 && sor2oszlop3 === sor2oszlop6 && sor2oszlop3 === sor2oszlop7) {
        gameOn = false;
        winner = sor2oszlop3;
        statusDiv.innerHTML = `${sor2oszlop3} nyert!`;
    } else if (sor2oszlop4 && sor2oszlop4 === sor2oszlop5 && sor2oszlop4 === sor2oszlop6 && sor2oszlop4 === sor2oszlop7 && sor2oszlop4 === sor2oszlop8) {
        gameOn = false;
        winner = sor2oszlop4;
        statusDiv.innerHTML = `${sor2oszlop4} nyert!`;
    } else if (sor2oszlop5 && sor2oszlop5 === sor2oszlop6 && sor2oszlop5 === sor2oszlop7 && sor2oszlop5 === sor2oszlop8 && sor2oszlop5 === sor2oszlop9) {
        gameOn = false;
        winner = sor2oszlop5;
        statusDiv.innerHTML = `${sor2oszlop5} nyert!`;
    } else if (sor2oszlop6 && sor2oszlop6 === sor2oszlop7 && sor2oszlop6 === sor2oszlop8 && sor2oszlop6 === sor2oszlop9 && sor2oszlop6 === sor2oszlop10) {
        gameOn = false;
        winner = sor2oszlop6;
        statusDiv.innerHTML = `${sor2oszlop6} nyert!`;
    }
    /*harmadik sor*/
    else if (sor3oszlop1 && sor3oszlop1 === sor3oszlop2 && sor3oszlop1 === sor3oszlop3 && sor3oszlop1 === sor3oszlop4 && sor3oszlop1 === sor3oszlop5) {
        gameOn = false;
        winner = sor3oszlop1;
        statusDiv.innerHTML = `${sor3oszlop1} nyert!`;
    } else if (sor3oszlop2 && sor3oszlop2 === sor3oszlop3 && sor3oszlop2 === sor3oszlop4 && sor3oszlop2 === sor3oszlop5 && sor3oszlop2 === sor3oszlop6) {
        gameOn = false;
        winner = sor3oszlop2;
        statusDiv.innerHTML = `${sor3oszlop2} nyert!`;
    } else if (sor3oszlop3 && sor3oszlop3 === sor3oszlop4 && sor3oszlop3 === sor3oszlop5 && sor3oszlop3 === sor3oszlop6 && sor3oszlop3 === sor3oszlop7) {
        gameOn = false;
        winner = sor3oszlop3;
        statusDiv.innerHTML = `${sor3oszlop3} nyert!`;
    } else if (sor3oszlop4 && sor3oszlop4 === sor3oszlop5 && sor3oszlop4 === sor3oszlop6 && sor3oszlop4 === sor3oszlop7 && sor3oszlop4 === sor3oszlop8) {
        gameOn = false;
        winner = sor3oszlop4;
        statusDiv.innerHTML = `${sor3oszlop4} nyert!`;
    } else if (sor3oszlop5 && sor3oszlop5 === sor3oszlop6 && sor3oszlop5 === sor3oszlop7 && sor3oszlop5 === sor3oszlop8 && sor3oszlop5 === sor3oszlop9) {
        gameOn = false;
        winner = sor3oszlop5;
        statusDiv.innerHTML = `${sor3oszlop5} nyert!`;
    } else if (sor3oszlop6 && sor3oszlop6 === sor3oszlop7 && sor3oszlop6 === sor3oszlop8 && sor3oszlop6 === sor3oszlop9 && sor3oszlop6 === sor3oszlop10) {
        gameOn = false;
        winner = sor3oszlop6;
        statusDiv.innerHTML = `${sor3oszlop6} nyert!`;
    }
    /*negyedik sor*/
    else if (sor4oszlop1 && sor4oszlop1 === sor4oszlop2 && sor4oszlop1 === sor4oszlop3 && sor4oszlop1 === sor4oszlop4 && sor4oszlop1 === sor4oszlop5) {
        gameOn = false;
        winner = sor4oszlop1;
        statusDiv.innerHTML = `${sor4oszlop1} nyert!`;
    } else if (sor4oszlop2 && sor4oszlop2 === sor4oszlop3 && sor4oszlop2 === sor4oszlop4 && sor4oszlop2 === sor4oszlop5 && sor4oszlop2 === sor4oszlop6) {
        gameOn = false;
        winner = sor4oszlop2;
        statusDiv.innerHTML = `${sor4oszlop2} nyert!`;
    } else if (sor4oszlop3 && sor4oszlop3 === sor4oszlop4 && sor4oszlop3 === sor4oszlop5 && sor4oszlop3 === sor4oszlop6 && sor4oszlop3 === sor4oszlop7) {
        gameOn = false;
        winner = sor4oszlop3;
        statusDiv.innerHTML = `${sor4oszlop3} nyert!`;
    } else if (sor4oszlop4 && sor4oszlop4 === sor4oszlop5 && sor4oszlop4 === sor4oszlop6 && sor4oszlop4 === sor4oszlop7 && sor4oszlop4 === sor4oszlop8) {
        gameOn = false;
        winner = sor4oszlop4;
        statusDiv.innerHTML = `${sor4oszlop4} nyert!`;
    } else if (sor4oszlop5 && sor4oszlop5 === sor4oszlop6 && sor4oszlop5 === sor4oszlop7 && sor4oszlop5 === sor4oszlop8 && sor4oszlop5 === sor4oszlop9) {
        gameOn = false;
        winner = sor4oszlop5;
        statusDiv.innerHTML = `${sor4oszlop5} nyert!`;
    } else if (sor4oszlop6 && sor4oszlop6 === sor4oszlop7 && sor4oszlop6 === sor4oszlop8 && sor4oszlop6 === sor4oszlop9 && sor4oszlop6 === sor4oszlop10) {
        gameOn = false;
        winner = sor4oszlop6;
        statusDiv.innerHTML = `${sor4oszlop6} nyert!`;
    }
    /*ötödik sor*/
    else if (sor5oszlop1 && sor5oszlop1 === sor5oszlop2 && sor5oszlop1 === sor5oszlop3 && sor5oszlop1 === sor5oszlop4 && sor5oszlop1 === sor5oszlop5) {
        gameOn = false;
        winner = sor5oszlop1;
        statusDiv.innerHTML = `${sor5oszlop1} nyert!`;
    } else if (sor5oszlop2 && sor5oszlop2 === sor5oszlop3 && sor5oszlop2 === sor5oszlop4 && sor5oszlop2 === sor5oszlop5 && sor5oszlop2 === sor5oszlop6) {
        gameOn = false;
        winner = sor5oszlop2;
        statusDiv.innerHTML = `${sor5oszlop2} nyert!`;
    } else if (sor5oszlop3 && sor5oszlop3 === sor5oszlop4 && sor5oszlop3 === sor5oszlop5 && sor5oszlop3 === sor5oszlop6 && sor5oszlop3 === sor5oszlop7) {
        gameOn = false;
        winner = sor5oszlop3;
        statusDiv.innerHTML = `${sor5oszlop3} nyert!`;
    } else if (sor5oszlop4 && sor5oszlop4 === sor5oszlop5 && sor5oszlop4 === sor5oszlop6 && sor5oszlop4 === sor5oszlop7 && sor5oszlop4 === sor5oszlop8) {
        gameOn = false;
        winner = sor5oszlop4;
        statusDiv.innerHTML = `${sor5oszlop4} nyert!`;
    } else if (sor5oszlop5 && sor5oszlop5 === sor5oszlop6 && sor5oszlop5 === sor5oszlop7 && sor5oszlop5 === sor5oszlop8 && sor5oszlop5 === sor5oszlop9) {
        gameOn = false;
        winner = sor5oszlop5;
        statusDiv.innerHTML = `${sor5oszlop5} nyert!`;
    } else if (sor5oszlop6 && sor5oszlop6 === sor5oszlop7 && sor5oszlop6 === sor5oszlop8 && sor5oszlop6 === sor5oszlop9 && sor5oszlop6 === sor5oszlop10) {
        gameOn = false;
        winner = sor5oszlop6;
        statusDiv.innerHTML = `${sor5oszlop6} nyert!`;
    }
    /*hatodik sor*/
    else if (sor6oszlop1 && sor6oszlop1 === sor6oszlop2 && sor6oszlop1 === sor6oszlop3 && sor6oszlop1 === sor6oszlop4 && sor6oszlop1 === sor6oszlop5) {
        gameOn = false;
        winner = sor6oszlop1;
        statusDiv.innerHTML = `${sor6oszlop1} nyert!`;
    } else if (sor6oszlop2 && sor6oszlop2 === sor6oszlop3 && sor6oszlop2 === sor6oszlop4 && sor6oszlop2 === sor6oszlop5 && sor6oszlop2 === sor6oszlop6) {
        gameOn = false;
        winner = sor26szlop2;
        statusDiv.innerHTML = `${sor6oszlop2} nyert!`;
    } else if (sor6oszlop3 && sor6oszlop3 === sor6oszlop4 && sor6oszlop3 === sor6oszlop5 && sor6oszlop3 === sor6oszlop6 && sor6oszlop3 === sor6oszlop7) {
        gameOn = false;
        winner = sor6oszlop3;
        statusDiv.innerHTML = `${sor6oszlop3} nyert!`;
    } else if (sor6oszlop4 && sor6oszlop4 === sor6oszlop5 && sor6oszlop4 === sor6oszlop6 && sor6oszlop4 === sor6oszlop7 && sor6oszlop4 === sor6oszlop8) {
        gameOn = false;
        winner = sor6oszlop4;
        statusDiv.innerHTML = `${sor6oszlop4} nyert!`;
    } else if (sor6oszlop5 && sor6oszlop5 === sor6oszlop6 && sor6oszlop5 === sor6oszlop7 && sor6oszlop5 === sor6oszlop8 && sor6oszlop5 === sor6oszlop9) {
        gameOn = false;
        winner = sor6oszlop5;
        statusDiv.innerHTML = `${sor6oszlop5} nyert!`;
    } else if (sor6oszlop6 && sor6oszlop6 === sor6oszlop7 && sor6oszlop6 === sor6oszlop8 && sor6oszlop6 === sor6oszlop9 && sor6oszlop6 === sor6oszlop10) {
        gameOn = false;
        winner = sor6oszlop6;
        statusDiv.innerHTML = `${sor6oszlop6} nyert!`;
    }
    /*hetedik sor*/
    else if (sor7oszlop1 && sor7oszlop1 === sor7oszlop2 && sor7oszlop1 === sor7oszlop3 && sor7oszlop1 === sor7oszlop4 && sor7oszlop1 === sor7oszlop5) {
        gameOn = false;
        winner = sor7oszlop1;
        statusDiv.innerHTML = `${sor7oszlop1} nyert!`;
    } else if (sor7oszlop2 && sor7oszlop2 === sor7oszlop3 && sor7oszlop2 === sor7oszlop4 && sor7oszlop2 === sor7oszlop5 && sor7oszlop2 === sor7oszlop6) {
        gameOn = false;
        winner = sor7oszlop2;
        statusDiv.innerHTML = `${sor7oszlop2} nyert!`;
    } else if (sor7oszlop3 && sor7oszlop3 === sor7oszlop4 && sor7oszlop3 === sor7oszlop5 && sor7oszlop3 === sor7oszlop6 && sor7oszlop3 === sor7oszlop7) {
        gameOn = false;
        winner = sor7oszlop3;
        statusDiv.innerHTML = `${sor7oszlop3} nyert!`;
    } else if (sor7oszlop4 && sor7oszlop4 === sor7oszlop5 && sor7oszlop4 === sor7oszlop6 && sor7oszlop4 === sor7oszlop7 && sor7oszlop4 === sor7oszlop8) {
        gameOn = false;
        winner = sor7oszlop4;
        statusDiv.innerHTML = `${sor7oszlop4} nyert!`;
    } else if (sor7oszlop5 && sor7oszlop5 === sor7oszlop6 && sor7oszlop5 === sor7oszlop7 && sor7oszlop5 === sor7oszlop8 && sor7oszlop5 === sor7oszlop9) {
        gameOn = false;
        winner = sor7oszlop5;
        statusDiv.innerHTML = `${sor7oszlop5} nyert!`;
    } else if (sor7oszlop6 && sor7oszlop6 === sor7oszlop7 && sor7oszlop6 === sor7oszlop8 && sor7oszlop6 === sor7oszlop9 && sor7oszlop6 === sor7oszlop10) {
        gameOn = false;
        winner = sor7oszlop6;
        statusDiv.innerHTML = `${sor7oszlop6} nyert!`;
    }
    /*nyolcadik sor*/
    else if (sor8oszlop1 && sor8oszlop1 === sor8oszlop2 && sor8oszlop1 === sor8oszlop3 && sor8oszlop1 === sor8oszlop4 && sor8oszlop1 === sor8oszlop5) {
        gameOn = false;
        winner = sor8oszlop1;
        statusDiv.innerHTML = `${sor8oszlop1} nyert!`;
    } else if (sor8oszlop2 && sor8oszlop2 === sor8oszlop3 && sor8oszlop2 === sor8oszlop4 && sor8oszlop2 === sor8oszlop5 && sor8oszlop2 === sor8oszlop6) {
        gameOn = false;
        winner = sor8oszlop2;
        statusDiv.innerHTML = `${sor8oszlop2} nyert!`;
    } else if (sor8oszlop3 && sor8oszlop3 === sor8oszlop4 && sor8oszlop3 === sor8oszlop5 && sor8oszlop3 === sor8oszlop6 && sor8oszlop3 === sor8oszlop7) {
        gameOn = false;
        winner = sor8oszlop3;
        statusDiv.innerHTML = `${sor8oszlop3} nyert!`;
    } else if (sor8oszlop4 && sor8oszlop4 === sor8oszlop5 && sor8oszlop4 === sor8oszlop6 && sor8oszlop4 === sor8oszlop7 && sor8oszlop4 === sor8oszlop8) {
        gameOn = false;
        winner = sor8oszlop4;
        statusDiv.innerHTML = `${sor8oszlop4} nyert!`;
    } else if (sor8oszlop5 && sor8oszlop5 === sor8oszlop6 && sor8oszlop5 === sor8oszlop7 && sor8oszlop5 === sor8oszlop8 && sor8oszlop5 === sor8oszlop9) {
        gameOn = false;
        winner = sor8oszlop5;
        statusDiv.innerHTML = `${sor8oszlop5} nyert!`;
    } else if (sor8oszlop6 && sor8oszlop6 === sor8oszlop7 && sor8oszlop6 === sor8oszlop8 && sor8oszlop6 === sor8oszlop9 && sor8oszlop6 === sor8oszlop10) {
        gameOn = false;
        winner = sor8oszlop6;
        statusDiv.innerHTML = `${sor8oszlop6} nyert!`;
    }
    /*kilencedik sor*/
    else if (sor9oszlop1 && sor9oszlop1 === sor9oszlop2 && sor9oszlop1 === sor9oszlop3 && sor9oszlop1 === sor9oszlop4 && sor9oszlop1 === sor9oszlop5) {
        gameOn = false;
        winner = sor9oszlop1;
        statusDiv.innerHTML = `${sor9oszlop1} nyert!`;
    } else if (sor9oszlop2 && sor9oszlop2 === sor9oszlop3 && sor9oszlop2 === sor9oszlop4 && sor9oszlop2 === sor9oszlop5 && sor9oszlop2 === sor9oszlop6) {
        gameOn = false;
        winner = sor9oszlop2;
        statusDiv.innerHTML = `${sor9oszlop2} nyert!`;
    } else if (sor9oszlop3 && sor9oszlop3 === sor9oszlop4 && sor9oszlop3 === sor9oszlop5 && sor9oszlop3 === sor9oszlop6 && sor9oszlop3 === sor9oszlop7) {
        gameOn = false;
        winner = sor9oszlop3;
        statusDiv.innerHTML = `${sor9oszlop3} nyert!`;
    } else if (sor9oszlop4 && sor9oszlop4 === sor9oszlop5 && sor9oszlop4 === sor9oszlop6 && sor9oszlop4 === sor9oszlop7 && sor9oszlop4 === sor9oszlop8) {
        gameOn = false;
        winner = sor9oszlop4;
        statusDiv.innerHTML = `${sor9oszlop4} nyert!`;
    } else if (sor9oszlop5 && sor9oszlop5 === sor9oszlop6 && sor9oszlop5 === sor9oszlop7 && sor9oszlop5 === sor9oszlop8 && sor9oszlop5 === sor9oszlop9) {
        gameOn = false;
        winner = sor9oszlop5;
        statusDiv.innerHTML = `${sor9oszlop5} nyert!`;
    } else if (sor9oszlop6 && sor9oszlop6 === sor9oszlop7 && sor9oszlop6 === sor9oszlop8 && sor9oszlop6 === sor9oszlop9 && sor9oszlop6 === sor9oszlop10) {
        gameOn = false;
        winner = sor9oszlop6;
        statusDiv.innerHTML = `${sor9oszlop6} nyert!`;
    }
    /*tizedik sor*/
    else if (sor10oszlop1 && sor10oszlop1 === sor10oszlop2 && sor10oszlop1 === sor10oszlop3 && sor10oszlop1 === sor10oszlop4 && sor10oszlop1 === sor10oszlop5) {
        gameOn = false;
        winner = sor10oszlop1;
        statusDiv.innerHTML = `${sor10oszlop1} nyert!`;
    } else if (sor10oszlop2 && sor10oszlop2 === sor10oszlop3 && sor10oszlop2 === sor10oszlop4 && sor10oszlop2 === sor10oszlop5 && sor10oszlop2 === sor10oszlop6) {
        gameOn = false;
        winner = sor10oszlop2;
        statusDiv.innerHTML = `${sor10oszlop2} nyert!`;
    } else if (sor10oszlop3 && sor10oszlop3 === sor10oszlop4 && sor10oszlop3 === sor10oszlop5 && sor10oszlop3 === sor10oszlop6 && sor10oszlop3 === sor10oszlop7) {
        gameOn = false;
        winner = sor10oszlop3;
        statusDiv.innerHTML = `${sor10oszlop3} nyert!`;
    } else if (sor10oszlop4 && sor10oszlop4 === sor10oszlop5 && sor10oszlop4 === sor10oszlop6 && sor10oszlop4 === sor10oszlop7 && sor10oszlop4 === sor10oszlop8) {
        gameOn = false;
        winner = sor10oszlop4;
        statusDiv.innerHTML = `${sor10oszlop4} nyert!`;
    } else if (sor10oszlop5 && sor10oszlop5 === sor10oszlop6 && sor10oszlop5 === sor10oszlop7 && sor10oszlop5 === sor10oszlop8 && sor10oszlop5 === sor10oszlop9) {
        gameOn = false;
        winner = sor10oszlop5;
        statusDiv.innerHTML = `${sor10oszlop5} nyert!`;
    } else if (sor10oszlop6 && sor10oszlop6 === sor10oszlop7 && sor10oszlop6 === sor10oszlop8 && sor10oszlop6 === sor10oszlop9 && sor10oszlop6 === sor10oszlop10) {
        gameOn = false;
        winner = sor10oszlop6;
        statusDiv.innerHTML = `${sor10oszlop6} nyert!`;
    }

    /*első oszlop*/
    else if(sor1oszlop1 && sor1oszlop1 === sor2oszlop1 && sor1oszlop1 === sor3oszlop1 && sor1oszlop1 === sor4oszlop1 && sor1oszlop1 === sor5oszlop1){
        gameOn = false;
        winner = sor1oszlop1;
        statusDiv.innerHTML = `${sor1oszlop1} nyert!`;
    } else if (sor2oszlop1 && sor2oszlop1 === sor3oszlop1 && sor2oszlop1 === sor4oszlop1 && sor2oszlop1 === sor5oszlop1 && sor2oszlop1 === sor6oszlop1) {
        gameOn = false;
        winner = sor2oszlop1;
        statusDiv.innerHTML = `${sor2oszlop1} nyert!`;
    } else if (sor3oszlop1 && sor3oszlop1 === sor4oszlop1 && sor3oszlop1 === sor5oszlop1 && sor3oszlop1 === sor6oszlop1 && sor3oszlop1 === sor7oszlop1) {
        gameOn = false;
        winner = sor3oszlop1;
        statusDiv.innerHTML = `${sor3oszlop1} nyert!`;
    } else if (sor4oszlop1 && sor4oszlop1 === sor5oszlop1 && sor4oszlop1 === sor6oszlop1 && sor4oszlop1 === sor7oszlop1 && sor4oszlop1 === sor8oszlop1) {
        gameOn = false;
        winner = sor4oszlop1;
        statusDiv.innerHTML = `${sor4oszlop1} nyert!`;
    } else if (sor5oszlop1 && sor5oszlop1 === sor6oszlop1 && sor5oszlop1 === sor7oszlop1 && sor5oszlop1 === sor8oszlop1 && sor5oszlop1 === sor9oszlop1) {
        gameOn = false;
        winner = sor5oszlop1;
        statusDiv.innerHTML = `${sor5oszlop1} nyert!`;
    } else if (sor6oszlop1 && sor6oszlop1 === sor7oszlop1 && sor6oszlop1 === sor8oszlop1 && sor6oszlop1 === sor9oszlop1 && sor6oszlop1 === sor10oszlop1) {
        gameOn = false;
        winner = sor6oszlop1;
        statusDiv.innerHTML = `${sor6oszlop1} nyert!`;
    }
    /*második oszlop*/
    else if (sor1oszlop2 && sor1oszlop2 === sor2oszlop2 && sor1oszlop2 === sor3oszlop2 && sor1oszlop2 === sor4oszlop2 && sor1oszlop2 === sor5oszlop2) {
        gameOn = false;
        winner = sor1oszlop2;
        statusDiv.innerHTML = `${sor1oszlop2} nyert!`;
    } else if (sor2oszlop2 && sor2oszlop2 === sor3oszlop2 && sor2oszlop2 === sor4oszlop2 && sor2oszlop2 === sor5oszlop2 && sor2oszlop2 === sor6oszlop2) {
        gameOn = false;
        winner = sor2oszlop2;
        statusDiv.innerHTML = `${sor2oszlop2} nyert!`;
    } else if (sor3oszlop2 && sor3oszlop2 === sor4oszlop2 && sor3oszlop2 === sor5oszlop2 && sor3oszlop2 === sor6oszlop2 && sor3oszlop2 === sor7oszlop2) {
        gameOn = false;
        winner = sor3oszlop2;
        statusDiv.innerHTML = `${sor3oszlop2} nyert!`;
    } else if (sor4oszlop2 && sor4oszlop2 === sor5oszlop2 && sor4oszlop2 === sor6oszlop2 && sor4oszlop2 === sor7oszlop2 && sor4oszlop2 === sor8oszlop2) {
        gameOn = false;
        winner = sor4oszlop2;
        statusDiv.innerHTML = `${sor4oszlop2} nyert!`;
    } else if (sor5oszlop2 && sor5oszlop2 === sor6oszlop2 && sor5oszlop2 === sor7oszlop2 && sor5oszlop2 === sor8oszlop2 && sor5oszlop2 === sor9oszlop2) {
        gameOn = false;
        winner = sor5oszlop2;
        statusDiv.innerHTML = `${sor5oszlop2} nyert!`;
    } else if (sor6oszlop2 && sor6oszlop2 === sor7oszlop2 && sor6oszlop2 === sor8oszlop2 && sor6oszlop2 === sor9oszlop2 && sor6oszlop2 === sor10oszlop2) {
        gameOn = false;
        winner = sor6oszlop2;
        statusDiv.innerHTML = `${sor6oszlop2} nyert!`;
    }
    /*harmadik oszlop*/
    else if (sor1oszlop3 && sor1oszlop3 === sor2oszlop3 && sor1oszlop3 === sor3oszlop3 && sor1oszlop3 === sor4oszlop3 && sor1oszlop3 === sor5oszlop3) {
        gameOn = false;
        winner = sor1oszlop3;
        statusDiv.innerHTML = `${sor1oszlop3} nyert!`;
    } else if (sor2oszlop3 && sor2oszlop3 === sor3oszlop3 && sor2oszlop3 === sor4oszlop3 && sor2oszlop3 === sor5oszlop3 && sor2oszlop3 === sor6oszlop3) {
        gameOn = false;
        winner = sor2oszlop3;
        statusDiv.innerHTML = `${sor2oszlop3} nyert!`;
    } else if (sor3oszlop3 && sor3oszlop3 === sor4oszlop3 && sor3oszlop3 === sor5oszlop3 && sor3oszlop3 === sor6oszlop3 && sor3oszlop3 === sor7oszlop3) {
        gameOn = false;
        winner = sor3oszlop3;
        statusDiv.innerHTML = `${sor3oszlop3} nyert!`;
    } else if (sor4oszlop3 && sor4oszlop3 === sor5oszlop3 && sor4oszlop3 === sor6oszlop3 && sor4oszlop3 === sor7oszlop3 && sor4oszlop3 === sor8oszlop3) {
        gameOn = false;
        winner = sor4oszlop3;
        statusDiv.innerHTML = `${sor4oszlop3} nyert!`;
    } else if (sor5oszlop3 && sor5oszlop3 === sor6oszlop3 && sor5oszlop3 === sor7oszlop3 && sor5oszlop3 === sor8oszlop3 && sor5oszlop3 === sor9oszlop3) {
        gameOn = false;
        winner = sor5oszlop3;
        statusDiv.innerHTML = `${sor5oszlop3} nyert!`;
    } else if (sor6oszlop3 && sor6oszlop3 === sor7oszlop3 && sor6oszlop3 === sor8oszlop3 && sor6oszlop3 === sor9oszlop3 && sor6oszlop3 === sor10oszlop3) {
        gameOn = false;
        winner = sor6oszlop3;
        statusDiv.innerHTML = `${sor6oszlop3} nyert!`;
    }
    /*negyedik oszlop*/
    else if (sor1oszlop4 && sor1oszlop4 === sor2oszlop4 && sor1oszlop4 === sor3oszlop4 && sor1oszlop4 === sor4oszlop4 && sor1oszlop4 === sor5oszlop4) {
        gameOn = false;
        winner = sor1oszlop4;
        statusDiv.innerHTML = `${sor1oszlop4} nyert!`;
    } else if (sor2oszlop4 && sor2oszlop4 === sor3oszlop4 && sor2oszlop4 === sor4oszlop4 && sor2oszlop4 === sor5oszlop4 && sor2oszlop4 === sor6oszlop4) {
        gameOn = false;
        winner = sor2oszlop4;
        statusDiv.innerHTML = `${sor2oszlop4} nyert!`;
    } else if (sor3oszlop4 && sor3oszlop4 === sor4oszlop4 && sor3oszlop4 === sor5oszlop4 && sor3oszlop4 === sor6oszlop4 && sor3oszlop4 === sor7oszlop4) {
        gameOn = false;
        winner = sor3oszlop4;
        statusDiv.innerHTML = `${sor3oszlop4} nyert!`;
    } else if (sor4oszlop4 && sor4oszlop4 === sor5oszlop4 && sor4oszlop4 === sor6oszlop4 && sor4oszlop4 === sor7oszlop4 && sor4oszlop4 === sor8oszlop4) {
        gameOn = false;
        winner = sor4oszlop4;
        statusDiv.innerHTML = `${sor4oszlop4} nyert!`;
    } else if (sor5oszlop4 && sor5oszlop4 === sor6oszlop4 && sor5oszlop4 === sor7oszlop4 && sor5oszlop4 === sor8oszlop4 && sor5oszlop4 === sor9oszlop4) {
        gameOn = false;
        winner = sor5oszlop4;
        statusDiv.innerHTML = `${sor5oszlop4} nyert!`;
    } else if (sor6oszlop4 && sor6oszlop4 === sor7oszlop4 && sor6oszlop4 === sor8oszlop4 && sor6oszlop4 === sor9oszlop4 && sor6oszlop4 === sor10oszlop4) {
        gameOn = false;
        winner = sor6oszlop4;
        statusDiv.innerHTML = `${sor6oszlop4} nyert!`;
    }
    /*ötödik oszlop*/
    else if (sor1oszlop5 && sor1oszlop5 === sor2oszlop5 && sor1oszlop5 === sor3oszlop5 && sor1oszlop5 === sor4oszlop5 && sor1oszlop5 === sor5oszlop5) {
        gameOn = false;
        winner = sor1oszlop5;
        statusDiv.innerHTML = `${sor1oszlop5} nyert!`;
    } else if (sor2oszlop5 && sor2oszlop5 === sor3oszlop5 && sor2oszlop5 === sor4oszlop5 && sor2oszlop5 === sor5oszlop5 && sor2oszlop5 === sor6oszlop5) {
        gameOn = false;
        winner = sor2oszlop5;
        statusDiv.innerHTML = `${sor2oszlop5} nyert!`;
    } else if (sor3oszlop5 && sor3oszlop5 === sor4oszlop5 && sor3oszlop5 === sor5oszlop5 && sor3oszlop5 === sor6oszlop5 && sor3oszlop5 === sor7oszlop5) {
        gameOn = false;
        winner = sor3oszlop5;
        statusDiv.innerHTML = `${sor3oszlop5} nyert!`;
    } else if (sor4oszlop5 && sor4oszlop5 === sor5oszlop5 && sor4oszlop5 === sor6oszlop5 && sor4oszlop5 === sor7oszlop5 && sor4oszlop5 === sor8oszlop5) {
        gameOn = false;
        winner = sor4oszlop5;
        statusDiv.innerHTML = `${sor4oszlop5} nyert!`;
    } else if (sor5oszlop5 && sor5oszlop5 === sor6oszlop5 && sor5oszlop5 === sor7oszlop5 && sor5oszlop5 === sor8oszlop5 && sor5oszlop5 === sor9oszlop5) {
        gameOn = false;
        winner = sor5oszlop5;
        statusDiv.innerHTML = `${sor5oszlop5} nyert!`;
    } else if (sor6oszlop5 && sor6oszlop5 === sor7oszlop5 && sor6oszlop5 === sor8oszlop5 && sor6oszlop5 === sor9oszlop5 && sor6oszlop5 === sor10oszlop5) {
        gameOn = false;
        winner = sor6oszlop5;
        statusDiv.innerHTML = `${sor6oszlop5} nyert!`;
    }
    /*hatodik oszlop*/
    else if (sor1oszlop6 && sor1oszlop6 === sor2oszlop6 && sor1oszlop6 === sor3oszlop6 && sor1oszlop6 === sor4oszlop6 && sor1oszlop6 === sor5oszlop6) {
        gameOn = false;
        winner = sor1oszlop6;
        statusDiv.innerHTML = `${sor1oszlop6} nyert!`;
    } else if (sor2oszlop6 && sor2oszlop6 === sor3oszlop6 && sor2oszlop6 === sor4oszlop6 && sor2oszlop6 === sor5oszlop6 && sor2oszlop6 === sor6oszlop6) {
        gameOn = false;
        winner = sor2oszlop6;
        statusDiv.innerHTML = `${sor2oszlop6} nyert!`;
    } else if (sor3oszlop6 && sor3oszlop6 === sor4oszlop6 && sor3oszlop6 === sor5oszlop6 && sor3oszlop6 === sor6oszlop6 && sor3oszlop6 === sor7oszlop6) {
        gameOn = false;
        winner = sor3oszlop6;
        statusDiv.innerHTML = `${sor3oszlop6} nyert!`;
    } else if (sor4oszlop6 && sor4oszlop6 === sor5oszlop6 && sor4oszlop6 === sor6oszlop6 && sor4oszlop6 === sor7oszlop6 && sor4oszlop6 === sor8oszlop6) {
        gameOn = false;
        winner = sor4oszlop6;
        statusDiv.innerHTML = `${sor4oszlop6} nyert!`;
    } else if (sor5oszlop6 && sor5oszlop6 === sor6oszlop6 && sor5oszlop6 === sor7oszlop6 && sor5oszlop6 === sor8oszlop6 && sor5oszlop6 === sor9oszlop6) {
        gameOn = false;
        winner = sor5oszlop6;
        statusDiv.innerHTML = `${sor5oszlop6} nyert!`;
    } else if (sor6oszlop6 && sor6oszlop6 === sor7oszlop6 && sor6oszlop6 === sor8oszlop6 && sor6oszlop6 === sor9oszlop6 && sor6oszlop6 === sor10oszlop6) {
        gameOn = false;
        winner = sor6oszlop6;
        statusDiv.innerHTML = `${sor6oszlop6} nyert!`;
    }
    /*hetedik oszlop*/
    else if (sor1oszlop7 && sor1oszlop7 === sor2oszlop7 && sor1oszlop7 === sor3oszlop7 && sor1oszlop7 === sor4oszlop7 && sor1oszlop7 === sor5oszlop7) {
        gameOn = false;
        winner = sor1oszlop7;
        statusDiv.innerHTML = `${sor1oszlop7} nyert!`;
    } else if (sor2oszlop7 && sor2oszlop7 === sor3oszlop7 && sor2oszlop7 === sor4oszlop7 && sor2oszlop7 === sor5oszlop7 && sor2oszlop7 === sor6oszlop7) {
        gameOn = false;
        winner = sor2oszlop7;
        statusDiv.innerHTML = `${sor2oszlop7} nyert!`;
    } else if (sor3oszlop7 && sor3oszlop7 === sor4oszlop7 && sor3oszlop7 === sor5oszlop7 && sor3oszlop7 === sor6oszlop7 && sor3oszlop7 === sor7oszlop7) {
        gameOn = false;
        winner = sor3oszlop7;
        statusDiv.innerHTML = `${sor3oszlop7} nyert!`;
    } else if (sor4oszlop7 && sor4oszlop7 === sor5oszlop7 && sor4oszlop7 === sor6oszlop7 && sor4oszlop7 === sor7oszlop7 && sor4oszlop7 === sor8oszlop7) {
        gameOn = false;
        winner = sor4oszlop7;
        statusDiv.innerHTML = `${sor4oszlop7} nyert!`;
    } else if (sor5oszlop7 && sor5oszlop7 === sor6oszlop7 && sor5oszlop7 === sor7oszlop7 && sor5oszlop7 === sor8oszlop7 && sor5oszlop7 === sor9oszlop7) {
        gameOn = false;
        winner = sor5oszlop7;
        statusDiv.innerHTML = `${sor5oszlop7} nyert!`;
    } else if (sor6oszlop7 && sor6oszlop7 === sor7oszlop7 && sor6oszlop7 === sor8oszlop7 && sor6oszlop7 === sor9oszlop7 && sor6oszlop7 === sor10oszlop7) {
        gameOn = false;
        winner = sor6oszlop7;
        statusDiv.innerHTML = `${sor6oszlop7} nyert!`;
    }
    /*nyolcadik oszlop*/
    else if (sor1oszlop8 && sor1oszlop8 === sor2oszlop8 && sor1oszlop8 === sor3oszlop8 && sor1oszlop8 === sor4oszlop8 && sor1oszlop8 === sor5oszlop8) {
        gameOn = false;
        winner = sor1oszlop8;
        statusDiv.innerHTML = `${sor1oszlop8} nyert!`;
    } else if (sor2oszlop8 && sor2oszlop8 === sor3oszlop8 && sor2oszlop8 === sor4oszlop8 && sor2oszlop8 === sor5oszlop8 && sor2oszlop8 === sor6oszlop8) {
        gameOn = false;
        winner = sor2oszlop8;
        statusDiv.innerHTML = `${sor2oszlop8} nyert!`;
    } else if (sor3oszlop8 && sor3oszlop8 === sor4oszlop8 && sor3oszlop8 === sor5oszlop8 && sor3oszlop8 === sor6oszlop8 && sor3oszlop8 === sor7oszlop8) {
        gameOn = false;
        winner = sor3oszlop8;
        statusDiv.innerHTML = `${sor3oszlop8} nyert!`;
    } else if (sor4oszlop8 && sor4oszlop8 === sor5oszlop8 && sor4oszlop8 === sor6oszlop8 && sor4oszlop8 === sor7oszlop8 && sor4oszlop8 === sor8oszlop8) {
        gameOn = false;
        winner = sor4oszlop8;
        statusDiv.innerHTML = `${sor4oszlop8} nyert!`;
    } else if (sor5oszlop8 && sor5oszlop8 === sor6oszlop8 && sor5oszlop8 === sor7oszlop8 && sor5oszlop8 === sor8oszlop8 && sor5oszlop8 === sor9oszlop8) {
        gameOn = false;
        winner = sor5oszlop8;
        statusDiv.innerHTML = `${sor5oszlop8} nyert!`;
    } else if (sor6oszlop8 && sor6oszlop8 === sor7oszlop8 && sor6oszlop8 === sor8oszlop8 && sor6oszlop8 === sor9oszlop8 && sor6oszlop8 === sor10oszlop8) {
        gameOn = false;
        winner = sor6oszlop8;
        statusDiv.innerHTML = `${sor6oszlop8} nyert!`;
    }
    /*kilencedik oszlop*/
    else if (sor1oszlop9 && sor1oszlop9 === sor2oszlop9 && sor1oszlop9 === sor3oszlop9 && sor1oszlop9 === sor4oszlop9 && sor1oszlop9 === sor5oszlop9) {
        gameOn = false;
        winner = sor1oszlop9;
        statusDiv.innerHTML = `${sor1oszlop9} nyert!`;
    } else if (sor2oszlop9 && sor2oszlop9 === sor3oszlop9 && sor2oszlop9 === sor4oszlop9 && sor2oszlop9 === sor5oszlop9 && sor2oszlop9 === sor6oszlop9) {
        gameOn = false;
        winner = sor2oszlop9;
        statusDiv.innerHTML = `${sor2oszlop9} nyert!`;
    } else if (sor3oszlop9 && sor3oszlop9 === sor4oszlop9 && sor3oszlop9 === sor5oszlop9 && sor3oszlop9 === sor6oszlop9 && sor3oszlop9 === sor7oszlop9) {
        gameOn = false;
        winner = sor3oszlop9;
        statusDiv.innerHTML = `${sor3oszlop9} nyert!`;
    } else if (sor4oszlop9 && sor4oszlop9 === sor5oszlop9 && sor4oszlop9 === sor6oszlop9 && sor4oszlop9 === sor7oszlop9 && sor4oszlop9 === sor8oszlop9) {
        gameOn = false;
        winner = sor4oszlop9;
        statusDiv.innerHTML = `${sor4oszlop9} nyert!`;
    } else if (sor5oszlop9 && sor5oszlop9 === sor6oszlop9 && sor5oszlop9 === sor7oszlop9 && sor5oszlop9 === sor8oszlop9 && sor5oszlop9 === sor9oszlop9) {
        gameOn = false;
        winner = sor5oszlop9;
        statusDiv.innerHTML = `${sor5oszlop9} nyert!`;
    } else if (sor6oszlop9 && sor6oszlop9 === sor7oszlop9 && sor6oszlop9 === sor8oszlop9 && sor6oszlop9 === sor9oszlop9 && sor6oszlop9 === sor10oszlop9) {
        gameOn = false;
        winner = sor6oszlop9;
        statusDiv.innerHTML = `${sor6oszlop9} nyert!`;
    }
    /*tizedik oszlop*/
    else if (sor1oszlop10 && sor1oszlop10 === sor2oszlop10 && sor1oszlop10 === sor3oszlop10 && sor1oszlop10 === sor4oszlop10 && sor1oszlop10 === sor5oszlop10) {
        gameOn = false;
        winner = sor1oszlop10;
        statusDiv.innerHTML = `${sor1oszlop10} nyert!`;
    } else if (sor2oszlop10 && sor2oszlop10 === sor3oszlop10 && sor2oszlop10 === sor4oszlop10 && sor2oszlop10 === sor5oszlop10 && sor2oszlop10 === sor6oszlop10) {
        gameOn = false;
        winner = sor2oszlop10;
        statusDiv.innerHTML = `${sor2oszlop10} nyert!`;
    } else if (sor3oszlop10 && sor3oszlop10 === sor4oszlop10 && sor3oszlop10 === sor5oszlop10 && sor3oszlop10 === sor6oszlop10 && sor3oszlop10 === sor7oszlop10) {
        gameOn = false;
        winner = sor3oszlop10;
        statusDiv.innerHTML = `${sor3oszlop10} nyert!`;
    } else if (sor4oszlop10 && sor4oszlop10 === sor5oszlop10 && sor4oszlop10 === sor6oszlop10 && sor4oszlop10 === sor7oszlop10 && sor4oszlop10 === sor8oszlop10) {
        gameOn = false;
        winner = sor4oszlop10;
        statusDiv.innerHTML = `${sor4oszlop10} nyert!`;
    } else if (sor5oszlop10 && sor5oszlop10 === sor6oszlop10 && sor5oszlop10 === sor7oszlop10 && sor5oszlop10 === sor8oszlop10 && sor5oszlop10 === sor9oszlop10) {
        gameOn = false;
        winner = sor5oszlop10;
        statusDiv.innerHTML = `${sor5oszlop10} nyert!`;
    } else if (sor6oszlop10 && sor6oszlop10 === sor7oszlop10 && sor6oszlop10 === sor8oszlop10 && sor6oszlop10 === sor9oszlop10 && sor6oszlop10 === sor10oszlop10) {
        gameOn = false;
        winner = sor6oszlop10;
        statusDiv.innerHTML = `${sor6oszlop10} nyert!`;
    }

    /*átló jobbra, le*/
    else if(sor1oszlop1 && sor1oszlop1 === sor2oszlop2 && sor1oszlop1 === sor3oszlop3 && sor1oszlop1 === sor4oszlop4 && sor1oszlop1 === sor5oszlop5){
        gameOn = false;
        winner = sor1oszlop1;
        statusDiv.innerHTML = `${sor1oszlop1} nyert!`;
    } else if (sor2oszlop1 && sor2oszlop1 === sor3oszlop2 && sor2oszlop1 === sor4oszlop3 && sor2oszlop1 === sor5oszlop4 && sor2oszlop1 === sor6oszlop5) {
        gameOn = false;
        winner = sor2oszlop1;
        statusDiv.innerHTML = `${sor2oszlop1} nyert!`;
    } else if (sor3oszlop1 && sor3oszlop1 === sor4oszlop2 && sor3oszlop1 === sor5oszlop3 && sor3oszlop1 === sor6oszlop4 && sor3oszlop1 === sor7oszlop5) {
        gameOn = false;
        winner = sor3oszlop1;
        statusDiv.innerHTML = `${sor3oszlop1} nyert!`;
    } else if (sor4oszlop1 && sor4oszlop1 === sor5oszlop2 && sor4oszlop1 === sor6oszlop3 && sor4oszlop1 === sor7oszlop4 && sor4oszlop1 === sor8oszlop5) {
        gameOn = false;
        winner = sor4oszlop1;
        statusDiv.innerHTML = `${sor4oszlop1} nyert!`;
    } else if (sor5oszlop1 && sor5oszlop1 === sor6oszlop2 && sor5oszlop1 === sor7oszlop3 && sor5oszlop1 === sor8oszlop4 && sor5oszlop1 === sor9oszlop5) {
        gameOn = false;
        winner = sor5oszlop1;
        statusDiv.innerHTML = `${sor5oszlop1} nyert!`;
    } else if (sor6oszlop1 && sor6oszlop1 === sor7oszlop2 && sor6oszlop1 === sor8oszlop3 && sor6oszlop1 === sor9oszlop4 && sor6oszlop1 === sor10oszlop5) {
        gameOn = false;
        winner = sor6oszlop1;
        statusDiv.innerHTML = `${sor6oszlop1} nyert!`;
    }

    else if (sor1oszlop2 && sor1oszlop2 === sor2oszlop3 && sor1oszlop2 === sor3oszlop4 && sor1oszlop2 === sor4oszlop5 && sor1oszlop2 === sor5oszlop6) {
        gameOn = false;
        winner = sor1oszlop2;
        statusDiv.innerHTML = `${sor1oszlop2} nyert!`;
    } else if (sor2oszlop2 && sor2oszlop2 === sor3oszlop3 && sor2oszlop2 === sor4oszlop4 && sor2oszlop2 === sor5oszlop5 && sor2oszlop2 === sor6oszlop6) {
        gameOn = false;
        winner = sor2oszlop2;
        statusDiv.innerHTML = `${sor2oszlop2} nyert!`;
    } else if (sor3oszlop2 && sor3oszlop2 === sor4oszlop3 && sor3oszlop2 === sor5oszlop4 && sor3oszlop2 === sor6oszlop5 && sor3oszlop2 === sor7oszlop6) {
        gameOn = false;
        winner = sor3oszlop2;
        statusDiv.innerHTML = `${sor3oszlop2} nyert!`;
    } else if (sor4oszlop2 && sor4oszlop2 === sor5oszlop3 && sor4oszlop2 === sor6oszlop4 && sor4oszlop2 === sor7oszlop5 && sor4oszlop2 === sor8oszlop6) {
        gameOn = false;
        winner = sor4oszlop2;
        statusDiv.innerHTML = `${sor4oszlop2} nyert!`;
    } else if (sor5oszlop2 && sor5oszlop2 === sor6oszlop3 && sor5oszlop2 === sor7oszlop4 && sor5oszlop2 === sor8oszlop5 && sor5oszlop2 === sor9oszlop6) {
        gameOn = false;
        winner = sor5oszlop2;
        statusDiv.innerHTML = `${sor5oszlop2} nyert!`;
    } else if (sor6oszlop2 && sor6oszlop2 === sor7oszlop3 && sor6oszlop2 === sor8oszlop4 && sor6oszlop2 === sor9oszlop5 && sor6oszlop2 === sor10oszlop6) {
        gameOn = false;
        winner = sor6oszlop2;
        statusDiv.innerHTML = `${sor6oszlop2} nyert!`;
    }

    else if (sor1oszlop3 && sor1oszlop3 === sor2oszlop4 && sor1oszlop3 === sor3oszlop5 && sor1oszlop3 === sor4oszlop6 && sor1oszlop3 === sor5oszlop7) {
        gameOn = false;
        winner = sor1oszlop3;
        statusDiv.innerHTML = `${sor1oszlop3} nyert!`;
    } else if (sor2oszlop3 && sor2oszlop3 === sor3oszlop4 && sor2oszlop3 === sor4oszlop5 && sor2oszlop3 === sor5oszlop6 && sor2oszlop3 === sor6oszlop7) {
        gameOn = false;
        winner = sor2oszlop3;
        statusDiv.innerHTML = `${sor2oszlop3} nyert!`;
    } else if (sor3oszlop3 && sor3oszlop3 === sor4oszlop4 && sor3oszlop3 === sor5oszlop5 && sor3oszlop3 === sor6oszlop6 && sor3oszlop3 === sor7oszlop7) {
        gameOn = false;
        winner = sor3oszlop3;
        statusDiv.innerHTML = `${sor3oszlop3} nyert!`;
    } else if (sor4oszlop3 && sor4oszlop3 === sor5oszlop4 && sor4oszlop3 === sor6oszlop5 && sor4oszlop3 === sor7oszlop6 && sor4oszlop3 === sor8oszlop7) {
        gameOn = false;
        winner = sor4oszlop3;
        statusDiv.innerHTML = `${sor4oszlop3} nyert!`;
    } else if (sor5oszlop3 && sor5oszlop3 === sor6oszlop4 && sor5oszlop3 === sor7oszlop5 && sor5oszlop3 === sor8oszlop6 && sor5oszlop3 === sor9oszlop7) {
        gameOn = false;
        winner = sor5oszlop3;
        statusDiv.innerHTML = `${sor5oszlop3} nyert!`;
    } else if (sor6oszlop3 && sor6oszlop3 === sor7oszlop4 && sor6oszlop3 === sor8oszlop5 && sor6oszlop3 === sor9oszlop6 && sor6oszlop3 === sor10oszlop7) {
        gameOn = false;
        winner = sor6oszlop3;
        statusDiv.innerHTML = `${sor6oszlop3} nyert!`;
    }

    else if (sor1oszlop4 && sor1oszlop4 === sor2oszlop5 && sor1oszlop4 === sor3oszlop6 && sor1oszlop4 === sor4oszlop7 && sor1oszlop4 === sor5oszlop8) {
        gameOn = false;
        winner = sor1oszlop4;
        statusDiv.innerHTML = `${sor1oszlop4} nyert!`;
    } else if (sor2oszlop4 && sor2oszlop4 === sor3oszlop5 && sor2oszlop4 === sor4oszlop6 && sor2oszlop4 === sor5oszlop7 && sor2oszlop4 === sor6oszlop8) {
        gameOn = false;
        winner = sor2oszlop4;
        statusDiv.innerHTML = `${sor2oszlop4} nyert!`;
    } else if (sor3oszlop4 && sor3oszlop4 === sor4oszlop5 && sor3oszlop4 === sor5oszlop6 && sor3oszlop4 === sor6oszlop7 && sor3oszlop4 === sor7oszlop8) {
        gameOn = false;
        winner = sor3oszlop4;
        statusDiv.innerHTML = `${sor3oszlop4} nyert!`;
    } else if (sor4oszlop4 && sor4oszlop4 === sor5oszlop5 && sor4oszlop4 === sor6oszlop6 && sor4oszlop4 === sor7oszlop7 && sor4oszlop4 === sor8oszlop8) {
        gameOn = false;
        winner = sor4oszlop4;
        statusDiv.innerHTML = `${sor4oszlop4} nyert!`;
    } else if (sor5oszlop4 && sor5oszlop4 === sor6oszlop5 && sor5oszlop4 === sor7oszlop6 && sor5oszlop4 === sor8oszlop7 && sor5oszlop4 === sor9oszlop8) {
        gameOn = false;
        winner = sor5oszlop4;
        statusDiv.innerHTML = `${sor5oszlop4} nyert!`;
    } else if (sor6oszlop4 && sor6oszlop4 === sor7oszlop5 && sor6oszlop4 === sor8oszlop6 && sor6oszlop4 === sor9oszlop7 && sor6oszlop4 === sor10oszlop8) {
        gameOn = false;
        winner = sor6oszlop4;
        statusDiv.innerHTML = `${sor6oszlop4} nyert!`;
    }

    else if (sor1oszlop5 && sor1oszlop5 === sor2oszlop6 && sor1oszlop5 === sor3oszlop7 && sor1oszlop5 === sor4oszlop8 && sor1oszlop5 === sor5oszlop9) {
        gameOn = false;
        winner = sor1oszlop5;
        statusDiv.innerHTML = `${sor1oszlop5} nyert!`;
    } else if (sor2oszlop5 && sor2oszlop5 === sor3oszlop6 && sor2oszlop5 === sor4oszlop7 && sor2oszlop5 === sor5oszlop8 && sor2oszlop5 === sor6oszlop9) {
        gameOn = false;
        winner = sor2oszlop5;
        statusDiv.innerHTML = `${sor2oszlop5} nyert!`;
    } else if (sor3oszlop5 && sor3oszlop5 === sor4oszlop6 && sor3oszlop5 === sor5oszlop7 && sor3oszlop5 === sor6oszlop8 && sor3oszlop5 === sor7oszlop9) {
        gameOn = false;
        winner = sor3oszlop5;
        statusDiv.innerHTML = `${sor3oszlop5} nyert!`;
    } else if (sor4oszlop5 && sor4oszlop5 === sor5oszlop6 && sor4oszlop5 === sor6oszlop7 && sor4oszlop5 === sor7oszlop8 && sor4oszlop5 === sor8oszlop9) {
        gameOn = false;
        winner = sor4oszlop5;
        statusDiv.innerHTML = `${sor4oszlop5} nyert!`;
    } else if (sor5oszlop5 && sor5oszlop5 === sor6oszlop6 && sor5oszlop5 === sor7oszlop7 && sor5oszlop5 === sor8oszlop8 && sor5oszlop5 === sor9oszlop9) {
        gameOn = false;
        winner = sor5oszlop5;
        statusDiv.innerHTML = `${sor5oszlop5} nyert!`;
    } else if (sor6oszlop5 && sor6oszlop5 === sor7oszlop6 && sor6oszlop5 === sor8oszlop7 && sor6oszlop5 === sor9oszlop8 && sor6oszlop5 === sor10oszlop9) {
        gameOn = false;
        winner = sor6oszlop5;
        statusDiv.innerHTML = `${sor6oszlop5} nyert!`;
    }

    else if (sor1oszlop6 && sor1oszlop6 === sor2oszlop7 && sor1oszlop6 === sor3oszlop8 && sor1oszlop6 === sor4oszlop9 && sor1oszlop6 === sor5oszlop10) {
        gameOn = false;
        winner = sor1oszlop6;
        statusDiv.innerHTML = `${sor1oszlop6} nyert!`;
    } else if (sor2oszlop6 && sor2oszlop6 === sor3oszlop7 && sor2oszlop6 === sor4oszlop8 && sor2oszlop6 === sor5oszlop9 && sor2oszlop6 === sor6oszlop10) {
        gameOn = false;
        winner = sor2oszlop6;
        statusDiv.innerHTML = `${sor2oszlop6} nyert!`;
    } else if (sor3oszlop6 && sor3oszlop6 === sor4oszlop7 && sor3oszlop6 === sor5oszlop8 && sor3oszlop6 === sor6oszlop9 && sor3oszlop6 === sor7oszlop10) {
        gameOn = false;
        winner = sor3oszlop6;
        statusDiv.innerHTML = `${sor3oszlop6} nyert!`;
    } else if (sor4oszlop6 && sor4oszlop6 === sor5oszlop7 && sor4oszlop6 === sor6oszlop8 && sor4oszlop6 === sor7oszlop9 && sor4oszlop6 === sor8oszlop10) {
        gameOn = false;
        winner = sor4oszlop6;
        statusDiv.innerHTML = `${sor4oszlop6} nyert!`;
    } else if (sor5oszlop6 && sor5oszlop6 === sor6oszlop7 && sor5oszlop6 === sor7oszlop8 && sor5oszlop6 === sor8oszlop9 && sor5oszlop6 === sor9oszlop10) {
        gameOn = false;
        winner = sor5oszlop6;
        statusDiv.innerHTML = `${sor5oszlop6} nyert!`;
    } else if (sor6oszlop6 && sor6oszlop6 === sor7oszlop7 && sor6oszlop6 === sor8oszlop8 && sor6oszlop6 === sor9oszlop9 && sor6oszlop6 === sor10oszlop10) {
        gameOn = false;
        winner = sor6oszlop6;
        statusDiv.innerHTML = `${sor6oszlop6} nyert!`;
    }

    /*átló balra, le*/

    else if (sor1oszlop5 && sor1oszlop5 === sor2oszlop4 && sor1oszlop5 === sor3oszlop3 && sor1oszlop5 === sor4oszlop2 && sor1oszlop5 === sor5oszlop1) {
        gameOn = false;
        winner = sor1oszlop5;
        statusDiv.innerHTML = `${sor1oszlop5} nyert!`;
    } else if (sor2oszlop5 && sor2oszlop5 === sor3oszlop4 && sor2oszlop5 === sor4oszlop3 && sor2oszlop5 === sor5oszlop2 && sor2oszlop5 === sor6oszlop1) {
        gameOn = false;
        winner = sor2oszlop5;
        statusDiv.innerHTML = `${sor2oszlop5} nyert!`;
    } else if (sor3oszlop5 && sor3oszlop5 === sor4oszlop4 && sor3oszlop5 === sor5oszlop3 && sor3oszlop5 === sor6oszlop2 && sor3oszlop5 === sor7oszlop1) {
        gameOn = false;
        winner = sor3oszlop5;
        statusDiv.innerHTML = `${sor3oszlop5} nyert!`;
    } else if (sor4oszlop5 && sor4oszlop5 === sor5oszlop4 && sor4oszlop5 === sor6oszlop3 && sor4oszlop5 === sor7oszlop2 && sor4oszlop5 === sor8oszlop1) {
        gameOn = false;
        winner = sor4oszlop5;
        statusDiv.innerHTML = `${sor4oszlop5} nyert!`;
    } else if (sor5oszlop5 && sor5oszlop5 === sor6oszlop4 && sor5oszlop5 === sor7oszlop3 && sor5oszlop5 === sor8oszlop2 && sor5oszlop5 === sor9oszlop1) {
        gameOn = false;
        winner = sor5oszlop5;
        statusDiv.innerHTML = `${sor5oszlop5} nyert!`;
    } else if (sor6oszlop5 && sor6oszlop5 === sor7oszlop4 && sor6oszlop5 === sor8oszlop3 && sor6oszlop5 === sor9oszlop2 && sor6oszlop5 === sor10oszlop1) {
        gameOn = false;
        winner = sor6oszlop5;
        statusDiv.innerHTML = `${sor6oszlop5} nyert!`;
    }

    else if (sor1oszlop6 && sor1oszlop6 === sor2oszlop5 && sor1oszlop6 === sor3oszlop4 && sor1oszlop6 === sor4oszlop3 && sor1oszlop6 === sor5oszlop2) {
        gameOn = false;
        winner = sor1oszlop6;
        statusDiv.innerHTML = `${sor1oszlop6} nyert!`;
    } else if (sor2oszlop6 && sor2oszlop6 === sor3oszlop5 && sor2oszlop6 === sor4oszlop4 && sor2oszlop6 === sor5oszlop3 && sor2oszlop6 === sor6oszlop2) {
        gameOn = false;
        winner = sor2oszlop6;
        statusDiv.innerHTML = `${sor2oszlop6} nyert!`;
    } else if (sor3oszlop6 && sor3oszlop6 === sor4oszlop5 && sor3oszlop6 === sor5oszlop4 && sor3oszlop6 === sor6oszlop3 && sor3oszlop6 === sor7oszlop2) {
        gameOn = false;
        winner = sor3oszlop6;
        statusDiv.innerHTML = `${sor3oszlop6} nyert!`;
    } else if (sor4oszlop6 && sor4oszlop6 === sor5oszlop5 && sor4oszlop6 === sor6oszlop4 && sor4oszlop6 === sor7oszlop3 && sor4oszlop6 === sor8oszlop2) {
        gameOn = false;
        winner = sor4oszlop6;
        statusDiv.innerHTML = `${sor4oszlop6} nyert!`;
    } else if (sor5oszlop6 && sor5oszlop6 === sor6oszlop5 && sor5oszlop6 === sor7oszlop4 && sor5oszlop6 === sor8oszlop3 && sor5oszlop6 === sor9oszlop2) {
        gameOn = false;
        winner = sor5oszlop6;
        statusDiv.innerHTML = `${sor5oszlop6} nyert!`;
    } else if (sor6oszlop6 && sor6oszlop6 === sor7oszlop5 && sor6oszlop6 === sor8oszlop4 && sor6oszlop6 === sor9oszlop3 && sor6oszlop6 === sor10oszlop2) {
        gameOn = false;
        winner = sor6oszlop6;
        statusDiv.innerHTML = `${sor6oszlop6} nyert!`;
    }

    else if (sor1oszlop7 && sor1oszlop7 === sor2oszlop6 && sor1oszlop7 === sor3oszlop5 && sor1oszlop7 === sor4oszlop4 && sor1oszlop7 === sor5oszlop3) {
        gameOn = false;
        winner = sor1oszlop7;
        statusDiv.innerHTML = `${sor1oszlop7} nyert!`;
    } else if (sor2oszlop7 && sor2oszlop7 === sor3oszlop6 && sor2oszlop7 === sor4oszlop5 && sor2oszlop7 === sor5oszlop4 && sor2oszlop7 === sor6oszlop3) {
        gameOn = false;
        winner = sor2oszlop7;
        statusDiv.innerHTML = `${sor2oszlop7} nyert!`;
    } else if (sor3oszlop7 && sor3oszlop7 === sor4oszlop6 && sor3oszlop7 === sor5oszlop5 && sor3oszlop7 === sor6oszlop4 && sor3oszlop7 === sor7oszlop3) {
        gameOn = false;
        winner = sor3oszlop7;
        statusDiv.innerHTML = `${sor3oszlop7} nyert!`;
    } else if (sor4oszlop7 && sor4oszlop7 === sor5oszlop6 && sor4oszlop7 === sor6oszlop5 && sor4oszlop7 === sor7oszlop4 && sor4oszlop7 === sor8oszlop3) {
        gameOn = false;
        winner = sor4oszlop7;
        statusDiv.innerHTML = `${sor4oszlop7} nyert!`;
    } else if (sor5oszlop7 && sor5oszlop7 === sor6oszlop6 && sor5oszlop7 === sor7oszlop5 && sor5oszlop7 === sor8oszlop4 && sor5oszlop7 === sor9oszlop3) {
        gameOn = false;
        winner = sor5oszlop7;
        statusDiv.innerHTML = `${sor5oszlop7} nyert!`;
    } else if (sor6oszlop7 && sor6oszlop7 === sor7oszlop6 && sor6oszlop7 === sor8oszlop5 && sor6oszlop7 === sor9oszlop4 && sor6oszlop7 === sor10oszlop3) {
        gameOn = false;
        winner = sor6oszlop7;
        statusDiv.innerHTML = `${sor6oszlop7} nyert!`;
    }

    else if (sor1oszlop8 && sor1oszlop8 === sor2oszlop7 && sor1oszlop8 === sor3oszlop6 && sor1oszlop8 === sor4oszlop5 && sor1oszlop8 === sor5oszlop4) {
        gameOn = false;
        winner = sor1oszlop8;
        statusDiv.innerHTML = `${sor1oszlop8} nyert!`;
    } else if (sor2oszlop8 && sor2oszlop8 === sor3oszlop7 && sor2oszlop8 === sor4oszlop6 && sor2oszlop8 === sor5oszlop5 && sor2oszlop8 === sor6oszlop4) {
        gameOn = false;
        winner = sor2oszlop8;
        statusDiv.innerHTML = `${sor2oszlop8} nyert!`;
    } else if (sor3oszlop8 && sor3oszlop8 === sor4oszlop7 && sor3oszlop8 === sor5oszlop6 && sor3oszlop8 === sor6oszlop5 && sor3oszlop8 === sor7oszlop4) {
        gameOn = false;
        winner = sor3oszlop8;
        statusDiv.innerHTML = `${sor3oszlop8} nyert!`;
    } else if (sor4oszlop8 && sor4oszlop8 === sor5oszlop7 && sor4oszlop8 === sor6oszlop6 && sor4oszlop8 === sor7oszlop5 && sor4oszlop8 === sor8oszlop4) {
        gameOn = false;
        winner = sor4oszlop8;
        statusDiv.innerHTML = `${sor4oszlop8} nyert!`;
    } else if (sor5oszlop8 && sor5oszlop8 === sor6oszlop7 && sor5oszlop8 === sor7oszlop6 && sor5oszlop8 === sor8oszlop5 && sor5oszlop8 === sor9oszlop4) {
        gameOn = false;
        winner = sor5oszlop8;
        statusDiv.innerHTML = `${sor5oszlop8} nyert!`;
    } else if (sor6oszlop8 && sor6oszlop8 === sor7oszlop7 && sor6oszlop8 === sor8oszlop6 && sor6oszlop8 === sor9oszlop5 && sor6oszlop8 === sor10oszlop4) {
        gameOn = false;
        winner = sor6oszlop8;
        statusDiv.innerHTML = `${sor6oszlop8} nyert!`;
    }

    else if (sor1oszlop9 && sor1oszlop9 === sor2oszlop8 && sor1oszlop9 === sor3oszlop7 && sor1oszlop9 === sor4oszlop6 && sor1oszlop9 === sor5oszlop5) {
        gameOn = false;
        winner = sor1oszlop9;
        statusDiv.innerHTML = `${sor1oszlop9} nyert!`;
    } else if (sor2oszlop9 && sor2oszlop9 === sor3oszlop8 && sor2oszlop9 === sor4oszlop7 && sor2oszlop9 === sor5oszlop6 && sor2oszlop9 === sor6oszlop5) {
        gameOn = false;
        winner = sor2oszlop9;
        statusDiv.innerHTML = `${sor2oszlop9} nyert!`;
    } else if (sor3oszlop9 && sor3oszlop9 === sor4oszlop8 && sor3oszlop9 === sor5oszlop7 && sor3oszlop9 === sor6oszlop6 && sor3oszlop9 === sor7oszlop5) {
        gameOn = false;
        winner = sor3oszlop9;
        statusDiv.innerHTML = `${sor3oszlop9} nyert!`;
    } else if (sor4oszlop9 && sor4oszlop9 === sor5oszlop8 && sor4oszlop9 === sor6oszlop7 && sor4oszlop9 === sor7oszlop6 && sor4oszlop9 === sor8oszlop5) {
        gameOn = false;
        winner = sor4oszlop9;
        statusDiv.innerHTML = `${sor4oszlop9} nyert!`;
    } else if (sor5oszlop9 && sor5oszlop9 === sor6oszlop8 && sor5oszlop9 === sor7oszlop7 && sor5oszlop9 === sor8oszlop6 && sor5oszlop9 === sor9oszlop5) {
        gameOn = false;
        winner = sor5oszlop9;
        statusDiv.innerHTML = `${sor5oszlop9} nyert!`;
    } else if (sor6oszlop9 && sor6oszlop9 === sor7oszlop8 && sor6oszlop9 === sor8oszlop7 && sor6oszlop9 === sor9oszlop6 && sor6oszlop9 === sor10oszlop5) {
        gameOn = false;
        winner = sor6oszlop9;
        statusDiv.innerHTML = `${sor6oszlop9} nyert!`;
    }

    else if (sor1oszlop10 && sor1oszlop10 === sor2oszlop9 && sor1oszlop10 === sor3oszlop8 && sor1oszlop10 === sor4oszlop7 && sor1oszlop10 === sor5oszlop6) {
        gameOn = false;
        winner = sor1oszlop10;
        statusDiv.innerHTML = `${sor1oszlop10} nyert!`;
    } else if (sor2oszlop10 && sor2oszlop10 === sor3oszlop9 && sor2oszlop10 === sor4oszlop8 && sor2oszlop10 === sor5oszlop7 && sor2oszlop10 === sor6oszlop6) {
        gameOn = false;
        winner = sor2oszlop10;
        statusDiv.innerHTML = `${sor2oszlop10} nyert!`;
    } else if (sor3oszlop10 && sor3oszlop10 === sor4oszlop9 && sor3oszlop10 === sor5oszlop8 && sor3oszlop10 === sor6oszlop7 && sor3oszlop10 === sor7oszlop6) {
        gameOn = false;
        winner = sor3oszlop10;
        statusDiv.innerHTML = `${sor3oszlop10} nyert!`;
    } else if (sor4oszlop10 && sor4oszlop10 === sor5oszlop9 && sor4oszlop10 === sor6oszlop8 && sor4oszlop10 === sor7oszlop7 && sor4oszlop10 === sor8oszlop6) {
        gameOn = false;
        winner = sor4oszlop10;
        statusDiv.innerHTML = `${sor4oszlop10} nyert!`;
    } else if (sor5oszlop10 && sor5oszlop10 === sor6oszlop9 && sor5oszlop10 === sor7oszlop8 && sor5oszlop10 === sor8oszlop7 && sor5oszlop10 === sor9oszlop6) {
        gameOn = false;
        winner = sor5oszlop10;
        statusDiv.innerHTML = `${sor5oszlop10} nyert!`;
    } else if (sor6oszlop10 && sor6oszlop10 === sor7oszlop9 && sor6oszlop10 === sor8oszlop8 && sor6oszlop10 === sor9oszlop7 && sor6oszlop10 === sor10oszlop6) {
        gameOn = false;
        winner = sor6oszlop10;
        statusDiv.innerHTML = `${sor6oszlop10} nyert!`;
    }

    /*döntetlen*/
    else if (sor1oszlop1 && sor1oszlop2 && sor1oszlop3 && sor1oszlop4 && sor1oszlop5 && sor1oszlop6 && sor1oszlop7 && sor1oszlop8 && sor1oszlop9 && sor1oszlop10 && sor2oszlop1 && sor2oszlop2 && sor2oszlop3 && sor2oszlop4 && sor2oszlop5 && sor2oszlop6 && sor2oszlop7 && sor2oszlop8 && sor2oszlop9 && sor2oszlop10 && sor3oszlop1 && sor3oszlop2 && sor3oszlop3 && sor3oszlop4 && sor3oszlop5 && sor3oszlop6 && sor3oszlop7 && sor3oszlop8 && sor3oszlop9 && sor3oszlop10 && sor4oszlop1 && sor4oszlop2 && sor4oszlop3 && sor4oszlop4 && sor4oszlop5 && sor4oszlop6 && sor4oszlop7 && sor4oszlop8 && sor4oszlop9 && sor4oszlop10 && sor5oszlop1 && sor5oszlop2 && sor5oszlop3 && sor5oszlop4 && sor5oszlop5 && sor5oszlop6 && sor5oszlop7 && sor5oszlop8 && sor5oszlop9 && sor5oszlop10 && sor6oszlop1 && sor6oszlop2 && sor6oszlop3 && sor6oszlop4 && sor6oszlop5 && sor6oszlop6 && sor6oszlop7 && sor6oszlop8 && sor6oszlop9 && sor6oszlop10 && sor7oszlop1 && sor7oszlop2 && sor7oszlop3 && sor7oszlop4 && sor7oszlop5 && sor7oszlop6 && sor7oszlop7 && sor7oszlop8 && sor7oszlop9 && sor7oszlop10 && sor8oszlop1 && sor8oszlop2 && sor8oszlop3 && sor8oszlop4 && sor8oszlop5 && sor8oszlop6 && sor8oszlop7 && sor8oszlop8 && sor8oszlop9 && sor8oszlop10 && sor9oszlop1 && sor9oszlop2 && sor9oszlop3 && sor9oszlop4 && sor9oszlop5 && sor9oszlop6 && sor9oszlop7 && sor9oszlop8 && sor9oszlop9 && sor9oszlop10 && sor10oszlop1 && sor10oszlop2 && sor10oszlop3 && sor10oszlop4 && sor10oszlop5 && sor10oszlop6 && sor10oszlop7 && sor10oszlop8 && sor10oszlop9 && sor10oszlop10){
        gameOn = false;
        statusDiv.innerHTML = 'Döntetlen!';
    } else {
        xIsNext = !xIsNext;
        if(xIsNext){
            statusDiv.innerHTML = 'Következő lépés: X';
        } else {
            statusDiv.innerHTML = 'Következő lépés: O';
        }
    }
};

//event handler
const handleReset = () => {
    xIsNext = true;
    statusDiv.innerHTML = 'Következő lépés: X';
    winner = null;
    for (const cellDiv of cellDivs){
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
    }
};

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if(!gameOn || classList[2] === 'x' || classList[2] === 'o'){
        return;
    }
    
    if(xIsNext){
        classList.add('x');
        checkGameStatus();
    } else {
        classList.add('o');
        checkGameStatus();
    }
};

//event listener
newDiv.addEventListener('click', handleReset);

for (let  cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}