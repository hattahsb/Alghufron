let saldo = localStorage.getItem('saldo') ? parseInt(localStorage.getItem('saldo')) : 0;
let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

document.getElementById('simpan').addEventListener('click', simpanData);

function simpanData(e) {
    e.preventDefault();
    let tanggal = document.getElementById('tanggal').value;
    let jenisTransaksi = document.getElementById('jenis-transaksi').value;
    let nominal = parseInt(document.getElementById('nominal').value);
    let keterangan = document.getElementById('keterangan').value;

    if (jenisTransaksi === 'pemasukan') {
        saldo += nominal;
    } else {
        saldo -= nominal;
    }

    data.push({
        tanggal: tanggal,
        jenisTransaksi: jenisTransaksi,
        nominal: nominal,
        keterangan: keterangan
    });

    localStorage.setItem('saldo', saldo);
    localStorage.setItem('data', JSON.stringify(data));

    tampilkanLaporan();
}

function tampilkanLaporan() {
    let isiTabel = '';
    data.forEach(function(item) {
        isiTabel += `
            <tr>
                <td>${item.tanggal}</td>
                <td>${item.jenisTransaksi}</td>
                <td>Rp. ${item.nominal.toLocaleString()}</td>
                <td>${item.keterangan}</td>
            </tr>
        `;
    });

    document.getElementById('isi-tabel').innerHTML = isiTabel;
    document.getElementById('saldo').innerText = `Saldo: Rp. ${saldo.toLocaleString()}`;
}

tampilkanLaporan();