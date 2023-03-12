//////////////////////////////////////// DOM /////////////////////////////
//DOM:Document Object Model
//Dom: Html5 , Css ,JS
//document.getElementById("paragraf1").innerHTML="değişim";
//s varsa [] yazmalıyız

//GET
// document.getElementById("paragraf1")
// document.getElementsByName("paragraf3")[0]
// document.getElementsByClassName("paragraf2")[0]
// document.getElementsByTagName("p")[0]

// //Query Selector : hepsini bir seferde çağırabilirim
// //Eğer birden fazla class name varsa her zaman ilk nesneyi seçer
// document.querySelector("#paragraf1")
// document.querySelector(".paragraf2")
// document.querySelector("[name='paragraf3']")

// document.querySelector("p")

// //Query SelectorAll : hepsini bir seferde çağırabilirim
// //All: bileşende istediğim bileşenleri [] işaretiyle çağırabilrim.
// document.querySelectorAll("div > p")
// document.querySelectorAll("div > p")[0]

function nameSurname() {
  var nameSurnames = "Hamit Mızrak";
  //document.write(nameSurnames);
  //document.getElementById("dom_id").innerText="<b>"+nameSurnames+"</b>" ;
  
  document.getElementById("dom_id").innerHTML="<b> <i> "+nameSurnames+"</i></b>";
  return nameSurnames;
}


function domManipulation(){
  document.getElementById("dom_id").innerHTML="<b> <i> JavaScript Kursu</i></b>";

  document.getElementById("dom_id").style.color="blue";
}

//ÖDEV:
//login 
//kullanıcı email  
<input name="adi" id="adi_id" class="" required />
//kullanıcı  şifre
//temizle gönder (event)

<h3>hamitmizrak@gmail.com 4656455</h3>

//email: hamitmizrak@gmail.com
// hamitmizrak     gmail.com  sonrasında bu iki yapıyı diziye atayalım
//email şifre h3 taginde : hamitmizrak@gmail.com 4656455 Gönder
