//OOP in JavaScript
//Object Literal
// const mobil1 = {
//   merek: "Toyota",
//   warna: "Putih",
//   nyalakanMobil: function () {
//     console.log(`Mobil merek ${this.merek} telah dinyalakan`);
//   },
// };

// const mobil2 = {
//   merek: "Honda",
//   warna: "Merah",
//   nyalakanMobil: function () {
//     console.log(`Mobil merek ${this.merek} telah dinyalakan`);
//   },
// };

//Object Class
class Mobil {
  constructor(merek, warna) {
    this.merek = merek;
    this.warna = warna;
  }
  nyalakanMobil() {
    console.log(`Mobil merek ${this.merek} telah dinyalakan`);
  }
}
// const mobil1 = new Mobil("Toyota", "Putih");
// const mobil2 = new Mobil("Honda", "Merah");
// mobil1.nyalakanMobil();
// mobil2.nyalakanMobil();

//Inheritance

class Toyota extends Mobil {
  constructor(merek, warna, mesin) {
    super(merek, warna);
    this.mesin = mesin;
  }
  //Overriding
  nyalakanMobil() {
    console.log(
      `Mobil merek ${this.merek} dengan mesin ${this.mesin} telah dinyalakan`
    );
  }

  matikanMobil() {
    console.log(`Mobil merek ${this.merek} telah dimatikan`);
  }
}

const agya = new Toyota("Agya", "Putih", "1000cc");
agya.nyalakanMobil();
agya.matikanMobil();

// class Button extends Component {
//   componentDidMount() {}

//   constructor() {}
// }
