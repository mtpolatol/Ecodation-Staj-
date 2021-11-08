//npm i -g typescript //terminalde powershell
//deneme.ts

//var temp1:string="Merhabalar";
//var:global
var temp1: boolean = true;

//localde çalışır.
// let temp2:number=44;
// const temp3:string="iyiyim";

//değişken türünü bilmiyorsam any kullanmalıyım.
var degiskenTurunuBilmiyorum: any = "44";

var dizi = [];
var dizi2: string[] = ["Merhaba", "Js", "44"];

var object = {};

//number string boolean
function deneme(adi: string, soyadi: string) {
  console.log(adi + " " + soyadi);
}

var adiSoyadi:string=deneme("Hamit","Mızrak");
