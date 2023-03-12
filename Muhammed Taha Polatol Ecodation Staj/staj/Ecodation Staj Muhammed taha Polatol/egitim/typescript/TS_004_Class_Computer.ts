//OOP
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
telp.telephoneMethod();
