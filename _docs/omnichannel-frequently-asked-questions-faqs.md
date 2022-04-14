---
title: Omnichannel - Frequently Asked Questions (FAQs)
categories: []

---
## **Inbox**

1. **Bagaimana cara memulai chat ke customer?**  
   Fitur WhatsApp API tidak memungkinkan user untuk melakukan pengiriman atau inisiasi percakapan secara langsung ke pelanggan, misalnya: "Halo, ada yg bisa bantu? Halo, apa kabar Bapak/Ibu?". Untuk memulai chat pertama kali ke customer, untuk WA API ini hanya bisa menggunakan 2 metode message outbound, yaitu dengan mengirimi pesan High Structured Messages (HSM) template khusus untuk chat yang sudah expired dan mengirim pesan broadcast/campaign. Untuk pesan campaign ini selain kirim pesan ke banyak nomer juga bisa kirim hanya ke satu nomer saja dengan cara yang sama.
2. **Kapan room chat akan expired?**  
   Room chat akan expired terhitung sejak 24 jam mengacu pada terakhir kali customer membalas pesan atau waktu last seen.
3. **Apakah saya bisa chat duluan ketika room sudah resolved?**  
   Tidak. Apabila room sudah resolve, percakapan bisa dimulai lagi dengan cara mengirimkan HSM Template ke customer dan dengan catatan customer membalas HSM template tersebut. Jika customer tidak membalas HSM template tersebut, maka percakapan tidak bisa berlangsung kembali.
4. **Apakah bisa mengganti nama & email agent?**  
   Untuk mengganti nama dan email agent, hanya dapat dilakukan dari akun admin (hanya dapat dilakukan dengan device laptop/PC). Adapun langkah untuk mengganti nama dan email agent: Login akun admin - setting - accounts management - user - search user - edit - save.
5. **Apakah kita dapat meresolved secara massal?**  
   Auto resolved expired chat adalah fitur yang dapat digunakan untuk meresolved beberapa room chat sekaligus yang statusnya sudah lebih dari 24 jam atau expired tanpa perlu agent/user klik resolved satu-satu per room, agent bisa mengaktifkan auto resolved expired chat di bagian resolved all expired chat.
6. **Kenapa baru ada pesan masuk setelah di refresh?**  
   Untuk penggunaan pada google chrome, pastikan sudah allow notification dengan langkah berikut: Klik pada gambar gembok di kiri url > kemudian pada menu Notification di geser hingga menjadi biru (artinya sudah allow notification). Dengan langkah berikut chat baru akan otomatis masuk tanpa di refresh.
7. **Bagaimana cara block kontak?**  
   Untuk block contact, anda dapat masuk room chat nomor tersebut, kemudian klik icon orang merah. Perlu di ingat bahwa melakukukan block contact hanya bisa dilakukan pada chat yang belum resolved.

## **Broadcast**

1. **Bagaimana cara add sample?**  
   Apabila ada penggunaan media/variable saat pembuatan template, maka anda wajib untuk mengisi bagian pada menu add sample. Add sample dapat di sesuaikan sesuai dengan kolom yang ada dengan template nya, langkah ini digunakan untuk menginfokan kepada pihak Facebook bahwa template yang anda submit tidak melanggar commerce policy dari facebook.
2. **Berapa ukuran gambar yang bisa dibroadcast?**  
   Ukuran gambar yang dapat di broadcast maksimal 6MB dengan ukuran square. Untuk informasi lebiih detail, anda dapat mengunjungi link berikut [https://developers.facebook.com/docs/sharing/webmasters/images](https://developers.facebook.com/docs/sharing/webmasters/images "https://developers.facebook.com/docs/sharing/webmasters/images")
3. **Kenapa template saya loading lama saat di submit?**  
   Untuk template loading saat submit, ini biasanya terjadi karena ada beberapa kesalahan berikut:  
   1\. Variable double/tidak urut  
   2\. Ada spasi di awal kalimat  
   3\. enter consecutive lebih dr 1x  
   4\. Jumlah karakter melebih 1.024  
   5\. Ada double spasi di antara kata-kata  
   6\. Ketika add sample dengan menggunakan video, bisa menggunakan contoh video di bawah 10MB
4. **Kenapa template saya di reject?**  
   Untuk template yang di reject ini adalah penilaian langsung oleh FB, berikut ini adalah recap untuk ketentuan broadcast:  
   1\. Tidak boleh mengandung konten, kalimat, ataupun kata kata yang bersifat promosi atau hard selling.  
   \- solusi : masukkan ke dalam variabel  
   2\. Tidak boleh ada shortened link seperti bit.ly, linktree dll  
   \- solusi : di masukkan ke dalam variabel 3. Tidak boleh terlalu banyak singkatan (harus singkatan sesuai EYD yang di bolehkah oleh FB).  
   4\. Tidak boleh terlalu banyak emoticon (maximal 5)  
   5\. CTA  
   \- Phone number : format sudah langsung dimulai dari angka 8  
   \- URL : contoh nya [https://qontak.com/broadcast](https://qontak.com/broadcast "https://qontak.com/broadcast")  
   Ketika di menu template ini yang dimasukkan hanya sampai yang ".com/" sisanya itu suffix (sesudah approved)  
   6\. Gunakan grammar bahasa yang baik dan benar.  
   7\. Jika di reject :  
   \- delete terlebih dahulu yang sudah di reject  
   \- submit ulang kembali dengan judul template yang berbeda dengan sebelumnya  
   \- submit template 2/3 hari sebelum broadcast
5. **Bagaimana cara membuat list baru?**  
   Login akun Admin, kemudian klik Broadcast, setelah itu klik List, pilih Create New List, lalu klik Upload Custom Contact, isi nama List, klik File yang diinginkan, isi File, terakhir klik Select File dan Save. ****
6. **Kenapa Template saya pending?**  
   Ketika template memiliki status pending artinya template anda sedang di review leg tim Facebook. Untuk update dari status template tersebut memiliki range waktu 0-24 jam, perlu kami informasikan juga bahwa approval berasal dari Facebook sehingga dari pihak Qontak tidak dapat mempercepat prosesnya. Namun, apabila sudah >24 jam untuk templatenya masih pending, silahkan menghubungi tim support kami.
7. **Bagaimana cara menggunakan variable saat broadcast?**  
   Variable digunakan untuk mengkustomisasi suatu kata, cara penggunaannya, anda dapat menggunakan simbol {{1}} dengan angka berganti scr berurutan, untuk menyimpan data variable, anda dapat menambahkan di kolom excel dimulai dari kolom E.
8. **Kenapa saya gagal upload list?**  
   Untuk menghindari gagal upload, anda dapat memastikan hal-hal berikut terlebih dahulu:  
   1\. pastikan semua format kolom berbentuk "Text"  
   2\. semua variable tidak menggunakan konsekutif enter  
   3\. judul kolom berupa huruf kecil semua tanpa tanda spasi  
   4\. Apabila sudah mengikuti step 1-3 masih tidak berhasil, silahkan convert format file menjadi .xlsx

## **Finance**

1. **Bagaimana cara cek saldo saya?**  
   Untuk cara mengecek saldo dapat melalui akun admin, kemudian masuk ke menu finance -> pilih billing usage -> mengacu pada kolom remaining balance.
2. **Bagaimana cara melihat kuota conversation saya?**  
   Untuk melihat kuota conversation bisa ke menu Finance > kemudian klik Billing Usage > dan bisa dilihat di bagian Remaining Balance.
3. **Apa itu Monthly Conversation Credit?**  
   Monthly Conversation Credit adalah jumlah percakapan yang terjadi dalam setiap bulan. Setiap sesi akan dihitung dr Agent pertama kali membalas pesan dan berlaku 24 jam setelahnya.
4. **Apa itu Monthly Unique visitor?**  
   Monthly Unique visitor adalah jumlah uniq ID (1 uniq ID dihitung dr 1 nomor untuk whatsApp dan 1 akun ID untuk channel lain seperti IG, Twitter, Email dan Facebook) dalam setiap bulannya.
5. **Bagaimana cara perhitungan Credit MCC & MUV saya?**  
   MUV dan MCC akan memotong saldo anda ketika kuota MCC dan MUV yang diberikan secara FREE sudah habis. Biaya 1 MUV untuk 1 nomor per bulannya sebesar Rp. 600 dan untuk MCC dibagi menjadi 2 yaitu:  
   a. Rp. 275 untuk membalas 1 pesan baru dari customer dan akan berlaku selama 24 jam setelahnya.  
   b. Rp. 460 untuk menginisiasi pesan terlebih dahulu ke customer seperti mengirimkan broadcast, HSM, dan memulai chat ketika sesi habis.
6. **Apakah saldo MUV & MCC saya bisa di transfer di bulan berikutnya?**  
   Untuk saldo MUV tidak dapat di transfer di bulan berikutnya sedangkan untuk kuota MCC dapat di transfer ke nomor selanjutnya.
7. **Apakah perbedaan WhatsApp Monthly Conversation Credit dengan WhatsApp Conversation Top-Up Credit?**  
   WhatsApp Monthly Conversation Credit adalah kuota untuk credit yang dapat digunakan untuk membalas pesan dan mengirim broadcast secara FREE, sedangkan WhatsApp Conversation Top-Up Credit adalah jumlah kuota yang dapat anda gunakan setelah melakukan Top Up.

## **Report**

1. **Dari mana data Total Chat?**  
   Total chat merupakan semua jumlah percakapan yang masuk pada akun anda, termasuk broadcast dan inbound message.
2. **Bagaimana cara perhitungan response time?**  
   Response Time dihitung dari rata-rata waktu chat tersebut di assigned ke Agent hingga percakapan tersebut di resolved.
3. **Apakah bisa saya mendapatkan laporan Customer Satisfaction Survey atau CSAT?**  
   Bisa, untuk mendapatkan laporan CSAT dengan cara login Omnichat akun Admin, klik Reports, klik CSAT, klik Chanel yang diinginkan, klik Filter tanggal yang diinginkan, klik tanda panah kebawah.

## **Integration**

1. **Bagaimana cara mengintegrasikan Email saya?**  
   Untuk mengintegrasikan email anda pada sistem omnichannel Qontak, silahkan anda melakukan generate app password untuk mendapatkan 20 digit kode yang nantinya akan dimasukan pada bagian Password (Encrypted).
2. **Apakah saya bisa mengintegrasikan email di luar Outlook/Yahoo/Gmail?**  
   Bisa. Namun, untuk mendapatkan password dari generate app password, anda perlu melakukan stepnya secara mandiri tergantung pada email provider yang anda gunakan saat ini.
3. **Bagaimana cara mengintegrasikan Webchat?**  
   Untuk mengintegrasikan webchat anda perlu melakukan step berikut:  
   1\. Silahkan memasukan Widget Name dan Domain anda. Untuk bagian domain tidak perlu menambahkan "/" di bagian akhir. contoh: [https://chat.qontak.com/](https://chat.qontak.com/ "https://chat.qontak.com/") -> SALAH [https://chat.qontak.com](https://chat.qontak.com "https://chat.qontak.com") -> BENAR  
   2\. Click Connect  
   3\. Copy code sebelum </body> tag pada website anda
4. **Mengapa pesan email saya gagal?**  
   Apabila anda gagal mengirimkan pesan, silahkan pastikan email anda sudah enable 2FA atau auto forwarder dan melakukan generate app password pada saat proses integrasinya.
5. **Apa artinya apabila nama customer saya n/a pada Instagram?**  
   Apabila nama customer anda n/a pada Instagram, artinya nama tersebut tidak terdeteksi pada API Instagram sehingga tidak berhasil ditampilkan pada Omnichannel Qontak.
6. **Mengapa saya tidak bisa mengirimkan pesan pada facebook/Instagram?**  
   Ketika anda gagal mengirimkan pesan pada Facebook/Instagram, silahkan melakukan reconnect dengan cara klik menu integration -> disconnect -> connect kembali.

## **Setting**

1. **Bagaimana cara setting jam kerja?**  
   Untuk mengatur Office Hour akun anda, anda dapat melakukan step berikut: a. Login akun admin  
   b. klik Settings  
   c. klik Chat-klik Office Hours  
   d. Pilih jam yang and ingin tentukan  
   e. Klik Save
2. **Bagaimana cara membuat quick reply/balasan cepat?**  
   Login akun admin, lalu klik Settings, kemudian pilih Template, setelah itu klik New Template, isi Judul Template, isi pesan Template, terakhir klik Save