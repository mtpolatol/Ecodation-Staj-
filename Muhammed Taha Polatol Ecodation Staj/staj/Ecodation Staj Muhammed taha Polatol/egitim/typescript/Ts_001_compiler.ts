//node: npm i -g typescript
var adi: string = "Hamit";
var soyadi: string = "Mızrak";
var merhaba: number = 44;
var deneme: string = "nasılsın";
var mer: number = 44;
//tsc deneme.ts -w
//debug
//www

//TS: string,number,boolean

//global scope:  var
//local scope: let,const
var sayi: string = "";
document.write(sayi);

//Hoisting TS yazmayalım
//adi="Taha";
//var adi;
//operatörler
//+
//-
//*
//-
//%
// = ATAMA
// == EŞİT Mİ
// === EŞİT Mİ TÜRÜNE
// &&=ve ||=veya
var sayi3: number = 4;
var sayi4: number = 9;
var operator = sayi3 + sayi4;

//assigment operatörler
// temp+=b    temp=temp+b
// -=
// *=
// /=

//Ternary
var num: number = 15;
var result: string = num > 10 ? "büyük" : "küçük";

//let
//döngüler
//fonksiyonlar
for (let i = 0; i > 15; i++) {
  const degismez: number = 45545445;
  //degismez=541551;
}

//sayı sistemi
let decimal: number = 15; //decimal
let hex: number = 0xf25; //hex
let bina: number = 0b01010; //2lik
let octal: number = 0o5255; //8lik
document.write("\n<br/>");

//unknown:bilinmiyor
//gelen verilerin ne olduğunu bilmiyorsam
let bilmem: unknown = "kelime";
bilmem = true;
bilmem = 55;

//string
var kelime: string = "JavaScript";
//kelime.

//function
// function adi():string{}
// function adi():number{}
// function adi():boolean{}
// function adi():void{}

function adiSoyadi(adi: string, soyadi: string): string {
  return adi + " " + soyadi;
}

//Date
function simdikiTarih(tarih: Date): string {
  let saat: number, dakika: number, saniye: number;
  saat = tarih.getHours();
  dakika = tarih.getMinutes();
  saniye = tarih.getSeconds();

  return saat + "" + dakika + saniye;
}

//Math
function matematik(sayi: number): number {
  sayi = Math.pow(sayi, sayi);
  return sayi;
}

//if else
function conditionValue(sayi: number): void {
  if (sayi > 10) {
    alert("10'dan büyüktür");
  } else if (sayi == 5) {
    alert("sayı 5");
  } else {
    alert("10'dan küçüktür");
  }
}

//switch case
function conditionValueSwitch(sayi: number): void {
  switch (sayi) {
    case 1:
      alert("sayı 1");
      break;

    case 2:
      alert("sayı 2");
      break;

    default:
      alert("farklı sayı");
      break;
  }
}

//döngü
function loop(sayi: number): void {
  let i = 0;

  //for
  for (i = 0; sayi > 10; i++) {
    alert(i);
  }

  //while
  while (sayi > 10) {
    alert(i);
    i++;
  }

  //JS
  let dizi8 = [];

  //TS
  let dizi9: string[] = ["Malatya", "Adana"];

  //for in
  for (let temp in dizi9) {
    alert(dizi9[temp]);
  }

  //for of
  for (let temp of dizi9) {
    alert(temp);
  }
}

//dizi örneği
//break return continue
function karar(sayi: number): void {
  for (let i = 0; i < 18; i++) {
    if (i == 5) {
      continue;
    } else if (i == 7) {
      break;
    }
  }
  //break
  //return
  //continue
}

//NaN:Sayı değildir
//undefined:tanımsız hiç birşey tanımlamadın
//null : içindeki hiç birşey yok

//anonymous function
//arrow function
function normal(): string {
  return "normal";
}
let temp = normal();

//normal function
let _normalValue = function normal2() {
  alert("merhaba1");
};

//anonymous function
let _anonymousValue2 = () => {
  alert("merhaba2");
};

//parametreli anonymous function
let _hamit1 = (sayi11: number) => {
  Math.sqrt(sayi11);
};

//normal parametreli
let _hamit2 = function isim(sayi11: number) {
  Math.sqrt(sayi11);
};

//number
//boolean
//string
function deneme66(sayi88: number): void {}
var dizi99: string[] = [];

/////////////////// OOP ////////////////////////////////

//class

//enum

//inheritance

//interface

//abstract
