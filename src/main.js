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

const instagramIcon = `
  <span class="network-icon network-icon--instagram" aria-hidden="true">
    <svg class="icon-neutral" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.7" r="1" class="icon-dot" />
    </svg>
    <svg class="icon-brand" viewBox="0 0 24 24">
      <defs><linearGradient id="instagram-gradient" x1="2" y1="22" x2="22" y2="2"><stop stop-color="#ffd600"/><stop offset=".38" stop-color="#ff0169"/><stop offset=".72" stop-color="#d300c5"/><stop offset="1" stop-color="#7638fa"/></linearGradient></defs>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#instagram-gradient)" />
      <circle cx="12" cy="12" r="4" stroke="url(#instagram-gradient)" />
      <circle cx="17.4" cy="6.7" r="1" fill="#d300c5" stroke="none" />
    </svg>
  </span>`

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
          <h1 id="page-title">Biquínis para brilhar em <em>qualquer verão.</em></h1>
          <p class="bio-line">Modelos coloridos, loja no Engenho Novo e envios para todo o Brasil.</p>
        </div>

        <div class="photo-stage" aria-label="Destaques da Serena">
          <a class="photo-card photo-main tilt-card" data-tilt href="${links.novidades}" target="_blank" rel="noreferrer">
            <img src="/photos/instagram-novidades.webp" alt="Biquínis coloridos nas araras da loja Serena" />
            <span class="photo-caption"><small>01</small> Novidades na arara ${arrow}</span>
          </a>

          <a class="photo-card photo-client tilt-card" data-tilt href="${links.clientes}" target="_blank" rel="noreferrer">
            <img src="/photos/instagram-praia.webp" alt="Cliente Serena de biquíni em uma praia do Rio de Janeiro" />
            <span class="photo-caption"><small>02</small> Clientes Serena ${arrow}</span>
          </a>

          <a class="photo-card photo-store tilt-card" data-tilt href="${links.maps}" target="_blank" rel="noreferrer">
            <img src="/photos/instagram-loja.webp" alt="Fachada da loja Serena Biquínis no Engenho Novo" />
            <span class="photo-caption"><small>03</small> Nossa loja ${arrow}</span>
          </a>

          <span class="tape tape-one" aria-hidden="true"></span>
          <span class="tape tape-two" aria-hidden="true"></span>
          <div class="hanging-tag" aria-hidden="true">
            <img src="/photos/serena-symbol.png" alt="" />
          </div>
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
            <svg viewBox="0 0 24 24"><path d="M20.5 11.7a8.3 8.3 0 0 1-12.3 7.2L4 20l1.1-4a8.3 8.3 0 1 1 15.4-4.3Z"/><path d="M8.8 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.6 1 1.4 1.8 2.4 2.4.3.2.5.2.7 0l.8-1c.2-.3.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.5-.8 2.1-.7.7-1.7.9-2.8.6-1.1-.3-2.5-.9-4.1-2.3-1.3-1.2-2.2-2.6-2.5-3.7-.4-1-.1-2.3.4-2.8.4-.4.8-.5 1.3-.4Z"/></svg>
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
              <svg class="icon-neutral" viewBox="0 0 24 24"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>
              <svg class="icon-brand google-pin" viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5 8 11 8 11s8-6 8-11a8 8 0 0 0-8-8Z" fill="#4285f4" stroke="none"/><path d="M12 2a8 8 0 0 1 7.2 4.5L12 10Z" fill="#34a853" stroke="none"/><path d="m12 10 5.2 6.2A34 34 0 0 1 12 21Z" fill="#fbbc04" stroke="none"/><path d="M4.2 8.2 12 10l-4.8 6A11 11 0 0 1 4 10c0-.6.1-1.2.2-1.8Z" fill="#ea4335" stroke="none"/><circle cx="12" cy="10" r="2.6" fill="#fff" stroke="none"/></svg>
            </span>
            <span><strong>Visite a loja</strong><small>Rua Pôrto Alegre, 56 · Engenho Novo</small></span>
            ${arrow}
          </a>

          <a class="link-row" data-network="instagram" href="${links.instagram}" target="_blank" rel="noreferrer">
            ${instagramIcon}
            <span><strong>Instagram</strong><small>@serena_biquiniis</small></span>
            ${arrow}
          </a>

          <a class="link-row" data-network="tiktok" href="${links.tiktok}" target="_blank" rel="noreferrer">
            <span class="network-icon network-icon--tiktok" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M15 4v10.2a4.7 4.7 0 1 1-4-4.6v3.2a1.7 1.7 0 1 0 1 1.5V4h3Zm0 0c.4 2.6 2 4.1 4.5 4.5"/></svg>
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
  </div>

  <div class="toast" role="status" aria-live="polite">Link copiado</div>
`

const shareButton = document.querySelector('.share-button')
const toast = document.querySelector('.toast')

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
    toast.classList.add('is-visible')
    window.setTimeout(() => toast.classList.remove('is-visible'), 2200)
  } catch (error) {
    if (error?.name !== 'AbortError') {
      window.location.href = links.whatsapp
    }
  }
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
