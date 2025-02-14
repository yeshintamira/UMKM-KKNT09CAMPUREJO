import umkm from '../../data/umkm-source';

const Detail = {
  async render() {
    const url = window.location.hash.split('/');
    const id = url[url.length - 1];
    const umkmItem = umkm.find((item) => item.id === id);
    if (!umkmItem) {
      return `
        <main class="detail-container" id="maincontent" tabindex="0">
          <p tabindex="0">Item tidak ditemukan!</p>
        </main>
      `;
    }

    return `
     <main class="detail-container" id="maincontent" tabindex="0">
    <div class="umkm-detail">
        <h2 tabindex="0">${umkmItem.name}</h2>
        <img src="${umkmItem.pictureId}" alt="${umkmItem.name}" tabindex="0">
        <div class="detail-content" tabindex="0">
            <p tabindex="0">${umkmItem.description}</p>
            <p tabindex="0"><strong>Penjual:</strong> ${umkmItem.seller}</p>
            <p tabindex="0"><strong>Kontak:</strong> 
                <a href="https://wa.me/${umkmItem.whatsapp.replace(/^0/, '62')}" target="_blank">
                    ${umkmItem.whatsapp}
                </a>
            </p>
            <p tabindex="0"><strong>Instagram:</strong> ${umkmItem.instagram}</p>
            <p tabindex="0"><strong>Alamat:</strong> ${umkmItem.location}</p>
        </div>
    </div>
</main>



          </div>
        </div>
      </main>
    `;
  },

  async afterRender() {
    // Tidak ada fitur tambahan setelah render untuk saat ini
  },
};

export default Detail;
