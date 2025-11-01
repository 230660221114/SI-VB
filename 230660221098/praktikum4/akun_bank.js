const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Tika Anggraeni',
  saldo: 500000,

  setor(jumlah) {
    this.saldo += jumlah;
    console.log(`Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`);
  },

  tarik(jumlah) {
    if (jumlah > this.saldo) {
      console.log('Saldo tidak mencukupi untuk penarikan.');
    } else {
      this.saldo -= jumlah;
      console.log(`Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`);
    }
  },
};

console.log(`Saldo awal: Rp ${akun.saldo.toLocaleString('id-ID')}`);
akun.setor(50000);
akun.tarik(100000);
akun.tarik(600000);
console.log(`Saldo akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
