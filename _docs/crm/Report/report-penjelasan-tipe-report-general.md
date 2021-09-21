---
tags: []
title: Report – Penjelasan Tipe Report General
subtitle: ''
author: hariyati suarni nurindah
published: false

---
**Report** dengan tipe General umumnya berisi gambaran laporan dari total keseluruhan data yang diinput oleh sales atau User ke dalam sistem CRM.

* **Filter Bar**

  > Filter Bar pada Dashboard CRM dimanfaatkan untuk men-generate data sesuai dengan data yang diinput oleh **User** tertentu atau **Team** tertentu pada **Pipeline** tertentu di **Waktu** tertentu

  ![](/uploads/report1.PNG)
* **Sales Performance dan Yearly Sales Comparison**

  ![](/uploads/report2.PNG)

  **Sales Performance**

  > Laporan Sales Performance menampilkan **besaran data Deals (Value)** yang masuk ke Stage Won yang dikelompokkan berdasarkan periode yang terpilih dalam bentuk grafik line area. Periode grafik ini tidak mengikuti filter waktu pada filter bar, namun dapat dipilih sesuai dengan periode khusus yaitu Daily (harian), Weekly (mingguan), dan Monthly (Bulanan).
  >
  > > Jika ujung kursor diarahkan ke garis pada grafik tersebut maka muncul informasi total **besarnya Deal (Value)** dalam satu periode. Total besar Deal dikonversikan ke mata uang default yang dipilih oleh user

  **Yearly Sales Comparison**

  > Laporan Yearly Sales Comparison menampilkan total **besaran Deals (Value)** yang masuk ke Stage Won yang dikelompokkan berdasarkan tahun dalam bentuk histogram. Periode grafik ini tidak mengikuti filter waktu pada filter bar, namun memiliki periode khusus yaitu dari awal tahun hingga bulan saat grafik ditampilkan. Contoh apabila grafik ditampilkan bulan Mei 2018, maka periode nya adalah dari 1 Januari hingga bulan Mei tiap tahunnya.
  >
  > > Jika ujung kursor diarahkan ke bar pada grafik tersebut maka muncul informasi periode dan total besaran Deal pada periode tersebut. Total besar Deal dikonversikan ke mata uang default yang dipilih user.
* **Deals Won dan Summary Report**

  ![](/uploads/report3.PNG)

  **Deals Won**

  > Laporan Deals Won menampilkan data Deals yang dikelompokkan berdasarkan User pembuat Deal dan periodenya dalam bentuk grafik line. Data Deals yang masuk ke grafik ini hanya yang berada pada stage Won. Periode grafik ini tidak mengikuti filter waktu pada filter bar, namun memiliki periode sendiri yaitu Daily (harian), Weekly (mingguan), dan Monthly (Bulanan). Kemunculan item pada grafik ini mengacu pada waktu di mana Deal tersebut dipindah ke stage Won. Contoh: Deal 1 dibuat pada tanggal 9 September 2018 lalu diubah ke stage Won pada tanggal 18 September 2018, maka Deal tersebut akan ditampilkan pada grafik untuk periode tanggal 18 September 2018.
  >
  > > Jika ujung kursor diarahkan ke titik dari grafik tersebut maka akan muncul informasi nama user, periode, dan jumlah Deal yang berada di stage Won. User pada grafik dapat ditampilkan dan disembunyikan dengan klik nama user tersebut di bagian bawah grafik.

  **Summary Report**

  > Summary Report menampilkan perubahan-perubahan yang dilakukan oleh User atau Team yang terpilih di filter bar pada menu Dashboard CRM. Perubahan-perubahan yang dicatat adalah **Create (pembuatan), Update (pembaruan), dan Delete (penghapusan)**. Item-item yang akan tercatat perubahannya adalah User, Deal, Task, Company, Contact, Note, Meeting, Ticket, Pipeline, Target, Email, Properties, Product, dan Stage.
  >
  > Item-item pada Summary Report diurutkan berdasarkan waktu pencatatan perubahan. Item-item yang tampil dibatasi 100 item terakhir. 
  >
  > > Jika salah satu baris memiliki informasi yang terlalu panjang sehingga terpotong, maka isi dari baris tersebut dapat dimunculkan informasi lengkapnya dengan mengarahkan ujung kursor ke baris tersebut.
* **Deals by Stage dan Sources**

  ![](/uploads/report4.PNG)

  **Deals by Stage**

  > Laporan Deals by Stage menampilkan data Deals yang dikelompokkan berdasarkan Stage dengan grafik yang ditampilkan berbentuk corong.
  >
  > > Jika kursor diarahkan ke salah satu kelompok dari grafik tersebut maka muncul informasi jumlah Deal, total besar Deal dan persentase-nya terhadap keseluruhan grafik. Persentase dihitung berdasarkan **jumlah banyaknya Deal (Count)**, bukan total **besar Deal (Value)**.

  **Sources**

  > Laporan Sources menampilkan data yang dikelompokkan berdasarkan isi dari field properties **Source/Sumber** pada **Modul Contacts, Companies, dan Deals** dengan grafik yang ditampilkan berbentuk pie chart. Jika ada Contact, Company, atau Deal yang **tidak memiliki Source**, maka akan dikelompokkan sebagai **"Undefined Source"**.
  >
  > Grafik Source untuk data Deals memiliki filter tambahan yaitu Stage.
  >
  > > Jika kursor diarahkan ke salah satu kelompok dari pie chart tersebut maka muncul informasi jumlah item dan persentase-nya terhadap keseluruhan grafik.
* **Lost Reasons dan Tasks**

  ![](/uploads/report5.PNG)

  **Lost Reasons**

  > Laporan Lost Reasons menampilkan data yang dikelompokkan berdasarkan isi dari field properties **Lost Reason** pada **Modul Deals** dengan grafik yang ditampilkan berbentuk pie chart. Jika ada Deal yang **tidak memiliki Lost Reason**, maka akan dikelompokkan sebagai **"Undefined Lost Reason"**. Deal yang masuk ke grafik ini adalah Deal yang berada di stage Lost.
  >
  > > Jika kursor diarahkan ke salah satu kelompok dari pie chart tersebut maka akan muncul informasi jumlah item Deal dan persentase-nya terhadap keseluruhan grafik.

  **Tasks**

  > Laporan Tasks menampilkan ringkasan data Tasks dalam bentuk tabel. Informasi Task yang ditampilkan adalah **nama Task**, **Item yang terasosiasi** dengan Task tersebut (Contact, Company, Deal), **Status Task** tersebut, **Priority** dari **Task** tersebut, dan **Due Date**-nya. Due date yang ditampilkan pada laporan tersebut apabila field properties **Start Due Date** pada **Task** terisi.
  >
  > > Data Task ditampilkan dalam bentuk tabel dapat di-scroll ke bawah dengan data yang paling atas adalah data yang paling baru diedit atau dibuat.
* **Weighted Average Deals by Stage dan Deals Pipeline Conversion**

  ![](/uploads/report6.PNG)

  **Weighted Average Deals by Stage**

  > Laporan Weighted Average Deals By Stage menampilkan data Deals yang dikelompokkan berdasarkan Stage dan nilai dari stage tersebut dengan grafik yang ditampilkan berbentuk pie chart. Nilai dari setiap stage pada suatu pipeline ini dapat ditentukan oleh User dengan role Admin pada **Modul Properties - Deals - Edit Pipeline**.
  >
  > > Jika kursor diarahkan ke salah satu kelompok dari pie chart tersebut maka muncul informasi total besar Deal dan persentase-nya terhadap keseluruhan grafik. Persentase dihitung berdasarkan total besar Deal.

  **Deals Pipeline Conversion**

  > Laporan Deals Pipeline Conversion menampilkan jumlah deal yang terkonversi dari stage satu ke stage selanjutnya dengan grafik yang ditampilkan berbentuk grafik proses.
  >
  > > Jika kursor diarahkan ke salah satu kelompok dari grafik proses tersebut maka muncul informasi berupa jumlah deal dan persentase-nya.
* **Cumulative Daily Sales Performance by Month**

  ![](/uploads/report7.PNG)

  > Laporan Cumulative Daily Sales Performance by Month menampilkan besaran deal yang masuk di stage Won secara akumulatif selama 1 bulan dengan grafik yang ditampilkan berbentuk line area.
  >
  > > Jika kursor diarahkan ke garis pada grafik tersebut maka muncul informasi total besarnya Deal dalam suatu tanggal.