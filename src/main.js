import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <header class="profile">
      <div class="logo-container">
        <img src="/photos/serena.png" alt="Serena Biquínis Logo" class="logo" onerror="this.style.display='none'; document.getElementById('fallback-logo').style.display='flex';" />
        <div id="fallback-logo" class="fallback-logo" style="display: none;">
          <h1 class="brand-name">Serena</h1>
          <p class="brand-subtitle">B I Q U Í N I S</p>
        </div>
      </div>
      <p class="bio">Moda praia com elegância e conforto. ☀️🌊</p>
    </header>

    <div class="links">
      <a href="https://www.instagram.com/serena_biquiniis/" target="_blank" class="link-card instagram">
        <i class="fab fa-instagram icon"></i>
        <span>Instagram</span>
      </a>
      
      <a href="https://api.whatsapp.com/send/?phone=5521988404868&text&type=phone_number&app_absent=0&utm_source=ig" target="_blank" class="link-card whatsapp">
        <i class="fab fa-whatsapp icon"></i>
        <span>WhatsApp</span>
      </a>

      <a href="https://www.tiktok.com/@serenabiquiniis01" target="_blank" class="link-card tiktok">
        <i class="fab fa-tiktok icon"></i>
        <span>TikTok</span>
      </a>
    </div>

    <footer>
      <p>© ${new Date().getFullYear()} Serena Biquínis. Todos os direitos reservados.</p>
    </footer>
  </main>
`
