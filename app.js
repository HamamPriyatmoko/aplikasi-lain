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
// });

var penumpangAngkot = ['Hamam', undefined, 'Arum'];
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
