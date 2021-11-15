---
tags: []
title: Integration - Mengintegrasikan Line Messenger
subtitle: This document covers integration line messenger in omnichannel system
author: hariyati suarni nurindah
published: false

---
**Integration - Mengintegrasikan Line Messenger**

**Integration** merupakan sebuah fitur Omnichannel Qontak dimana para customer bisa menghubungkan berbagai platform dengan chat panel seperti email atau instagram.

Untuk mengintegrasikan chat panel dengan Telegram pada Web, Anda perlu mengikuti langkah-langkah berikut;

1. Buka [http://chat.qontak.com/](http://chat.qontak.com/ "http://chat.qontak.com/") pada browser anda (Safari, Chrome, atau Firefox) di komputer anda.

   ![](/uploads/login-qontak-c.png)

   > Masukkan **Username** dan **Password** anda. Klik tombol **“Login”** untuk memulai.
2. Berikut merupakan tampilan web yang muncul setelah anda mengklik menu integrations.

   ![](/uploads/integrasi.PNG)
3. Klik button "**Add Line Account**" untuk menyambungkan akun line yang akan diintegrasikan.

   ![](/uploads/line.PNG)

   > Pada bagian kanan form integrasi line messenger terdapat tata cara mengintegrasikan line dan siapa saja yang bisa menggunakan fitur tersebut.
   >
   > Yang bisa menggunakan fitur integrasi line messenger adalah;
   >
   > > 1. Hanya Admin yang dapat mengintegrasikan line messenger.
   > > 2. Admin, Supervisor dan Agen dapat menggunakannya di Inbox
   >
   > Sedangkan cara mengintegrasikan line messenger adalah sebagai berikut;
   >
   > > 1. Pastikan Anda memiliki akun resmi. Anda dapat membuat akun resmi di Line Official Account Manager
   > > 2. Siapkan akun resmi Anda untuk menggunakan API pesan di Line Official Account Manager ->Settings -> Messaging API -> Use Messaging API. Anda akan diminta untuk menambahkan provider and channel.
   > > 3. Atur mode respons Anda ke Line Official Account Manager -> Settings -> Response Settings -> Response Mode.
   > > 4. Isi **channel secret** Anda. Anda dapat menemukan rahasia saluran Anda di Line Developer Console -> Basic Settings -> Channel secret.
   > > 5. Isi **channel access token** Anda. Anda dapat menemukan token akses Anda di Line Developer Console -> Messaging API -> Channel access token. Klik issue untuk mendapatkan token akses saluran Anda.
   > > 6. Klik install.
   > > 7. Setelah saluran Anda berhasil ditambahkan di Chat Panel, pastikan Anda mengaktifkan **Use Webhook** di Line Developer Console -> Messaging API -> Webhook Settings.
4. Masukkan token line Anda, kemudian klik button "**Install**" untuk mengintegrasikan line.

   ![](/uploads/line1.PNG)

   > Field yang kosong akan manampilkan error "**field is required**" saat Anda mengklik button "**Install**"
5. Jika token ditemukan maka otomatis popup akan manampilkan success dan jika tidak maka popup akan menampilkan error sebagai berikut;

   ![](/uploads/line2.PNG)
6. Klik buton name "**Settings**" pada nama line untuk melihat detail informasi line messenger Anda.

   ![](/uploads/telegram4.PNG)
7. Anda bisa melihat detail info line Anda, tapi tidak bisa melakukan perubahan pada channel name dan channel secret karena field dalam kondisi disable.

   ![](/uploads/line4.PNG)
8. Anda bisa berhenti terintegrasi dengan line messenger  dengan cara mengklik button "**Disconnect**" seperti gambar berikut;

   ![](/uploads/line5.PNG)
9. Popup notification "**Are you sure?**

   **Disconnecting this channel will also delete this channel**" akan secara otomatis muncul dimana jika anda klik button "**Disconnect**" maka anda yakin untuk disconnect akun line messenger dan jika tidak maka klik button "**Cancel**"

   ![](/uploads/line6.PNG)