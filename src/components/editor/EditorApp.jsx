import React, { useState } from "react";
import FaqForm from "./FaqForm";
import StatsForm from "./StatsForm";
import EquipeForm from "./EquipeForm";
import CalendarioForm from "./CalendarioForm";
import OficinasAtivasForm from "./OficinasAtivasForm";
import PreviewPanel from "./PreviewPanel";
import { faqs as initialFaqs } from "../../data/faq.js";
import { statsData as initialStats } from "../../data/stats.js";
import { equipeData as initialEquipe } from "../../data/equipe.js";
import { mesesParaGerar as initialMeses, dadosCalendario as initialDados } from "../../data/calendario.js";
import { oficinasAtivasData as initialOficinasAtivas } from "../../data/oficinas-ativas.js";
import "./editor.css";

export default function EditorApp() {
  const [selected, setSelected] = useState("faq");
  
  const [faqData, setFaqData] = useState(initialFaqs);
  const [statsData, setStatsData] = useState(initialStats);
  const [equipeData, setEquipeData] = useState(initialEquipe);
  const [oficinasAtivasData, setOficinasAtivasData] = useState(initialOficinasAtivas);
  const [calendarioData, setCalendarioData] = useState({
    mesesParaGerar: initialMeses,
    dadosCalendario: initialDados
  });
  
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [showMobilePreview, setShowMobilePreview] = useState(false);
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const containerRef = React.useRef(null);
  const formAreaRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = (e) => {
      const el = e.target;
      const isBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 150;
      setIsScrolledToBottom(isBottom);
    };

    const elDesktop = formAreaRef.current;
    const elMobile = containerRef.current;

    if (elDesktop) elDesktop.addEventListener('scroll', handleScroll);
    if (elMobile) elMobile.addEventListener('scroll', handleScroll);

    const getScrollElement = () => window.innerWidth <= 768 ? elMobile : elDesktop;
    const currentEl = getScrollElement();
    if (currentEl) {
      const isBottom = currentEl.scrollHeight - currentEl.scrollTop <= currentEl.clientHeight + 150;
      setIsScrolledToBottom(isBottom);
    }

    return () => {
      if (elDesktop) elDesktop.removeEventListener('scroll', handleScroll);
      if (elMobile) elMobile.removeEventListener('scroll', handleScroll);
    };
  }, [selected]);

  const handleFabScroll = () => {
    const el = window.innerWidth <= 768 ? containerRef.current : formAreaRef.current;
    if (!el) return;
    
    if (isScrolledToBottom) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  };
  
  const currentData = selected === "faq" ? faqData : selected === "stats" ? statsData : selected === "equipe" ? equipeData : selected === "oficinas-ativas" ? oficinasAtivasData : calendarioData;
  const setCurrentData = selected === "faq" ? setFaqData : selected === "stats" ? setStatsData : selected === "equipe" ? setEquipeData : selected === "oficinas-ativas" ? setOficinasAtivasData : setCalendarioData;
  
  const formatCode = (obj, padSpaces = 0) => {
    let str = JSON.stringify(obj, null, 2);
    // Remove aspas das chaves
    str = str.replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
    // Adiciona trailing commas (usando lookahead para não consumir as quebras de linha e permitir matches consecutivos)
    str = str.replace(/([^\s,{[(])(?=\n\s*[\]}])/g, '$1,');
    
    if (padSpaces > 0) {
      const padding = ' '.repeat(padSpaces);
      str = str.split('\n').join('\n' + padding);
    }
    return str;
  };

  const generateEquipeCode = () => {
    let imports = new Set();
    let mappings = {};
    
    const extractFilename = (foto) => {
      if (!foto) return "";
      if (typeof foto === 'string') return foto; 
      if (foto.src) {
        const parts = foto.src.split(/[/?]/);
        const filename = parts.find(p => p.includes('.'));
        return filename ? filename.replace(/\.(hash|[a-zA-Z0-9]{8})\./, '.') : "";
      }
      return "";
    };

    const cleanData = equipeData.map(item => {
      let filename = extractFilename(item.foto);
      let varName = "imgPadrao";
      
      if (filename) {
        imports.add(filename);
        let name = filename.replace(/\.[^/.]+$/, ""); 
        name = name.split('-').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
        varName = "img" + name.charAt(0).toUpperCase() + name.slice(1);
        mappings[filename] = varName;
      }

      return {
        id: item.id,
        nome: item.nome,
        descricao: item.descricao,
        foto: `__VAR_${varName}__`,
        ativo: item.ativo,
        ...(item.ocultarNaEquipe ? { ocultarNaEquipe: true } : {}),
        linkedin: item.linkedin || null,
        github: item.github || null
      };
    });

    let fileStr = `import imgPadrao from "@assets/mago/mago-padrao.png";\n`;
    imports.forEach(filename => {
      if (filename.includes('mago-padrao')) return;
      fileStr += `import ${mappings[filename]} from "@assets/equipe/${filename}";\n`;
    });
    
    fileStr += `\n/**
 * REGRAS DA EQUIPE:
 * 1. O 'id' deve ser único e em minúsculas (kebab-case).
 * 2. A 'foto' é o nome exato do arquivo que está na pasta /src/assets/equipe/.
 * 3. Se 'ativo: true', ele aparece como monitor atual. Se 'ativo: false', vai pra aba de Ex-Membros.
 * 4. Coloque null em linkedin/github se o membro não tiver ou não quiser exibir o link.
 * 5. Dica: Use 'ocultarNaEquipe: true' caso o monitor esteja ativo no banco, mas você não quer que apareça na página da equipe.
 */\n`;

    const ativos = cleanData.filter(i => i.ativo);
    const inativos = cleanData.filter(i => !i.ativo);

    const stringifyBody = (arr) => {
      if (arr.length === 0) return "";
      const str = formatCode(arr);
      return str.slice(2, -2);
    };

    let finalArrayStr = "export const equipeData = [\n";
    finalArrayStr += `  // ==========================================\n  // MONITORES ATIVOS\n  // ==========================================\n`;
    finalArrayStr += stringifyBody(ativos);
    
    if (inativos.length > 0) {
      if (ativos.length > 0) finalArrayStr += "\n\n";
      finalArrayStr += `  // ==========================================\n  // EX-MEMBROS\n  // ==========================================\n`;
      finalArrayStr += stringifyBody(inativos);
    }
    finalArrayStr += `\n];\n`;

    finalArrayStr = finalArrayStr.replace(/"__VAR_([a-zA-Z0-9_]+)__"/g, '$1');
    
    return fileStr + finalArrayStr;
  };

  const generateOficinasAtivasCode = () => {
    let imports = new Set();
    let mappings = {};

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

    const cleanData = oficinasAtivasData.map(item => {
      let filename = extractFilename(item.imagem);
      let varName = item.importName;
      
      if (!varName) {
        let name = filename.replace(/\.[^/.]+$/, "");
        name = name.replace(/^(mago-|monitoria-)/, "");
        name = name.split('-').map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)).join('');
        varName = "img" + name.charAt(0).toUpperCase() + name.slice(1);
      }
      
      if (filename) {
        imports.add(filename);
        mappings[filename] = varName;
      }

      return {
        id: item.id,
        titulo: item.titulo,
        descricao: item.descricao,
        turmas: item.turmas,
        formato: item.formato,
        linkInscricao: item.linkInscricao,
        imagem: `__VAR_${varName}__`,
        alt: item.alt
      };
    });

    let fileStr = "";
    imports.forEach(filename => {
      fileStr += `import ${mappings[filename]} from "@assets/mago/oficinas/${filename}";\n`;
    });
    
    fileStr += `\n/*
 * COMO CADASTRAR UMA OFICINA:
 * Preencha o bloco no array abaixo. 'linkInscricao' é o caminho da URL que abrirá
 * a página detalhada da oficina (ex: "/oficinas/oficina-de-web").
 * Importe a imagem correspondente lá no topo de assets/mago/oficinas.
 */\n`;

    let finalArrayStr = "export const oficinasAtivasData = ";
    let strBody = formatCode(cleanData);
    
    // Colapsar turmas para uma única linha (padrão do Prettier para arrays simples)
    strBody = strBody.replace(/turmas:\s*\[\s*([\s\S]*?)\s*\]/g, (match, inner) => {
      let items = inner.split('\n').map(s => s.trim()).filter(Boolean);
      if (items.length > 0) {
        // Remover trailing comma do último item para array de linha única
        items[items.length - 1] = items[items.length - 1].replace(/,$/, '');
      }
      return `turmas: [${items.join(' ')}]`;
    });

    // Quebrar descrições longas para a linha de baixo (padrão do printWidth do Prettier)
    strBody = strBody.replace(/descricao:\s*(".*?")(,|\n)/g, (match, strValue, ending) => {
      // Se a string for maior que ~60 caracteres, o Prettier costuma jogá-la para a próxima linha
      if (strValue.length > 50) {
        return `descricao:\n      ${strValue}${ending}`;
      }
      return match;
    });

    finalArrayStr += strBody + ";\n";

    finalArrayStr = finalArrayStr.replace(/"__VAR_([a-zA-Z0-9_]+)__"/g, '$1');
    
    return fileStr + finalArrayStr;
  };

  const generateCalendarioCode = () => {
    const cleanCiclos = calendarioData.dadosCalendario.ciclos.map(c => {
      const cloned = { ...c };
      cloned.oficinas = cloned.oficinas.map(o => {
        let parts = [];
        if (o.nome) parts.push(`nome: "${o.nome}"`);
        if (o.dias) parts.push(`dias: "${o.dias}"`);
        if (o.hora) parts.push(`hora: "${o.hora}"`);
        if (o.formato) parts.push(`formato: "${o.formato}"`);
        return `__INLINE_OBJ_{ ${parts.join(", ")} }__`;
      });
      return cloned;
    });

    let mesesStr = "[\n";
    calendarioData.mesesParaGerar.forEach((m) => {
      mesesStr += `  { mes: ${m.mes}, ano: ${m.ano}, nome: "${m.nome}" },\n`;
    });
    mesesStr += "]";

    let code = `// prettier-ignore\nexport const mesesParaGerar = ${mesesStr};\n\n`;
    
    let ciclosStr = formatCode(cleanCiclos, 2);
    
    ciclosStr = ciclosStr.replace(/"__INLINE_OBJ_(\{.*?\})__"/g, (match, p1) => {
      return p1.replace(/\\"/g, '"');
    });

    ciclosStr = ciclosStr.replace(/      oficinas: \[/g, '      // prettier-ignore\n      oficinas: [');

    code += `export const dadosCalendario = {\n  ciclos: ${ciclosStr}\n};\n`;
    return code;
  };

  const handleCopyCode = () => {
    let code = "";
    if (selected === "faq") {
      code = `export const faqs = ${formatCode(faqData)};\n`;
    } else if (selected === "stats") {
      code = `export const statsData = ${formatCode(statsData)};\n`;
    } else if (selected === "oficinas-ativas") {
      code = generateOficinasAtivasCode();
    } else if (selected === "equipe") {
      code = generateEquipeCode();
    } else if (selected === "calendario") {
      code = generateCalendarioCode();
    }
    
    navigator.clipboard.writeText(code)
      .then(() => alert("Código copiado com sucesso!"))
      .catch(() => alert("Erro ao copiar código."));
  };

  const handleDownload = () => {
    let code = "";
    let filename = "";
    if (selected === "faq") {
      code = `export const faqs = ${formatCode(faqData)};\n`;
      filename = "faq.js";
    } else if (selected === "stats") {
      code = `export const statsData = ${formatCode(statsData)};\n`;
      filename = "stats.js";
    } else if (selected === "oficinas-ativas") {
      code = generateOficinasAtivasCode();
      filename = "oficinas-ativas.js";
    } else if (selected === "equipe") {
      code = generateEquipeCode();
      filename = "equipe.js";
    } else if (selected === "calendario") {
      code = generateCalendarioCode();
      filename = "calendario.js";
    }
    const blob = new Blob([code], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="editor-container" ref={containerRef}>
      <div className="editor-sidebar">
        <h2>Editor Visual</h2>
        <div className="editor-selector">
          <label htmlFor="file-selector">Selecione o arquivo:</label>
          <select id="file-selector" value={selected} onChange={e => { setSelected(e.target.value); setFocusedIndex(null); }}>
            <option value="faq">FAQ (faq.js)</option>
            <option value="stats">Estatísticas (stats.js)</option>
            <option value="oficinas-ativas">Oficinas Ativas (oficinas-ativas.js)</option>
            <option value="equipe">Equipe (equipe.js)</option>
            <option value="calendario">Calendário (calendario.js)</option>
          </select>
        </div>
        
        <div className="editor-form-area" ref={formAreaRef}>
          {selected === "faq" && <FaqForm data={faqData} onChange={setFaqData} setFocusedIndex={setFocusedIndex} focusedIndex={focusedIndex} />}
          {selected === "stats" && <StatsForm data={statsData} onChange={setStatsData} setFocusedIndex={setFocusedIndex} focusedIndex={focusedIndex} />}
          {selected === "oficinas-ativas" && <OficinasAtivasForm data={oficinasAtivasData} onChange={setOficinasAtivasData} setFocusedIndex={setFocusedIndex} focusedIndex={focusedIndex} />}
          {selected === "equipe" && <EquipeForm data={equipeData} onChange={setEquipeData} setFocusedIndex={setFocusedIndex} focusedIndex={focusedIndex} />}
          {selected === "calendario" && <CalendarioForm data={calendarioData} onChange={setCalendarioData} setFocusedIndex={setFocusedIndex} focusedIndex={focusedIndex} />}
        </div>
        
        <div className="editor-actions" style={{ flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
            <button onClick={handleCopyCode} className="btn-copy">Copiar Código</button>
            <button onClick={handleDownload} className="btn-download">Baixar .js</button>
          </div>
          <button className="btn-mobile-preview" onClick={() => setShowMobilePreview(true)}>
            Ver Preview (Tela Cheia)
          </button>
        </div>
      </div>
      
      <div className={`editor-preview ${showMobilePreview ? 'mobile-show' : ''}`}>
        {showMobilePreview && (
          <button className="mobile-preview-close" onClick={() => setShowMobilePreview(false)}>
            &times; Voltar ao Editor
          </button>
        )}
        <PreviewPanel type={selected} data={currentData} focusedIndex={focusedIndex} />
      </div>

      {!showMobilePreview && (
        <button className="fab-scroll" onClick={handleFabScroll} aria-label={isScrolledToBottom ? "Rolar para o topo" : "Rolar para o final"}>
          {isScrolledToBottom ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          )}
        </button>
      )}
    </div>
  );
}
