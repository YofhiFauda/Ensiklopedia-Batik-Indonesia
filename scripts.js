document.addEventListener('DOMContentLoaded', function () {
    const gallery = [
        {
            nama: "Batik Banten",
            gambar: "./batik/batik-aceh.png",
            deskripsi: "Kerajinan Batik Aceh dihidupkan kembali dengan pendekatan baru, yaitu dengan mewakili identitas Aceh melalui motif dan simbol budaya."
        },
        {
            nama: "Batik Bali",
            gambar: "./batik/batik-bali.png",
            deskripsi:"Batik di Bali dibuat untuk berbagai keperluan sandang termasuk dalam upacara adat ritual keagamaan, maupun untuk Kehidupan umum sehari-hari" 
        },
        {
            nama: "Batik Banten",
            gambar: "./batik/batik-banten.png",
            deskripsi:"Batik Banten cenderung menggunakan kombinasi warna-warna pastel lembut. Warna-warna ini menggambarkan sifat rakyat Banten: halus dan lembut," 
        },
        {
            nama: "Batik Solo",
            gambar: "./batik/batik-solo.png",
            deskripsi:"Batik Solo dengan motif Sidomukti berasal dari bahasa Jawa, Sido yang artinya jadi dan Mukti yang berarti makmur, mulia dan sejahtera.  " 
        },
        {
            nama: "Batik Yogyakarta",
            gambar: "./batik/batik-yogyakarta.png",
            deskripsi:"Batik Yogyakarta dengan motif Pamiluto mempunyai makna menarik yaitu di harapkan kedua pengantin bisa saling terikat satu sama lain" 
        },
        {
            nama: "Batik Nusa Tenggara",
            gambar: "./batik/batik-nusa-tenggara.png",
            deskripsi:"Motif batik lumbu adalah motif dengan budaya menyimpan padi di dalam lumbu. Rumah yang di gambarkan adalah lumbu padi dengan orang-orangan di sampingnya." 
        },
    ];

    const galleryContainer = document.getElementById('gallery-container');

    gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = item.nama;

        const h3 = document.createElement('h3');
        h3.textContent = item.nama;

        const p = document.createElement('p');
        p.textContent = item.deskripsi;

        galleryItem.appendChild(img);
        galleryItem.appendChild(h3);
        galleryItem.appendChild(p);

        galleryContainer.appendChild(galleryItem);
    });
});
