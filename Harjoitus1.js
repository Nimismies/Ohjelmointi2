
function Tallenna(frmKohde)
{
alert("Kiitos! Yhteystietosi on tallennettu rekisteriimme")
frmKohde.txaOutput.value += frmKohde.txtSisaan1.value + "\n" + frmKohde.txtSisaan2.value + "\n" + frmKohde.txtSisaan3.value + "\n" + frmKohde.txtSisaan4.value + "\n" + frmKohde.txtSisaan5.value + "\n";

}

function Tarkista(frmKohde) 
{
 
 var siirto_arvo = frmKohde.txtSisaan5.value;
 try {
     
     if (isNaN(siirto_arvo)){
         throw "Syötetty ikä ei ole numeerinen";
     }
	 
 }
  catch (virhe) {

     alert (virhe);
  }	
}
function Tarkistus(frmKohde)
{
    if (isNaN(frmKohde.txtSisaan5.value))
    alert("Syötetty ikä ei ole numeerinen");
}
//JOMPIKUMPI Tarkistus tai Tarkista functio tohon viimeseen