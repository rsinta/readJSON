var fs = require ('fs');

fs.readFile(__dirname + '/barang.json', function(err, data) {
    var kom = JSON.parse(data);
    console.log("ID Barang = " + kom[0].id_barang);
    console.log("Nama Barang = " + kom[0].nama_barang);
    console.log("Harga = " + kom[0].harga);
    if (kom[0].kondisi) {
        console.log("OK");
    } else {
        console.log("Rusak");
    }
    var jumlahbarang = kom.length;
    for (var i = 0; i < jumlahbarang; i++) {
        var z = i+1;
        console.log('ID Barang = ' + kom[i].id_barang);
        console.log('Nama = ' + kom[i].nama_barang);
        console.log('Harga = ' + kom[i].harga);

    }
});
