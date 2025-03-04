// for (var kesempatan = 1; kesempatan <= 3; kesempatan++) {
//   // user memilih angka dari 1 - 10
//   var userMemilih = parseInt(prompt('Pilih angka dari 1 - 10: '));
//   // buat generate angka secara random dari 1-10
//   function getRandomInt(num) {
//     return Math.floor(Math.random() * num + 1);
//   }
//   var comp = getRandomInt(10);

//   // Validasi input
//   if (isNaN(userMemilih) || userMemilih < 1 || userMemilih > 10) {
//     alert('Masukkan angka yang valid antara 1 - 10!');
//     kesempatan--; // Tidak mengurangi kesempatan jika input salah
//     continue; // Ulangi iterasi tanpa menghitung kesempatan
//   }
//   // buat pengkondisian antara user dengan komputer
//   var Hasilnya = '';
//   if (userMemilih == comp) {
//     Hasilnya = 'Anda Benar';
//   } else if (userMemilih <= comp) {
//     Hasilnya = 'Tebakan Anda Terlalu Rendah';
//   } else if (userMemilih >= comp) {
//     Hasilnya = 'Tebakan Anda Terlalu Tinggi';
//   } else {
//     Hasilnya = 'Maaf, pilihan anda tidak ada di kategori';
//   }

//   var sisaKesempatan = 3;
//   sisaKesempatan -= kesempatan;

//   alert('Anda Memilih: ' + userMemilih + ' Komputer Memilih ' + comp + '\nMaka Hasilnya: Anda ' + Hasilnya + '\nSisa Kesempatan Anda: ' + sisaKesempatan);
//   // buat kesempatan 3 kali
//   if (sisaKesempatan == 0) {
//     alert('Kesempatan Anda Habis :0');
//   }
// }

// function volumeKubus(a, b) {
//   var kubus1, kubus2, total;

//   kubus1 = a * a * a;
//   kubus2 = b * b * b;

//   total = kubus1 + kubus2;
//   return total;
// }

// volumeKubus(8, 4);
// alert(volumeKubus(8, 4));

// var z; //Disebut variable global scope/window scope

// function cobaSaja() {
//   // return arguments.length;
//   var hasil = 0; //Variable yang ada didalam function disebut variable local
//   for (var i = 0; i < arguments.length; i++) {
//     // 0,1,2,3 akann menghasilkan index arraynya
//     hasil += arguments[i];
//   }
//   return hasil;
// }

// var mencoba = cobaSaja(1, 2, 3, 4);
// console.log(mencoba);

// function mencobarekursif(a) {
//   if (a === 10) return;
//   console.log(a);
//   return mencobarekursif(a + 1); Ini adalah rekursif
// }

// mencobarekursif(1);

// Array merupakan objek di dalam javascript
var arr = ['Hamam', 'Silvy', 'Ahmad', 'Mohtar'];
var arr2 = [1, 2, 3, 4, 5];

// arr[4] = 'alam'; Bisa untuk menambahkan
// arr.push('Mohammad'); Menambahkan data di index terakhir menggunakan method dari objek array
// arr.unshift('Islam'); Menambahkan element kedalam array tetapi di awal

// arr[4] = undefined; untuk mengahpus akan tetapi bakal di isi undifined di arraynya
// arr.pop(); menghapus element terakhir didalam array
// arr.shift(); menghapus element pertama dalam array

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);  manipulasi array untuk melihat isi dalam array satu persatu
// }

// console.log(arr.slice(1, 2)); menampilkan element ke 1 tetapi tidak dengan element ke 2
// console.log(arr.join()); method join untuk menampilkan semua elemen dalam array dan mengubahnya menjadi string

// arr.splice(1, 0, 'Bimbim'); menambahkan (menyambung) nilai ditengah tengah dan juga bisa menghapus
// console.log(arr.join());
// arr.forEach((e, i) => {
//   console.log(e);
// }); mengembalikan nilai string
// arr2.map((e) => console.log(e * 2)); mengembalikan nilai array/number

var penumpangAngkot = ['Hamam', undefined, 'Silvya'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  var penumpangTurun = penumpang.findIndex((element) => element === undefined);
  if (penumpang.includes(namaPenumpang)) {
    console.log(namaPenumpang + 'Sudah Ada Didalam Angkot');
  } else {
    if (penumpangTurun != -1) {
      penumpang[penumpangTurun] = namaPenumpang;
    } else {
      penumpang.push(namaPenumpang);
    }
  }
  console.log(penumpang);
};

var hapusPenumpang = function (namaPenumpang, kursi) {
  if (kursi.length == 0) {
    console.log('Angkot Kosong');
    return kursi;
  } else {
    if (kursi.includes(namaPenumpang)) {
      var index = kursi.indexOf(namaPenumpang);
      kursi.splice(index, 1);
      return kursi;
    } else {
      console.log('Penumpang Tidak Ada');
      return kursi;
    }
  }
};

// var tambahPenumpang2 = function (namaPenumpang, kursi) {
//   if (kursi.length == 0) {
//     kursi.push(namaPenumpang);
//     return kursi;
//   } else {
//     for (var i = 0; i < kursi.length; i++) {
//       if (kursi[i] == undefined) {
//         kursi[i] = namaPenumpang;
//         return kursi;
//       } else if (kursi[i] == namaPenumpang) {
//         console.log(namaPenumpang + 'Sudah Ada Didalam Angkot');
//       } else if (i == kursi.length - 1) {
//         kursi.push(namaPenumpang);
//         return kursi;
//       }
//     }
//   }
// };

// var a;
// function apaja() {
//   console.log(this.a);
//   //this berarti merupakan variable dari scope global
// }

// var obj = {};
// obj.halo = function () {
//   console.log('Halo Dunia');
// };
// obj.halo();

// function Objek(nama) {
//   this.nama = nama;
//   console.log(this);
//   //this merupakan scope dari objek
// }
// var obj1 = new Objek('hamam');
// var obj2 = new Objek();

function Angkot(namaSopir, trayek, penumpang, kas) {
  this.namaSopir = namaSopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      console.log('Angkot Kosong');
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        // this.penumpang.push(bayar);
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
  // this.penumpangTurun = function(){
  //   this.penumpang.pop();
  // }
}

var angkot1 = new Angkot('Hamam', ['Tegal', 'Yogyakarta'], [], 0);
var angkot2 = new Angkot('Saitama', ['Surabaya', 'Yogyakarta'], [], 0);

//Dom
//getElementById() menghasilkan element
//getElementsByClassName() menghasilkan array HtmlCollection
//getElementsByTagName() menghasilkan array HtmlCollection
//document.querySelector() mengambil selector yang ada dicss dan mengembalikan element
//document.querySelectorAll() mengembalikan node list

// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';
// p4.style.backgroundColor = 'orange';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'blue';

// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = 'red';
// }

//document adalah node root
//mempersempit node root
// const sectionb = document.getElementById('b');
// const p4 = sectionb.querySelector('p');
// p4.style.color = 'red';

var arr = ['Hamam', 'Dono', 'Silvya', 'Biyan', 'Johan'];
const ul = document.getElementsByTagName('ul')[0];
// for (let i = 0; i < arr.length; i++) {
//   ul.innerHTML += `<li>${arr[i]}</li>`; //manipulasi Dom
// }
ul.innerHTML = arr.map((e) => `<li>${e}</li>`).join('');
var a = arr2.map((e) => {
  console.log(e);
});

//element.style.<properti css>
//element.setAtributte() untuk memanipulasi/menambahkan atribut seperti id,class,href, dll dalam element html
//element.getAttribute() untuk membaca atribut apa yang ada di dalam sebuah element
//element.removeAttribute() untuk menghapus

//element.classList untuk memanipulasi sebuah class dalam element dan ada pula method classList
//add() untuk menambahkan class
//remove() untuk menghapus class
//toggle() untuk menambahkan atau menghapus class
//contains() untuk mengecek apakah class ada di dalam element
//replace() untuk mengganti class
//element.classList.add('active');

const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('id', 'boleeeee');
judul.setAttribute('class', 'judul');

var submit = function () {
  const ubahwarna = document.getElementsByTagName('button')[0];
  ubahwarna.classList.toggle('submit');
};
