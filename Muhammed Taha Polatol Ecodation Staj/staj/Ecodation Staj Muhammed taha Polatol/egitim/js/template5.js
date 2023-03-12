function onChecked(denemeForm) {
  //email
  let email = String(denemeForm.email.value);

  //password
  let password = String(denemeForm.password.value);

  let arrayAllValue = [email, password];

  if (email == "" || password == "") {
    alert("Lütfen email veya passwordu boş bırakmayız");
  } else {
    //formdaki aldığımız elemanları diziyle göndermek
    showValue(arrayAllValue);

    //email: hamitmizrak@gmail.com   ==> [hamitmizrak  , gmail.com]
    emailSub(email);

    let result = confirm("Form gerçekten göndermek istiyor musunuz ?");
    return result;
  }
}

//h2 Email ve şifreyi göster
function showValue(arrays) {
  let arr = arrays;
  //DOM
  document.getElementById("showId").innerHTML =
    "emailiniz: " + arr[0] + " şifreniz: " + arr[1];
}

//email parçala
function emailSub(email) {
  //hamitmizrak@gmail.com
  let emailSearch = email.search("@");
  let subEmailLeft = email.substring(0, emailSearch);
  let subEmailRight = email.substring(emailSearch + 1, email.length);

  let array = [subEmailLeft, subEmailRight];

  //for of
  for (let temp of array) {
    alert(temp);
  }
}

//debug nasıl atılır
//Ctrl+K+C
// 1-)breakpoint koyalım
// 2-)Run And Debug (Ctrl+Shift+D)
// 3-)Start Debugging (F5)
// 4-)Debugging devam (F10)
