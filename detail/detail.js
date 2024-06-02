document.addEventListener('DOMContentLoaded', () => {
    const selectedBatik = JSON.parse(localStorage.getItem('selectedBatik'));

    if (selectedBatik) {
        document.getElementById('detailImage').src = selectedBatik.gambar;
        document.getElementById('detailName').textContent = selectedBatik.nama;
        document.getElementById('detailDescription').textContent = selectedBatik.deskripsi;
    }
});

function goBack() {
    window.location.href = '../gallery/gallery.html';
}
