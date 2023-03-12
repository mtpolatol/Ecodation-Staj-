// VKİ: vuvut Kitle indeksi
//kilo
//boy
//vki_hesapla

// 18.5 ve altı Düşük Kilolu
// 18.5 - 24.9 Normal Kilolu
// 25-29.9 Fazla Kilolu
// 30-40 Obez
// 40 ve üstü Aşırı Obez


function CalculateVKI(){
  var weight=document.getElementById('weight').value;
  var height=document.getElementById('height').value;

  var result=weight/Math.pow(height,2);

  document.getElementById('result').innerText=result.toFixed(2);


  if(result<18.5) {
      document.getElementById('result-statu').style.color= '#2196f3';
      document.getElementById('result-statu').innerText='Zayıf';
  }
  else if( result>= 18.5 && result<25){
     document.getElementById('result-statu').style.color='#43a047'; 
     document.getElementById('result-statu').innerText='Normal';
  } 
  else if( result>= 25 && result<30){
      document.getElementById('result-statu').style.color='#fb8c00'; 
      document.getElementById('result-statu').innerText='Kilolu';
   } 
   else if( result>= 30){
      document.getElementById('result-statu').style.color='#c62828'; 
      document.getElementById('result-statu').innerText='Obez';
   } 
}

function Reset(){
  document.getElementById('weight').value=0;
  document.getElementById('height').value=0;
  document.getElementById('result-statu').innerText='';
  document.getElementById('result').innerText='';
}

// Paragraf göster gizle
$(function () {
  $("#goster").click(function () {
    $("#aside-p").show();
  });

  $("#gizle").click(function () {
    $("#aside-p").hide();
  });
});


//sss sıkca sorulan sorular
$(function () {
  $("#sss").click(function () {
    $("#showsss").slideUp(1500).slideDown(1500);
  });
});

//mesaj kısmında counter
//paragraf_sayi  mesaj
$(function () {
  $("#mesaj").on("input", function (e) {
    var max = 150;
    $("#mesaj").focus();
    $("#mesaj").val($("#mesaj").val().substring(0, max));
    var mesajKalan = max - $(this).val().length;
    $("#paragraf_sayi").text("kalan karakter sayısı: " + mesajKalan);
  });
});

//login register
//registerId  registerModal
$(document).ready(function () {
  $("#basic-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
      name: {
        required: true,
        minlength: 3,
      },
      password: {
        required: true,
        number: true,
        min: 8,
        password: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        minlength: "Minumum 3 karakter giriniz",
        required: "Ad alanı boş geçemezsiniz",
      },
      password: {
        required: "Şifre  alanını boş geçemezsiniz",
        //number: "Lütfen sayısal değer giriniz",
        min: "şifre için en az 8 karakter olmalı",
      },
      email: {
        required: "Email alanını boş geçemezsiniz",
        email: "Email formatında girmediniz örneğin: xyz@deneme.com",
      },
    },
  });
});









