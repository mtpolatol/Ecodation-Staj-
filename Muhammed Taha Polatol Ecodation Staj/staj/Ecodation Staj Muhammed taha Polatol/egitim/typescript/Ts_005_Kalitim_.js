//Class:TypeSCript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/////////// 1.CLASS access modifer: public ////////////////////////
var ComputerDevice = /** @class */ (function () {
    function ComputerDevice() {
    }
    ComputerDevice.prototype.writer = function () {
        var isTrue;
        if (this.isKeyboardBluetooth) {
            isTrue = "Evet Bluetooth vardır";
        }
        else {
            isTrue = "Hayır Bluetooth yoktur";
        }
        console.log("\n      " + this.mainboard + " anakart , \n      " + this.cpu + " cpu,\n      " + this.isKeyboardBluetooth + " bluetooth,\n      " + this.ram + " ram,\n      " + isTrue + "\n      ");
    };
    return ComputerDevice;
}()); //class finish
var comp = new ComputerDevice();
comp.cpu = 5;
comp.isKeyboardBluetooth = true;
comp.ram = "5GB";
comp.mainboard = "Xlmk44";
comp.writer();
///////////// 2.CLASS access modifier: private ////////////////////
var Telephone = /** @class */ (function () {
    //dilersek: //parametresiz constructor yazabiliriz.
    //constructor : private ise
    function Telephone(telephoneName, serialNumber) {
        this.telephoneName = telephoneName;
        this.telephoneSerialNumber = serialNumber;
    }
    Telephone.prototype.telephoneMethod = function () {
        alert(this.telephoneName + " telegon ad\u0131, " + this.telephoneSerialNumber + " serial number");
    };
    return Telephone;
}());
var telp = new Telephone("klm 55 telefon adı", 45264);
//telp.telephoneMethod();
////////////////////KALITIM/////////////////////////////////////////////////////////////////
//kalıtım: ata mirası.
//Annemizden Babamızdan aldığımız özelliklerdir.
//bilgisayarın ortak özellikleri
//1-)ekran kartı ,ram,anakart
var CommonProperty = /** @class */ (function () {
    //eğer private varsa constructor() yazacaktık
    function CommonProperty(ekranKarti, ram, anakart) {
        this.ekranKarti = ekranKarti;
        this.ram = ram;
        this.anakart = anakart;
    }
    CommonProperty.prototype.computerPropertyMethod = function () {
        alert(this.ekranKarti + ": ekran kart\u0131,\n" + this.ram + ": ram ,\n" + this.anakart + ":anakart  ");
    };
    return CommonProperty;
}());
var compPropert = new CommonProperty("99", "ram88", "anakart55");
//compPropert.computerPropertyMethod();
//kalıtımda classlarımza extends dediğimiz keywordu kullanırız
var KalitimdanAldim = /** @class */ (function (_super) {
    __extends(KalitimdanAldim, _super);
    function KalitimdanAldim(ekranKarti, ram, anakart, dpi) {
        var _this = _super.call(this, ekranKarti, ram, anakart) || this;
        _this.dpi = dpi;
        return _this;
    }
    KalitimdanAldim.prototype.computerPropertyMethod2 = function () {
        alert(this.ekranKarti + ": ekran kart\u0131,\n" + this.ram + ": ram ,\n" + this.anakart + ":anakart,\n" + this.dpi + ": dpi  ");
    };
    return KalitimdanAldim;
}(CommonProperty));
var kalitim = new KalitimdanAldim("99", "ram88", "anakart55", "55");
//sqlCodes üzerine gelelim Quick Fixed
var SqlCodes = /** @class */ (function () {
    function SqlCodes() {
    }
    SqlCodes.prototype.add = function () {
        // throw new Error("Method not implemented.");
        alert("ekleme alakalı kodlar");
    };
    SqlCodes.prototype.update = function () {
        // throw new Error("Method not implemented.");
        alert("güncellemek alakalı kodlar");
    };
    SqlCodes.prototype["delete"] = function () {
        // throw new Error("Method not implemented.");
        alert("silmek alakalı kodlar");
    };
    SqlCodes.prototype.read = function () {
        // throw new Error("Method not implemented.");
        alert("okuma alakalı kodlar");
    };
    return SqlCodes;
}());
var inter = new SqlCodes();
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
var NormalAbstract = /** @class */ (function () {
    function NormalAbstract() {
    }
    NormalAbstract.prototype.adiSoyadiMethod = function () {
        alert("ad\u0131: " + this.adi + ", soyad\u0131: " + this.soyadi);
    };
    return NormalAbstract;
}());
var abst = new NormalAbstract();
abst.adi = "1.Hamit";
abst.soyadi = "Mızrak";
//abst.adiSoyadiMethod();
//////////////////ÖZEL  CLASS ///////////////////////
var OzelAbstract = /** @class */ (function () {
    function OzelAbstract(adi, soyadi) {
        this.adi = adi;
        this.soyadi = soyadi;
    }
    OzelAbstract.prototype.adiSoyadiMethod = function () {
        alert("ad\u0131: " + this.adi + ", soyad\u0131: " + this.soyadi);
    };
    return OzelAbstract;
}());
var ozel = new OzelAbstract("2.Hamit", "Mızrak");
//////ozel.adiSoyadiMethod();
//////////////////Abstarct  CLASS ///////////////////////
var SoyutAbstract = /** @class */ (function () {
    function SoyutAbstract(adi, soyadi) {
        this.adi = adi;
        this.soyadi = soyadi;
    }
    SoyutAbstract.prototype.adiSoyadiMethod = function () {
        alert("ad\u0131: " + this.adi + ", soyad\u0131: " + this.soyadi);
    };
    return SoyutAbstract;
}());
////abtract class 
var AbstractEdilmisClass = /** @class */ (function (_super) {
    __extends(AbstractEdilmisClass, _super);
    function AbstractEdilmisClass(adi, soyadi, sehir) {
        var _this = _super.call(this, adi, soyadi) || this;
        _this.sehir = sehir;
        return _this;
    }
    AbstractEdilmisClass.prototype.abstractMethod = function () {
        alert("abstracttan gelen gövdesiz metot");
        // throw new Error("Method not implemented.");
    };
    AbstractEdilmisClass.prototype.computerPropertyMethod2 = function () {
        alert("adi: " + this.adi + ",\nsoyadi: " + this.soyadi + " ,\nsehir: " + this.sehir + ", ");
    };
    return AbstractEdilmisClass;
}(SoyutAbstract));
var abstractClassim = new AbstractEdilmisClass("Hamit", "Mızrak", "Malatya");
// abstractClassim.abstractMethod();
// abstractClassim.computerPropertyMethod2();
//////////////////enum  ///////////////////////
//enum: herkes için sabit olan bileşenlerdir
//haftanın günleri 7
//yılda : 12 ay vardır
//smallü,medium,large,xlarge
//red,blue,green
//enumlar: sıfırdan başlar(0)
var Renkler;
(function (Renkler) {
    Renkler[Renkler["red"] = 0] = "red";
    Renkler[Renkler["blue"] = 1] = "blue";
    Renkler[Renkler["green"] = 2] = "green";
    Renkler[Renkler["yellow"] = 3] = "yellow";
})(Renkler || (Renkler = {}));
var GiyisiMarket = /** @class */ (function () {
    //parametresiz constructor
    function GiyisiMarket() {
        this.renkler = Renkler.yellow;
        alert(this.renkler + ":" + Renkler[this.renkler]);
    }
    return GiyisiMarket;
}());
//var renkClassim=new GiyisiMarket();
//renkClassim
////// rest parameter ///////////////
function restParameterTuto(adi) {
    var bundanSonraDevam = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bundanSonraDevam[_i - 1] = arguments[_i];
    }
    alert("Rest: " + adi + " " + bundanSonraDevam.join(" "));
}
//var restPa=restParameterTuto("Hamit","Mızrak","Malatya","JavaScript",44);
///////////////// Generics ////////////////////
//generics: type safe yani tür güvenliğini sağlıyor.
function normalFunction(params) {
    alert("gelen: " + params);
}
//var normal=normalFunction("Typscript");
//normal=normalFunction(44);
function genericFunction(params) {
    alert("gelen: " + params);
    return params;
}
var genericValue1 = genericFunction("Deneme");
var genericValue2 = genericFunction(55);
var genericValue3 = genericFunction(true);
