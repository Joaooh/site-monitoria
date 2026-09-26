import React, { useState } from 'react';

function extractFilename(foto) {
  if (!foto) return "";
  if (typeof foto === 'string') return foto; 
  if (foto.src) {
    const parts = foto.src.split(/[/?]/);
    const filename = parts.find(p => p.includes('.'));
    if (filename) {
      // Remover hashes se houver: joao.hash.jpg -> joao.jpg
      // Pelo formato do vite: name.[hash].ext. Podemos usar regex mais seguro ou não.
      // O Astro geralmente exporta src original em dev mode, então não tem hash.
      return filename;
    }
  }
  return "";
}

export default function EquipeForm({ data, onChange, setFocusedIndex, focusedIndex }) {
  const [toast, setToast] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleItemChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const handleAdd = () => {
    const newItem = {
      id: "novo-membro",
      nome: "Novo Membro",
      descricao: "Descrição do membro",
      foto: "", 
      ativo: true,
      ocultarNaEquipe: false,
      linkedin: "",
      github: ""
    };
    
    const firstInactiveIndex = data.findIndex(item => !item.ativo);
    const newData = [...data];
    let insertIndex = data.length;
    
    if (firstInactiveIndex !== -1) {
      newData.splice(firstInactiveIndex, 0, newItem);
      insertIndex = firstInactiveIndex;
    } else {
      newData.push(newItem);
    }
    
    onChange(newData);

    if (setFocusedIndex) setFocusedIndex(insertIndex);

    setTimeout(() => {
      const el = document.getElementById(`eq-card-${insertIndex}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleRemove = (index) => {
    const itemToRemove = data[index];
    const newData = data.filter((_, i) => i !== index);
    onChange(newData);

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

  return (
    <div className="form-wrapper">
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
        <button onClick={handleAdd} className="btn-add" style={{ margin: 0, flexShrink: 0 }}>+ Adicionar Integrante</button>
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar membro por nome..."
          style={{ flexGrow: 1, padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)', background: 'rgba(255, 255, 255, 0.05)', color: 'white' }}
        />
      </div>

      {data.map((item, index) => {
        if (searchTerm && (!item.nome || !item.nome.toLowerCase().includes(searchTerm.toLowerCase()))) {
          return null;
        }
        
        const fotoString = typeof item.foto === 'string' ? item.foto : extractFilename(item.foto);
        
        return (
          <div 
            id={`eq-card-${index}`} 
            key={index} 
            className="form-card" 
            style={{ opacity: item.ativo ? 1 : 0.6, borderLeft: item.ativo ? '3px solid var(--purple-neon, #d2a8ff)' : '3px solid #666' }}
          >
            <div className="form-card-header" onClick={() => setFocusedIndex && setFocusedIndex(focusedIndex === index ? null : index)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <h4>{item.nome || "Sem Nome"} {item.ativo ? "(Ativo)" : "(Ex-Membro)"}</h4>
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
                <label htmlFor={`eq-id-${index}`}>ID (ex: nome-sobrenome)</label>
                <input id={`eq-id-${index}`} type="text" value={item.id} onChange={e => handleItemChange(index, 'id', e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor={`eq-nome-${index}`}>Nome do membro</label>
                <input id={`eq-nome-${index}`} type="text" value={item.nome} onChange={e => handleItemChange(index, 'nome', e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor={`eq-desc-${index}`}>Descrição</label>
              <textarea id={`eq-desc-${index}`} rows={2} value={item.descricao} onChange={e => handleItemChange(index, 'descricao', e.target.value)} />
            </div>

            <div className="form-group">
              <label htmlFor={`eq-foto-${index}`}>Arquivo da Foto (ex: fulano.jpg) - Deixe vazio p/ Mago</label>
              <input id={`eq-foto-${index}`} type="text" value={fotoString} onChange={e => handleItemChange(index, 'foto', e.target.value)} placeholder="Deixe em branco para usar o Mago Padrão" />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor={`eq-link-${index}`}>LinkedIn URL</label>
                <input id={`eq-link-${index}`} type="text" value={item.linkedin || ""} onChange={e => handleItemChange(index, 'linkedin', e.target.value || null)} placeholder="https://..." />
              </div>
              <div className="form-group">
                <label htmlFor={`eq-git-${index}`}>GitHub URL</label>
                <input id={`eq-git-${index}`} type="text" value={item.github || ""} onChange={e => handleItemChange(index, 'github', e.target.value || null)} placeholder="https://..." />
              </div>
            </div>

            <div className="form-group-row" style={{ marginTop: '0.5rem', gap: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', cursor: 'pointer', fontSize: '0.9rem' }}>
                <input type="checkbox" checked={item.ativo} onChange={e => handleItemChange(index, 'ativo', e.target.checked)} style={{ width: 'auto' }} />
                Membro Ativo
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', cursor: 'pointer', fontSize: '0.9rem' }}>
                <input type="checkbox" checked={item.ocultarNaEquipe} onChange={e => handleItemChange(index, 'ocultarNaEquipe', e.target.checked)} style={{ width: 'auto' }} />
                Ocultar da Equipe
              </label>
              </div>
            </div>
            )}
          </div>
        );
      })}

      {toast && (
        <div className="toast-container">
          <span>Item excluído.</span>
          <button onClick={handleUndo} className="btn-undo">Desfazer</button>
          <button onClick={handleCloseToast} className="btn-toast-close">&times;</button>
        </div>
      )}
    </div>
  );
}
