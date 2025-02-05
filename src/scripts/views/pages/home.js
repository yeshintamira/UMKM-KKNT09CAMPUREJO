/* eslint-disable no-unused-vars */
import budaya from '../../data/umkm-source';

const Home = {
  async render() {
    const culturalItems = budaya.slice(0, 3).map((item) => `
      <div class="card-item" tabindex="0">
        <img src="${item.pictureId}" alt="${item.name}" class="article-image" tabindex="0">
        <h1 tabindex="0">${item.name}</h1>
        <p tabindex="0">${item.description.substring(0, 120)}...</p>
        <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
      </div>
    `).join('');

    return `
      <div class="intro-container" tabindex="0">
        <h1 class="intro-title" tabindex="0">Temukan Keunikan Produk Lokal di UMKM CAMPUREJO!</h1>
        <div class="intro" tabindex="0">
          <div class="madura-image-container" tabindex="0">
            <img src="../images/gambar-budra/suramadu.jpg" alt="Madura" class="madura-image" tabindex="0">
          </div>
        </div>
        <div class="intro-text" tabindex="0">
          <p tabindex="0">
          UMKM CAMPUREJO merupakan
            </p>
        </div>
      </div>
      <article class="article-container" tabindex="0">
        <div class="article-header" tabindex="0">
          <h1 tabindex="0">UMKM Campurejo</h1>
        </div>
        <div class="rekom-card" tabindex="0">
          ${culturalItems}
        </div>
      </article>
      <!-- Tombol "Lebih Lanjut" di paling bawah -->
      <button class="next-button" tabindex="0">
        <a href="#/umkm" tabindex="0"> Lebih Lanjut</a>
      </button>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
