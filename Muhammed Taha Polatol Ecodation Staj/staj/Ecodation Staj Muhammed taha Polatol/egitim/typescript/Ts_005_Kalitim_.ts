//Class:TypeSCript

/////////// 1.CLASS access modifer: public ////////////////////////
class ComputerDevice {
    //özellikler
    public mainboard: string;
    public cpu: number;
    public ram: any;
    public isKeyboardBluetooth: boolean;
  
    public writer() {
      let isTrue: string;
  
      if (this.isKeyboardBluetooth) {
        isTrue = "Evet Bluetooth vardır";
      } else {
        isTrue = "Hayır Bluetooth yoktur";
      }
      console.log(`
      ${this.mainboard} anakart , 
      ${this.cpu} cpu,
      ${this.isKeyboardBluetooth} bluetooth,
      ${this.ram} ram,
      ${isTrue}
      `);
    }
  } //class finish
  
  var comp = new ComputerDevice();
  comp.cpu = 5;
  comp.isKeyboardBluetooth = true;
  comp.ram = "5GB";
  comp.mainboard = "Xlmk44";
  comp.writer();
  
  ///////////// 2.CLASS access modifier: private ////////////////////
  class Telephone {
    //global değişkenler
    //eğer private varsa mutlaka constructor() yazmamız gerekiyor.
    private telephoneName: String;
    private telephoneSerialNumber: number;
  

    //dilersek: //parametresiz constructor yazabiliriz.

    //constructor : private ise
    constructor(telephoneName: String, serialNumber: number) {
      this.telephoneName = telephoneName;
      this.telephoneSerialNumber = serialNumber;
    }
  
    public telephoneMethod() {
      alert(
        `${this.telephoneName} telegon adı, ${this.telephoneSerialNumber} serial number`
      );
    }
  }
  
  var telp = new Telephone("klm 55 telefon adı",45264);
  //telp.telephoneMethod();






////////////////////KALITIM/////////////////////////////////////////////////////////////////
//kalıtım: ata mirası.
//Annemizden Babamızdan aldığımız özelliklerdir.

//bilgisayarın ortak özellikleri
//1-)ekran kartı ,ram,anakart

class CommonProperty {
//   private ekranKarti: string;
//   private ram: string;
//   private anakart: String;


  public ekranKarti: string;
  public ram: string;
  public anakart: String;

  //eğer private varsa constructor() yazacaktık
  public constructor(ekranKarti: string, ram: string, anakart: String) {
    this.ekranKarti = ekranKarti;
    this.ram = ram;
    this.anakart = anakart;
  }

  public computerPropertyMethod() {
    alert(
      `${this.ekranKarti}: ekran kartı,
${this.ram}: ram ,
${this.anakart}:anakart  `
    );
  }
}

var compPropert = new CommonProperty("99", "ram88", "anakart55");
//compPropert.computerPropertyMethod();

//kalıtımda classlarımza extends dediğimiz keywordu kullanırız
class KalitimdanAldim extends CommonProperty {
  private dpi: string;

  public constructor(
    ekranKarti: string,
    ram: string,
    anakart: String,
    dpi: string
  ) {
    super(ekranKarti, ram, anakart);
    this.dpi = dpi;
  }


  public computerPropertyMethod2() {
    alert(
`${this.ekranKarti}: ekran kartı,
${this.ram}: ram ,
${this.anakart}:anakart,
${this.dpi}: dpi  `
    );
  }
}

}

var kalitim = new KalitimdanAldim("99", "ram88", "anakart55", "55")
//kalitim.computerPropertyMethod();
//kalitim.computerPropertyMethod2();


//////////////////////// INTERFACE //////////////////////////
//interface: arayüzdür. içleri boş olan functionlar oluşturup sonra bu içleri boş olan function doldururuz.

interface IDatabase{
    add():any;
    update():any;
    delete():any;
    read():any;
}

//sqlCodes üzerine gelelim Quick Fixed
class SqlCodes implements IDatabase{
    add() {
       // throw new Error("Method not implemented.");
       alert("ekleme alakalı kodlar")
       
    }
    update() {
       // throw new Error("Method not implemented.");
       alert("güncellemek alakalı kodlar")
    }
    delete() {
       // throw new Error("Method not implemented.");
       alert("silmek alakalı kodlar")
    }
    read() {
       // throw new Error("Method not implemented.");
       alert("okuma alakalı kodlar")
    }

    

}
var inter=new SqlCodes();
// inter.add();
// inter.delete();
// inter.read();
// inter.update();


//////////////////////// abstract //////////////////////////
//public name:string[]=[];
//interface: gövdesiz metotlar yazıyoruz. Bütün classlarda olmasını istediğimiz özellikler için kullanıyoruz.

//inheritance: extends, gövdeli function yazabiliriz
//abstract: extends ister gövdeli ister gövdesiz 

//////////////////NORMAL  CLASS ///////////////////////
class NormalAbstract{
    public adi:string;
    public soyadi:string;

    public adiSoyadiMethod(){
alert(`adı: ${this.adi}, soyadı: ${this.soyadi}`);
    }
}
var abst=new NormalAbstract();
abst.adi="1.Hamit";
abst.soyadi="Mızrak";
//abst.adiSoyadiMethod();

//////////////////ÖZEL  CLASS ///////////////////////
class OzelAbstract{
    private adi:string;
    private soyadi:string;

    constructor(adi:string,soyadi:string){
this.adi=adi;
this.soyadi=soyadi;
    }

    public adiSoyadiMethod(){
alert(`adı: ${this.adi}, soyadı: ${this.soyadi}`);
    }
}
var ozel=new OzelAbstract("2.Hamit","Mızrak");
//////ozel.adiSoyadiMethod();




//////////////////Abstarct  CLASS ///////////////////////
abstract class SoyutAbstract{
    public adi:string;
    public soyadi:string;

    constructor(adi:string,soyadi:string){
this.adi=adi;
this.soyadi=soyadi;
    }

    //gövdesiz metot
    abstract  public abstractMethod():any;

    public adiSoyadiMethod(){
alert(`adı: ${this.adi}, soyadı: ${this.soyadi}`);
    }
}

////abtract class 
class AbstractEdilmisClass extends SoyutAbstract{
    public abstractMethod() {
        alert("abstracttan gelen gövdesiz metot")
       // throw new Error("Method not implemented.");
    }
    private sehir: string;

  public constructor(
    adi: string,
    soyadi: string,
    sehir: string
  ) {
    super(adi, soyadi);
    this.sehir = sehir;
  }


  public computerPropertyMethod2() {
    alert(
`adi: ${this.adi},
soyadi: ${this.soyadi} ,
sehir: ${this.sehir}, `
    );
  }
}

var abstractClassim=new AbstractEdilmisClass("Hamit","Mızrak","Malatya");
// abstractClassim.abstractMethod();
// abstractClassim.computerPropertyMethod2();


//////////////////enum  ///////////////////////
//enum: herkes için sabit olan bileşenlerdir
//haftanın günleri 7
//yılda : 12 ay vardır
//smallü,medium,large,xlarge
//red,blue,green

//enumlar: sıfırdan başlar(0)
enum Renkler{
    red,blue,green,yellow
}

class GiyisiMarket{
    renkler:Renkler;

    //parametresiz constructor
    constructor(){
        this.renkler=Renkler.yellow;
        alert(this.renkler+":"+Renkler[this.renkler])
    }
}

//var renkClassim=new GiyisiMarket();
//renkClassim



////// rest parameter ///////////////
function restParameterTuto(adi:string,  ...bundanSonraDevam:any[]) {
    alert("Rest: "+adi+" "+bundanSonraDevam.join(" "))
}


//var restPa=restParameterTuto("Hamit","Mızrak","Malatya","JavaScript",44);



///////////////// Generics ////////////////////
//generics: type safe yani tür güvenliğini sağlıyor.

function normalFunction(params:any) {
    alert("gelen: "+params)
}

//var normal=normalFunction("Typscript");
//normal=normalFunction(44);



function genericFunction<Furkan>(params:Furkan):Furkan{
    alert("gelen: "+params)
    return params;
}

let genericValue1=genericFunction("Deneme");

let genericValue2=genericFunction(55);

let genericValue3=genericFunction(true);



