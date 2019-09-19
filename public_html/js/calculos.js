/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sumar() {
    var n1, n2, res;
    var opc;
    
    opc = document.getElementById("opc").value;
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    
    if(opc === 'Adición') {
        res = n1 + n2;
    } else if (opc === 'Sustracción'){
        res = n1 - n2;
    }
    
    //alert("Resultado: " + res);
    document.getElementById("res").innerHTML = "";
    document.getElementById("res").innerHTML = "Resultado: " + res;
}


