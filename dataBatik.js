import batik from './dataBatik.js';

document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery-container');

    // Ambil 6 data pertama dari dataBatik.js
    const gallery = batik.slice(0, 6);

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
