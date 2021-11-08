//try-catch
//Math
//sayı
//string
//random
//cast
//if else
//ternary
//eif elseif else
//swich case
//for
//while
//do-while
//for in
//Date
//Object
//return continue break

//Örnek-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

//var x= Number(prompt("lütfen x değerini giriniz"));
//var k= Number(prompt("lütfen k değerini giriniz"));

//var result= birinciDerecedenDenklem(x,k);
//document.write(result);

//function birinciDerecedenDenklem(x,k){
//return 3*x+4*k;
//}

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//var derece= Number(prompt("lütfen derece değerini giriniz"));

//var result= derecedenFahranhayta(derece);
////document.write(result);

//function derecedenFahranhayta(x){
//return (x*9/5)+32
//}

// (derece*9/5)+32

//örnek-3 operatör
//4+3*2(3:3-1*6+9:1+(3:3))
//4+3*2*(3:3-1*6+9:1+(3:3))

//var value= 4+3*2*(3/3-1*6+9/1+(3/3));
//document.write(  value    );

//Ctrl+k+c
//Ctrl+k+u
//örnek-4: Math kullanıcının girmiş olduğu sayının
// -5.9
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın  6.0
// 5-yuvarlama yapsın 6.0

// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
// 9-) çıkan sonucu üslü göstersin  4 ^ 4 = 4 * 4 * 4 *4

//var numberValue= Number( prompt("lütfen bir sayı giriniz")   );
// var numberValue, changeNumberValue1, changeNumberValue2, numberCompare;
// numberValue = -5.9; //Number( prompt("lütfen bir sayı giriniz")   );

// allNumber(numberValue);

// function allNumber(changeNumberValue1) {
//   changeNumberValue1 = Math.round(
//     Math.sqrt(Math.pow(Math.round(Math.abs(numberValue)), 2))
//   );

//   document.write(changeNumberValue1);

//   changeNumberValue2 = Math.round(changeNumberValue1 / 5);
//   document.write(changeNumberValue2);

//   if (changeNumberValue1 < changeNumberValue2) {
//     numberCompare = changeNumberValue1;
//   } else {
//     numberCompare = changeNumberValue2;
//   }
//   document.write(" en küçüğü: " + numberCompare);

//   //çift sayı
//   if (numberCompare % 2 == 0) {
//     numberCompare = numberCompare + 5;
//   } else {
//     numberCompare = numberCompare + 3;
//   }

//   document.write(" tek çift: " + numberCompare);

//   document.write("sonuc: " + Math.pow(numberCompare, numberCompare));
// }

//document.write(Math.pow(numberCompare,numberCompare));

//örnek-4 hesap makinası
//kullanıcı tarafından aldığımız 2 sayı için
//toplama
//çıkarma
//bölme
//çarpma
//hesap makinesi ?
// sayı olması çok önemli

// var sayi1, sayi2 ;
// sayi1= Number(4);
// sayi2= Number(4);

// function topla(x, y) {
//   document.write(x + y);
// }

// function cikarma(x, y) {
//   document.write(x + y);
// }

// function bolme(x, y) {
//   document.write(x + y);
// }

// function carpma(x, y) {
//   document.write(x + y);
// }

//örnek5: girilen bir sayı negatif mi pozitif mi bulan algoritma ? ternary ile çözelim
// var value= -4;
// if(value<0){
//   document.write(value+" sayısı negatif");
// }else{
//   document.write(value+" sayısı pozitif");
// }

// örnek5: Not aşağıdaki her bir yapı function olması gerekiyor.
//1 sayısından kullanıcının girdiğini sayıya kadar olan sayılardan;
//kaçtane sayı var
//bu sayılardan kaç tane tek sayı var
//bu sayılardan kaç tane çift sayı var
//bu sayıların toplamı
//bu sayıların ortalaması
// örnek5: Not aşağıdaki her bir yapı function olması gerekiyor.
//1 sayısından kullanıcının girdiğini sayıya kadar olan sayılardan;
//kaçtane sayı var
//bu sayılardan kaç tane tek sayı var
//bu sayılardan kaç tane çift sayı var
//bu sayıların toplamı
//bu sayıların ortalaması

//var sayi= Number(prompt("lütfen üst indis için bir sayı giriniz"));
// var sayi=5;
// var sayiAdeti=0,ciftSayi=0,tekSayi=0,toplam=0,ortalama=0;
// // 1 2  3 4 5
// for(var i=1; i<=sayi; i++){
//   sayiAdeti++;
//   if(i%2==0){
//     ciftSayi++;
//   }else{
//      tekSayi++;
//   }
//   toplam+=i;
// }

// ortalama=toplam/sayiAdeti;

// document.write("kaçtane sayı: "+sayiAdeti+" kaç tane tek sayı: "+ tekSayi+" kaç tane çift sayı: "+ ciftSayi)
// document.write(" toplam: "+toplam+" ortalaması:"+ortalama)

//ödev: password repassword (şifre karşılaştırmak)
//var password = "Abc85";
//var rePassword = "Abc85";

// while (true) {
//   var password = Number(prompt("lütfen şifre giriniz"));
//   var rePassword = Number(prompt("lütfen şifreyi tekrar giriniz"));

//   if (password === rePassword) {
//     document.write("aynı şifre");
//     break;
//   } else {
//     document.write("aynı şifre");
//   }
// }

//ödev: haftanın günü bulan algoritma
var tarih = new Date().getDay();
switch (tarih) {
  case "pazar":
    document.write("Günlerden pazar");
    break;
  case "pazartesi":
    document.write("Günlerden pazartesi");
    break;
  default:
    document.write("farklı giriniz");
    break;
}
//aylardan hangi gün switch case ile yapalım (new Date())

//ödev: sayı tahmin oyunu: random bir sayı bulsun:8    12
//
//ödev: kullanıcının girdiği vize,final hesaplaması yapan algoritma
//vize*0.4 +final*0.6
//sonuç<50 kaldı
//50<=x<70 CC
//70<=x<80 BA
//80<=x<=100 AA
