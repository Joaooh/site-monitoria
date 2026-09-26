import React, { useState } from 'react';

export default function StatsForm({ data, onChange, setFocusedIndex, focusedIndex }) {
  const [toast, setToast] = useState(null);

  const handleItemChange = (index, field, value) => {
    const newData = [...data];
    let parsedValue = value;
    if (field === 'numero' || field === 'duracao') {
      const num = Number(value);
      if (!isNaN(num)) parsedValue = num;
      if (value === "") parsedValue = ""; 
    }
    newData[index] = { ...newData[index], [field]: parsedValue };
    onChange(newData);
  };

  const handleAdd = () => {
    const insertIndex = data.length;
    onChange([...data, { id: `stat-${Date.now()}`, numero: 0, sufixo: "", duracao: 1, legenda: "Nova Legenda" }]);
    if (setFocusedIndex) setFocusedIndex(insertIndex);
    setTimeout(() => {
      const el = document.getElementById(`stats-card-${insertIndex}`);
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
      {data.map((item, index) => (
        <div id={`stats-card-${index}`} key={index} className="form-card">
          <div className="form-card-header" onClick={() => setFocusedIndex && setFocusedIndex(focusedIndex === index ? null : index)}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4>{item.numero}{item.sufixo} {item.legenda ? (item.legenda.length > 25 ? item.legenda.substring(0, 25) + '...' : item.legenda) : "Novo Dado"}</h4>
              <span className={`accordion-chevron ${focusedIndex === index ? 'expanded' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); handleRemove(index); }} className="btn-remove">Remover</button>
          </div>
          
          {focusedIndex === index && (
            <div className="form-card-body">
              <div className="form-group">
            <label htmlFor={`stats-id-${index}`}>ID (Não Editável)</label>
            <input 
              id={`stats-id-${index}`} 
              type="text" 
              value={item.id} 
              disabled 
              style={{ opacity: 0.6, cursor: 'not-allowed' }} 
            />
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor={`stats-numero-${index}`}>Número</label>
              <input id={`stats-numero-${index}`} type="number" value={item.numero} onChange={e => handleItemChange(index, 'numero', e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor={`stats-sufixo-${index}`}>Sufixo</label>
              <input id={`stats-sufixo-${index}`} type="text" value={item.sufixo} onChange={e => handleItemChange(index, 'sufixo', e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor={`stats-duracao-${index}`}>Duração (s)</label>
              <input id={`stats-duracao-${index}`} type="number" step="0.5" value={item.duracao} onChange={e => handleItemChange(index, 'duracao', e.target.value)} />
            </div>
          </div>
            <div className="form-group">
              <label htmlFor={`stats-legenda-${index}`}>Legenda</label>
              <input id={`stats-legenda-${index}`} type="text" value={item.legenda} onChange={e => handleItemChange(index, 'legenda', e.target.value)} />
            </div>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleAdd} className="btn-add">+ Adicionar Estatística</button>

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
