import React, { useState } from 'react';

export default function FaqForm({ data, onChange, setFocusedIndex, focusedIndex }) {
  const [toast, setToast] = useState(null);

  const handleItemChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const handleAdd = () => {
    const insertIndex = data.length;
    onChange([...data, { pergunta: "Nova Pergunta", resposta: "Nova Resposta" }]);
    if (setFocusedIndex) setFocusedIndex(insertIndex);
    setTimeout(() => {
      const el = document.getElementById(`faq-card-${insertIndex}`);
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
        <div id={`faq-card-${index}`} key={index} className="form-card">
          <div className="form-card-header" onClick={() => setFocusedIndex && setFocusedIndex(focusedIndex === index ? null : index)}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h4>{item.pergunta ? (item.pergunta.length > 40 ? item.pergunta.substring(0, 40) + '...' : item.pergunta) : `Pergunta ${index + 1}`}</h4>
              <span className={`accordion-chevron ${focusedIndex === index ? 'expanded' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </div>
            <button onClick={(e) => { e.stopPropagation(); handleRemove(index); }} className="btn-remove">Remover</button>
          </div>
          
          {focusedIndex === index && (
            <div className="form-card-body">
              <div className="form-group">
            <label htmlFor={`faq-pergunta-${index}`}>Pergunta</label>
            <input 
              id={`faq-pergunta-${index}`}
              type="text" 
              value={item.pergunta} 
              onChange={e => handleItemChange(index, 'pergunta', e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label htmlFor={`faq-resposta-${index}`}>Resposta</label>
            <textarea 
              id={`faq-resposta-${index}`}
              value={item.resposta} 
              onChange={e => handleItemChange(index, 'resposta', e.target.value)} 
                rows={4}
              />
            </div>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleAdd} className="btn-add">+ Adicionar Pergunta</button>

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
