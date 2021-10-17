# Tugas FrontEnd GDSC 2021

## Deskripsi

Website *listing movie*, *database*-nya ambil dari [sini](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/samples/moviedata.zip). *Movie* yang diambil cuma 200 data pertama (batas ini di *hardcode*), karena kalau kebanyakan jadi berat *loading*-nya.

## Run

Untuk nge-*run* perlu pakai *local server*, karena *browser* bakal ngelarang *read* langsung dari *file* lokal.

Untuk ngebikin *local server* sendiri, bisa pakai `python`. Di Linux, 

```bash
# Pindah ke lokasi index.html
$ cd GDSC2021_FrontEnd/
$ python -m http.server
```
