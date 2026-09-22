import './style.css'

const whatsappUrl = `https://api.whatsapp.com/send/?phone=5521988404868&text=${encodeURIComponent(
  'Olá, Serena! Vim pelo link da bio e quero conhecer os modelos disponíveis ☀️'
)}`

document.querySelector('#app').innerHTML = `
  <main class="page">
    <div class="shell">
      <header class="site-header">
        <a class="brand" href="#inicio" aria-label="Serena Biquínis — início">
          <img src="/photos/serena.png" alt="Serena Biquínis" />
        </a>
        <div class="header-side">
          <span>Moda praia • Rio de Janeiro</span>
          <button id="shareButton" class="share-button" type="button" aria-label="Compartilhar página">
            <i class="fa-solid fa-arrow-up-from-bracket" aria-hidden="true"></i>
          </button>
        </div>
      </header>

      <section class="hero" id="inicio" aria-labelledby="hero-title">
        <div class="hero-heading">
          <div>
            <p class="eyebrow"><span class="eyebrow-line"></span> O universo Serena</p>
            <h1 id="hero-title">Vista o <em>verão.</em></h1>
          </div>
          <p class="hero-intro">Biquínis para viver o sol do seu jeito. Escolha por onde começar.</p>
        </div>

        <div class="film">
          <div class="film-window">
            <video
              class="film-video"
              src="/videos/beach-pdv.mp4"
              poster="/photos/beach.webp"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
              aria-hidden="true"
            ></video>
          </div>
          <div class="film-shade" aria-hidden="true"></div>
          <span class="film-note">Um pedacinho do nosso verão <i class="fa-solid fa-sun" aria-hidden="true"></i></span>
        </div>
      </section>

      <section class="destinations" aria-labelledby="destinations-title">
        <div class="section-heading">
          <h2 id="destinations-title">Encontre seu caminho.</h2>
          <span>01 — 04</span>
        </div>

        <nav class="actions" aria-label="Links da Serena">
          <a class="action action-primary" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
            <span class="action-number">01 / COMPRE COM A GENTE</span>
            <span class="primary-copy">
              <strong>Seu próximo biquíni começa aqui.</strong>
              <small>Fale com a Serena e encontre modelo, cor e tamanho.</small>
            </span>
            <span class="primary-foot">
              <span><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Abrir WhatsApp</span>
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </span>
          </a>

          <a class="action action-store" href="https://www.google.com/maps?cid=16150482244425516102" target="_blank" rel="noopener noreferrer">
            <span class="action-number">02 / VENHA NOS VER</span>
            <span class="secondary-copy">
              <strong>Visite a loja.</strong>
              <small>Rua Pôrto Alegre, 56 · Engenho Novo<br>Rio de Janeiro, RJ · 20715-260</small>
            </span>
            <span class="action-arrow" aria-hidden="true"><i class="fa-brands fa-google map-icon"></i><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
          </a>

          <a class="action action-social action-instagram" href="https://www.instagram.com/serena_biquiniis/" target="_blank" rel="noopener noreferrer">
            <span class="action-number">03 / INSPIRE-SE</span>
            <span class="social-line"><i class="fa-brands fa-instagram" aria-hidden="true"></i><strong>Instagram</strong><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
          </a>

          <a class="action action-social action-tiktok" href="https://www.tiktok.com/@serenabiquiniis01" target="_blank" rel="noopener noreferrer">
            <span class="action-number">04 / ACOMPANHE</span>
            <span class="social-line"><i class="fa-brands fa-tiktok" aria-hidden="true"></i><strong>TikTok</strong><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></span>
          </a>
        </nav>
      </section>

      <footer class="footer">
        <span>Serena Biquínis © ${new Date().getFullYear()}</span>
        <span>Feita para viver o sol.</span>
      </footer>
    </div>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </main>
`

const video = document.querySelector('.film-video')
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  video.pause()
}

const toast = document.querySelector('#toast')
let toastTimeout

function showToast(message) {
  toast.textContent = message
  toast.classList.add('show')
  clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2600)
}

document.querySelector('#shareButton').addEventListener('click', async () => {
  try {
    if (navigator.share) {
      await navigator.share({
        title: 'Serena Biquínis',
        text: 'Conheça a Serena Biquínis',
        url: window.location.href,
      })
      return
    }

    await navigator.clipboard.writeText(window.location.href)
    showToast('Link copiado ☀️')
  } catch (error) {
    if (error?.name !== 'AbortError') {
      showToast('Copie o endereço do navegador para compartilhar')
    }
  }
})
