const About = {
  async render() {
    return `
      <div id="about" tabindex="0">
        <div class="team-container">
          <h2 tabindex="0">Kelompok KKN-Tematik 09 Campurejo</h2>
          <div class="group">
            <div class="photo-frame">
              <img class="photo-image" src="../images/foto-kelompok/foto-kelompok-kkn.jpg" 
                   alt="Kelompok KKN 09 Campurejo" tabindex="0">
            </div>
            <div class="description">
              <p>
                Kami adalah tim KKN Tematik 09 Campurejo, sebuah kelompok mahasiswa yang berkomitmen untuk memberdayakan UMKM lokal di Kelurahan Campurejo melalui inovasi digital serta strategi pemasaran modern. Dengan semangat yang tinggi, kami menghadirkan solusi digitalisasi untuk meningkatkan daya saing UMKM dengan melakukan branding produk. Kami percaya bahwa dengan pemanfaatan teknologi yang tepat, UMKM di Campurejo dapat berkembang lebih pesat, menjangkau pasar yang lebih luas, serta menjadi bagian dari ekosistem bisnis yang lebih inklusif dan berdaya saing tinggi.
              </p>
              <div class="social-container">
    <!-- Sosial Media UMKM -->
   <div class="social-box">
    <h3>Sosial Media UMKM Campurejo</h3>
    <div class="social-links">
        <a href="https://www.instagram.com/umkm.campurejo.kediri1" target="_blank">
            <img src="../images/foto-sosial/ig.png" alt="Instagram UMKM">
        </a>
        <a href="https://www.facebook.com/share/1E7MnFMoBn/?mibextid=wwXIfr" target="_blank">
            <img src="../images/foto-sosial/facebook.png" alt="Facebook UMKM">
        </a>
        <a href="https://www.tiktok.com/@umkm.campurejo.kediri" target="_blank">
            <img src="../images/foto-sosial/tiktok.png" alt="TikTok UMKM">
        </a>
    </div>
</div>
    <!-- Sosial Media KKN -->
    <div class="social-box">
        <h3>Sosial Media KKN-T 09 Campurejo</h3>
        <div class="social-links">
            <a href="https://www.instagram.com/kknt9_campurejo2025" target="_blank">
                <img src="../images/foto-sosial/ig.png" alt="Instagram KKN">
            </a>
            <a href="https://www.tiktok.com/@kknt9_campurejo2025" target="_blank">
                <img src="../images/foto-sosial/tiktok.png" alt="TikTok KKN">
            </a>
        </div>
    </div>
</div>

            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default About;
