import { useState } from 'react'
import './App.css'

const logoUrl = '/logoTvScore.png'

const posters = [
  {
    title: 'Oppenheimer',
    type: 'Filme',
    score: '8.9',
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=700&q=85',
  },
  {
    title: 'The Last of Us',
    type: 'Série',
    score: '9.2',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85',
  },
  {
    title: 'Interestelar',
    type: 'Filme',
    score: '9.0',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=700&q=85',
  },
]

function App() {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Navegação principal">
        <a className="brand" href="#top" aria-label="TV Score início">
          <img src={logoUrl} alt="TV Score" className="brand-logo" />
        </a>
        <button className="login-button" type="button">Entrar <span aria-hidden="true">→</span></button>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Seu catálogo, do seu jeito</p>
          <h1>Encontre algo<br /><em>incrível</em> para assistir.</h1>
          <p className="hero-description">Avalie, descubra e salve seus filmes e séries favoritos. O TV Score entende seu gosto e recomenda o próximo título da sua lista.</p>
          <button className="primary-button" type="button" onClick={() => setIsStarted(true)}>
            {isStarted ? 'Conta criada com sucesso' : 'Criar minha conta'} <span aria-hidden="true">→</span>
          </button>
          <p className="no-card">Já tem uma conta? <a href="#top">Entrar</a></p>
        </div>

        <div className="hero-visual" aria-label="Prévia do aplicativo TV Score">
          <div className="visual-glow" />
          <div className="app-preview">
            <div className="preview-topbar">
              <span className="preview-logo">
                <img src={logoUrl} alt="TV Score" className="preview-logo-image" />
              </span>
              <span className="avatar">JS</span>
            </div>
            <div className="preview-welcome"><small>Olá, José!</small><strong>O que vamos assistir hoje?</strong></div>
            <div className="preview-feature"><img src={posters[0].image} alt="Oppenheimer" /><div><span>DESTAQUE DA SEMANA</span><strong>Oppenheimer</strong><small>Uma história que vale seu tempo.</small><button type="button">Ver detalhes →</button></div></div>
            <div className="preview-heading"><strong>Em alta</strong><span>Ver todos →</span></div>
            <div className="preview-posters">{posters.slice(0, 3).map((poster) => <div className="mini-poster" key={poster.title}><div><img src={poster.image} alt={poster.title} /><span>★ {poster.score}</span></div><small>{poster.title}</small><em>{poster.type}</em></div>)}</div>
            <div className="preview-nav"><span className="active"><b>★</b>Início</span><span>⌕<small>Buscar</small></span><span>☰<small>Minha lista</small></span><span>◉<small>Perfil</small></span></div>
          </div>
          <div className="score-float"><span>★</span><strong>8.9</strong><small>avaliação média</small></div>
        </div>
      </section>

      <footer className="stats-footer" id="footer" aria-label="Indicadores do TV Score">
        <div className="footer-stat"><strong>+100k</strong><span>Downloads</span></div>
        <div className="footer-stat"><strong>4,3 ★</strong><span>Avaliação</span></div>
        <div className="footer-stat"><strong>+5.000</strong><span>Títulos</span></div>
        <div className="footer-stat"><strong>24/7</strong><span>Disponível</span></div>
        <div className="footer-stat"><strong>HD</strong><span>Qualidade</span></div>
      </footer>
    </main>
  )
}

export default App
