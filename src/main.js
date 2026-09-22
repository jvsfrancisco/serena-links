import './style.css'

const whatsappUrl = `https://api.whatsapp.com/send/?phone=5521988404868&text=${encodeURIComponent(
  'Olá, Serena! Vim pelo link da bio e quero conhecer os modelos disponíveis ☀️'
)}`

document.querySelector('#app').innerHTML = `
  <main class="page">
    <div class="ambient" aria-hidden="true"></div>

    <div class="experience">
      <section class="film" aria-label="Praia da Serena">
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
        <div class="film-shade" aria-hidden="true"></div>
        <div class="film-top">
          <span class="film-label">Serena Biquínis</span>
          <button class="share-button" id="shareButton" type="button" aria-label="Compartilhar página">
            <i class="fa-solid fa-arrow-up-from-bracket" aria-hidden="true"></i>
          </button>
        </div>
        <p class="film-caption"><span class="caption-line"></span> O seu lugar ao sol</p>
      </section>

      <section class="content" aria-labelledby="page-title">
        <header class="intro">
          <div class="brand-chip">
            <span class="brand-symbol" aria-hidden="true">
              <img src="/photos/serena.png" alt="" />
            </span>
            <span>Serena Biquínis</span>
          </div>
          <h1 id="page-title">O verão é <em>seu.</em></h1>
          <p class="lead">Encontre seu próximo biquíni e aproveite cada dia de sol do seu jeito.</p>
        </header>

        <nav class="links" aria-label="Links da Serena">
          <a class="primary-link" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            <span>Escolher meu biquíni</span>
            <i class="fa-solid fa-arrow-right arrow" aria-hidden="true"></i>
          </a>

          <a class="link-card" href="https://share.google/tF9dgYj1NQwDSUoFP" target="_blank" rel="noopener noreferrer">
            <span class="link-icon"><i class="fa-solid fa-location-dot" aria-hidden="true"></i></span>
            <span class="link-copy"><strong>Visitar a loja</strong><small>Venha conhecer a Serena no Rio</small></span>
            <i class="fa-solid fa-arrow-up-right-from-square link-out" aria-hidden="true"></i>
          </a>

          <a class="link-card" href="https://www.instagram.com/serena_biquiniis/" target="_blank" rel="noopener noreferrer">
            <span class="link-icon"><i class="fa-brands fa-instagram" aria-hidden="true"></i></span>
            <span class="link-copy"><strong>Instagram</strong><small>Novidades, looks e inspiração</small></span>
            <i class="fa-solid fa-arrow-up-right-from-square link-out" aria-hidden="true"></i>
          </a>

          <a class="link-card" href="https://www.tiktok.com/@serenabiquiniis01" target="_blank" rel="noopener noreferrer">
            <span class="link-icon"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></span>
            <span class="link-copy"><strong>TikTok</strong><small>Bastidores e combinações</small></span>
            <i class="fa-solid fa-arrow-up-right-from-square link-out" aria-hidden="true"></i>
          </a>
        </nav>

        <footer class="footer">
          <span>Serena Biquínis © ${new Date().getFullYear()}</span>
          <span>Feita para viver o sol.</span>
        </footer>
      </section>
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
