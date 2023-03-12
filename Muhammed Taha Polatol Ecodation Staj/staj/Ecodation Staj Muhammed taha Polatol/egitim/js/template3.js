//Diziler: Birden fazla elemanları bir arada bulundurmak ve onlar üzerinden işlem yapabilmektir.
// global
//var dizi2=[];
//var dizi3=new Array();
//dizi.length
var dizi = [
  34,
  "İstanbul",
  "Ankara",
  "Adana",
  "Mardin",
  "Malatya",
  "Elazığ",
  44,
];

//eleman sayısı-1
//diziler sıfırıncı indis(0)
//document.write(dizi[0]);
//document.write(dizi[7]);

//push:sona ekleme yapar
var sonElamanEkle = dizi.push(" Sivas");
//alert("sona eklendi: " + sonElamanEkle);

//unshift:başa eleman ekle
var basaElemanEkle = dizi.unshift(" Paris");
///alert(basaElemanEkle);

//pop:sondan çıkarma
var sonElemanCikar = dizi.pop();
////alert("son eleman: " + sonElemanCikar);

//shift: ilk sıradaki bir eleman çıkartır.
var ilkElemanCikar = dizi.shift();
//alert("ilk eleman:" + ilkElemanCikar);

//iterative döngü
for (let i = 0; i < dizi.length; i++) {
  document.write(i + 1 + ". eleman: " + dizi[i] + " ");
}

document.write("----------");
//sort: küçükten büyüğe doğru sıralama işlemi
dizi.sort();

//for in
for (temp in dizi) {
  //document.write(temp+dizi[temp]);
  //document.write(dizi[temp]+" ");
  //document.write(dizi[temp].toString+" ");
}

document.write("----------");
//reverse:sondan başa doğru sıralama yapıyoruz. Büyükten küçüğe doğru
dizi.reverse();

//for in
for (temp in dizi) {
  //document.write(dizi[temp]+" ");
}

document.write("++++++++++++++++++++++++++++++++++++++");
//Kullanıcıdan alcağımız sayıya göre rastgele sayılar üretilsin ve bunu diziye atasın

// // document.write("son");
// // var number=Number(prompt("rastgele için sayı giriniz"));
// // var arr=[];
// // for(let a=0; a<number; a++){
// // arr[a]=  Math.random() *5;
// // }

// // for(temp2 in dizi  ){
// //   document.write(arr[temp2]+" ");
// // }

// var number2 = Number(prompt("rastgele sayı için sayı giriniz"));
// var array2 = [];
// var totalNumber = 0;

// //iterative for
// for (let x = 0; x <= number2; x++) {
//   array2[x] = Math.round(Math.random() * 9) + 1;
//   //array2[x]= Number(prompt("lütfen "+(x+1)+ " .sayı giriniz")) ;
//   totalNumber = totalNumber + array2[x];
// }

// document.write("+++++++++++++++++++++++++++++");
// //for in: bize dizideki sıra sayısı  verir
// for (let temp2 in array2) {
//   //document.write(array2[temp2]+"  " );
//   //document.write(array2[temp2]+"  " );
// }

// document.write("+++++++++++++++++++++++++++++");
// //for of: bize dizi içindekileri verir
// for (let temp2 of array2) {
//   document.write(temp2 + "  ");
// }

// document.write("toplamları: " + totalNumber + " ");
// document.write("ortalama: " + totalNumber / number2 + " ");

//2.soru: elemanların toplamı
//3.soru ortalamasını hesaplayalım: toplam/elemansayısı
//4.soru: sayıları kullanıcı girecek

//////////////////////////////////////// dizi normal forEachsiz ///////////////////////
var dizi4 = [2, 4, 6, 8, 5];
var toplam4 = 0;
function toplaFonksiyonu() {
  for (let i = 0; i < dizi4.length; i++) {
    toplam4 += dizi4[i];
  }
  return toplam4;
}

// var sonuc = toplaFonksiyonu();
// document.write("sonuc:" + sonuc);

//////////////////////////////////////// dizi forEach ///////////////////////


// dizi4.forEach(toplaFonksiyonu());

// document.write("sayı toplamı: "+toplam4)

//////////////////////////////////////// object /////////////////////////////
//object: özellikleri olan bileşenlerdir.
var obje1=
{
adi:"Hamit",
soyadi:"Mızrak",
dizi5:[6,2,3,5],
sehir:{ sehiradi:"Malatya",plaka:44 }
};
document.write(obje1.adi.concat(" son")+ obje1.sehir.sehiradi)

//for of
for(let temp4  of obje1.dizi5 ){
document.write(" "+temp4+" ");
}


//////////////////////////////////////// event /////////////////////////////
//event:
function toplama(){
  document.write("toplama: "+(4+6));
}

function dateShow () { 
  document.write(new Date());
 }

//////////////////////////////////////// listener /////////////////////////////
//listener:



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

