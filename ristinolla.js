var GameState = /** @class */ (function () {
    function GameState() {
        this.game_matrix = [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]];
    }
    return GameState;
}());
var game_status = new GameState(); // luodaan ilmentymä (=olio) pelin tiedoista
function init() {
    // alkutoimet
    //while (peli_on_kaynnissa == true) {
    // pelivuorojen hallinta ym. 
    //peli_on_kaynnissa = false;
    //}
}
// end main
function ChangeX(row, col) {
    // koneen siirrot
    var strId; // HTML-elementin id
    var imgKuva; // Viittaus sivulla olevaan kuva-elementtiin
    game_status.game_matrix[row][col] = 1; // merkataan taulukossa koneen pelaamaksi
    strId = "p" + row + "_" + col; // parsitaan HTML-elementin id
    console.log("kone " + row + " " + col);
    imgKuva = document.getElementById(strId); // haetaan viittaus elementtiin
    imgKuva.src = "Cross.png"; // muutetaan kuva
    game_status.shift = 2; // ihmisen vuoro
}
function ChangeO(imgKuva) {
    // ihmisen siirrot
    var i, j;
    i = parseInt(imgKuva.id.charAt(1)); // poimitaan rivi kuvan id:stä
    j = parseInt(imgKuva.id.charAt(3)); // poimitaan sarake kuvan id:stä
    console.log("ihminen " + i + " " + j);
    game_status.game_matrix[i][j] = 2; // merkataan taulukossa koneen pelaamaksi
    imgKuva.src = "ball.jpg"; // kuva nollaksi
    console.log("ihminen kuva muutettu" + imgKuva.id);
    CheckSituation(2);
   
    // Jos ihminen voitti
    game_status.shift = 1; // koneen vuoro
    ComputerShift(); // kone valikoi seuraavan position			
}
function ComputerShift() {
    // tekoäly
    var i, j, row, col;
    console.log("koneen tekoaly heraa");
    i = 0; // aloitetaan taulukon alusta
    while (i < 3) {
        j = 0; // aloitetaan rivin alusta
        while (j < 3) {
            if (game_status.game_matrix[i][j] === 0) {
                row = i; // otetaan talteen rivi
                col = j; // otetaan talteen sarake
                i = 3; // lopetetaan toisto
                j = 3; 
            }
            j = j + 1;
        }
        i = i + 1;
    }
    ChangeX(row, col);
    CheckSituation(1);
}
function CheckSituation(sh) {
    var chkTable1 = [0, 0, 0, 0];
    var chkTable2 = [0, 0, 0, 0];
    var i, j;
    // käydään pelitaulu läpi
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (game_status.game_matrix[i][j] == sh) {
                // jos tarkistettavan pelaajan merkki, lisätään arvoa yhdellä
                // -> tarkistettaessa summa 3 tarkoittaa, että peli on päättynyt
                chkTable1[i]++;
                chkTable2[j]++;
                // Käsitellään myös lävistäjät
                if (i == j) {
                    chkTable1[3]++;
                }
                if (i + j == 2) {
                    chkTable2[3]++;
                }
            }
        }
    }
    for (j = 0; j < 4; j++) {
        // onko 3 merkkiä
        if (chkTable1[j] == 3 || chkTable2[j] == 3) {
            alert("Peli on päättynyt. " + sh + " voitti");
            j = 3; // päätetään looppi
        }
    }
}



