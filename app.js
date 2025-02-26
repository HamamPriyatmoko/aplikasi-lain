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

var z; //Disebut variable global scope/window scope

function cobaSaja() {
  // return arguments.length;
  var hasil = 0; //Variable yang ada didalam function disebut variable local
  for (var i = 0; i < arguments.length; i++) {
    // 0,1,2,3 akann menghasilkan index arraynya
    hasil += arguments[i];
  }
  return hasil;
}

var mencoba = cobaSaja(1, 2, 3, 4);
console.log(mencoba);

// alert(volumeKubus(8, 4));
