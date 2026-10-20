// 1. Memilih tombol berdasarkan ID-nya yang ada di HTML
const tombolSapa = document.getElementById('sapaButton');

// 2. Menambahkan 'event listener' untuk mendeteksi saat tombol diklik
tombolSapa.addEventListener('click', function() {
  // 3. Menampilkan jendela popup (pesan) ketika tombol diklik oleh pengunjung
  alert('Halo! Terima kasih sudah berkunjung!');
});
