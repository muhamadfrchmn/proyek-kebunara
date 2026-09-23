/**
 * ============================================================================
 * KEBUNARA - SPESIALIS MAWAR PILIHAN
 * Official JavaScript Application File (Pure JavaScript)
 * ============================================================================
 * Catatan Pengembang (Debugging):
 * - File ini dirancang agar mudah dibaca, dimodifikasi, dan didebug.
 * - Ubah `DEBUG_CONFIG.enabled = true` untuk melihat alur kerja di Browser DevTools Console.
 * - Data katalog terpusat pada `PRODUCTS_DATABASE` sehingga mudah diubah/ditambah.
 */

'use strict';

/* ==========================================================================
   1. KONFIGURASI DEBUGGING & LOGGER
   ========================================================================== */
const DEBUG_CONFIG = {
  enabled: true,
  logPrefix: '🌿 [Kebunara Dev]'
};

/**
 * Utilitas logger terpusat untuk kemudahan debugging
 * @param {string} action Nama tindakan/proses
 * @param {any} [payload=null] Data pendukung yang ingin diperiksa di console
 */
function logDebug(action, payload = null) {
  if (!DEBUG_CONFIG.enabled) return;

  const timestamp = new Date().toLocaleTimeString('id-ID');
  const actionStyle = 'background: #1A392A; color: #FAF7F2; padding: 2px 6px; border-radius: 4px; font-weight: bold;';
  const textStyle = 'color: #1A392A; font-weight: 600;';

  if (payload !== null) {
    console.log(`%c${DEBUG_CONFIG.logPrefix} [${timestamp}]%c ${action}`, actionStyle, textStyle, payload);
  } else {
    console.log(`%c${DEBUG_CONFIG.logPrefix} [${timestamp}]%c ${action}`, actionStyle, textStyle);
  }
}

/* ==========================================================================
   2. DATABASE PRODUK MAWAR (EASY TO MODIFY & EXTEND)
   ========================================================================== */
const PRODUCTS_DATABASE = [
  {
    id: 'david-austin',
    name: 'Mawar David Austin',
    priceNumeric: 65000,
    priceFormatted: 'Rp 65.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/david austin.jpg',
    description: 'Mawar jenis English Rose dengan lapisan kelopak bertumpuk padat khas David Austin. Memiliki wangi harum semerbak, sangat cocok untuk iklim tropis dengan media porous.',
    scent: 'Aroma Buah & Myrrh (Kuat)',
    height: '40 - 55 cm (Bibit Rawatan Siap Berbunga)',
    bloom: 'Kelopak Rosette Ganda Padat'
  },
  {
    id: 'red-eden',
    name: 'Mawar Red Eden',
    priceNumeric: 55000,
    priceFormatted: 'Rp 55.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/red eden.jpeg',
    description: 'Mawar merambat tipe romantica bernuansa merah beludru klasik. Daya tahan bunganya sangat lama dan mekar berkelompok secara kontinu sepanjang tahun.',
    scent: 'Aroma Lembut Klasik (Mild)',
    height: '45 - 60 cm (Bibit Kokoh Berakar Kuat)',
    bloom: 'Kelopak Cangkir Bertumpuk (Cupped)'
  },
  {
    id: 'juliet',
    name: 'Mawar Juliet',
    priceNumeric: 65000,
    priceFormatted: 'Rp 65.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/juliet.jpeg',
    description: 'Salah satu varietas mawar termahal dan paling dicari di dunia dengan warna aprikot/peach lembut yang elegan dan formasi kelopak melingkar sempurna.',
    scent: 'Aroma Teh Hangat & Bunga Segar',
    height: '35 - 50 cm (Bibit Hasil Okulasi Berkualitas)',
    bloom: 'Pusat Melingkar Sempurna (Deep Cup)'
  },
  {
    id: 'white-ohara',
    name: 'Mawar White O\'Hara',
    priceNumeric: 60000,
    priceFormatted: 'Rp 60.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/white o hara.webp',
    description: 'Mawar taman Prancis berwarna putih krem gading dengan sedikit rona merah muda di intinya. Sangat wangi dengan kelopak berukuran ekstra besar.',
    scent: 'Aroma Manis Mewah & Segar (Sangat Wangi)',
    height: '40 - 55 cm (Siap Tanam di Kebun/Pot)',
    bloom: 'Bunga Ekstra Besar (Garden Rose)'
  },
  {
    id: 'pink-eden',
    name: 'Mawar Pink Eden',
    priceNumeric: 55000,
    priceFormatted: 'Rp 55.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/pink eden.jpg',
    description: 'Dikenal juga sebagai Pierre de Ronsard, mawar legendaris dengan kombinasi warna gradasi merah muda lembut dan putih gading yang sangat rimbun.',
    scent: 'Aroma Ringan Segar (Subtle Fragrance)',
    height: '45 - 60 cm (Tunas Aktif & Berdaun Rimbun)',
    bloom: 'Bentuk Kol Kuno (Cabbage Rose Style)'
  },
  {
    id: 'abraham-darby',
    name: 'Mawar Abraham Darby',
    priceNumeric: 65000,
    priceFormatted: 'Rp 65.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/abraham darby.webp',
    description: 'Mawar English Shrub klasik ciptaan David Austin dengan warna unik gradasi aprikot-merah muda dan aroma fruity yang sangat kaya dan harum.',
    scent: 'Aroma Buah Kuat & Manis',
    height: '40 - 55 cm (Bibit Rimbun Berakar Kuat)',
    bloom: 'Kuntum Ganda Sangat Penuh (Cup Shape)'
  },
  {
    id: 'black-baccara',
    name: 'Mawar Black Baccara',
    priceNumeric: 70000,
    priceFormatted: 'Rp 70.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/black baccara.jpg',
    description: 'Mawar paling eksotis dengan kelopak beludru merah sangat pekat mendekati hitam. Memiliki tangkai panjang kokoh dan daya tahan mekar terbaik.',
    scent: 'Aroma Klasik Ringan & Segar',
    height: '40 - 50 cm (Bibit Okulasi Pilihan)',
    bloom: 'Kelopak Beludru Hitam Gelap Elegan'
  },
  {
    id: 'graham-thomas',
    name: 'Mawar Graham Thomas',
    priceNumeric: 65000,
    priceFormatted: 'Rp 65.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/graham thomas.webp',
    description: 'Mawar kuning emas terpopuler di dunia yang memenangkan World Favourite Rose. Berbunga sangat rajin dengan wangi teh segar (*tea fragrance*).',
    scent: 'Aroma Teh Mawar Segar Klasik',
    height: '45 - 60 cm (Tunas Baru & Daun Hijau Segar)',
    bloom: 'Kelopak Kuning Emas Murni'
  },
  {
    id: 'leonardo-da-vinci',
    name: 'Mawar Leonardo da Vinci',
    priceNumeric: 60000,
    priceFormatted: 'Rp 60.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/leonardo da vinci.webp',
    description: 'Mawar Floribunda asal Prancis dengan warna pink fuschia cerah yang sangat tahan terhadap cuaca panas maupun hujan lebat tanpa rontok.',
    scent: 'Aroma Lembut Ringan (Mild)',
    height: '35 - 50 cm (Bibit Kuat Tahan Segala Cuaca)',
    bloom: 'Bunga Rosette Tumpuk Lebat'
  },
  {
    id: 'blue-for-you',
    name: 'Mawar Blue for You',
    priceNumeric: 70000,
    priceFormatted: 'Rp 70.000',
    isAvailable: true,
    badgeText: 'Tersedia',
    image: 'assets/img/blue for you.webp',
    description: 'Mawar langka berwarna ungu kebiruan (*slate blue/lavender*) dengan bagian tengah putih kontras dan aroma manis seperti apel matang.',
    scent: 'Aroma Manis Tajam Sangat Harum',
    height: '40 - 55 cm (Koleksi Langka Siap Rawat)',
    bloom: 'Kelopak Semi-Ganda Ungu Kebiruan Unik'
  }
];

/* ==========================================================================
   3. KONFIGURASI KONTAK & WHATSAPP
   ========================================================================== */
const WHATSAPP_CONFIG = {
  phoneNumber: '6289533834052',

  /**
   * Membuat tautan WhatsApp untuk pemesanan produk spesifik
   * @param {Object} product Objek data produk
   * @returns {string} URL WhatsApp siap klik
   */
  generateProductChatUrl(product) {
    const text = `Halo Kebunara, saya tertarik dan ingin memesan bibit *${product.name}* seharga *${product.priceFormatted}*. Mohon informasi ketersediaan dan ongkir ke lokasi saya. Terima kasih.`;
    return `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(text)}`;
  },

  /**
   * Membuat tautan konsultasi umum
   * @returns {string} URL WhatsApp konsultasi
   */
  generateGeneralChatUrl() {
    const text = `Halo Kebunara, saya ingin konsultasi mengenai pemilihan dan perawatan tanaman mawar.`;
    return `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURIComponent(text)}`;
  }
};

/* ==========================================================================
   4. MANAJEMEN STATE APLIKASI
   ========================================================================== */
/* ==========================================================================
   4. MANAJEMEN STATE APLIKASI & KERANJANG BELANJA (CART)
   ========================================================================== */
const STORAGE_KEY = 'kebunara_cart_items';

const AppState = {
  // Array item keranjang: [{ id: 'david-austin', quantity: 2 }]
  cart: [],
  activeModalProductId: null,

  /**
   * Memuat data keranjang dari localStorage saat aplikasi mulai
   */
  loadCartFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        this.cart = JSON.parse(saved);
        logDebug('Data keranjang berhasil dimuat dari localStorage:', this.cart);
      }
    } catch (err) {
      console.warn(`${DEBUG_CONFIG.logPrefix} Gagal memuat keranjang dari localStorage:`, err);
      this.cart = [];
    }
    this.updateCartBadge();
  },

  /**
   * Menyimpan data keranjang ke localStorage
   */
  saveCartToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cart));
    } catch (err) {
      console.warn(`${DEBUG_CONFIG.logPrefix} Gagal menyimpan keranjang ke localStorage:`, err);
    }
  },

  /**
   * Mendapatkan daftar item keranjang lengkap dengan data produk
   * @returns {Array<Object>}
   */
  getCartDetails() {
    return this.cart.map(item => {
      const product = PRODUCTS_DATABASE.find(p => p.id === item.id) || {
        name: 'Produk Mawar',
        priceNumeric: 0,
        priceFormatted: 'Rp 0',
        image: ''
      };
      const itemSubtotal = product.priceNumeric * item.quantity;
      return {
        ...item,
        product,
        itemSubtotal,
        subtotalFormatted: 'Rp ' + itemSubtotal.toLocaleString('id-ID')
      };
    });
  },

  /**
   * Menghitung total seluruh item dalam keranjang
   * @returns {number}
   */
  getTotalQuantity() {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  },

  /**
   * Menghitung total harga belanja
   * @returns {number}
   */
  getTotalPrice() {
    return this.getCartDetails().reduce((total, item) => total + item.itemSubtotal, 0);
  },

  /**
   * Menambah produk ke keranjang belanja
   * @param {string} productId ID produk mawar
   * @param {number} [qty=1] Jumlah yang ditambahkan
   */
  addToCart(productId, qty = 1) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) {
      console.error(`${DEBUG_CONFIG.logPrefix} Error: Produk dengan ID '${productId}' tidak ditemukan.`);
      return;
    }

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += qty;
    } else {
      this.cart.push({ id: productId, quantity: qty });
    }

    this.saveCartToStorage();
    this.updateCartBadge();
    CartDrawerManager.render();
    
    showToastNotification(`🌸 "${product.name}" ditambahkan ke keranjang!`);
    logDebug('Item berhasil ditambahkan ke keranjang:', { productId, totalItems: this.getTotalQuantity() });
  },

  /**
   * Mengubah jumlah kuantitas produk (+1 / -1)
   * @param {string} productId ID produk
   * @param {number} delta Perubahan kuantitas (+1 atau -1)
   */
  updateQuantity(productId, delta) {
    const itemIndex = this.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    const newQty = this.cart[itemIndex].quantity + delta;
    if (newQty <= 0) {
      this.removeItem(productId);
    } else {
      this.cart[itemIndex].quantity = newQty;
      this.saveCartToStorage();
      this.updateCartBadge();
      CartDrawerManager.render();
      logDebug(`Kuantitas produk '${productId}' diubah menjadi: ${newQty}`);
    }
  },

  /**
   * Menghapus item tertentu dari keranjang
   * @param {string} productId ID produk
   */
  removeItem(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    const prodName = product ? product.name : 'Produk';
    
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCartToStorage();
    this.updateCartBadge();
    CartDrawerManager.render();
    
    showToastNotification(`🗑️ "${prodName}" dihapus dari keranjang.`);
    logDebug(`Item '${productId}' dihapus dari keranjang.`);
  },

  /**
   * Mengosongkan seluruh keranjang belanja
   */
  clearCart() {
    if (this.cart.length === 0) return;
    this.cart = [];
    this.saveCartToStorage();
    this.updateCartBadge();
    CartDrawerManager.render();
    showToastNotification('🧹 Keranjang belanja telah dikosongkan.');
    logDebug('Seluruh keranjang berhasil dikosongkan.');
  },

  /**
   * Memperbarui tampilan badge angka keranjang belanja di navbar
   */
  updateCartBadge() {
    const count = this.getTotalQuantity();
    const badgeElement = document.getElementById('cart-badge-count');
    if (badgeElement) {
      badgeElement.textContent = count;
      badgeElement.setAttribute('aria-label', `${count} item di keranjang`);
    }
  }
};

/* ==========================================================================
   5. NOTIFIKASI TOAST INTERAKTIF
   ========================================================================== */
let toastTimeout = null;

/**
 * Menampilkan pesan popup toast di pojok kanan bawah
 * @param {string} message Teks pesan yang ditampilkan
 */
function showToastNotification(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('is-visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3200);
}

/* ==========================================================================
   6. CART DRAWER (SIDEBAR KERANJANG BELANJA & CHECKOUT WA)
   ========================================================================== */
const CartDrawerManager = {
  drawerEl: null,
  backdropEl: null,
  closeBtnEl: null,
  bodyEl: null,
  countEl: null,
  totalEl: null,
  checkoutWaBtnEl: null,
  clearCartBtnEl: null,

  /**
   * Inisialisasi referensi DOM dan event listeners untuk Drawer Keranjang
   */
  init() {
    this.drawerEl = document.getElementById('cart-drawer');
    this.backdropEl = document.getElementById('cart-backdrop');
    this.closeBtnEl = document.getElementById('cart-drawer-close-btn');
    this.bodyEl = document.getElementById('cart-drawer-body');
    this.countEl = document.getElementById('cart-drawer-count');
    this.totalEl = document.getElementById('cart-total-price');
    this.checkoutWaBtnEl = document.getElementById('cart-checkout-wa-btn');
    this.clearCartBtnEl = document.getElementById('cart-clear-btn');

    this.bindEvents();
    this.render();
    logDebug('CartDrawerManager diinisialisasi.');
  },

  /**
   * Menghubungkan interaksi tombol pada Drawer Keranjang
   */
  bindEvents() {
    // Tutup tombol silang
    if (this.closeBtnEl) {
      this.closeBtnEl.addEventListener('click', () => this.close());
    }

    // Tutup saat mengklik backdrop gelap
    if (this.backdropEl) {
      this.backdropEl.addEventListener('click', () => this.close());
    }

    // Tutup dengan keyboard Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.drawerEl && this.drawerEl.classList.contains('is-open')) {
        this.close();
      }
    });

    // Tombol Checkout via WhatsApp
    if (this.checkoutWaBtnEl) {
      this.checkoutWaBtnEl.addEventListener('click', () => this.checkoutViaWhatsApp());
    }

    // Tombol Kosongkan Keranjang
    if (this.clearCartBtnEl) {
      this.clearCartBtnEl.addEventListener('click', () => {
        if (AppState.cart.length > 0) {
          if (confirm('Apakah Anda yakin ingin mengosongkan keranjang belanja?')) {
            AppState.clearCart();
          }
        }
      });
    }
  },

  /**
   * Membuka Drawer Keranjang
   */
  open() {
    if (!this.drawerEl) return;
    this.render();
    this.drawerEl.classList.add('is-open');
    this.drawerEl.setAttribute('aria-hidden', 'false');
    if (this.backdropEl) {
      this.backdropEl.classList.add('is-active');
      this.backdropEl.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
    logDebug('Drawer keranjang dibuka.');
  },

  /**
   * Menutup Drawer Keranjang
   */
  close() {
    if (!this.drawerEl) return;
    this.drawerEl.classList.remove('is-open');
    this.drawerEl.setAttribute('aria-hidden', 'true');
    if (this.backdropEl) {
      this.backdropEl.classList.remove('is-active');
      this.backdropEl.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
    logDebug('Drawer keranjang ditutup.');
  },

  /**
   * Merender daftar produk dan total harga di dalam drawer
   */
  render() {
    if (!this.bodyEl) return;

    const cartDetails = AppState.getCartDetails();
    const totalQty = AppState.getTotalQuantity();
    const totalPrice = AppState.getTotalPrice();

    // Perbarui counter & total harga
    if (this.countEl) {
      this.countEl.textContent = `(${totalQty} item)`;
    }
    if (this.totalEl) {
      this.totalEl.textContent = 'Rp ' + totalPrice.toLocaleString('id-ID');
    }

    // Kasus 1: Keranjang Kosong
    if (cartDetails.length === 0) {
      this.bodyEl.innerHTML = `
        <div class="cart-empty-state">
          <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <h4 class="cart-empty-title">Keranjang Anda Kosong</h4>
          <p class="cart-empty-text">Pilih mawar pilihan Anda untuk mempercantik sudut kebun Anda.</p>
          <button type="button" class="btn btn--shop-now" id="btn-cart-shop-now">Lihat Koleksi Mawar</button>
        </div>
      `;

      // Event tombol "Lihat Koleksi Mawar" di empty state
      const shopBtn = document.getElementById('btn-cart-shop-now');
      if (shopBtn) {
        shopBtn.addEventListener('click', () => {
          this.close();
          const target = document.getElementById('koleksi');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }

      if (this.checkoutWaBtnEl) {
        this.checkoutWaBtnEl.style.opacity = '0.5';
        this.checkoutWaBtnEl.style.pointerEvents = 'none';
      }
      return;
    }

    // Kasus 2: Ada item dalam keranjang
    if (this.checkoutWaBtnEl) {
      this.checkoutWaBtnEl.style.opacity = '1';
      this.checkoutWaBtnEl.style.pointerEvents = 'auto';
    }

    let itemsHtml = '';
    cartDetails.forEach(item => {
      itemsHtml += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.product.image}" alt="${item.product.name}" class="cart-item__thumb">
          <div class="cart-item__info">
            <h5 class="cart-item__name">${item.product.name}</h5>
            <p class="cart-item__price">${item.product.priceFormatted}</p>
            <div class="cart-item__controls">
              <div class="cart-qty-group">
                <button type="button" class="cart-qty-btn btn-qty-minus" data-id="${item.id}" aria-label="Kurangi kuantitas">−</button>
                <span class="cart-qty-num">${item.quantity}</span>
                <button type="button" class="cart-qty-btn btn-qty-plus" data-id="${item.id}" aria-label="Tambah kuantitas">+</button>
              </div>
              <button type="button" class="cart-item__remove-btn" data-id="${item.id}" aria-label="Hapus produk">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                <span>Hapus</span>
              </button>
            </div>
          </div>
        </div>
      `;
    });

    this.bodyEl.innerHTML = itemsHtml;

    // Pasang event listener untuk tombol kontrol kuantitas & hapus
    this.bodyEl.querySelectorAll('.btn-qty-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        AppState.updateQuantity(id, -1);
      });
    });

    this.bodyEl.querySelectorAll('.btn-qty-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        AppState.updateQuantity(id, 1);
      });
    });

    this.bodyEl.querySelectorAll('.cart-item__remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        AppState.removeItem(id);
      });
    });
  },

  /**
   * Membuat dan membuka pesan checkout WhatsApp terstruktur otomatis
   */
  checkoutViaWhatsApp() {
    const cartDetails = AppState.getCartDetails();
    if (cartDetails.length === 0) {
      showToastNotification('Keranjang Anda masih kosong. Silakan pilih produk terlebih dahulu.');
      return;
    }

    const totalQty = AppState.getTotalQuantity();
    const totalPrice = AppState.getTotalPrice();
    const totalPriceFormatted = 'Rp ' + totalPrice.toLocaleString('id-ID');

    // Susun format pesan WhatsApp rapi dan estetik
    let message = `Halo Kebunara, saya ingin melakukan pemesanan mawar melalui website:\n\n`;
    message += `📋 *DAFTAR PESANAN (${totalQty} item):*\n`;
    
    cartDetails.forEach((item, idx) => {
      message += `${idx + 1}. *${item.product.name}* (x${item.quantity}) - ${item.subtotalFormatted}\n`;
    });

    message += `\n💰 *TOTAL PEMBELIAN: ${totalPriceFormatted}*\n`;
    message += `*(Belum termasuk ongkir)*\n\n`;
    message += `Mohon informasi ketersediaan bibit dan estimasi ongkos kirim ke lokasi saya. Terima kasih! 🌸`;

    const waCheckoutUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_CONFIG.phoneNumber}&text=${encodeURIComponent(message)}`;
    
    logDebug('Checkout via WhatsApp dipicu:', { totalQty, totalPriceFormatted, waCheckoutUrl });
    showToastNotification('Membuka WhatsApp untuk memproses pesanan Anda...');
    
    window.open(waCheckoutUrl, '_blank', 'noopener,noreferrer');
  }
};

/* ==========================================================================
   7. MODAL DETAIL PRODUK
   ========================================================================== */
const ModalManager = {
  modalEl: null,
  closeBtnEl: null,
  imageEl: null,
  statusEl: null,
  titleEl: null,
  priceEl: null,
  descEl: null,
  scentEl: null,
  heightEl: null,
  bloomEl: null,
  waBtnEl: null,
  cartBtnEl: null,

  /**
   * Inisialisasi referensi elemen DOM untuk modal
   */
  init() {
    this.modalEl = document.getElementById('product-detail-modal');
    this.closeBtnEl = document.getElementById('modal-close-btn');
    this.imageEl = document.getElementById('modal-product-image');
    this.statusEl = document.getElementById('modal-product-status');
    this.titleEl = document.getElementById('modal-product-title');
    this.priceEl = document.getElementById('modal-product-price');
    this.descEl = document.getElementById('modal-product-desc');
    this.scentEl = document.getElementById('modal-product-scent');
    this.heightEl = document.getElementById('modal-product-height');
    this.bloomEl = document.getElementById('modal-product-bloom');
    this.waBtnEl = document.getElementById('modal-whatsapp-cta');
    this.cartBtnEl = document.getElementById('modal-add-cart-btn');

    this.bindEvents();
    logDebug('ModalManager diinisialisasi.');
  },

  /**
   * Mendaftarkan event listener pada modal
   */
  bindEvents() {
    if (this.closeBtnEl) {
      this.closeBtnEl.addEventListener('click', () => this.close());
    }

    if (this.modalEl) {
      // Tutup saat mengklik area gelap di luar modal card
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) {
          this.close();
        }
      });
    }

    // Tutup modal menggunakan tombol Keyboard 'Escape'
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl && this.modalEl.classList.contains('is-active')) {
        this.close();
      }
    });

    // Tambah ke keranjang dari dalam modal langsung membuka cart drawer
    if (this.cartBtnEl) {
      this.cartBtnEl.addEventListener('click', () => {
        if (AppState.activeModalProductId) {
          AppState.addToCart(AppState.activeModalProductId);
          this.close();
          // Buka cart drawer secara otomatis
          setTimeout(() => {
            CartDrawerManager.open();
          }, 200);
        }
      });
    }
  },

  /**
   * Membuka modal dan mengisi informasi produk yang dipilih
   * @param {string} productId ID produk yang ingin dibuka
   */
  open(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) {
      console.error(`${DEBUG_CONFIG.logPrefix} Produk '${productId}' tidak ditemukan di database.`);
      return;
    }

    AppState.activeModalProductId = productId;

    // Isi konten modal
    this.imageEl.src = product.image;
    this.imageEl.alt = product.name;
    this.statusEl.textContent = product.badgeText;
    this.titleEl.textContent = product.name;
    this.priceEl.textContent = product.priceFormatted;
    this.descEl.textContent = product.description;
    this.scentEl.textContent = product.scent;
    this.heightEl.textContent = product.height;
    this.bloomEl.textContent = product.bloom;

    // Set URL WhatsApp spesifik
    this.waBtnEl.href = WHATSAPP_CONFIG.generateProductChatUrl(product);

    // Tampilkan modal
    this.modalEl.classList.add('is-active');
    this.modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    logDebug(`Membuka detail modal untuk: ${product.name}`, product);
  },

  /**
   * Menutup modal
   */
  close() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('is-active');
    this.modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    AppState.activeModalProductId = null;
    logDebug('Modal detail produk ditutup.');
  }
};

/* ==========================================================================
   8. PENGELOLA SEMUA TOMBOL & INTERAKTIVITAS SITUS
   ========================================================================== */

/**
 * 8.1 Manajemen Tombol "Lihat Semua Mawar" (Expand/Collapse Katalog)
 */
const ViewAllRosesManager = {
  viewAllBtn: null,
  isExpanded: false,

  init() {
    this.viewAllBtn = document.getElementById('view-all-link');
    if (!this.viewAllBtn) return;

    this.viewAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });
    logDebug('ViewAllRosesManager diinisialisasi.');
  },

  toggle() {
    const extendedCards = document.querySelectorAll('.product-card--extended');
    this.isExpanded = !this.isExpanded;

    extendedCards.forEach(card => {
      if (this.isExpanded) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });

    const spanText = this.viewAllBtn.querySelector('span');
    if (spanText) {
      spanText.textContent = this.isExpanded ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Mawar';
    }

    // Ubah arah panah svg
    const svgIcon = this.viewAllBtn.querySelector('svg');
    if (svgIcon) {
      svgIcon.style.transform = this.isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)';
    }

    if (this.isExpanded) {
      showToastNotification('🌹 5 varietas mawar eksklusif tambahan ditampilkan!');
      logDebug('Katalog diperluas: 10 varietas ditampilkan.');
    } else {
      showToastNotification('🌹 Menampilkan 5 mawar pilihan utama.');
      logDebug('Katalog diringkas kembali ke 5 varietas utama.');
    }
  }
};

/**
 * 8.2 Manajemen Badge Fitur Hero (Mawar Sehat, Akar Kuat, Packing Aman)
 */
function setupHeroFeatureBadges() {
  const badgeItems = document.querySelectorAll('.hero-feature-item');
  const badgeData = [
    { title: 'Mawar Sehat', desc: 'Bibit terbebas dari hama, dirawat di iklim sejuk Lembang, dan berdaun segar aktif.' },
    { title: 'Akar Kuat', desc: 'Perakaran matang dengan nutrisi bio-organik, siap adaptasi pot maupun tanam langsung.' },
    { title: 'Packing Aman', desc: 'Rangka kardus tebal berlapis anti-benturan dengan garansi tiba selamat di seluruh Indonesia.' }
  ];

  badgeItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const data = badgeData[index] || { title: 'Kebunara', desc: 'Spesialis mawar pilihan terbaik.' };
      showToastNotification(`🌿 ${data.title}: ${data.desc}`);
      logDebug(`Hero badge '${data.title}' diklik:`, data);
    });
  });
}

/**
 * 8.3 Manajemen Filter Galeri & Lightbox Zoom Foto
 */
const GalleryManager = {
  filterButtons: [],
  galleryItems: [],
  lightboxEl: null,
  lightboxImg: null,
  lightboxCaption: null,
  lightboxCloseBtn: null,

  init() {
    this.filterButtons = document.querySelectorAll('.gallery-filter-btn');
    this.galleryItems = document.querySelectorAll('.gallery-item');
    this.lightboxEl = document.getElementById('lightbox-modal');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxCaption = document.getElementById('lightbox-caption');
    this.lightboxCloseBtn = document.getElementById('lightbox-close-btn');

    this.bindFilterEvents();
    this.bindLightboxEvents();
    logDebug('GalleryManager diinisialisasi.');
  },

  bindFilterEvents() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.currentTarget.getAttribute('data-filter');
        
        // Atur status aktif pada tombol
        this.filterButtons.forEach(b => b.classList.remove('is-active'));
        e.currentTarget.classList.add('is-active');

        // Saring item galeri
        this.galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });

        logDebug(`Filter galeri diubah ke: ${filter}`);
      });
    });
  },

  bindLightboxEvents() {
    // Klik foto membuka lightbox
    this.galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        if (img && this.lightboxEl) {
          this.openLightbox(img.src, caption ? caption.textContent : img.alt);
        }
      });
    });

    // Tutup tombol silang
    if (this.lightboxCloseBtn) {
      this.lightboxCloseBtn.addEventListener('click', () => this.closeLightbox());
    }

    // Tutup saat mengklik latar gelap
    if (this.lightboxEl) {
      this.lightboxEl.addEventListener('click', (e) => {
        if (e.target === this.lightboxEl) {
          this.closeLightbox();
        }
      });
    }

    // Tutup dengan Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.lightboxEl && this.lightboxEl.classList.contains('is-active')) {
        this.closeLightbox();
      }
    });
  },

  openLightbox(src, captionText) {
    if (!this.lightboxEl) return;
    this.lightboxImg.src = src;
    this.lightboxCaption.textContent = captionText;
    this.lightboxEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    logDebug('Lightbox foto dibuka:', { src, captionText });
  },

  closeLightbox() {
    if (!this.lightboxEl) return;
    this.lightboxEl.classList.remove('is-active');
    document.body.style.overflow = '';
    logDebug('Lightbox foto ditutup.');
  }
};

/**
 * 8.4 Manajemen Accordion Perawatan Mawar
 */
function setupCareAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', (e) => {
      const currentItem = e.currentTarget.closest('.accordion-item');
      const isOpen = currentItem.classList.contains('is-open');

      // Tutup accordion lain agar rapi
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('is-open');
        const head = item.querySelector('.accordion-header');
        if (head) head.setAttribute('aria-expanded', 'false');
      });

      // Buka item yang diklik jika sebelumnya belum terbuka
      if (!isOpen) {
        currentItem.classList.add('is-open');
        e.currentTarget.setAttribute('aria-expanded', 'true');
        logDebug('Accordion item dibuka:', currentItem.querySelector('.accordion-title').textContent);
      }
    });
  });
}

/**
 * 8.4b Accordion Footer (Navigasi, Informasi, Kontak) - khusus tampilan mobile
 */
function setupFooterAccordion() {
  const toggles = document.querySelectorAll('.footer-accordion-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const col = toggle.closest('.footer-col--accordion');
      if (!col) return;
      const isOpen = col.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
}

/**
 * 8.5 Manajemen Modal Informasi & FAQ (Footer Links)
 */
const InfoModalManager = {
  modalEl: null,
  closeBtnEl: null,
  tabButtons: [],
  tabPanels: [],

  init() {
    this.modalEl = document.getElementById('info-modal');
    this.closeBtnEl = document.getElementById('info-modal-close-btn');
    this.tabButtons = document.querySelectorAll('.info-tab-btn');
    this.tabPanels = document.querySelectorAll('.info-tab-panel');

    this.bindEvents();
    logDebug('InfoModalManager diinisialisasi.');
  },

  bindEvents() {
    // Tombol info di footer (Cara Pemesanan, Pengiriman, FAQ)
    document.querySelectorAll('.footer-info-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetTab = e.currentTarget.getAttribute('data-info-tab');
        this.open(targetTab);
      });
    });

    // Tutup tombol silang
    if (this.closeBtnEl) {
      this.closeBtnEl.addEventListener('click', () => this.close());
    }

    // Tutup klik luar
    if (this.modalEl) {
      this.modalEl.addEventListener('click', (e) => {
        if (e.target === this.modalEl) {
          this.close();
        }
      });
    }

    // Keyboard Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalEl && this.modalEl.classList.contains('is-active')) {
        this.close();
      }
    });

    // Tab switching di dalam modal
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget.getAttribute('data-tab-target');
        this.switchTab(target);
      });
    });
  },

  open(tabTarget = 'order') {
    if (!this.modalEl) return;
    this.switchTab(tabTarget);
    this.modalEl.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    logDebug(`Modal informasi dibuka pada tab: ${tabTarget}`);
  },

  close() {
    if (!this.modalEl) return;
    this.modalEl.classList.remove('is-active');
    document.body.style.overflow = '';
    logDebug('Modal informasi ditutup.');
  },

  switchTab(tabTarget) {
    this.tabButtons.forEach(b => {
      if (b.getAttribute('data-tab-target') === tabTarget) {
        b.classList.add('is-active');
      } else {
        b.classList.remove('is-active');
      }
    });

    this.tabPanels.forEach(p => {
      if (p.id === `panel-${tabTarget}`) {
        p.classList.add('is-active');
      } else {
        p.classList.remove('is-active');
      }
    });
  }
};

/**
 * 8.6 Pengaturan Navigasi Mulus & Highlight Tab Aktif
 */
function setupNavigationAndHeader() {
  const header = document.getElementById('site-header');
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const navigation = document.getElementById('main-navigation');
  const cartTriggerBtn = document.getElementById('cart-trigger-btn');
  const navLinks = document.querySelectorAll('.nav-link');

  // Efek shadow pada header saat scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    // Update active nav link indicator berdasarkan posisi scroll
    const sections = document.querySelectorAll('section[id], footer[id]');
    let currentSectionId = 'beranda';

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      if (href === currentSectionId || (currentSectionId === 'koleksi' && href === 'koleksi')) {
        link.classList.add('nav-link--active');
      } else {
        link.classList.remove('nav-link--active');
      }
    });
  });

  // Toggle navigasi mobile
  if (mobileToggleBtn && navigation) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      logDebug(`Mobile menu di-toggle: ${isOpen ? 'Terbuka' : 'Tertutup'}`);
    });

    // Menutup menu mobile saat link diklik
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navigation.classList.contains('is-open')) {
          navigation.classList.remove('is-open');
          mobileToggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Interaksi tombol keranjang belanja navbar: membuka Cart Drawer!
  if (cartTriggerBtn) {
    cartTriggerBtn.addEventListener('click', () => {
      logDebug('Membuka Drawer Keranjang dari Navbar', { totalQty: AppState.getTotalQuantity() });
      CartDrawerManager.open();
    });
  }

  // Smooth scroll untuk semua tautan dengan anchor (#)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        logDebug(`Smooth scroll menuju: ${targetId}`);
      }
    });
  });
}

/**
 * 8.7 Interaksi Kartu Produk (Lihat Detail & Chat WhatsApp)
 */
function setupProductCardInteractions() {
  // Delegasi event untuk tombol "Lihat Detail"
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.btn-card-detail');
    if (detailBtn) {
      const productId = detailBtn.getAttribute('data-id');
      logDebug(`Tombol "Lihat Detail" diklik untuk ID: ${productId}`);
      ModalManager.open(productId);
      return;
    }

    // Delegasi event untuk tombol "Chat WhatsApp"
    const waBtn = e.target.closest('.btn-card-wa');
    if (waBtn) {
      const productId = waBtn.getAttribute('data-id');
      const product = PRODUCTS_DATABASE.find(p => p.id === productId);
      if (product) {
        const waUrl = WHATSAPP_CONFIG.generateProductChatUrl(product);
        logDebug(`Membuka WhatsApp untuk produk: ${product.name}`, { waUrl });
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
      return;
    }

    // Delegasi klik thumbnail gambar kartu
    const thumbWrap = e.target.closest('.product-card__thumb-wrap');
    if (thumbWrap) {
      const card = thumbWrap.closest('.product-card');
      const productId = card ? card.getAttribute('data-product-id') : null;
      if (productId) {
        logDebug(`Thumbnail diklik untuk produk: ${productId}`);
        ModalManager.open(productId);
      }
    }
  });
}

/* ==========================================================================
   9. BOOTSTRAP INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  logDebug('Kebunara Application initialized successfully.');
  AppState.loadCartFromStorage();
  ModalManager.init();
  CartDrawerManager.init();
  ViewAllRosesManager.init();
  GalleryManager.init();
  InfoModalManager.init();
  setupHeroFeatureBadges();
  setupCareAccordion();
  setupFooterAccordion();
  setupProductCardInteractions();
  setupNavigationAndHeader();
});