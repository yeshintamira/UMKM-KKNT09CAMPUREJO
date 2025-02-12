import umkm from '../../data/umkm-source';

const UMKMs = {
  async render() {
    const umkmItems = umkm.map((item) => `
      <div class="umkm-card">
        <img class="umkm-image" src="${item.pictureId}" alt="${item.name}" tabindex="0">
       <div class="card-content">
          <h2 tabindex="0">${item.name}</h2>
          <p tabindex="0">${item.description.substring(0, 250)}...</p>
          <p tabindex="0"><strong>Penjual:</strong> ${item.seller}</p>
           <p tabindex="0"><strong>Penjual:</strong> ${item.price}</p>
          <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
        </div>
      </div>
    `).join('');

    return `
      <main>
       <div class="umkm-info">
          <h2 tabindex="0">Jelajahi lebih lanjut tentang UMKM Campurejo di sini!</h2>
        </div>
        <!-- Tambahkan elemen input pencarian -->
        <div class="search-container">
          <input type="text" id="search-input" placeholder="Cari UMKM..." tabindex="0">
          <button id="search-button" tabindex="0">Cari</button>
        </div>
        <!-- Daftar UMKM -->
        <div id="umkm-list" class="umkm-list">
          ${umkmItems}
        </div>
      </main>
    `;
  },

  async afterRender() {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', () => this.searchUMKM());

    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.searchUMKM();
      }
    });
  },

  searchUMKM() {
    const searchInput = document.getElementById('search-input');
    const keyword = searchInput.value.toLowerCase();

    const searchResults = umkm.filter((item) => item.name.toLowerCase().includes(keyword)
      || item.description.toLowerCase().includes(keyword));

    this.showSearchResults(searchResults);
  },

  showSearchResults(results) {
    const umkmListContainer = document.getElementById('umkm-list');
    umkmListContainer.innerHTML = '';

    if (results.length > 0) {
      const umkmItems = results.map((item) => `
        <div class="umkm-card">
          <img class="umkm-image" src="${item.pictureId}" alt="${item.name}" tabindex="0">
          <div class="card-content">
            <h2 tabindex="0">${item.name}</h2>
            <p tabindex="0">${item.description.substring(0, 200)}...</p>
            <p tabindex="0"><strong>Penjual:</strong> ${item.seller}</p>
            <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
          </div>
        </div>
      `).join('');

      umkmListContainer.innerHTML = umkmItems;
    } else {
      umkmListContainer.innerHTML = '<p class="no-results" tabindex="0">Tidak ditemukan.</p>';
    }
  },
};

export default UMKMs;
