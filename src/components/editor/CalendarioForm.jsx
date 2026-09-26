import React, { useState } from 'react';

const DIAS_DA_SEMANA = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const HORARIOS = ["11h às 13h", "17h às 19h"];
const FORMATOS = ["Presencial", "Online"];

function parseDiasString(str) {
  if (!str) return [];
  // Ex: "Seg, Ter e Qui" -> ["Seg", "Ter", "Qui"]
  return str.split(/, | e /).map(s => s.trim()).filter(Boolean);
}

function buildDiasString(arr) {
  if (!arr || arr.length === 0) return "";
  // Mantém a ordem original da semana
  const sorted = DIAS_DA_SEMANA.filter(d => arr.includes(d));
  if (sorted.length === 1) return sorted[0];
  const last = sorted.pop();
  return sorted.join(", ") + " e " + last;
}

export default function CalendarioForm({ data, onChange, setFocusedIndex, focusedIndex }) {
  // data = { mesesParaGerar, dadosCalendario }
  const ciclos = data.dadosCalendario.ciclos;

  const handleOficinaChange = (cicloIndex, oficinaIndex, field, value) => {
    const newCiclos = [...ciclos];
    const newOficinas = [...newCiclos[cicloIndex].oficinas];
    newOficinas[oficinaIndex] = { ...newOficinas[oficinaIndex], [field]: value };
    newCiclos[cicloIndex] = { ...newCiclos[cicloIndex], oficinas: newOficinas };
    
    onChange({
      ...data,
      dadosCalendario: {
        ...data.dadosCalendario,
        ciclos: newCiclos
      }
    });
  };

  const handleCicloChange = (cicloIndex, field, value) => {
    const newCiclos = [...ciclos];
    newCiclos[cicloIndex] = { ...newCiclos[cicloIndex], [field]: value };
    
    onChange({
      ...data,
      dadosCalendario: {
        ...data.dadosCalendario,
        ciclos: newCiclos
      }
    });
  };

  const handleDiasChange = (cicloIndex, oficinaIndex, dia, isChecked) => {
    const oficina = ciclos[cicloIndex].oficinas[oficinaIndex];
    const diasAtuais = parseDiasString(oficina.dias);
    
    let novosDias;
    if (isChecked) {
      novosDias = [...diasAtuais, dia];
    } else {
      novosDias = diasAtuais.filter(d => d !== dia);
    }
    
    handleOficinaChange(cicloIndex, oficinaIndex, "dias", buildDiasString(novosDias));
  };

  const handleAddOficina = (cicloIndex) => {
    const newCiclos = [...ciclos];
    newCiclos[cicloIndex] = {
      ...newCiclos[cicloIndex],
      oficinas: [
        ...newCiclos[cicloIndex].oficinas,
        { nome: "Nova Oficina", dias: "Seg e Qua", hora: "11h às 13h", formato: "Presencial" }
      ]
    };
    onChange({
      ...data,
      dadosCalendario: { ...data.dadosCalendario, ciclos: newCiclos }
    });
  };

  const handleRemoveOficina = (cicloIndex, oficinaIndex) => {
    const newCiclos = [...ciclos];
    const newOficinas = newCiclos[cicloIndex].oficinas.filter((_, i) => i !== oficinaIndex);
    newCiclos[cicloIndex] = { ...newCiclos[cicloIndex], oficinas: newOficinas };
    onChange({
      ...data,
      dadosCalendario: { ...data.dadosCalendario, ciclos: newCiclos }
    });
  };

  return (
    <div className="form-wrapper">
      <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(210, 168, 255, 0.05)', borderRadius: '8px', border: '1px solid rgba(210, 168, 255, 0.2)' }}>
        <h3 style={{ marginTop: 0, color: 'var(--purple-neon, #d2a8ff)' }}>Editor do Calendário</h3>
        <p style={{ margin: 0, fontSize: '0.9rem', color: '#e5e7eb', lineHeight: 1.5 }}>
          Aqui você pode editar o <strong>Nome</strong> e as <strong>Datas</strong> de cada ciclo, além de gerenciar a <strong>Legenda de Oficinas</strong> interna deles. 
          Altere as datas de início e fim criteriosamente para garantir que o Calendário seja desenhado corretamente!
        </p>
      </div>

      {ciclos.map((ciclo, cIndex) => (
        <div key={cIndex} className="form-card" style={{ borderLeft: `4px solid ${ciclo.corBase}` }}>
          <div className="form-card-header" onClick={() => setFocusedIndex && setFocusedIndex(focusedIndex === cIndex ? null : cIndex)}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <h4 style={{ margin: 0, color: ciclo.corBorda }}>{ciclo.nome || `Ciclo ${cIndex + 1}`}</h4>
              <span className={`accordion-chevron ${focusedIndex === cIndex ? 'expanded' : ''}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#9ca3af' }}>
              <span>
                {ciclo.dataInicio ? new Date(ciclo.dataInicio + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) : '...'} 
                {' até '}
                {ciclo.dataFim ? new Date(ciclo.dataFim + 'T12:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) : '...'}
              </span>
            </div>
          </div>

          {focusedIndex === cIndex && (
            <div className="form-card-body">
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'stretch' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label>Nome do Ciclo</label>
                  <input 
                    type="text" 
                    value={ciclo.nome || ""} 
                    onChange={e => handleCicloChange(cIndex, 'nome', e.target.value)} 
                    style={{ fontSize: '1.1rem', fontWeight: 'bold', color: ciclo.corBorda, background: 'transparent', border: '1px dashed rgba(255,255,255,0.2)', padding: '4px 8px', width: '100%' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Início:</span>
                    <input 
                      type="date" 
                      value={ciclo.dataInicio || ""} 
                      onChange={e => handleCicloChange(cIndex, 'dataInicio', e.target.value)} 
                      style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '4px', borderRadius: '4px', fontSize: '0.85rem' }}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Fim:</span>
                    <input 
                      type="date" 
                      value={ciclo.dataFim || ""} 
                      onChange={e => handleCicloChange(cIndex, 'dataFim', e.target.value)} 
                      style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '4px', borderRadius: '4px', fontSize: '0.85rem' }}
                    />
                  </div>
                </div>
              </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {ciclo.oficinas.map((oficina, oIndex) => {
              const diasAtivos = parseDiasString(oficina.dias);

              return (
                <div key={oIndex} style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', position: 'relative' }}>
                  <button onClick={() => handleRemoveOficina(cIndex, oIndex)} className="btn-toast-close" style={{ position: 'absolute', top: '10px', right: '10px' }} title="Remover Oficina">&times;</button>
                  
                  <div className="form-group" style={{ marginBottom: '1rem', paddingRight: '20px' }}>
                    <label htmlFor={`oficina-nome-${cIndex}-${oIndex}`}>Nome da Oficina</label>
                    <input 
                      id={`oficina-nome-${cIndex}-${oIndex}`}
                      type="text" 
                      value={oficina.nome || ""} 
                      onChange={e => handleOficinaChange(cIndex, oIndex, 'nome', e.target.value)} 
                      placeholder="Ex: Oficina de Linux"
                    />
                  </div>

                  <div className="form-group-row" style={{ alignItems: 'flex-end' }}>
                    <fieldset className="form-group" style={{ flex: 1.5, border: 'none', padding: 0, margin: 0 }}>
                      <legend style={{ marginBottom: '0.5rem', color: '#a3a3a3', fontSize: '0.9rem' }}>Dias da Semana ({oficina.dias || "Nenhum"})</legend>
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                        {DIAS_DA_SEMANA.map(dia => (
                          <label key={dia} htmlFor={`oficina-dia-${cIndex}-${oIndex}-${dia}`} style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'white', cursor: 'pointer', fontSize: '0.85rem' }}>
                            <input 
                              id={`oficina-dia-${cIndex}-${oIndex}-${dia}`}
                              type="checkbox" 
                              checked={diasAtivos.includes(dia)} 
                              onChange={e => handleDiasChange(cIndex, oIndex, dia, e.target.checked)} 
                              style={{ width: 'auto' }}
                            />
                            {dia}
                          </label>
                        ))}
                      </div>
                    </fieldset>

                    <div className="form-group" style={{ flex: 1 }}>
                      <label htmlFor={`oficina-hora-${cIndex}-${oIndex}`}>Horário</label>
                      <select 
                        id={`oficina-hora-${cIndex}-${oIndex}`}
                        value={oficina.hora || ""} 
                        onChange={e => handleOficinaChange(cIndex, oIndex, 'hora', e.target.value)}
                      >
                        <option value="" disabled>Selecione</option>
                        {HORARIOS.map(h => <option key={h} value={h}>{h}</option>)}
                      </select>
                    </div>

                    <div className="form-group" style={{ flex: 1 }}>
                      <label htmlFor={`oficina-formato-${cIndex}-${oIndex}`}>Modalidade</label>
                      <select 
                        id={`oficina-formato-${cIndex}-${oIndex}`}
                        value={oficina.formato || ""} 
                        onChange={e => handleOficinaChange(cIndex, oIndex, 'formato', e.target.value)}
                      >
                        <option value="" disabled>Selecione</option>
                        {FORMATOS.map(f => <option key={f} value={f}>{f}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

            <button onClick={() => handleAddOficina(cIndex)} className="btn-add" style={{ marginTop: '1rem', padding: '0.5rem', width: '100%' }}>
              + Adicionar Oficina no {ciclo.nome.split(' (')[0]}
            </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
