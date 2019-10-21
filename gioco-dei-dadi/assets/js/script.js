window.onload = function () {

  //variabili
  var ris1;
  var ris2;
  var nomeVincitore = "Non c'è un vincitore, sono usciti ad entrambi numeri uguali";

  // Genero un Numero random tra 1 e 6
  function tiraildado(){
    return (Math.round(5 * Math.random()) + 1);
  };
  
  document.getElementById('dado1').onclick = function(){
    var giocatore1 = document.getElementById("form_nome1").value;
    if(giocatore1 == ""){
      alert("Non ha inserito correttamente i valori del Giocatore 1, riprovi");
      document.getElementById("form_lanciadado1").value = "";
      return false;
    } else {
      ris1 = tiraildado();
      document.getElementById("form_lanciadado1").innerHTML = ris1;
      return true;
    } 
  };
  
  document.getElementById('dado2').onclick = function(){
    var giocatore2 = document.getElementById("form_nome2").value;
    if(giocatore2 == ""){
      alert("Non ha inserito correttamente i valori del Giocatore 2, riprovi");
      document.getElementById("form_lanciadado2").value = "";
      return false;
    } else {
      ris2 = tiraildado();
      document.getElementById("form_lanciadado2").innerHTML = ris2;
      return true;
    } 
  };

}
