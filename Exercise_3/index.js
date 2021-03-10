class orang {
    constructor(nama, umur){
        this.nama = nama,
        this.umur = umur
    };

    tidur(){
        console.log(
            `${this.nama} sedang tidur`
        );
    }
    makan(){
        console.log(
            `${this.nama} sedang makan`
        );
    }
    bekerja(){
        console.log(`${this.nama} sedang bekerja seperti biasa`); 
    }
}

class Pelajar extends orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah = namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}

const user = new Pelajar("John", 17, "Unklab");
user.belajar();