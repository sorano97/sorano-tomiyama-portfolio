import './style.css'
import { profile, works, techWorks, creativeWorks } from './data.js'
import heroImage from '../pictures/HERO.jpeg'
import aboutImage from '../pictures/ME.JPG'

const app = document.querySelector('#app')
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
const currentPath = basePath && location.pathname.startsWith(basePath)
  ? location.pathname.slice(basePath.length)
  : location.pathname
const path = currentPath.replace(/\/$/, '') || '/'
const href = (target = '/') => `${basePath}${target}` || '/'

const placeholder = (title, description, className = '') => `
  <div class="placeholder ${className}" role="img" aria-label="${title} — ${description}">
    <span>${title}</span><small>${description.replace(/\n/g, '<br>')}</small>
  </div>`

const workMedia = (work, className = '') => work.image
  ? `<img class="project-image ${className}" src="${work.image}" alt="${work.title}">`
  : placeholder(work.imageTitle, work.imageDescription, className)

const header = (detail = false) => `
  <header class="site-header">
    <a class="brand" href="${href('/')}">Sorano</a>
    <button class="menu-button" aria-label="メニューを開く" aria-expanded="false"><i></i><i></i></button>
    <nav class="nav" aria-label="メインナビゲーション">
      ${detail ? `<a href="${href('/')}">HOME</a><a href="${href('/#works')}">WORKS</a>` : '<a href="#about">ABOUT</a><a href="#works">WORKS</a><a href="#sns">SNS</a>'}
    </nav>
  </header>`

const footer = () => `<footer>© 2026 Sorano Tomiyama</footer>`

function home() {
  document.title = 'Sorano Tomiyama — Portfolio'
  app.innerHTML = `${header()}
    <main>
      <section class="hero" style="--hero-image: url('${heroImage}')">
        <div class="hero-center">
          <h1>Sorano Tomiyama</h1>
          <p>好奇心のままに。</p>
        </div>
        <a class="scroll-cue" href="#about">SCROLL<span>↓</span></a>
      </section>
      <section id="about" class="section about reveal">
        <div class="about-image-wrap"><img class="about-image" src="${aboutImage}" alt="冨山そらののポートレート"></div>
        <div class="about-content"><p class="eyebrow">ABOUT</p>
          <div class="intro">${profile.introduction.map(x => `<p>${x}</p>`).join('')}</div>
          <div class="interests">${profile.interests.map(x => `<span>${x}</span>`).join('')}</div>
        </div>
      </section>
      <section id="works" class="section works reveal"><div class="section-heading"><p class="eyebrow">SELECTED PROJECTS</p><h2>WORKS</h2><p>01 — ${String(works.length).padStart(2, '0')}</p></div>
        <div class="work-track" data-infinite-carousel>${[...works, ...works, ...works].map((w, i) => `<a class="work-card" href="${href(`/works/${w.slug}`)}">
          <div class="work-visual work-visual-${w.slug}">${workMedia(w)}<span class="view-project">VIEW PROJECT</span></div>
          <div class="work-meta"><p>${String((i % works.length) + 1).padStart(2, '0')} / ${w.category}</p><h3>${w.title}</h3><p class="work-description">${w.description}</p></div></a>`).join('')}</div>
        <p class="swipe-hint">DRAG / SWIPE →</p>
      </section>
      <section id="sns" class="section sns reveal"><div class="section-heading"><p class="eyebrow">FIND ME ONLINE</p><h2>SNS</h2></div>
        <div class="socials">${profile.socials.map(s => `<a href="${s.url}"${s.url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${s.label}<span>↗</span></a>`).join('')}</div>
      </section>
    </main>${footer()}`
}

function detailPage(work) {
  const next = works[(works.indexOf(work) + 1) % works.length]
  document.title = `${work.title} — Sorano Tomiyama`
  app.innerHTML = `${header(true)}<main class="detail">
    <section class="detail-hero reveal"><div class="detail-title"><a href="${href('/#works')}" class="back">← ALL WORKS</a><p class="eyebrow">${work.category}</p><h1>${work.title}</h1><p class="summary">${work.summary}</p></div>
      <dl class="project-info">${[['CATEGORY', work.category], ['YEAR', work.year], ['ROLE', work.role], ['TOOLS', work.tools], ['TEAM', work.team], ['STATUS', work.status]].map(([a,b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>
    </section>
    <div class="detail-body">
      <div class="detail-cover reveal">${workMedia(work)}</div>
      ${work.sections.map((section, i) => renderStory(section, work.detailImages[i])).join('')}
    </div>
    <a class="next-project reveal" href="${href(`/works/${next.slug}`)}"><p>NEXT PROJECT →</p><div><h2>${next.title}</h2>${workMedia(next)}</div></a>
  </main>${footer()}`
}

function renderStory(section, image) {
  return `<section class="story reveal">
    <p class="story-number">${section.number} / ${section.label}</p>
    <div class="story-copy">
      <h2>${section.title}</h2>
      ${section.paragraphs.map(text => `<p>${text}</p>`).join('')}
      ${section.bullets ? `<ul>${section.bullets.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
      ${section.after ? `<p>${section.after}</p>` : ''}
      ${section.quote ? `<blockquote>${section.quote}</blockquote>` : ''}
    </div>
  </section>
  ${image ? `<div class="story-image reveal">${placeholder(image[0], image[1])}</div>` : ''}`
}

function techPage() {
  document.title = 'TECH WORKS — Sorano Tomiyama'
  app.innerHTML = `${header(true)}<main class="gallery-page"><section class="gallery-intro reveal"><a href="${href('/#works')}" class="back">← ALL WORKS</a><p class="eyebrow">TECHNOLOGY</p><h1>TECH WORKS</h1><p>プログラミングや電子工作を通して、興味を実際に動く形へ変えた作品を紹介します。</p></section>
    <section class="tech-grid">${techWorks.map((x,i) => `<article class="tech-item reveal">${placeholder(x[0], x[1])}<p class="eyebrow">0${i+1} / ${x[2]}</p><h2>${x[0]}</h2><p>${x[3]}</p><a href="#">VIEW PROJECT ↗</a></article>`).join('')}</section>
    ${nextLink('creative')}</main>${footer()}`
}

function creativePage() {
  document.title = 'CREATIVE WORKS — Sorano Tomiyama'
  app.innerHTML = `${header(true)}<main class="gallery-page"><section class="gallery-intro reveal"><a href="${href('/#works')}" class="back">← ALL WORKS</a><p class="eyebrow">ART & DESIGN</p><h1>CREATIVE<br>WORKS</h1><p>イラスト、絵画、グラフィックデザイン。手を動かしながら生まれた創作を集めています。</p></section>
    <section class="creative-grid">${creativeWorks.map((x,i) => `<figure class="creative-item ${x[2]} reveal">${placeholder(x[0], x[1])}<figcaption><span>0${i+1}</span>${x[0]}</figcaption></figure>`).join('')}</section>
    ${nextLink('morillion')}</main>${footer()}`
}

function nextLink(slug) {
  const next = works.find(w => w.slug === slug)
  return `<a class="next-project reveal" href="${href(`/works/${next.slug}`)}"><p>NEXT PROJECT →</p><div><h2>${next.title}</h2>${workMedia(next)}</div></a>`
}

function notFound() {
  app.innerHTML = `${header(true)}<main class="not-found"><p class="eyebrow">404</p><h1>Page not found.</h1><a href="${href('/')}">BACK TO HOME →</a></main>${footer()}`
}

if (path === '/') home()
else if (path === '/works/tech') techPage()
else if (path === '/works/creative') creativePage()
else if (path.startsWith('/works/')) {
  const work = works.find(w => w.slug === path.split('/').pop())
  work ? detailPage(work) : notFound()
} else notFound()

const menuButton = document.querySelector('.menu-button')
menuButton?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open')
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く')
})
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')))

const workCarousel = document.querySelector('[data-infinite-carousel]')
if (workCarousel) {
  const setLength = works.length
  let setWidth = 0
  let repositioning = false

  const placeAtMiddleSet = () => {
    const cards = workCarousel.children
    if (cards.length < setLength * 3) return
    setWidth = cards[setLength].offsetLeft - cards[0].offsetLeft
    workCarousel.scrollLeft = setWidth
  }

  requestAnimationFrame(placeAtMiddleSet)
  window.addEventListener('resize', placeAtMiddleSet)
  workCarousel.addEventListener('scroll', () => {
    if (!setWidth || repositioning) return
    const position = workCarousel.scrollLeft
    if (position < setWidth * .5 || position > setWidth * 1.5) {
      repositioning = true
      workCarousel.scrollLeft = position < setWidth * .5 ? position + setWidth : position - setWidth
      requestAnimationFrame(() => { repositioning = false })
    }
  }, { passive: true })
}

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
}), { threshold: .08 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
