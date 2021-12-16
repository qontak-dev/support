---
tags: []
title: Document - Membuat Template
subtitle: This document covers the document view of the CRM feature
author: hariyati suarni nurindah

---
Pada umumnya fitur document generator pada Aplikasi CRM Qontak dimanfaatkan untuk memudahkan User CRM dalam membuat suatu dokumen secara otomatis, contoh dokumen yang umumnya dibuat dengan fitur ini adalah dokumen penawaran harga ataupun invoice. Hanya User CRM dengan Role **Admin** yang dapat membuat template ini. Jika Anda telah memiliki format penawaran harga tersendiri dan ingin memanfaatkan fitur ini, maka dapat mengupload template penawaran harga dengan langkah-langkah sebagai berikut;

1. **Template** yang akan diupload untuk menggunakan document generator harus **dibuat dalam bentuk excel** agar sistem nantinya dapat mengisi data pada template yang ada sesuai dengan data yang di input dalam CRM. Langkah pertama yang perlu dilakukan adalah mempersiapkan template dari penawaran harga tersebut beserta pengaturan layout pada excel tersebut.

   ![](/uploads/properties-template.PNG)
2. Sebagai contoh pada template tersebut terdapat data yang perlu diisi secara otomatis dari sistem CRM seperti Quotation Number, Company, Name, Email, Address, Quotation Item, Unit Price, Quantity, Months, dan Total. Oleh karena itu, sebelumnya harus dipastikan kita sudah membuat **field properties** pada semua **Modul** sesuai dengan template yang telah disiapkan. Pastikan properties tersebut dibuat di Modul Properties - lalu pilih ingin membuat/mengedit properties di Modul apa (Contacts/Companies/Deals/Tasks) seperti gambar berikut.

   ![](/uploads/properties-template1.PNG)
3. Selanjutnya, mengisi cell-cell pada template excel sesuai dengan **Default Variable ID List** yang ada pada field properties CRM yang telah ada dan kita tambahkan agar nantinya sistem dapat mengisi data secara otomatis pada template tersebut sesuai dengan data yang di input dalam CRM.

   ![](/uploads/properties-template2.PNG)
4. Kemudian melakukan copy-paste **Variable ID** tersebut ke dalam cell pada template excel yang telah disiapkan sebelumnya.

   ![](/uploads/properties-template3.PNG)
5. Setelah selesai melakukan copy-paste **Variable ID** ke template excel yang telah disiapkan sesuai dengan field properties yang ada di CRM, kurang lebih akan berbentuk sebagai berikut.

   ![](/uploads/properties-template4.PNG)

   > Langkah selanjutnya adalah mengupload template yang telah kita buat dalam format excel ke sistem CRM, sehingga nantinya sistem dapat membuat dokumen secara otomatis.
6. Klik **Modul Document** pada dashboard CRM, klik **Template,** klik **Upload Template**, lalu ketik nama template tersebut pada bagian **File Name**

   ![](/uploads/properties-template5.PNG)
7. Klik tombol **Browse** untuk memilih template yang telah kita buat dari penyimpanan perangkat. Setelah memilih template dari penyimpanan perangkat, klik tombol **Create Template** untuk mengupload file tersebut

   ![](/uploads/properties-template6.PNG)
8. Berikut adalah tampilan apabila file template yang kita pilih berhasil terupload ke sistem CRM.

   ![](/uploads/properties-template7.PNG)
9. Untuk melakukan pengecekan format pada template tersebut dapat meng-klik tombol **Preview** yang nantinya akan diarahkan secara otomatis ke Tab baru pada browser dan terbuka halaman **Google Sheet**.

   > (Peringatan: Perubahan template di menu Templates oleh satu User akan berpengaruh ke semua User CRM dalam organisasi tersebut)

   ![](/uploads/properties-template8.PNG)