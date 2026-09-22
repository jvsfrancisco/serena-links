import './style.css'

const whatsappUrl = `https://api.whatsapp.com/send/?phone=5521988404868&text=${encodeURIComponent(
  'Olá, Serena! Vim pelo link da bio e quero conhecer os modelos disponíveis ☀️'
)}`

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="site-shell">
    <section class="hero" aria-labelledby="hero-title">
      <video class="hero-media" autoplay muted loop playsinline poster="/photos/beach.webp" aria-hidden="true">
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div class="hero-wash" aria-hidden="true"></div>

      <header class="hero-header">
        <img class="brand" src="/photos/serena-light.svg" alt="Serena Biquínis" />
        <button class="round-button" id="shareButton" type="button" aria-label="Compartilhar página">
          <i class="fa-solid fa-arrow-up-from-bracket" aria-hidden="true"></i>
        </button>
      </header>

      <div class="hero-copy">
        <p class="eyebrow"><span></span> Moda praia feita no Rio</p>
        <h1 id="hero-title">Seu verão<br /><em>começa aqui.</em></h1>
        <p class="hero-note">Biquínis que vestem conforto, confiança e dias de sol.</p>
        <a class="hero-cta" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
          <span>Descobrir meu Serena</span>
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>

      <button class="sound-toggle" id="soundToggle" type="button" aria-label="Ativar som do vídeo">
        <i class="fa-solid fa-volume-xmark" aria-hidden="true"></i>
        <span>som</span>
      </button>
    </section>

    <section class="content" aria-label="Links da Serena">
      <div class="intro-row reveal">
        <p>Escolha como encontrar<br />o seu próximo favorito.</p>
        <span>01 — 04</span>
      </div>

      <nav class="link-list" aria-label="Links principais">
        <a class="feature-link reveal" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
          <span class="link-index">01</span>
          <span class="link-copy">
            <strong>Comprar pelo WhatsApp</strong>
            <small>Atendimento próximo para escolher modelo e tamanho</small>
          </span>
          <span class="link-arrow" aria-hidden="true"><i class="fa-brands fa-whatsapp"></i></span>
        </a>

        <a class="feature-link store-link reveal" href="https://share.google/tF9dgYj1NQwDSUoFP" target="_blank" rel="noopener noreferrer">
          <span class="link-index">02</span>
          <span class="link-copy">
            <strong>Visitar a loja</strong>
            <small>Venha experimentar a Serena no Rio de Janeiro</small>
          </span>
          <span class="link-arrow" aria-hidden="true"><i class="fa-solid fa-location-dot"></i></span>
        </a>

        <a class="feature-link reveal" href="https://www.instagram.com/serena_biquiniis/" target="_blank" rel="noopener noreferrer">
          <span class="link-index">03</span>
          <span class="link-copy">
            <strong>Ver no Instagram</strong>
            <small>Lançamentos, provador e inspiração para o verão</small>
          </span>
          <span class="link-arrow" aria-hidden="true"><i class="fa-brands fa-instagram"></i></span>
        </a>

        <a class="feature-link reveal" href="https://www.tiktok.com/@serenabiquiniis01" target="_blank" rel="noopener noreferrer">
          <span class="link-index">04</span>
          <span class="link-copy">
            <strong>Acompanhar no TikTok</strong>
            <small>Bastidores, combinações e novidades da Serena</small>
          </span>
          <span class="link-arrow" aria-hidden="true"><i class="fa-brands fa-tiktok"></i></span>
        </a>
      </nav>

      <aside class="store-card reveal">
        <div class="store-photo" role="img" aria-label="Clima de praia da Serena"></div>
        <div class="store-info">
          <p class="eyebrow dark"><span></span> Experiência Serena</p>
          <h2>Do feed<br />para o provador.</h2>
          <p>Veja de perto as cores, sinta os tecidos e encontre a modelagem que é a sua cara.</p>
          <a href="https://share.google/tF9dgYj1NQwDSUoFP" target="_blank" rel="noopener noreferrer">
            Como chegar <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </aside>

      <footer class="footer reveal">
        <img src="/photos/serena.png" alt="" aria-hidden="true" />
        <div>
          <strong>Serena Biquínis</strong>
          <span>Feito com sol no Rio de Janeiro</span>
        </div>
        <a href="https://www.instagram.com/serena_biquiniis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram da Serena">
          <i class="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
      </footer>
    </section>
  </main>

  <div class="toast" id="toast" role="status" aria-live="polite">Link copiado ☀️</div>
`

const video = document.querySelector('.hero-media')
const soundToggle = document.querySelector('#soundToggle')
const soundIcon = soundToggle.querySelector('i')

soundToggle.addEventListener('click', () => {
  video.muted = !video.muted
  soundIcon.className = video.muted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high'
  soundToggle.querySelector('span').textContent = video.muted ? 'som' : 'mudo'
  soundToggle.setAttribute('aria-label', video.muted ? 'Ativar som do vídeo' : 'Desativar som do vídeo')
})

const toast = document.querySelector('#toast')
let toastTimeout

document.querySelector('#shareButton').addEventListener('click', async () => {
  const shareData = {
    title: 'Serena Biquínis',
    text: 'Conheça a Serena Biquínis',
    url: window.location.href,
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
      return
    }

    await navigator.clipboard.writeText(window.location.href)
    toast.classList.add('show')
    clearTimeout(toastTimeout)
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200)
  } catch (error) {
    if (error?.name !== 'AbortError') {
      toast.textContent = 'Copie o endereço do navegador para compartilhar'
      toast.classList.add('show')
      clearTimeout(toastTimeout)
      toastTimeout = setTimeout(() => toast.classList.remove('show'), 2600)
    }
  }
})

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
