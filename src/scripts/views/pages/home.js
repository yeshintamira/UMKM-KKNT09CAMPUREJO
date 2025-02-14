/* eslint-disable no-unused-vars */
import budaya from '../../data/umkm-source';

const Home = {
  async render() {
    const culturalItems = budaya.slice(0, 3).map((item) => `
      <div class="card-item" tabindex="0">
        <img src="${item.pictureId}" alt="${item.name}" class="article-image" tabindex="0">
        <h1 tabindex="0">${item.name}</h1>
        <p tabindex="0">${item.description.substring(0, 200)}...</p>
        <p tabindex="0"><strong>Penjual:</strong> ${item.seller}</p>
        <p tabindex="0"><strong>Harga:</strong> ${item.price}</p>
        <a href="#/detail/${item.id}" class="detail-link" tabindex="0">Lihat Detail</a>
      </div>
    `).join('');

    return `
      <div class="intro-container" tabindex="0">
        <h1 class="intro-title" tabindex="0">Temukan Keunikan Produk Lokal di UMKM CAMPUREJO!</h1>
        <div class="intro" tabindex="0">
          <div class="madura-image-container" tabindex="0">
            <img src="../images/gambar-produk-umkm/umkm.png" alt="Madura" class="madura-image" tabindex="0">
          </div>
        </div>
           <div class="intro-text" tabindex="0">
          <p tabindex="0">
           UMKM di Campurejo merupakan cerminan kreativitas dan semangat wirausaha masyarakat dalam mengembangkan produk lokal yang berkualitas. Dari kerajinan tangan seperti Rofi Craft yang menghadirkan tas dan aksesori berbahan songket, hingga makanan tradisional seperti Gethuk Gedhang Joozzz dan Serabi Pertholo yang tetap mempertahankan cita rasa khas Nusantara. Beragam produk olahan, seperti Keripik Gothe, Telur Asin Bu BATH, serta Opak Gambir Sekar Tunggal, menunjukkan keberagaman kuliner yang terus dijaga dan dikembangkan. Dengan dedikasi dalam menjaga kualitas dan inovasi, UMKM Campurejo tidak hanya memperkuat ekonomi lokal, tetapi juga memperkenalkan kekayaan budaya dan kuliner khas kepada masyarakat yang lebih luas.
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
