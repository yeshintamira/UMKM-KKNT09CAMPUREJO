const Lokasi = {
  async render() {
    return `
      <div class="location-container">
        <h2 tabindex="0">Temukan Lokasi UMKM Campurejo</h2> 
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63243.22291464446!2d111.981993!3d-7.821393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7856ec283a3eb9%3A0xf8fe7bf6316c4b02!2sCampurejo%2C%20Kec.%20Mojoroto%2C%20Kota%20Kediri!5e0!3m2!1sid!2sid!4v1738644067729!5m2!1sid!2sid"
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <p class="alamat" tabindex="0">Alamat: Kelurahan Campurejo, Kecamatan Mojoroto, Kota Kediri</p>
      </div>
    `;
  },

  async afterRender() {
    // Tidak ada fungsi tambahan setelah render untuk saat ini
  },
};

export default Lokasi;
