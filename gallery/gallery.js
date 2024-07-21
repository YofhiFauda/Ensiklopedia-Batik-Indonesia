import batik from '../dataBatik.js';

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
