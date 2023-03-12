//codepen web site url: https://codepen.io/Mizrak/pen/wveZmaO

//codepen: Ctrl+Space
//codepen bir obje seç ve tırnak ekleyebilirsiniz

//tek satırlık kodlar
//Ctrl+Space : autocomplete kullanabiliyoruz.
//tek satır yorumalamada
/*
<root>
  <child>  </child>
</root>

nodejs
json
OOP
inheritance
interface
abstract
class
  
  framework =önceden hazırlanmış kütüphaneleri bulunan  yapıdır.
  framework:nodejs angular vuejs 
  libraries:jquery react
*/

//ekranda çıktı
//console.log("Arka planda test yapmak");
//alert("Ekranda popup")
//window.alert("Ekranda popup")
//document.write("ben documentim");

//string yapılar için ister tek tırnak isterseniz çift tırnakı kullanabilirsiniz.

//değişken data types
var isim = "Hamit";
var soyisim = "Mızrak";
var diller = 9;
var virgul = 44.44;
var turkiye = true;

//document.write(
//  isim + " " + soyisim + " " + diller + "\n" + turkiye + " " + virgul
//);

//JS: virgül noktadır(.)
//local scope : sadece fonksiyon içindeki { } içinde geçerlidir.
//global scope : her yerden erişim sağlayabilirim.

// örnekleme
var a1, a2, a3, a4;
a1 = "sayı1";
a1 = 44;
a1 = 55.55;
a1 = true;
//document.write(" " + a1);

//var ,let ,const
//var: global scope çalışır.
//let ve const yapısı local scope çalışır. ES6
const sabitSayi = 44;
//sabitSayi = 99;
//document.write(" " + sabitSayi);

//Dikkat: Js eşittir Matematikteki eşit değildir.

//değişıkenler _$ ile başlayabilir.
var degiskenYazma = "99";
var _degiskenYazma = "99";
var $degiskenYazma = "99";
//document.write();

//String nedir? , Number nedir ? dizi nedir ? object nedir ?
var str = "Malatya"; //String
var str2 = "Malatya2"; //String

var nbr = 44; //Number
var nbr_virgu = 55.99; //Number
var nbrVirgul = 55.99; //Number ve bu değişken adına camel case özellikler diyoruz.

var karar = true; // Boolean

var object = { adi: "Hamit", soyadi: "Mızrak", diller: 9 };
var dizi = [9, 6, "merhabalar", true];

//undefined: eğer değişkene bir değer vermezseniz k
var tanimsiz;
//alert(tanimsiz)
//console.log(tanimsiz);

//operatörler matematik operatörler
var sayi1 = 1;
var sayi2 = 2;
var sonuc = sayi1 + sayi2;
sonuc = sayi1 - sayi2;
sonuc = sayi1 * sayi2;
sonuc = sayi1 / sayi2;
//document.write(sonuc);

//mantıksal operatörler
//&&=Ve  ||=veya !=değil

//< <=  > >=  == ===

// == iki bileşen birbirine eşittir ancak türüne bakmaz
var sayi4 = "4"; //String
var sayi5 = 4; //Number
//sayi4 == sayi5; //sadece eşitliğie bakar
//sayi4 === sayi5; //türüne ve eşitliğie bakar
//!= eşit değiştir türüne bakmadan
//!== eşit değildir türünede bakarak cevap veri

//sayi5++; // işleme bittikten sonra artırır.
//++sayi5; //  işleme başlamadan artırır

var count = 0;
//1 artırmak
//count++;
//count = count + 1;
//count += 1;

var deneme = 44.55;
//document.write(" "+typeof deneme)

//instanceof ile typeof karıştırmamak gerekir.

//camel case:  javascriptEgitimiDersler
//pascal case: JavascriptEgitimiDersler
//underscore case: javascript_egitimi_dersler
//Hypens case: javascipr-egitimi-dersler

//Kullanıcıdan birşeyler almak istersem
//prompt
//var isimSoyisim = prompt("Lütfen isim soyisminizi yazınız");
//var MemleketAdi = prompt("memleket");
//var ulke_adi = prompt("ülke adı");
//var ilce-adi = prompt ("ilce adı");
//document.write(isimSoyisim + MemleketAdi + ulke_adi);

//undefined: var sayi; document.write(sayi)
//NaN: Not a Number

//function= fonksiyon
//sürekli kod yazacağımzı ve sürekli aynı işlemler yapılacaık durumlarda
//function toplama(sayi1, sayi2) {
//  var top = sayi1 + sayi2;
//  document.write(top);
//  return top;
//}
//var sonuc = toplama(4, 6);

//Kullanıcı tarafından alınan (prompt) 2 tane sayıyı toplama/çıkarma/çarpma işlemi yapan bir hesap makinesi uygulaması

//local scope
//global scope
//funciton
//prompt

//Özel Türkçe karakter yazmayalım.
//üğşçöÇÖŞĞÜİı

//debug nasıl atılır.
//Not: prompt bize string döner

//cast: string bir ifadeyi tam sayıya çevirme
//var sayi1 = Number(prompt("sayi 1 giriniz"));
//var sayi2 = Number(prompt("sayi 2 giriniz"));

//global scope
var globalSayi = 9;

var toplamDeger = toplama(sayi1, sayi2);
//document.write(" topla sonucu: " + toplamDeger);

var carpimDeger = carpim(sayi1, sayi2);
//document.write(" carpım sonucu: " + carpimDeger);

var bolumDeger = bolum(sayi1, sayi2);
//document.write(" bölme sonucu: " + bolumDeger);

//parametre
function toplama(x, y) {
  //local scope
  var say9 = 6;

  //global scope
  var say10 = globalSayi;

  return x + y;
}

function carpim(x, y) {
  return x * y;
}

function bolum(x, y) {
  return x / y;
}

//parametresiz ve retursuz fonkisyonlar
function fonksiyonAdi() {}

//parametreli ve retursuz fonkisyonlar
function fonksiyonAdi1(sayi1) {}

//parametresiz ve returlü fonkisyonlar
function fonksiyonAdi2() {
  var sayi = 6;
  return sayi;
}

//parametreli ve returnlü fonkisyonlar
function fonksiyonAdi2(sayi9, sayi6) {
  return sayi9 + sayi6;
}

/////////////////////////////////////////////////////////////////////////////////////
function bugra(sayi) {
  return sayi * sayi;
}

//var deneme = bugra(4);
//var x = deneme - 10;
//document.write("sonuc:"+x)
/////////////////////////////////////////////////////////////////////////////////////

bugra2(5);
function bugra2(sayi) {
  var sonuc = sayi * sayi;
  var x = sonuc - 10;
  //document.write(x);
}

///////////////////////////////////////////////////////////////////////////////////////

//global scope
var x = 1;

function addTwo() {
  //local scope
  let y = 1;
  y = y + 2;
}

addTwo();
x = x + 1;
//console.log(x);
//document.write(x);

//document.write(" \" ' \b escape character");
var cifTirnak = "Hamit Mızrak";
var tekTirnak = "Hamit Mızrak";

///////////////////////////////////////////////////////////////////////////////////////

//NaN : Not A Number
//undefined : tanımlı değil var deneme;
//Infinity ://tanımsızdır

//istisna meydana geldi

try {
  //var sayi8 = 10 / 0; //tanımsızdır
  //document.write(sayi8);
} catch (err) {
  //alert(err + " hata:!!!!");
}

//document.write("hata meydana geldi");

///////////////////////////////////////////////////////////////////////////////////////

var math1 = 2,
  math2 = 5,
  math3 = 16,
  math4 = -9;

//mutlak değer
//document.write(Math.abs(math4) + " ");

//alta yuvarlama
//document.write(" alta yuvarlama " + Math.floor(4.9) + " ");
//document.write(" üste yuvarlama " + Math.ceil(4.1) + " ");
//document.write(Math.round(4.4) + " ");

//document.write(Math.pow(4, 2) + " ");

//document.write(Math.max(4, 6, 9, 12, 888, 15555) + " ");
//document.write(Math.min(4, 6, 9, 12, 888, 15555) + " ");
//document.write(Math.sqrt(25) + " ");

// 0 1
//document.write(Math.random() * 2 + 1 + " ");
//document.write(Math.E + " ");

/////////////////////////////////////////////////////////////////////////////////
// Number
var number1 = 44;
let number2 = 99;
const number3 = 77;
number1 = number1 * 9 + 6 / 6 - 78;

var number1 = 44;
//2 sayı sistemi
//document.write(" " + number1.toString(2) + " ");

//8 sayı sistemi
//document.write(" " + number1.toString(8) + " ");

//16 sayı sistemi
//document.write(" " + number1.toString(16) + " ");

//alert(4/"kelime")

//NaN:Not A number
//Infinity:  tanımsız
//undefined

const deger = "55";
//alert(isNaN(deger));

var sayi15 = 15.96325;
//alert(sayi15.toExponential(3));

//tam sayılı olan kısımı gösterir
//alert(sayi15.toPrecision(2));

/////////////////////////////////
//cast
var kelime="44";
document.write(Number(kelime));

var kelime2=44;
document.write(String(kelime2));

///////////////////////////////////////////////////////////////////////////////////////////////////
var kelime = "html5 Css3 ";

//kelime sayısı
console.log(kelime.length);

//kelime sayısı
console.log(kelime.trim().length);

//bütün karakterleri küçük yapar
console.log(kelime.toLowerCase());

//bütün karakterleri büyük yapar
console.log(kelime.toUpperCase());

//başlama karakterini gösterir
console.log(kelime.startsWith("h"));

//başlama karakterini gösterir
console.log(kelime.endsWith(" "));

//harf verilir bana sayı döner
console.log(kelime.indexOf("C"));

//sayı verilir bana harf döner
console.log(kelime.charAt(6));

//parçalama
console.log(kelime.substring(1));

//parçalama
console.log(kelime.substring(1, 4));

//eskisi ile yenisini değiştirmek
console.log(kelime.replace(kelime, "html5 Cxx3"));

var kelime = "html5 Css3 ";

//kelime sayısı
console.log(kelime.length);

//kelime sayısı
console.log(kelime.trim().length);

//bütün karakterleri küçük yapar
console.log(kelime.toLowerCase());

//bütün karakterleri büyük yapar
console.log(kelime.toUpperCase());

//başlama karakterini gösterir
console.log(kelime.startsWith("h"));

//başlama karakterini gösterir
console.log(kelime.endsWith(" "));

//harf verilir bana sayı döner
console.log(kelime.indexOf("C"));

//sayı verilir bana harf döner
console.log(kelime.charAt(6));

//parçalama
console.log(kelime.substring(1));

//parçalama
console.log("substring: " + kelime.substring(1, 4));

console.log("slice: " + kelime.slice(1, 4));

//eskisi ile yenisini değiştirmek
console.log(kelime.replace(kelime, "html5 Cxx3"));

console.log("iceiğinde: " + kelime.indexOf("Css"));

console.log("iceiğinde: " + kelime.search("Css"));

//concat
console.log(kelime.concat(" sonuna eklendi"));

//Kullanıcı tarafından aldığımız bir kelimeyi (prompt)
//1-) eleman sayısını ?
//2-) kelime başındaki ve sonundaki boşlukları alalım.
//3-) kelimedeki 1 ile 5 arasındaki harfleri bana göstersin
//4-) kelimedei 0 indiste hangi harf var
//5-) kelimedeki a kaçıncı indisten başlıyor.
//6-) kelimenin sonuna javascript yazalım.
//7-) kelime a ile mi başlıyor (true yada false cevabı vermeli)
//8-) kelime a ile mi bitiyor (true yada false cevabı vermeli)
//9-) kelimeyi bütün karakterleri küçük harf yapalım
//10-) kelimeyi bütün karakterleri büyük yapalım. harf yapalım

//for gördükten sonra
//kelime içindeki bütün a ları x harfi ile değiştirelim.

//Conditonal ( karar mekanizması )
var sayi = 10;
if (sayi == 10) {
  document.write("sayı 10");
} else {
  document.write("sayı 10 değildir");
}

var sayi = "9";
if (sayi == 10) {
  document.write("sayı 10");
} else if (sayi === 9) {
  document.write("sayı 9");
} else if (sayi == 7) {
  document.write("sayı 7");
} else if (sayi == 1) {
  document.write("sayı 1");
} else if (sayi == 12) {
  document.write("sayı 12");
} else if (sayi == 11) {
  document.write("sayı 11");
} else if (sayi == 8) {
  document.write("sayı 8");
} else {
  document.write("sayı 10 değildir");
}

var date = new Date();
document.write("tarih: " + date);
var saat = date.getHours();
if (saat >= 10) {
  document.write("sayı 10 veya üstündendir");
} else {
  document.write("sayı 10 değildir");
}

var ternary = saat >= 10 ? " sayı 10 veya üstündendir" : "sayı 10 değildir";
document.write(ternary);

var sayi = 9;
if (sayi == 10) {
  document.write("sayı 10");
} else if (sayi === 9) {
  document.write("sayı 9");
} else if (sayi == 7) {
  document.write("sayı 7");
} else if (sayi == 1) {
  document.write("sayı 1");
} else if (sayi == 12) {
  document.write("sayı 12");
} else if (sayi == 11) {
  document.write("sayı 11");
} else if (sayi == 8) {
  document.write("sayı 8");
} else {
  document.write("sayı 10 değildir");
}

//switch case
switch (sayi) {
  case 10:
    document.write("sayı 10");
    break;
  case 9:
    document.write("sayı 9");
    break;
  case 5:
    document.write("sayı 5");
    break;
  case 8:
    document.write("sayı 5");
    break;
  default:
    document.write("sayı bulunamadı");
    break;
}

//loop ()
//start: var i=0
//i<10 : şart
//i++ : artırma
//i++ i=i+1 i+=1

//break: döngüyü kırar
//return:  metotu kırar
//continue: sadece 1 kere çalışma sonra devam
//0 1 2 3 4 5 6 7 8 9 10

//eğer sayı 5 ise fonksiyona versin fonksiyon gelen sayının karesi ,mutlak ve karekökü alsın
//iterative for
for (var i = 0; i <= 10; i = i + 1) {
  if (i === 4) continue;
  if (i === 8) break;

  document.write(i + " ");
  if (i == 5) {
    usluMutlakKarekok(i);
  }
}

function usluMutlakKarekok(sayi) {
  document.write("üslü:  " + Math.pow(sayi, 2));
  document.write("mutlak: " + Math.abs(sayi));
  document.write("karekök: " + Math.sqrt(sayi));
}

/////////////////////////////////////////////////////////////
//Js bazı katı kurallar bütünüü oluşturmak istiyorsak; OOP kullanamayız.
//escape yazamazsınız
//8lik sayıyı kulllanmayız.
// eğer "use strict"  kullanırsak
// public kullanamazsınız
// private kullanamazsınız
// protected kullanamazsınız
// static kullanamazsınız
// let kullanamazsınız
// package kullanamazsınız
// interface kullanamazsınız
// implements kullanamazsınız

//iterative for
for (var i = 1; i < 9; i++) {
  document.write(i + " ");
}

//for in : döngüsü biz genelde sadece ekranda göstermek istiyorsak kullanıyoruz.
var dizi = ["Malatya", "Sivas", "Elazığ", "Bitlis", "Bingöl", "İstanbul"];

//for in
for (temp in dizi) {
  document.write(dizi[temp] + " ");
}

//while
var k = 1;
while (k < 9) {
  document.write(k + " ");
  k++;
}

//do while
var j = 4;
do {
  document.write(
    "şart sağlansın yada sağlanmasın kesinlikle 1 kere çalışacak "
  );
  j++;
} while (j <= 5);


/////////////////////////////////////////////////////////////////////////////////////


var tarih=new Date();
//document.write(tarih);
//document.write(tarih.toTCString());
//document.write(tarih.toDateString());

//gün: 1-31
//saat:0-23
//0-999
//0-11
//0-59


var tarih2=new Date("2021-9-9");
document.write(tarih2);
document.write("getTime() "+tarih2.getTime());
document.write("getDay() "+tarih2.getDay());
document.write("setDay() "+tarih2.setDay(5));
document.write("getDay() "+tarih2.getDay());

document.write(Date.now())


//dizi
var dizi=[];

//var object2=new Object();
var object2={};

//object
var object={
  adi:"Hamit",
  soyadi:"Mızrak",
  adres:"Malatya",
  ders:"JS",
  diziler:["Deneme","diğer"],
  usluSayilar:function(){ return this.adres}
};

document.write(object.adi+" "+object.soyadi+" "+object.adres+" "+object.usluSayilar+object.diziler[1]);

//[{}] != {[]}

