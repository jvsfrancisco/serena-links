import './style.css'

const whatsappUrl = `https://api.whatsapp.com/send/?phone=5521988404868&text=${encodeURIComponent(
  'Olá, Serena! Vim pelo link da bio e quero conhecer os modelos disponíveis ☀️'
)}`

document.querySelector('#app').innerHTML = `
  <main class="page" id="inicio">
    <div class="content">
      <header class="header">
        <a class="brand" href="#inicio" aria-label="Serena Biquínis — início">
          <img src="/photos/serena.png" alt="Serena Biquínis" />
        </a>
        <p>Moda praia · Rio de Janeiro</p>
      </header>

      <nav class="links" aria-label="Links da Serena">
        <a class="link link-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">
          <span class="link-title"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Comprar pelo WhatsApp</span>
          <i class="fa-solid fa-arrow-up-right-from-square link-arrow" aria-hidden="true"></i>
        </a>

        <a class="link link-store" href="https://www.google.com/maps?cid=16150482244425516102" target="_blank" rel="noopener noreferrer">
          <span class="link-title">
            <i class="fa-brands fa-google" aria-hidden="true"></i>
            <span>
              <strong>Visitar a loja</strong>
              <small>Rua Pôrto Alegre, 56 · Engenho Novo<br>Rio de Janeiro, RJ · 20715-260</small>
            </span>
          </span>
          <i class="fa-solid fa-arrow-up-right-from-square link-arrow" aria-hidden="true"></i>
        </a>

        <a class="link link-instagram" href="https://www.instagram.com/serena_biquiniis/" target="_blank" rel="noopener noreferrer">
          <span class="link-title"><i class="fa-brands fa-instagram" aria-hidden="true"></i> Instagram</span>
          <i class="fa-solid fa-arrow-up-right-from-square link-arrow" aria-hidden="true"></i>
        </a>

        <a class="link link-tiktok" href="https://www.tiktok.com/@serenabiquiniis01" target="_blank" rel="noopener noreferrer">
          <span class="link-title"><i class="fa-brands fa-tiktok" aria-hidden="true"></i> TikTok</span>
          <i class="fa-solid fa-arrow-up-right-from-square link-arrow" aria-hidden="true"></i>
        </a>
      </nav>

      <div class="film">
        <video
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

      <footer class="footer">
        <span>© ${new Date().getFullYear()} Serena Biquínis</span>
        <button id="shareButton" class="share-button" type="button">Compartilhar <i class="fa-solid fa-arrow-up-from-bracket" aria-hidden="true"></i></button>
      </footer>
    </div>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>
  </main>
`

const video = document.querySelector('.film video')
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
    showToast('Link copiado')
  } catch (error) {
    if (error?.name !== 'AbortError') {
      showToast('Copie o endereço do navegador para compartilhar')
    }
  }
})
