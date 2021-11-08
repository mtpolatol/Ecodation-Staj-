//alert("nasılsın");

export class dene44 {
  adi: string;

  constructor(adi: string) {
    this.adi = adi;
  }

  genel() {
    alert(this.adi);
  }
}

let sonuc = new dene44("Hamit Mızrak");
sonuc.genel();
