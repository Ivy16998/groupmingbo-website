/**
 * SilicOne - Main Application
 * Handles i18n, navigation, products, modals, inquiries
 */
(function() {
  'use strict';
  let currentLang = 'en';
  let currentFilter = 'all';
  let filteredProducts = [...products];

  // ==================== i18n ====================
  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n['en'][key] || key;
  }

  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('silicon_lang', lang);
    
    // Update buttons
    document.querySelectorAll('.lang-switcher button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      el.textContent = t(key);
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    
    // Update meta
    document.title = t('meta_title');
    document.querySelector('meta[name="description"]').content = t('meta_desc');
    
    // Re-render products
    renderProducts();
    
    // Re-render cases
    renderCases();
  }

  // ==================== Navigation ====================
  function initNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.header-nav');
    
    menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
    
    // Smooth scroll for nav links
    document.querySelectorAll('.header-nav a[href^="#"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        nav.classList.remove('open');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offset = 80;
          window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }
      });
    });
    
    // Active nav on scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      header.classList.toggle('scrolled', window.scrollY > 50);
      
      // Scroll to top button
      const st = document.querySelector('.scroll-top');
      st.classList.toggle('visible', window.scrollY > 500);
      
      // Active section detection
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      document.querySelectorAll('.header-nav a').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
      });
    });
    
    // Scroll to top
    document.querySelector('.scroll-top').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==================== Products ====================
  function getCatCount(catId) {
    if (catId === 'all') return products.length;
    return products.filter(p => p.category === catId).length;
  }

  function getCategoryName(catId) {
    const map = {
      all: 'prod_filter_all', nose: 'prod_filter_nose', ear: 'prod_filter_ear',
      temple: 'prod_filter_temple', strap: 'prod_filter_strap',
      smart: 'prod_filter_smart', kit: 'prod_filter_kit'
    };
    return t(map[catId] || 'prod_filter_all');
  }

  function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    
    if (filteredProducts.length === 0) {
      grid.innerHTML = '<div class="text-center" style="grid-column:1/-1;padding:3rem;color:var(--text-light)">No products found. Try a different filter or search term.</div>';
      return;
    }
    
    grid.innerHTML = filteredProducts.map(p => {
      const priceMin = p.pricing[0]?.price || 'N/A';
      const catName = getCategoryName(p.category);
      const tagHtml = p.tags.map(tg => `<span class="prod-tag ${tg}">${tg.replace('-',' ')}</span>`).join('');
      const displayImg = p.image.startsWith('http') ? p.image : (p.image.startsWith('images/') ? p.image : 'https://sc02.alicdn.com/kf/Ad42770af4fda44178ce7fe0a0797c9c2R.png');
      
      return `
        <div class="product-card" onclick="window._openProductDetail('${p.id}')" role="button" tabindex="0">
          <div class="prod-img" style="background: url('${displayImg}') center/contain no-repeat; background-color: var(--gray-50);">
            ${tagHtml ? `<div class="prod-tags">${tagHtml}</div>` : ''}
          </div>
          <div class="prod-body">
            <div class="prod-cat">${catName}</div>
            <div class="prod-name">${p.name}</div>
            <div class="prod-meta">
              <span>${t('prod_moq')}: ${p.moq} ${t('custom_pcs')}</span>
              <span class="prod-price">${t('prod_price_tier')}: ${priceMin}</span>
            </div>
          </div>
          <div class="prod-footer">
            <span style="font-size:0.82rem;color:var(--text-light)">⏱ ${p.leadtime}</span>
            <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();window._openProductDetail('${p.id}')">${t('prod_inquiry_btn')}</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function filterProducts(category, searchTerm) {
    const search = (searchTerm || '').toLowerCase().trim();
    filteredProducts = products.filter(p => {
      const catMatch = category === 'all' || p.category === category;
      const searchMatch = !search || 
        p.name.toLowerCase().includes(search) ||
        p.nameCN.includes(search) ||
        p.id.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search);
      return catMatch && searchMatch;
    });
    renderProducts();
  }

  function initProducts() {
    // Filter buttons
    document.querySelectorAll('.product-filters .filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.product-filters .filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;
        const searchTerm = document.getElementById('product-search-input')?.value || '';
        filterProducts(currentFilter, searchTerm);
      });
    });
    
    // Search
    const searchInput = document.getElementById('product-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        filterProducts(currentFilter, this.value);
      });
    }
    
    // Update category counts
    document.querySelectorAll('.cat-count').forEach(el => {
      const catId = el.dataset.cat;
      if (catId) el.textContent = `${getCatCount(catId)} Products`;
    });
    
    renderProducts();
  }

  // ==================== Product Detail Modal ====================
  window._openProductDetail = function(productId) {
    const p = products.find(pr => pr.id === productId);
    if (!p) return;
    
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('product-modal-body');
    if (!modal || !body) return;
    
    const tagHtml = p.tags.map(tg => `<span class="prod-tag ${tg}">${tg.replace('-',' ')}</span>`).join('');
    const pricingRows = p.pricing.map((pr, i) => 
      `<tr><td>${pr.qty} ${t('custom_pcs')}</td><td>${pr.price}</td></tr>`
    ).join('');
    const specRows = Object.entries(p.specs).map(([k, v]) => {
      const label = k.charAt(0).toUpperCase() + k.slice(1).replace(/([A-Z])/g, ' $1');
      return `<div class="spec-row"><span class="spec-label">${label}</span><span class="spec-value">${v}</span></div>`;
    }).join('');
    
    const displayImg = p.image.startsWith('http') ? p.image : 'https://sc02.alicdn.com/kf/Ad42770af4fda44178ce7fe0a0797c9c2R.png';
    body.innerHTML = `
      <div class="modal-grid">
        <div class="modal-img" style="background: url('${displayImg}') center/contain no-repeat; background-color: var(--gray-50);"></div>
        <div class="modal-info">
          <h2>${p.name}</h2>
          <div class="modal-sku">SKU: ${p.id} ${tagHtml ? ' | ' + tagHtml : ''}</div>
          <p style="color:var(--text-light);font-size:0.9rem;margin-bottom:1rem;">${p.description}</p>
          
          <h4>${t('pdetail_specs')}</h4>
          <div class="modal-specs">${specRows}</div>
          
          <h4>${t('pdetail_pricing')}</h4>
          <table class="pricing-table">
            <thead><tr><th>${t('inq_quantity')}</th><th>${t('prod_price_tier')}</th></tr></thead>
            <tbody>${pricingRows}</tbody>
          </table>
          
          <div style="margin-top:1rem;padding:0.75rem;background:var(--gray-50);border-radius:var(--radius);font-size:0.85rem;">
            <strong>${t('pdetail_custom_opts')}:</strong> ${p.customOptions}
          </div>
          
          <button class="btn btn-primary btn-lg" style="margin-top:1.5rem;width:100%;justify-content:center;" onclick="document.getElementById('product-modal').classList.remove('active');document.getElementById('inquiry-product').value='${p.id} - ${p.name.replace(/'/g,"\\'")}';document.getElementById('inquiry-section').scrollIntoView({behavior:'smooth'});">${t('pdetail_request')}</button>
        </div>
      </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) { modal.classList.remove('active'); document.body.style.overflow = ''; }
  }

  // ==================== Inquiry Form ====================
  function initInquiryForm() {
    const forms = document.querySelectorAll('.inquiry-form form');
    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {};
        formData.forEach((v, k) => data[k] = v);
        
        // Save to localStorage as mock CRM
        const inquiries = JSON.parse(localStorage.getItem('silicon_inquiries') || '[]');
        inquiries.push({ ...data, timestamp: new Date().toISOString(), id: 'INQ-' + Date.now() });
        localStorage.setItem('silicon_inquiries', JSON.stringify(inquiries));
        
        // Show success
        const successEl = this.parentElement.querySelector('.form-success');
        if (successEl) {
          this.style.display = 'none';
          successEl.classList.add('show');
          setTimeout(() => { this.style.display = ''; successEl.classList.remove('show'); this.reset(); }, 5000);
        }
        
        // Trigger mock email notification
        console.log('[CRM] New inquiry saved:', data.id || 'INQ-' + Date.now());
        console.log('[Email] Auto-reply triggered to:', data.email);
        console.log('[CRM] Total inquiries:', inquiries.length);
      });
    });
  }

  // ==================== Cases ====================
  function renderCases() {
    const grid = document.getElementById('cases-grid');
    if (!grid) return;
    grid.innerHTML = caseStudies.map(cs => `
      <div class="case-card">
        <div class="case-icon">${cs.industry.includes('Smart') ? '🤖' : cs.industry.includes('DTC') ? '👓' : '🏪'}</div>
        <h3>${t(cs.titleKey)}</h3>
        <p>${t(cs.descKey)}</p>
        <div class="case-meta">
          <span>📍 ${cs.location}</span>
          <span>📦 ${cs.orderSize}</span>
          <span>📊 ${cs.results}</span>
        </div>
      </div>
    `).join('');
  }

  // ==================== Language Init ====================
  function initLanguage() {
    const saved = localStorage.getItem('silicon_lang') || 'en';
    switchLanguage(saved);
    
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
      btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
    });
  }

  // ==================== Smooth Scroll for CTA buttons ====================
  function initCTAButtons() {
    document.querySelectorAll('[data-scroll-to]').forEach(btn => {
      btn.addEventListener('click', function() {
        const target = document.querySelector(this.dataset.scrollTo);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ==================== Supplier Table ====================
  function renderSupplierTable() {
    const tbody = document.getElementById('supplier-tbody');
    if (!tbody) return;
    tbody.innerHTML = suppliers.map((s, i) => `
      <tr>
        <td><strong>${s.name}</strong></td>
        <td>${s.years} yrs</td>
        <td>${s.location}</td>
        <td>${s.moq}</td>
        <td>${s.sampleDays}</td>
        <td>${s.deliveryDays}</td>
        <td>${s.certs}</td>
        <td class="rating">${'★'.repeat(s.rating)}${'☆'.repeat(5-s.rating)}</td>
      </tr>
    `).join('');
  }

  // ==================== Export Inquiries ====================
  function initExportButton() {
    const btn = document.getElementById('export-inquiries');
    if (!btn) return;
    btn.addEventListener('click', function() {
      const inquiries = JSON.parse(localStorage.getItem('silicon_inquiries') || '[]');
      if (inquiries.length === 0) { alert('No inquiries yet.'); return; }
      
      // Generate CSV
      const headers = ['ID', 'Timestamp', 'Name', 'Company', 'Email', 'Phone', 'Product', 'Quantity', 'Custom Needs', 'Target Market'];
      const rows = inquiries.map(i => [i.id, i.timestamp, i.name, i.company, i.email, i.phone, i.product, i.quantity, i.custom_needs, i.target_market]);
      const csv = [headers, ...rows].map(r => r.map(c => '"' + (c||'').replace(/"/g,'""') + '"').join(',')).join('\n');
      
      const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = 'inquiries_export.csv';
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  // ==================== Init ====================
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initProducts();
    initInquiryForm();
    initCTAButtons();
    initExportButton();
    renderCases();
    renderSupplierTable();
    
    // Close modal on backdrop click
    document.getElementById('product-modal')?.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
    document.querySelector('.modal-close')?.addEventListener('click', closeModal);
    
    // ESC to close modal
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
