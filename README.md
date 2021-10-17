# Tugas FrontEnd GDSC 2021

## Deskripsi

Website listing movie, database-nya ambil dari [sini](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/samples/moviedata.zip). Movie yang diambil cuma 200 data pertama (batas ini di hardcode), karena kalau kebanyakan jadi berat loading-nya.

### Pages

Di spesifikasi tugasnya sendiri, pembuatan harus menggunakan vanilla javascript apapun dan tombol `Details` harus mengarah ke halaman lain. Oleh karena itu, halaman-halaman tersebut harus dibikin satu-satu. Jadinya, digunakan `node-js` untuk generate halaman-halaman yang banyak itu.

Untuk generate halaman lagi, atau kalau mau mengubah batas halaman yang di load, perlu run ulang generatornya.

```bash
$ node pagegenerator.js
```

## Run

Untuk nge-run perlu pakai local server, karena browser bakal ngelarang read langsung dari file lokal.

Untuk ngebikin local server sendiri, bisa pakai `python`. Di Linux, 

```bash
# Pindah ke lokasi index.html
$ cd GDSC2021_FrontEnd/
$ python -m http.server
```
