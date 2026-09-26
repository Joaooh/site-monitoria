import React from 'react';

const mockStyles = `
  .mock-faq-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .mock-faq-item:hover {
    border-color: rgba(210, 168, 255, 0.3);
    background: rgba(255, 255, 255, 0.05);
  }
  .mock-faq-question::-webkit-details-marker {
    display: none;
  }
  .mock-faq-question {
    padding: 1.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-secondary, #e5e7eb);
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transition: color 0.2s ease;
  }
  .mock-faq-item:hover .mock-faq-question {
    color: var(--text-main, #ffffff);
  }
  .mock-icon-wrapper {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(210, 168, 255, 0.1);
    color: var(--purple-neon, #d2a8ff);
    transition: all 0.3s ease;
  }
  .mock-chevron {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  details[open].mock-faq-item {
    border-color: var(--purple-neon, #d2a8ff);
    background: rgba(102, 44, 146, 0.1);
  }
  details[open] .mock-faq-question {
    color: var(--text-main, #ffffff);
  }
  details[open] .mock-icon-wrapper {
    background: var(--purple-neon, #d2a8ff);
    color: var(--bg-dark, #0d0d12);
  }
  details[open] .mock-chevron {
    transform: rotate(180deg);
  }
  .mock-faq-answer {
    padding: 0 1.5rem 1.5rem 1.5rem;
    color: var(--text-muted, #9ca3af);
    line-height: 1.6;
    font-size: 1rem;
    animation: mockFadeInDown 0.3s ease-in-out forwards;
  }
  @keyframes mockFadeInDown {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .mock-monitor-card {
    background: #faf9fc;
    border: 2px solid #e0d1ff;
    border-radius: 16px;
    padding: 2.5rem 1.5rem 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 5px 15px rgba(102, 44, 146, 0.04);
    position: relative;
    max-width: 300px;
    margin: 3rem auto;
  }
  .mock-monitor-card:hover {
    border-color: #cab0ff;
    box-shadow: 0 15px 30px rgba(102, 44, 146, 0.08);
    transform: translateY(-4px);
  }
  .mock-social-buttons {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mock-social-btn {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    color: white;
  }
  .mock-social-btn-linkedin { background-color: #0072b1; }
  .mock-social-btn-github { background-color: #24292e; }
  .mock-social-btn-disabled { background-color: #cccccc; color: #999; cursor: not-allowed; opacity: 0.5; }
  
  .mock-monitor-foto-wrapper {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, var(--purple-primary, #7a1a8f), #e81c61);
    margin-bottom: 1.5rem;
    margin-top: 0.75rem;
    box-shadow: 0 8px 15px rgba(232, 28, 97, 0.2);
  }
  .mock-monitor-foto-wrapper.grayscale {
    background: linear-gradient(135deg, #999, #ccc);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  .mock-monitor-foto {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #ffffff;
    background-color: #ffffff;
  }
  .mock-monitor-card h3 {
    color: #3b004d;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
    margin-top: 0;
  }
  .mock-monitor-card .descricao {
    color: #555555;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  .mock-stats-header-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    align-items: flex-end;
    margin-bottom: 4rem;
  }

  .mock-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 4rem;
  }

  .mock-stat-item {
    padding: 0 1.5rem;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .mock-stat-item:last-child {
    border-right: none !important;
  }

  @media (max-width: 900px) {
    .mock-stats-header-grid {
      grid-template-columns: 1fr;
      text-align: left;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    .mock-stats-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 3.5rem 1rem;
      padding-top: 3rem;
    }
    .mock-stat-item {
      border: none !important;
      padding: 0 0.5rem;
    }
  }

  .mock-oficinas-ativas-section {
    background-color: #ffffff;
    padding: 40px 2rem;
    position: relative;
    border-radius: 12px;
  }
  .mock-oficinas-cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    justify-content: center;
  }
  .mock-oficinas-card {
    background: #ddd1ff;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
  }
  .mock-oficinas-card.focused {
    transform: scale(1.02);
    box-shadow: 0 12px 25px rgba(59, 0, 77, 0.15);
    outline: 3px solid #7a1a8f;
  }
  .mock-oficinas-card-image-wrapper {
    width: 100%;
    aspect-ratio: 16 / 9;
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
  }
  .mock-oficinas-card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .mock-oficinas-badges-overlay {
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    gap: 8px;
    z-index: 2;
  }
  .mock-oficinas-badge-formato {
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
  .mock-oficinas-badge-formato.presencial { background: #8b33cf; color: #ffffff; }
  .mock-oficinas-badge-formato.online { background: #2e7d32; color: #ffffff; }
  
  .mock-oficinas-card-content {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .mock-oficinas-card-content h3 {
    color: #3b004d;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
    line-height: 1.3;
    margin-top: 0;
  }
  .mock-oficinas-descricao {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  .mock-oficinas-info-horario {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 1.5rem;
    padding-top: 1.2rem;
    border-top: 1px solid rgba(59, 0, 77, 0.1);
  }
  .mock-oficinas-info-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: #555555;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.4;
  }
  .mock-oficinas-info-item svg {
    color: #7a1a8f;
    flex-shrink: 0;
    margin-top: 2px;
  }
  .mock-oficinas-btn-inscrever {
    display: block;
    width: 100%;
    padding: 12px 0;
    background: #7a1a8f;
    border: none;
    color: #ffffff;
    text-align: center;
    border-radius: 8px;
    font-weight: 600;
    text-transform: none;
    text-decoration: none;
    margin-top: auto;
    box-shadow: 0 4px 10px rgba(102, 44, 146, 0.2);
  }
  @media (max-width: 600px) {
    .mock-oficinas-cards-grid {
      grid-template-columns: 1fr;
    }
  }
`;

function MockFaq({ data }) {
  return (
    <section className="faq-section" style={{ backgroundColor: 'var(--bg-dark, #0d0d12)', padding: '100px 2rem 50px 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="tag" style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(210, 168, 255, 0.1)', color: 'var(--purple-neon, #d2a8ff)', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', border: '1px solid rgba(210, 168, 255, 0.2)' }}>Tire suas dúvidas</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--text-main, #fff)', fontWeight: 700, letterSpacing: '-1px', margin: 0 }}>Perguntas Frequentes</h2>
        </div>
        <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {data.map((faq, index) => (
            <details key={index} className="mock-faq-item" name="mock-faq-accordion">
              <summary className="mock-faq-question">
                {faq.pergunta}
                <span className="mock-icon-wrapper">
                  <svg className="mock-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>
              <div className="mock-faq-answer">
                <p style={{ margin: 0 }}>{faq.resposta}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const iconMap = {
  oficinas: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M6 10l4-3 3 2 5-4"/></svg>',
  alunos: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  colaboradores: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 17a4 4 0 0 1-8 0c0-2.21 1.79-3 4-3s4 .79 4 3z"/><path d="M21 17a4 4 0 0 1-8 0c0-2.21 1.79-3 4-3s4 .79 4 3z"/><path d="M12 7V3"/><path d="M8 11l-2-2"/><path d="M16 11l2-2"/><path d="M7 7l3 3"/><path d="M17 7l-3 3"/></svg>',
  anos: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><rect x="7" y="14" width="3" height="3" rx="0.5"/><rect x="14" y="14" width="3" height="3" rx="0.5"/></svg>',
};

function MockStats({ data }) {
  return (
    <section className="stats-section" style={{ backgroundColor: 'var(--bg-dark, #0d0d12)', padding: '0 2rem 50px 2rem' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="mock-stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', paddingTop: '1rem' }}>
          {data.map((stat, index) => (
            <div key={index} className="mock-stat-item" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(210, 168, 255, 0.08)', borderRadius: '16px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <div className="icon-container" style={{ width: '52px', height: '52px', background: 'rgba(210, 168, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'var(--purple-neon, #d2a8ff)', flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: iconMap[stat.id] || "" }} />
              <div className="number" style={{ fontSize: 'clamp(2.8rem, 4.5vw, 3.8rem)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-2px', lineHeight: 1, color: 'var(--text-main, #fff)', display: 'flex', alignItems: 'baseline' }}>
                {stat.numero}{stat.sufixo}
              </div>
              <p style={{ color: 'var(--text-muted, #9ca3af)', fontSize: '1rem', margin: 0, fontWeight: 400, lineHeight: 1.4 }}>{stat.legenda}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockEquipe({ data, focusedIndex }) {
  // Foca no card selecionado
  if (!data || data.length === 0) return null;
  const item = data[focusedIndex] || data[0];

  let imgSrc = "/src/assets/mago/mago-padrao.png";
  if (typeof item.foto === 'string' && item.foto.trim() !== "") {
    if (item.foto.trim().includes('mago-padrao')) {
      imgSrc = "/src/assets/mago/mago-padrao.png";
    } else {
      imgSrc = `/src/assets/equipe/${item.foto.trim()}`;
    }
  } else if (item.foto && item.foto.src) {
    imgSrc = item.foto.src;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem' }}>
      <article className="mock-monitor-card" style={{ filter: !item.ativo ? 'grayscale(100%) opacity(0.8)' : 'none' }}>
        <div className="mock-social-buttons">
          {item.linkedin ? (
            <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="mock-social-btn mock-social-btn-linkedin" aria-label={`LinkedIn de ${item.nome || "Membro"}`}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
            </a>
          ) : (
            <span className="mock-social-btn mock-social-btn-disabled">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
            </span>
          )}

          {item.github ? (
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="mock-social-btn mock-social-btn-github" aria-label={`GitHub de ${item.nome || "Membro"}`}>
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
            </a>
          ) : (
            <span className="mock-social-btn mock-social-btn-disabled">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
            </span>
          )}
        </div>

        <div className={`mock-monitor-foto-wrapper ${!item.ativo ? "grayscale" : ""}`}>
          <img src={imgSrc} alt={`Foto de ${item.nome}`} className="mock-monitor-foto" onError={(e) => e.target.src = '/src/assets/mago/mago-padrao.png'} />
        </div>
        <h3>{item.nome || "Sem Nome"}</h3>
        <p className="descricao" dangerouslySetInnerHTML={{ __html: item.descricao || "Sem descrição" }}></p>
      </article>
    </div>
  );
}

function MockCalendario({ data, focusedIndex }) {
  if (!data || !data.dadosCalendario || !data.dadosCalendario.ciclos) return null;
  const ciclo = data.dadosCalendario.ciclos[focusedIndex] || data.dadosCalendario.ciclos[0];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: '2rem' }}>
      <div 
        style={{ 
          background: 'var(--bg-light, #faf9fc)',
          borderTop: `4px solid ${ciclo.corBorda || '#ccc'}`,
          padding: '12px',
          borderRadius: '6px',
          borderLeft: '1px solid var(--border-light, #eaeaea)',
          borderRight: '1px solid var(--border-light, #eaeaea)',
          borderBottom: '1px solid var(--border-light, #eaeaea)',
          maxWidth: '400px',
          width: '100%',
          color: '#333'
        }}
      >
        <h3 style={{ margin: 0, marginBottom: '10px', fontSize: '0.95em', borderBottom: '1px solid #f0f0f0', paddingBottom: '6px', color: ciclo.corBorda, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>{ciclo.nome}</span>
          <span style={{ fontSize: '0.8em', color: ciclo.corBorda }}>▼</span>
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {ciclo.oficinas.map((oficina, index) => {
            const badgeDia = oficina.dias ? `<span style="padding: 2px 4px; border-radius: 3px; display: inline-block; vertical-align: middle; margin-right: 2px; margin-bottom: 2px; background-color: #e0e0e0; color: #444; border: 1px solid #ccc;">📅 ${oficina.dias}</span>` : "";
            const badgeHora = oficina.hora ? `<span style="padding: 2px 4px; border-radius: 3px; display: inline-block; vertical-align: middle; margin-right: 2px; margin-bottom: 2px; background-color: #eeeeee; color: #555; border: 1px solid #ddd;">⏰ ${oficina.hora}</span>` : "";
            
            let estiloFormato = "";
            if (oficina.formato === "Presencial") {
              estiloFormato = "background-color: #e3f2fd; color: #1565c0; border: 1px solid #bbdefb; font-weight: bold;";
            } else if (oficina.formato === "Online") {
              estiloFormato = "background-color: #e8f5e9; color: #2e7d32; border: 1px solid #c8e6c9; font-weight: bold;";
            }
            
            const badgeFormato = oficina.formato ? `<span style="padding: 2px 4px; border-radius: 3px; display: inline-block; vertical-align: middle; margin-right: 2px; margin-bottom: 2px; ${estiloFormato}">${oficina.formato}</span>` : "";
            
            const infoFaltante = (!oficina.dias && !oficina.hora) ? `<span style="padding: 2px 4px; border-radius: 3px; display: inline-block; vertical-align: middle; margin-right: 2px; margin-bottom: 2px; background-color: #fff3e0; color: #e65100; border: 1px dashed #ffb74d; font-style: italic;">A definir</span>` : "";

            return (
              <div key={index} style={{ background: 'var(--bg-light, #faf9fc)', border: '1px solid var(--border-light, #eaeaea)', padding: '8px', borderRadius: '4px' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--text-dark, #333)', display: 'block', margin: 0, marginBottom: '4px', fontSize: '0.75em' }}>{oficina.nome || "Sem Nome"}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', alignItems: 'center', fontSize: '0.65em' }} dangerouslySetInnerHTML={{ __html: badgeDia + badgeHora + badgeFormato + infoFaltante }}>
                </div>
              </div>
            );
          })}
          {(!ciclo.oficinas || ciclo.oficinas.length === 0) && (
            <div style={{ color: '#9ca3af', fontStyle: 'italic', fontSize: '0.9rem' }}>Nenhuma oficina cadastrada neste ciclo.</div>
          )}
        </div>
      </div>
    </div>
  );
}

function MockOficinasAtivas({ data, focusedIndex }) {
  if (!data || data.length === 0) return null;

  const extractImageSrc = (imagem) => {
    if (typeof imagem === 'string' && imagem.trim() !== "") {
      const isMagoRoot = ['mago-padrao', 'mago-working', 'mago-acidentando', 'mago-com-duvida', 'mago-floresta', 'mago-oficina', 'mago-relogio', 'mago-spell'].some(str => imagem.includes(str));
      if (isMagoRoot) {
        return `/src/assets/mago/${imagem.trim()}`;
      }
      return `/src/assets/mago/oficinas/${imagem.trim()}`;
    } else if (imagem && imagem.src) {
      return imagem.src;
    }
    return "/src/assets/mago/mago-padrao.png";
  };

  return (
    <section className="mock-oficinas-ativas-section">
      <div className="mock-oficinas-cards-grid">
        {data.map((oficina, index) => (
          <article key={index} className={`mock-oficinas-card ${index === focusedIndex ? 'focused' : ''}`}>
            <div className="mock-oficinas-card-image-wrapper">
              <img
                src={extractImageSrc(oficina.imagem)}
                alt={oficina.alt}
                className="mock-oficinas-card-image"
              />
              <div className="mock-oficinas-badges-overlay">
                <span className={`mock-oficinas-badge-formato ${oficina.formato ? oficina.formato.toLowerCase() : 'presencial'}`}>
                  {oficina.formato}
                </span>
              </div>
            </div>

            <div className="mock-oficinas-card-content">
              <h3>{oficina.titulo}</h3>
              <p className="mock-oficinas-descricao">{oficina.descricao}</p>

              <div className="mock-oficinas-info-horario">
                {(oficina.turmas || []).map((turma, i) => (
                  <div key={i} className="mock-oficinas-info-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>{turma}</span>
                  </div>
                ))}
              </div>

              <div className="mock-oficinas-btn-inscrever">
                Clique para saber mais
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function PreviewPanel({ type, data, focusedIndex = 0 }) {
  return (
    <div className="preview-wrapper">
      <style>{mockStyles}</style>
      <div className="preview-header">
        <span className="preview-badge">Live Preview</span>
      </div>
      <div className="preview-content">
        {type === 'faq' && <MockFaq data={data} />}
        {type === 'stats' && <MockStats data={data} />}
        {type === 'equipe' && <MockEquipe data={data} focusedIndex={focusedIndex} />}
        {type === 'calendario' && <MockCalendario data={data} focusedIndex={focusedIndex} />}
        {(type === "oficinas-ativas" || type === "oficinas-ativas-taguatinga" || type === "oficinas-passadas" || type === "oficinas-passadas-taguatinga") && <MockOficinasAtivas data={data} focusedIndex={focusedIndex} />}
      </div>
    </div>
  );
}
