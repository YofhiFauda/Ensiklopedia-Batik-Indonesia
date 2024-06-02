const batik = [
    {
        nama: "Batik Aceh",
        gambar: "../batik/batik-aceh.png",
        deskripsi: "Kerajinan Batik Aceh dihidupkan kembali dengan pendekatan baru, yaitu dengan mewakili identitas Aceh melalui motif dan simbol budaya."
    },
    {
        nama: "Batik Bali",
        gambar: "../batik/batik-bali.png",
        deskripsi:"Batik di Bali dibuat untuk berbagai keperluan sandang termasuk dalam upacara adat ritual keagamaan, maupun untuk Kehidupan umum sehari-hari" 
    },
    {
        nama: "Batik Banten",
        gambar: "../batik/batik-banten.png",
        deskripsi:"Batik Banten cenderung menggunakan kombinasi warna-warna pastel lembut. Warna-warna ini menggambarkan sifat rakyat Banten: halus dan lembut," 
    },
    {
        nama: "Batik Solo",
        gambar: "../batik/batik-solo.png",
        deskripsi:"Batik Solo dengan motif Sidomukti berasal dari bahasa Jawa, Sido yang artinya jadi dan Mukti yang berarti makmur, mulia dan sejahtera." 
    },
    {
        nama: "Batik Yogyakarta",
        gambar: "../batik/batik-yogyakarta.png",
        deskripsi:"Batik Yogyakarta dengan motif Pamiluto mempunyai makna menarik yaitu di harapkan kedua pengantin bisa saling terikat satu sama lain" 
    },
    {
        nama: "Batik Nusa Tenggara",
        gambar: "../batik/batik-nusa-tenggara.png",
        deskripsi:"Motif batik lumbu adalah motif dengan budaya menyimpan padi di dalam lumbu. Rumah yang di gambarkan adalah lumbu padi dengan orang-orangan di sampingnya." 
    },
    
];

function displayBatik(batikList) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    batikList.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = item.gambar;
        img.alt = item.nama;

        const title = document.createElement('h3');
        title.textContent = item.nama;

        galleryItem.appendChild(img);
        galleryItem.appendChild(title);
        
        galleryItem.addEventListener('click', () => {
            localStorage.setItem('selectedBatik', JSON.stringify(item));
            window.location.href = '../detail/detail.html';
        });


        gallery.appendChild(galleryItem);
    });
}



function sequentialSearch(arr, query) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nama.toLowerCase().includes(query)) {
            result.push(arr[i]);
        }
    }
    return result;
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredBatik = sequentialSearch(batik, query);
    displayBatik(filteredBatik);
});

document.getElementById('search').addEventListener('keyup', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredBatik = sequentialSearch(batik, query);
    displayBatik(filteredBatik);
});

// Initial display
displayBatik(batik);
