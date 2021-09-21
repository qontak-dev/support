---
tags: []
title: Report - Penjelasan Tipe Report Geographic
subtitle: ''
author: hariyati suarni nurindah
published: false

---
* **GPS Check-In**

  ![](/uploads/report-gps.PNG)

  Laporan GPS Check In menampilkan peta Google Maps yang **menunjukkan lokasi Check In dari User pada Tasks** yang dipilih dalam periode waktu tertentu. Lokasi Check In dapat di-klik untuk menampilkan nama User, alamat lokasi check in, dan waktu check in. Berbeda dari grafik lainnya, lokasi check in yang ditampilkan adalah untuk semua pipeline, bukan pipeline yang terpilih di filter bar.
* **Customer Geolocation Map**

  ![](/uploads/report-gps1.PNG)

  Laporan Customer Geolocation Map menampilkan peta Google Maps dengan tambahan 2 jenis ikon yang menunjukkan lokasi alamat Contacts dan Company. Data Contacts dan Company yang akan ditampilkan alamatnya adalah Contacts dan Company yang memiliki tipe Customer pada field properties **Status** pada **Modul Contacts** dan **Type** pada **Modul Companies**.

  > Ikon untuk **Company berwarna jingga** sedangkan ikon untuk **Contact berwarna biru**. Jika ikon di-klik, akan tampil nama item, alamat, situs web, nomor telepon, rata-rata besaran Deal, besaran Deal terkecil, besaran Deal terbesar, dan tanggal dibuatnya item tersebut. Terdapat filter tambahan pada laporan ini sesuai seperti informasi yang tampil pada saat ikon di-klik.
* **Live GPS Attendance Tracking**

  ![](/uploads/report-gps2.PNG)

  Laporan Live GPS Attendance Tracking menampilkan peta Google Maps yang menunjukkan **lokasi GPS terhitung dari user tersebut Check-In hingga user tersebut Check-Out** pada aplikasi mobile. Laporan ini akan merekam perjalanan user beserta persentase baterai gawai yang digunakan dalam bentuk titik checkpoint dan jalur berwarna biru tua sesuai dengan jalur yang dilalui oleh user aplikasi mobile tersebut. Laporan ini mensinkronisasi setiap interval jam XX:00 yang rincian checkpoint-nya dapat dicek pada tabel sebelah kiri di dalam laporan atau meng-klik titik checkpoint tersebut. Terdapat filter tambahan berupa tanggal dan user yang dapat dipilih sesuai dengan keinginan.