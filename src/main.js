import './style.css'

const links = {
  whatsapp:
    'https://wa.me/5521988404868?text=Ol%C3%A1%2C%20Serena!%20Vim%20pelo%20link%20da%20bio%20e%20quero%20conhecer%20os%20modelos%20dispon%C3%ADveis%20%E2%98%80%EF%B8%8F',
  maps: 'https://www.google.com/maps?cid=16150482244425516102',
  instagram: 'https://www.instagram.com/serena_biquiniis/',
  tiktok: 'https://www.tiktok.com/@serenabiquiniis01',
  novidades: 'https://www.instagram.com/serena_biquiniis/reel/DdotGzDRkN9/',
  clientes: 'https://www.instagram.com/stories/highlights/17902169966960264/',
}

const arrow = '<span class="arrow" aria-hidden="true">↗</span>'

document.querySelector('#app').innerHTML = `
  <div class="site">
    <header class="topbar">
      <a class="brand" href="${links.instagram}" target="_blank" rel="noreferrer" aria-label="Serena Biquínis no Instagram">
        <img src="/photos/serena.png" alt="Serena Biquínis" />
      </a>

      <div class="topbar-right">
        <a class="store-address" href="${links.maps}" target="_blank" rel="noreferrer">
          Loja física <span>·</span> Rua Pôrto Alegre, 56
        </a>
        <button class="share-button" type="button" aria-label="Compartilhar esta página">
          <span>Compartilhar</span> ${arrow}
        </button>
      </div>
    </header>

    <main class="main-grid">
      <section class="visual-side" aria-labelledby="page-title">
        <div class="intro">
          <p class="overline">Serena Biquínis · Rio de Janeiro</p>
          <h1 id="page-title">Biquínis para<br />brilhar em <span>qualquer verão.</span></h1>
          <p class="bio-line">Modelos coloridos, loja no Engenho Novo e envios para todo o Brasil.</p>
        </div>

        <div class="photo-stage" aria-label="Destaques da Serena">

          <a class="photo-card photo-main tilt-card" data-tilt href="${links.novidades}" target="_blank" rel="noreferrer">
            <img src="/photos/instagram-novidades.webp" alt="Biquínis coloridos nas araras da loja Serena" />
            <span class="photo-caption"><small>01</small> Novidades na arara ${arrow}</span>
          </a>

          <a class="photo-card photo-client tilt-card" data-tilt href="${links.clientes}" target="_blank" rel="noreferrer">
            <img src="/photos/instagram-clientes.webp" alt="Cliente Serena de biquíni na praia" />
            <span class="photo-caption"><small>02</small> Clientes Serena ${arrow}</span>
          </a>

          <a class="photo-card photo-store tilt-card" data-tilt href="${links.maps}" target="_blank" rel="noreferrer">
            <img src="/photos/instagram-loja.webp" alt="Fachada da loja Serena Biquínis no Engenho Novo" />
            <span class="tape tape-two" aria-hidden="true"></span>
            <span class="photo-caption"><small>03</small> Nossa loja ${arrow}</span>
          </a>

          <span class="tape tape-one" aria-hidden="true"></span>
          <span class="hanging-tag" aria-hidden="true">
            <img src="/photos/serena-symbol.png" alt="" />
          </span>
        </div>
      </section>

      <section class="links-side" aria-label="Links da Serena Biquínis">
        <div class="links-heading">
          <span class="sun-stamp" aria-hidden="true"><img src="/photos/serena-symbol.png" alt="" /></span>
          <div>
            <p class="mini-label">Fale com a gente</p>
            <h2>Por onde você quer começar?</h2>
          </div>
        </div>

        <a class="whatsapp-link" href="${links.whatsapp}" target="_blank" rel="noreferrer">
          <span class="whatsapp-symbol" aria-hidden="true">
            <img src="/icons/whatsapp-color.svg" alt="" />
          </span>
          <span>
            <small>Atendimento pelo WhatsApp</small>
            <strong>Quero ver os modelos</strong>
          </span>
          ${arrow}
        </a>

        <nav class="link-list" aria-label="Outros links">
          <a class="link-row" data-network="google" href="${links.maps}" target="_blank" rel="noreferrer">
            <span class="network-icon network-icon--map" aria-hidden="true">
              <img class="icon-neutral" src="/icons/google-maps.svg" alt="" />
              <img class="icon-brand" src="/icons/google-maps-color.svg" alt="" />
            </span>
            <span><strong>Visite a loja</strong><small>Rua Pôrto Alegre, 56 · Engenho Novo</small></span>
            ${arrow}
          </a>

          <a class="link-row" data-network="instagram" href="${links.instagram}" target="_blank" rel="noreferrer">
            <span class="network-icon" aria-hidden="true">
              <img class="icon-neutral" src="/icons/instagram.svg" alt="" />
              <img class="icon-brand" src="/icons/instagram-color.svg" alt="" />
            </span>
            <span><strong>Instagram</strong><small>@serena_biquiniis</small></span>
            ${arrow}
          </a>

          <a class="link-row" data-network="tiktok" href="${links.tiktok}" target="_blank" rel="noreferrer">
            <span class="network-icon network-icon--tiktok" aria-hidden="true">
              <img class="icon-neutral" src="/icons/tiktok.svg" alt="" />
              <img class="icon-brand" src="/icons/tiktok-color.svg" alt="" />
            </span>
            <span><strong>TikTok</strong><small>@serenabiquiniis01</small></span>
            ${arrow}
          </a>
        </nav>

        <div class="shop-details">
          <p><span>Loja física</span> Engenho Novo, Rio de Janeiro</p>
          <p><span>Entregas</span> Todo o Brasil</p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <button class="footer-shell" type="button" aria-label="Descobrir o segredo da concha" title="Tem um segredo aqui">🐚</button>
      <span>Feito com sol, sal &amp; código por</span>
      <img src="/icons/quazz.svg" alt="Quazz" />
    </footer>
  </div>

  <div class="toast" role="status" aria-live="polite">Link copiado</div>
`

const shareButton = document.querySelector('.share-button')
const toast = document.querySelector('.toast')
const footerShell = document.querySelector('.footer-shell')

const showToast = (message) => {
  toast.textContent = message
  toast.classList.add('is-visible')
  window.setTimeout(() => {
    toast.classList.remove('is-visible')
    window.setTimeout(() => { toast.textContent = 'Link copiado' }, 220)
  }, 2200)
}

shareButton.addEventListener('click', async () => {
  const shareData = {
    title: 'Serena Biquínis',
    text: 'Biquínis para brilhar em qualquer verão ☀️',
    url: window.location.href,
  }

  try {
    if (navigator.share) {
      await navigator.share(shareData)
      return
    }

    await navigator.clipboard.writeText(window.location.href)
    showToast('Link copiado')
  } catch (error) {
    if (error?.name !== 'AbortError') {
      window.location.href = links.whatsapp
    }
  }
})

footerShell.addEventListener('click', () => {
  footerShell.classList.remove('is-waving')
  window.requestAnimationFrame(() => footerShell.classList.add('is-waving'))
  showToast('psiu… dá pra ouvir o mar daqui 🌊')
})

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

if (!reduceMotion.matches && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('[data-tilt]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      card.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`)
      card.style.setProperty('--tilt-y', `${(x * 8).toFixed(2)}deg`)
      card.style.setProperty('--glow-x', `${((x + 0.5) * 100).toFixed(0)}%`)
      card.style.setProperty('--glow-y', `${((y + 0.5) * 100).toFixed(0)}%`)
    })

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg')
      card.style.setProperty('--tilt-y', '0deg')
    })
  })
}
