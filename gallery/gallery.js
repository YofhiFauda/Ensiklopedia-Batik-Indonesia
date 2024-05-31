const batik = [
    {
        nama: "Batik Aceh",
        gambar: "../batik/batik-aceh.png",
    },
    {
        nama: "Batik Bali",
        gambar: "../batik/batik-bali.png",
    },
    {
        nama: "Batik Banten",
        gambar: "../batik/batik-banten.png",
    },
    {
        nama: "Batik Solo",
        gambar: "../batik/batik-solo.png",
    },
    {
        nama: "Batik Yogyakarta",
        gambar: "../batik/batik-yogyakarta.png",
    },
    {
        nama: "Batik Nusa Tenggara",
        gambar: "../batik/batik-nusa-tenggara.png",
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

        gallery.appendChild(galleryItem);
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('search').value.toLowerCase();
    const filteredBatik = batik.filter(item => item.nama.toLowerCase().includes(query));
    displayBatik(filteredBatik);
});

document.getElementById('search').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('searchButton').click();
    }
});

// Initial display
displayBatik(batik);
