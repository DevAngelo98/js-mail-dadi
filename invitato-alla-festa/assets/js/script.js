window.onload = function(){
  // Genero un numero random 1 o 2
  function randomNumber(){
    return (Math.round(1 * Math.random()) + 1);
  };

  document.getElementById("verifica_mail").onclick = function() {
    var email = ["gsgfs@gmail.com","alfio@gmail.com","pluto@gmail.com","pippo@gmail.com"];
    var emailInserita = document.getElementById("form_mail").value;
    var randomPresenza =[];
    if (emailInserita != ""){
      if(randomNumber()>1){
        randomPresenza = email.push(emailInserita); 
        document.getElementById("form_verifica").innerHTML ="Sei stato/a invitato/a";
      }
      else {
        document.getElementById("form_verifica").innerHTML ="Non sei stato/a invitato/a";
      }
    } else {
      alert("Inserisci una mail");
    }
  }

}

