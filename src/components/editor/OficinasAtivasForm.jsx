import React, { useState } from 'react';

const extractFilename = (foto) => {
  if (!foto) return "";
  let srcStr = typeof foto === 'string' ? foto : (foto.src ? foto.src : "");
  if (!srcStr) return "";
  
  const parts = srcStr.split(/[/?]/);
  const filename = parts.find(p => p.includes('.'));
  if (filename) {
    return filename.replace(/\.(hash|[a-zA-Z0-9]{8})\./, '.');
  }
  return "";
};

const guessImportName = (filename) => {
  if (!filename) return "";
  let name = filename.replace(/\.[^/.]+$/, "");
  name = name.replace(/^(mago-|monitoria-)/, "");
  name = name.split('-').map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return "img" + name.charAt(0).toUpperCase() + name.slice(1);
};

const OPCOES_TURMAS = [
  "Segunda, Quarta e Sexta: 11h às 13h",
  "Segunda, Quarta e Sexta: 17h às 19h",
  "Segunda, Quarta e Sexta: 17h30 às 19h",
  "Terça e Quarta: 11h às 13h",
  "Terça e Quinta: 11h às 13h",
  "Terça e Quinta: 17h às 19h",
  "Segunda, Terça e Quinta: 17h às 19h",
  "Segunda a Sexta: 11h às 13h"
];

export default function OficinasAtivasForm({ data, onChange, setFocusedIndex, focusedIndex }) {
  const [toast, setToast] = useState(null);

  const handleItemChange = (index, field, value) => {
    const newData = [...data];
    if (field === 'turmas') {
      newData[index][field] = Array.isArray(value) ? value : value.split('\n').filter(t => t.trim() !== '');
    } else {
      newData[index][field] = value;
    }
    onChange(newData);
  };

  const handleAdd = () => {
    onChange([
      ...data,
      {
        id: "nova-oficina",
        titulo: "Nova Oficina",
        descricao: "Descrição da oficina",
        turmas: ["Segunda: 14h às 16h"],
        formato: "Presencial",
        linkInscricao: "/oficinas/nova-oficina",
        imagem: "mago-padrao.png",
        importName: "imgPadrao",
        alt: "Imagem da Oficina"
      }
    ]);
    if (setFocusedIndex) setFocusedIndex(data.length);
  };

  const handleRemove = (index) => {
    const itemToRemove = data[index];
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);
    if (setFocusedIndex) setFocusedIndex(0);

    if (toast && toast.timeoutId) clearTimeout(toast.timeoutId);
    
    const timeoutId = setTimeout(() => {
      setToast(null);
    }, 10000);
    
    setToast({ item: itemToRemove, index, timeoutId });
  };

  const handleUndo = () => {
    if (!toast) return;
    const newData = [...data];
    newData.splice(toast.index, 0, toast.item);
    onChange(newData);
    clearTimeout(toast.timeoutId);
    setToast(null);
  };

  const handleCloseToast = () => {
    if (toast && toast.timeoutId) clearTimeout(toast.timeoutId);
    setToast(null);
  };

  const handleMove = (index, direction) => {
    if (direction === -1 && index === 0) return;
    if (direction === 1 && index === data.length - 1) return;
    const newData = [...data];
    const temp = newData[index];
    newData[index] = newData[index + direction];
    newData[index + direction] = temp;
    onChange(newData);
    if (setFocusedIndex) setFocusedIndex(index + direction);
  };

  return (
    <div className="form-section">
      <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(210, 168, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(210, 168, 255, 0.2)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <h3 style={{ marginTop: 0, color: 'var(--purple-neon, #d2a8ff)' }}>Editor de Oficinas Ativas</h3>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#e5e7eb', lineHeight: 1.5 }}>
            Edite os cards em destaque na página inicial. <strong>Atenção:</strong> o campo <code>Link Inscrição</code> dita para qual página a oficina irá, que por sua vez precisa estar cadastrada no arquivo <code>oficinas-detalhes.js</code>!
          </p>
        </div>
        <button onClick={handleAdd} className="btn-add" style={{ width: 'fit-content' }}>+ Adicionar Nova Oficina</button>
      </div>

      <div className="form-list">
        {data.map((item, index) => (
          <div 
            id={`oa-card-${index}`} 
            key={index} 
            className="form-card" 
            style={{ borderLeft: '3px solid var(--purple-neon, #d2a8ff)' }}
          >
            <div className="form-card-header" onClick={() => setFocusedIndex && setFocusedIndex(focusedIndex === index ? null : index)}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <button onClick={(e) => { e.stopPropagation(); handleMove(index, -1); }} disabled={index === 0} className="btn-move" title="Mover para cima">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); handleMove(index, 1); }} disabled={index === data.length - 1} className="btn-move" title="Mover para baixo">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </button>
                </div>
                <h4 style={{ margin: 0 }}>{item.titulo || "Sem Título"}</h4>
                <span className={`accordion-chevron ${focusedIndex === index ? 'expanded' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </span>
              </div>
              <button onClick={(e) => { e.stopPropagation(); handleRemove(index); }} className="btn-remove">Remover</button>
            </div>
            
            {focusedIndex === index && (
              <div className="form-card-body">
                <div className="form-group-row">
              <div className="form-group">
                <label htmlFor={`oa-id-${index}`}>ID Interno (kebab-case)</label>
                <input id={`oa-id-${index}`} type="text" value={item.id} onChange={e => handleItemChange(index, 'id', e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor={`oa-formato-${index}`}>Formato</label>
                <select 
                  id={`oa-formato-${index}`} 
                  value={item.formato} 
                  onChange={e => handleItemChange(index, 'formato', e.target.value)}
                >
                  <option value="Presencial">Presencial</option>
                  <option value="Online">Online</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={`oa-titulo-${index}`}>Título do Card</label>
              <input id={`oa-titulo-${index}`} type="text" value={item.titulo} onChange={e => handleItemChange(index, 'titulo', e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor={`oa-desc-${index}`}>Descrição</label>
              <textarea id={`oa-desc-${index}`} rows={2} value={item.descricao} onChange={e => handleItemChange(index, 'descricao', e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor={`oa-turmas-${index}`}>Turmas (Selecione os horários ou digite personalizados separados por linha)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '0.8rem' }}>
                {OPCOES_TURMAS.map(turma => (
                  <label key={turma} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#e5e7eb', cursor: 'pointer', fontSize: '0.85rem', background: 'rgba(0,0,0,0.2)', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <input 
                      type="checkbox" 
                      checked={(item.turmas || []).includes(turma)} 
                      onChange={e => {
                         const current = item.turmas || [];
                         const next = e.target.checked ? [...current, turma] : current.filter(t => t !== turma);
                         handleItemChange(index, 'turmas', next);
                      }} 
                      style={{ width: 'auto', margin: 0 }}
                    />
                    {turma}
                  </label>
                ))}
              </div>
              <textarea 
                id={`oa-turmas-${index}`} 
                rows={2} 
                value={(item.turmas || []).join('\n')} 
                onChange={e => handleItemChange(index, 'turmas', e.target.value)} 
                placeholder="Ex: Segunda e Quinta: 17h às 19h"
              />
            </div>

            <div className="form-group">
              <label htmlFor={`oa-link-${index}`}>Link de Inscrição</label>
              <input id={`oa-link-${index}`} type="text" value={item.linkInscricao} onChange={e => handleItemChange(index, 'linkInscricao', e.target.value)} placeholder="/oficinas/sua-oficina" />
            </div>
            
            <div className="form-group-row" style={{ alignItems: 'flex-end' }}>
              <div className="form-group" style={{ flex: 2 }}>
                <label htmlFor={`oa-img-${index}`}>Arquivo da Imagem</label>
                <input id={`oa-img-${index}`} type="text" value={extractFilename(item.imagem)} onChange={e => handleItemChange(index, 'imagem', e.target.value)} placeholder="mago-linux.png" />
              </div>
              <div className="form-group" style={{ flex: 1.5 }}>
                <label htmlFor={`oa-import-${index}`} title="Dica: Como a imagem será chamada no código (ex: imgLinux)">Nome da Variável</label>
                <input 
                  id={`oa-import-${index}`} 
                  type="text" 
                  value={item.importName || ""} 
                  onChange={e => handleItemChange(index, 'importName', e.target.value)} 
                  placeholder={`Ex: ${guessImportName(extractFilename(item.imagem))}`} 
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={`oa-alt-${index}`}>Texto Alternativo da Imagem (Acessibilidade)</label>
              <input id={`oa-alt-${index}`} type="text" value={item.alt} onChange={e => handleItemChange(index, 'alt', e.target.value)} />
            </div>
            </div>
            )}
          </div>
        ))}
      </div>

      {toast && (
        <div className="toast-container">
          <span>Oficina excluída.</span>
          <button onClick={handleUndo} className="btn-undo">Desfazer</button>
          <button onClick={handleCloseToast} className="btn-toast-close">&times;</button>
        </div>
      )}
    </div>
  );
}
