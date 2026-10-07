'use strict';
// Misión Agregación · juego individual de la Semana 6 (funciones de agregación y agrupación).
// Los datos y los resultados vienen de datos.js, generado con consultas reales en SQL Server.

const J = window.JUEGO;
const CLAVE = 'mision-agregacion-bd2-v1';
const app = document.getElementById('app');
const GRUPO_COLORES = ['#002C71', '#C88E00', '#910048', '#1E8C7E', '#6B4FBB'];
const DESC_FUNCION = { COUNT: '¿cuántos?', SUM: '¿total?', AVG: '¿promedio?', MIN: '¿el menor?', MAX: '¿el mayor?' };
const TOTAL = J.niveles.reduce((s, n) => s + n.retos.length, 0);

let E = cargar();
let repaso = false;          // al rejugar un nivel terminado no se cambia el puntaje
let reproduciendo = null;

/* ---------------- estado ---------------- */
function cargar() {
  try { return JSON.parse(localStorage.getItem(CLAVE)) || { nombre: '', apellido: '', resp: {} }; }
  catch { return { nombre: '', apellido: '', resp: {} }; }
}
function guardar() { localStorage.setItem(CLAVE, JSON.stringify(E)); }
const clave = (n, r) => `${n}-${r}`;
const aciertos = () => Object.values(E.resp).filter(Boolean).length;
const respondidos = () => Object.keys(E.resp).length;
const nivelHecho = n => J.niveles[n].retos.every((_, r) => clave(n, r) in E.resp);
const nivelAbierto = n => n === 0 || nivelHecho(n - 1);
const todoHecho = () => J.niveles.every((_, n) => nivelHecho(n));
function aciertosNivel(n) { return J.niveles[n].retos.filter((_, r) => E.resp[clave(n, r)]).length; }
function estrellas(n) {
  const p = aciertosNivel(n) / J.niveles[n].retos.length;
  return p === 1 ? 3 : p >= .75 ? 2 : p >= .5 ? 1 : 0;
}

/* ---------------- utilidades ---------------- */
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const KW = /^(SELECT|FROM|WHERE|GROUP|BY|HAVING|ORDER|AS|DESC|ASC|DISTINCT)$/;
const FN = /^(COUNT|SUM|AVG|MIN|MAX)$/;
function resaltar(src) {
  return src.replace(/('(?:[^']|'')*')|([A-Za-z_][A-Za-z0-9_]*)|([^A-Za-z_']+)/g, (m, s, w) => {
    if (s) return `<span class="s">${esc(s)}</span>`;
    if (w) return FN.test(w) ? `<span class="f">${w}</span>` : KW.test(w) ? `<span class="k">${w}</span>` : esc(w);
    return esc(m);
  });
}
const estrellasHTML = k => `<span class="estrellas">${[0, 1, 2].map(i => `<span class="${i < k ? 'on' : ''}">${ICONO.estrella}</span>`).join('')}</span>`;
const PARTICULAS = new Set(['de', 'del', 'la', 'las', 'los', 'y', 'e']);
function nombreBonito(s) {
  return s.trim().replace(/\s+/g, ' ').toLowerCase().split(' ')
    .map((p, i) => i > 0 && PARTICULAS.has(p) ? p : p.replace(/(^|['-])(\p{L})/gu, (m, a, b) => a + b.toUpperCase()))
    .join(' ');
}
function arriba() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function barra() {
  const quien = E.nombre ? `<div class="jugador"><b>${esc(E.nombre)} ${esc(E.apellido)}</b><br>${aciertos()} de ${TOTAL} aciertos</div>` : '';
  return `<header class="top"><div class="logo">${datoSvg({ cara: 'feliz' })}<span>Misión <b>Agregación</b></span></div>${quien}</header>`;
}
function pintar(html) {
  detener();
  document.body.innerHTML = barra() + `<main id="app">${html}</main>`;
  arriba();
}
const $ = s => document.querySelector(s);

/* ---------------- tabla de datos ---------------- */
function valor(v, tipo) {
  if (v === null) return 'NULL';
  if (tipo === 'dec') return Number(v).toFixed(2);
  return String(v);
}
function colIdx(t, c) { return t.cols.findIndex(x => x[0] === c); }

// est: {col, nulos, excluir:Set, grupo, gfuera:Set, marcar:Set, aggTexto:{grupo:texto}}
function tablaHTML(nombre, est = {}) {
  const t = J.tablas[nombre];
  const N = t.cols.length;
  const cab = t.cols.map(([c]) => `<th class="${c === est.col ? 'hl' : ''}">${c}</th>`).join('');
  const fila = (i, extra = '', estilo = '') => {
    const f = t.filas[i];
    const clases = [extra, est.excluir?.has(i) ? 'fuera' : '', est.marcar?.has(i) ? 'estrella' : ''].join(' ');
    const celdas = t.cols.map(([c, tipo], k) => {
      const v = f[k], cl = [];
      if (tipo === 'int' || tipo === 'dec') cl.push('n');
      if (v === null) cl.push('nulo');
      if (c === est.col) cl.push('hl');
      const nota = v === null && c === est.col && est.nulos ? '<span class="nocuenta">no cuenta</span>' : '';
      return `<td class="${cl.join(' ')}">${esc(valor(v, tipo))}${nota}</td>`;
    }).join('');
    return `<tr class="${clases}" style="${estilo}">${celdas}</tr>`;
  };
  let cuerpo = '';
  if (est.grupo) {
    const g = colIdx(t, est.grupo);
    const vivas = t.filas.map((_, i) => i).filter(i => !est.excluir?.has(i));
    const grupos = agruparFilas(t, vivas, g);
    grupos.forEach(([gv, filas], k) => {
      const color = GRUPO_COLORES[k % GRUPO_COLORES.length];
      const fuera = est.gfuera?.has(gv) ? ' gfuera' : '';
      const extra = est.aggTexto?.[gv] ? ` · ${est.aggTexto[gv]}` : '';
      cuerpo += `<tr class="cab-grupo${fuera}"><td colspan="${N}" style="background:${color}">${esc(gv)} · ${filas.length} ${filas.length === 1 ? 'fila' : 'filas'}${extra}${fuera ? ' · no cumple el HAVING' : ''}</td></tr>`;
      filas.forEach(i => { cuerpo += fila(i, 'g' + fuera, `--gc:${color}`); });
    });
    const descartadas = t.filas.map((_, i) => i).filter(i => est.excluir?.has(i));
    if (descartadas.length) {
      cuerpo += `<tr class="cab-grupo gfuera"><td colspan="${N}" style="background:#8a95a1">Descartadas por el WHERE · ${descartadas.length}</td></tr>`;
      descartadas.forEach(i => { cuerpo += fila(i); });
    }
  } else {
    t.filas.forEach((_, i) => { cuerpo += fila(i); });
  }
  const hayNull = t.filas.some(f => f.includes(null));
  return `<div class="tabla-wrap"><table class="datos"><thead><tr>${cab}</tr></thead><tbody>${cuerpo}</tbody></table></div>`
    + `<p class="leyenda">Tabla <b>${nombre}</b> · ${t.filas.length} filas${hayNull ? ' · NULL = celda vacía' : ''}</p>`;
}
function agruparFilas(t, filas, g) {
  const m = new Map();
  filas.forEach(i => { const v = t.filas[i][g]; if (!m.has(v)) m.set(v, []); m.get(v).push(i); });
  return [...m.entries()].sort((a, b) => String(a[0]).localeCompare(String(b[0]), 'es'));
}

/* ---------------- motor de las fases (solo para la animación) ---------------- */
function agregar(t, agg, col, filas) {
  if (col === '*') return filas.length;
  const k = colIdx(t, col), tipo = t.cols[k][1];
  const vals = filas.map(i => t.filas[i][k]).filter(v => v !== null);
  if (agg === 'COUNT') return vals.length;
  if (agg === 'COUNT DISTINCT') return new Set(vals).size;
  if (agg === 'SUM') { const s = vals.reduce((a, b) => a + b, 0); return tipo === 'dec' ? s.toFixed(2) : s; }
  if (agg === 'AVG') {
    const s = vals.reduce((a, b) => a + b, 0);
    return tipo === 'int' ? Math.trunc(s / vals.length) : (s / vals.length).toFixed(2);
  }
  const orden = vals.slice().sort((a, b) => typeof a === 'number' ? a - b : String(a).localeCompare(String(b), 'es'));
  const v = agg === 'MIN' ? orden[0] : orden[orden.length - 1];
  return tipo === 'dec' ? Number(v).toFixed(2) : v;
}
function cumple(a, op, b) {
  const x = typeof b === 'number' ? Number(a) : a;
  return { '=': x === b, '>': x > b, '<': x < b, '>=': x >= b, '<=': x <= b }[op];
}
const lit = v => typeof v === 'number' ? v : `'${v}'`;
const exprAgg = (agg, col) => agg === 'COUNT DISTINCT' ? `COUNT(DISTINCT ${col})` : `${agg}(${col})`;

function pasos(reto, nombreTabla) {
  const t = J.tablas[nombreTabla], f = reto.fases, out = [];
  const todas = t.filas.map((_, i) => i);
  out.push({ fase: 'FROM', texto: `<code>FROM ${nombreTabla}</code>: SQL toma las <b>${todas.length}</b> filas de la tabla.`, est: {} });
  let vivas = todas, excluir = new Set();
  if (f.where) {
    const [c, op, v] = f.where, k = colIdx(t, c);
    vivas = todas.filter(i => cumple(t.filas[i][k], op, v));
    excluir = new Set(todas.filter(i => !vivas.includes(i)));
    out.push({ fase: 'WHERE', texto: `<code>WHERE ${c} ${op} ${esc(lit(v))}</code> revisa cada fila: quedan <b>${vivas.length}</b> de ${todas.length}; las demás se descartan.`, est: { excluir } });
  }
  const textoTotal = (agg, col) => exprAgg(agg, col);
  if (f.group) {
    const g = colIdx(t, f.group);
    const grupos = agruparFilas(t, vivas, g);
    const aggTexto = {};
    grupos.forEach(([gv, fs]) => { aggTexto[gv] = `${textoTotal(f.agg, f.col)} = ${agregar(t, f.agg, f.col, fs)}`; });
    out.push({ fase: 'GROUP BY', texto: `<code>GROUP BY ${f.group}</code> arma <b>${grupos.length}</b> grupos, uno por cada ${f.group} distinto: ${grupos.map(([gv, fs]) => `${esc(gv)} (${fs.length})`).join(', ')}.`, est: { excluir, grupo: f.group } });
    let gfuera = new Set();
    if (f.having) {
      const [agg, col, op, v] = f.having;
      const valores = grupos.map(([gv, fs]) => [gv, agregar(t, agg, col, fs)]);
      const quedan = valores.filter(([, x]) => cumple(x, op, v)), salen = valores.filter(([, x]) => !cumple(x, op, v));
      gfuera = new Set(salen.map(([gv]) => gv));
      const hAgg = {};
      valores.forEach(([gv, x]) => { hAgg[gv] = `${exprAgg(agg, col)} = ${x}`; });
      out.push({ fase: 'HAVING', texto: `<code>HAVING ${exprAgg(agg, col)} ${op} ${v}</code> revisa el total de cada grupo: quedan <b>${quedan.length}</b>${quedan.length ? ' (' + quedan.map(([gv, x]) => `${esc(gv)}: ${x}`).join(', ') + ')' : ''}${salen.length ? '; salen ' + salen.map(([gv, x]) => `${esc(gv)} (${x})`).join(', ') : ''}.`, est: { excluir, grupo: f.group, gfuera, aggTexto: hAgg } });
    }
    const vivos = grupos.filter(([gv]) => !gfuera.has(gv));
    out.push({ fase: 'SELECT', texto: `<code>SELECT</code> calcula <code>${textoTotal(f.agg, f.col)}</code> en cada grupo que queda: ${vivos.map(([gv, fs]) => `${esc(gv)} = <b>${agregar(t, f.agg, f.col, fs)}</b>`).join(' · ')}. Una fila por grupo.`, est: { excluir, grupo: f.group, gfuera, aggTexto, col: f.col === '*' ? null : f.col } });
    return out;
  }
  // sin GROUP BY: todas las filas que quedan forman un solo grupo
  const k = f.col === '*' ? -1 : colIdx(t, f.col);
  const conValor = k < 0 ? vivas : vivas.filter(i => t.filas[i][k] !== null);
  const nulos = vivas.length - conValor.length;
  const res = agregar(t, f.agg, f.col, vivas);
  const tipo = k < 0 ? 'int' : t.cols[k][1];
  const v = i => valor(t.filas[i][k], tipo);
  let texto, marcar = new Set();
  if (f.agg === 'COUNT' && f.col === '*') texto = `<code>COUNT(*)</code> cuenta las filas que quedan: <b>${res}</b>.`;
  else if (f.agg === 'COUNT') texto = `<code>COUNT(${f.col})</code> cuenta solo las celdas con valor: <b>${res}</b>. Las ${nulos} vacías (NULL) no cuentan.`;
  else if (f.agg === 'COUNT DISTINCT') {
    const vistos = [];
    conValor.forEach(i => { if (!vistos.includes(t.filas[i][k])) { vistos.push(t.filas[i][k]); marcar.add(i); } });
    texto = `Valores distintos de ${f.col}: ${vistos.map(esc).join(', ')}. Cada uno cuenta una vez: <b>${res}</b>.`;
  } else if (f.agg === 'SUM') texto = `${conValor.map(v).join(' + ')} = <b>${res}</b>${nulos ? `. Las ${nulos} celdas vacías no suman.` : '.'}`;
  else if (f.agg === 'AVG') {
    const s = conValor.reduce((a, i) => a + t.filas[i][k], 0);
    texto = `Suma: ${conValor.map(v).join(' + ')} = ${tipo === 'dec' ? s.toFixed(2) : s}. Se divide para <b>${conValor.length}</b>${nulos ? ` (los ${nulos} NULL no entran)` : ''}: ${tipo === 'dec' ? s.toFixed(2) : s} ÷ ${conValor.length} = <b>${res}</b>.`;
  } else {
    const etiq = t.cols.findIndex(([, tp]) => tp === 'txt');
    conValor.forEach(i => { if (String(v(i)) === String(res)) marcar.add(i); });
    const quien = [...marcar].map(i => esc(t.filas[i][etiq])).join(', ');
    const como = tipo === 'txt' ? ' en orden alfabético' : tipo === 'fecha' ? ' (la fecha' + (f.agg === 'MIN' ? ' más antigua)' : ' más reciente)') : '';
    texto = `<code>${f.agg}(${f.col})</code> busca el valor ${f.agg === 'MIN' ? 'más bajo' : 'más alto'}${como}: <b>${esc(res)}</b>${tipo === 'txt' ? '' : ` (${quien})`}.`;
  }
  out.push({ fase: 'SELECT', texto, est: { excluir, col: k < 0 ? null : f.col, nulos: ['COUNT', 'SUM', 'AVG'].includes(f.agg), marcar } });
  return out;
}

/* ---------------- pantallas ---------------- */
function inicio() {
  const chips = ['COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'GROUP BY', 'HAVING'].map(c => `<span class="chip oscuro">${c}</span>`).join('');
  const registro = E.nombre
    ? `<h2>Hola de nuevo, ${esc(E.nombre)}</h2><p class="suave">Llevas ${respondidos()} de ${TOTAL} retos y ${aciertos()} aciertos.</p>
       <div class="fila-btn"><button class="btn grande" id="seguir">Continuar la misión ${ICONO.sig}</button></div>
       <div class="fila-btn"><button class="btn sec" id="otro">Soy otra persona / empezar de nuevo</button></div>`
    : `<h2>Registro</h2><p class="suave">Escribe tu nombre y tu apellido: aparecerán en tu certificado.</p>
       <label for="nom">Nombre</label><input type="text" id="nom" autocomplete="given-name" maxlength="30">
       <label for="ape">Apellido</label><input type="text" id="ape" autocomplete="family-name" maxlength="30">
       <p class="aviso" id="aviso"></p>
       <button class="btn grande" id="empezar">Empezar la misión ${ICONO.sig}</button>`;
  pintar(`<section class="portada">${datoSvg({ cara: 'feliz', brazos: 'arriba' })}
      <h1>Misión <b>Agregación</b></h1>
      <p>Funciones de agregación y agrupación en SQL · Semana 6</p>
      <div class="chips-niveles">${chips}</div></section>
    <div class="card">${registro}</div>
    <div class="card"><h2>${ICONO.mapa} Cómo se juega</h2>
      <p>Son <b>6 niveles</b> con casos de la vida real: una app de delivery, un reloj inteligente, una app de música, una app de transporte, la mesa de ayuda y una tienda de tecnología. Cada nivel es más difícil que el anterior.</p>
      <p>En cada reto ves la tabla completa, respondes y después miras <b>cómo lo resuelve SQL, paso a paso</b>. Al terminar recibes tu <b>certificado</b>.</p></div>`);
  if (E.nombre) {
    $('#seguir').onclick = mapa;
    $('#otro').onclick = () => { if (confirm('Se borrará el progreso guardado en este dispositivo. ¿Continuar?')) { E = { nombre: '', apellido: '', resp: {} }; guardar(); inicio(); } };
    return;
  }
  const valido = s => /^[\p{L}][\p{L}' -]{1,29}$/u.test(s.trim());
  $('#empezar').onclick = () => {
    const n = $('#nom').value, a = $('#ape').value;
    if (!valido(n) || !valido(a)) { $('#aviso').textContent = 'Escribe tu nombre y tu apellido (solo letras).'; return; }
    E = { nombre: nombreBonito(n), apellido: nombreBonito(a), resp: {} };
    guardar();
    mapa();
  };
}

function mapa() {
  repaso = false;
  const pct = Math.round(respondidos() / TOTAL * 100);
  const nodos = J.niveles.map((nv, n) => {
    const hecho = nivelHecho(n), abierto = nivelAbierto(n);
    const clase = hecho ? 'hecho' : abierto ? 'actual' : '';
    const der = hecho ? estrellasHTML(estrellas(n)) : abierto ? `<span class="chip">${ICONO.play} Jugar</span>` : `<span class="suave">${ICONO.candado}</span>`;
    return `<button class="nodo ${clase}" data-n="${n}" ${abierto ? '' : 'disabled'}>
      <span class="medalla">${ICONO[nv.icono]}<span class="num">${n + 1}</span></span>
      <span><b>Nivel ${n + 1} · ${nv.titulo}</b><small>${J.tablas[nv.tabla].caso} · ${nv.clave}</small></span>${der}</button>`;
  }).join('');
  pintar(`<h2>${ICONO.mapa} Mapa de la misión</h2>
    <div class="progreso"><i style="width:${pct}%"></i></div>
    <div class="mapa">${nodos}</div>
    ${todoHecho() ? `<div class="fila-btn"><button class="btn grande" id="cert">${ICONO.trofeo} Ver mi certificado</button></div>` : ''}`);
  document.querySelectorAll('.nodo:not(:disabled)').forEach(b => { b.onclick = () => intro(+b.dataset.n); });
  if (todoHecho()) $('#cert').onclick = certificado;
}

function intro(n) {
  const nv = J.niveles[n];
  repaso = nivelHecho(n);
  pintar(`<div class="cabeza-reto"><button class="btn sec" id="volver">${ICONO.mapa} Mapa</button>
      <span class="chip oscuro">Nivel ${n + 1} · ${nv.clave}</span></div>
    <div class="globo">${datoSvg({ cara: 'feliz', brazos: 'piensa' })}<div class="texto">${esc(nv.intro)}</div></div>
    <div class="card">
      <div class="caso">${ICONO[ICONO_CASO[nv.tabla]]}<div><b>${J.tablas[nv.tabla].caso}</b>${esc(nv.contexto)}</div></div>
      ${tablaHTML(nv.tabla)}
      ${repaso ? '<p class="suave"><b>Modo repaso:</b> ya terminaste este nivel; tu puntaje no cambia.</p>' : ''}
      <div class="fila-btn"><button class="btn grande" id="comenzar">Comenzar los ${nv.retos.length} retos ${ICONO.sig}</button></div>
    </div>`);
  $('#volver').onclick = mapa;
  $('#comenzar').onclick = () => reto(n, 0);
}

function reto(n, r) {
  const nv = J.niveles[n], rt = nv.retos[r];
  const puntos = nv.retos.map((_, k) => {
    const c = clave(n, k);
    return `<i class="${k === r ? 'ahora' : c in E.resp && !repaso ? (E.resp[c] ? 'ok' : 'no') : ''}"></i>`;
  }).join('');
  const conTabla = rt.tipo !== 'orden' || rt.sql;
  pintar(`<div class="cabeza-reto"><button class="btn sec" id="volver">${ICONO.mapa} Mapa</button>
      <span class="chip oscuro">Nivel ${n + 1} · Reto ${r + 1} de ${nv.retos.length}</span><span class="puntos">${puntos}</span></div>
    <div class="card">
      <div class="caso">${ICONO[ICONO_CASO[nv.tabla]]}<div><b>${J.tablas[nv.tabla].caso}</b>${esc(nv.contexto)}</div></div>
      <div class="reto-cuerpo">
        <div>${conTabla ? tablaHTML(nv.tabla) : ''}</div>
        <div><p class="pregunta">${esc(rt.pregunta)}</p>
          ${rt.muestra_sql ? `<pre class="sql">${resaltar(rt.sql)}</pre><p></p>` : ''}
          <div id="zona"></div></div>
      </div>
      <div id="retro"></div>
      <div class="fila-btn oculto" id="nav"><button class="btn grande" id="siguiente"></button></div>
    </div>`);
  $('#volver').onclick = mapa;
  ({ funcion: zonaOpciones, opcion: zonaOpciones, error: zonaError, orden: zonaOrden, clasifica: zonaClasifica })[rt.tipo](n, r, rt);
}

/* ---------------- tipos de reto ---------------- */
function zonaOpciones(n, r, rt) {
  const cod = rt.tipo === 'funcion';
  $('#zona').innerHTML = `<div class="opciones">${rt.opciones.map((o, i) =>
    `<button class="op${cod ? ' cod' : ''}" data-i="${i}">${esc(o)}${cod ? `<small>${DESC_FUNCION[o] || ''}</small>` : ''}</button>`).join('')}</div>`;
  document.querySelectorAll('.op').forEach(b => {
    b.onclick = () => {
      const i = +b.dataset.i, ok = i === rt.correcta;
      document.querySelectorAll('.op').forEach(x => { x.disabled = true; });
      document.querySelector(`.op[data-i="${rt.correcta}"]`).classList.add('ok');
      if (!ok) b.classList.add('no');
      responder(n, r, ok, ok ? '' : rt.porque[i]);
    };
  });
}

function zonaError(n, r, rt) {
  $('#zona').innerHTML = `<div class="lineas">${rt.lineas.map((l, i) => `<button class="linea" data-i="${i}">${resaltar(l)}</button>`).join('')}</div>`;
  document.querySelectorAll('.linea').forEach(b => {
    b.onclick = () => {
      const i = +b.dataset.i, ok = i === rt.mala;
      document.querySelectorAll('.linea').forEach(x => { x.disabled = true; });
      document.querySelector(`.linea[data-i="${rt.mala}"]`).classList.add('ok');
      if (!ok) b.classList.add('no');
      responder(n, r, ok, ok ? '' : `El problema no está en esa línea: está en la línea ${rt.mala + 1}.`);
    };
  });
}

function zonaOrden(n, r, rt) {
  const fichas = rt.items.map((x, i) => [x, i]).sort(() => Math.random() - .5);
  const puesto = [];
  const dibujar = () => {
    $('#zona').innerHTML = `<div class="ranuras">${rt.items.map((_, k) => `<div class="ranura${puesto[k] !== undefined ? ' llena' : ''}" data-k="${k}"><span class="n">${k + 1}</span>${puesto[k] !== undefined ? esc(rt.items[puesto[k]]) : ''}</div>`).join('')}</div>
      <p class="suave">Toca las piezas en orden. Toca una casilla llena para quitar su pieza.</p>
      <div class="fichas">${fichas.map(([x, i]) => `<button class="ficha" data-i="${i}" ${puesto.includes(i) ? 'disabled' : ''}>${esc(x)}</button>`).join('')}</div>
      <div class="fila-btn"><button class="btn azul" id="comprobar" ${puesto.filter(x => x !== undefined).length === rt.items.length ? '' : 'disabled'}>Comprobar</button></div>`;
    document.querySelectorAll('.ficha:not(:disabled)').forEach(b => {
      b.onclick = () => { const libre = rt.items.findIndex((_, k) => puesto[k] === undefined); puesto[libre] = +b.dataset.i; dibujar(); };
    });
    document.querySelectorAll('.ranura.llena').forEach(d => { d.onclick = () => { puesto[+d.dataset.k] = undefined; dibujar(); }; });
    $('#comprobar').onclick = () => {
      const ok = puesto.every((v, k) => v === k);
      document.querySelectorAll('.ranura').forEach((d, k) => { d.classList.add(puesto[k] === k ? 'ok' : 'no'); d.onclick = null; });
      document.querySelectorAll('.ficha').forEach(b => { b.disabled = true; });
      $('#comprobar').disabled = true;
      responder(n, r, ok, ok ? '' : `El orden correcto es: ${rt.items.join(' → ')}.`);
    };
  };
  dibujar();
}

function zonaClasifica(n, r, rt) {
  const elegido = rt.items.map(() => null);
  $('#zona').innerHTML = `<div class="clasif">${rt.items.map(([txt], k) => `<div class="cond" data-k="${k}"><code>${esc(txt)}</code>
      <div class="dos"><button data-v="WHERE">WHERE</button><button data-v="HAVING">HAVING</button></div><div class="porque oculto"></div></div>`).join('')}</div>
    <div class="fila-btn"><button class="btn azul" id="comprobar" disabled>Comprobar</button></div>`;
  document.querySelectorAll('.cond').forEach(c => {
    const k = +c.dataset.k;
    c.querySelectorAll('button').forEach(b => {
      b.onclick = () => {
        elegido[k] = b.dataset.v;
        c.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
        $('#comprobar').disabled = elegido.includes(null);
      };
    });
  });
  $('#comprobar').onclick = () => {
    let bien = 0;
    document.querySelectorAll('.cond').forEach(c => {
      const k = +c.dataset.k, [, correcto, porque] = rt.items[k];
      c.querySelectorAll('button').forEach(b => {
        b.disabled = true; b.classList.remove('on');
        if (b.dataset.v === correcto) b.classList.add('ok');
        else if (b.dataset.v === elegido[k]) b.classList.add('no');
      });
      if (elegido[k] === correcto) bien++;
      const p = c.querySelector('.porque'); p.textContent = porque; p.classList.remove('oculto');
    });
    $('#comprobar').disabled = true;
    const ok = bien === rt.items.length;
    responder(n, r, ok, ok ? '' : `Acertaste ${bien} de ${rt.items.length}. Revisa el porqué debajo de cada condición.`);
  };
}

/* ---------------- respuesta, explicación y avance ---------------- */
function numeroSticker(rt, n, r) {
  const m = rt.mensaje || '';
  if (m.includes('8120')) return 0;
  if (m.includes('147') || rt.tipo === 'clasifica') return 5;
  if (/NULL|vac/.test(rt.explica)) return 1;
  return [2, 3, 4][(n + r) % 3];
}

function responder(n, r, ok, porque) {
  const nv = J.niveles[n], rt = nv.retos[r];
  if (!repaso) { E.resp[clave(n, r)] = ok; guardar(); }
  const arte = ok ? datoSvg({ cara: 'festeja', brazos: 'arriba' }) : sticker(numeroSticker(rt, n, r));
  $('#retro').innerHTML = `<div class="retro ${ok ? 'ok' : 'no'}">${arte}<div>
      <h3>${ok ? '¡Correcto!' : 'No es correcto'}</h3>
      ${porque ? `<p><b>Por qué no:</b> ${esc(porque)}</p>` : ''}
      <p>${esc(rt.explica)}</p></div></div>${solucion(rt, nv.tabla)}`;
  activarPasos(rt, nv.tabla);
  const ultimo = r === nv.retos.length - 1;
  $('#siguiente').innerHTML = ultimo ? `Terminar el nivel ${ICONO.sig}` : `Siguiente reto ${ICONO.sig}`;
  $('#siguiente').onclick = () => (ultimo ? finNivel(n) : reto(n, r + 1));
  $('#nav').classList.remove('oculto');
  const jug = document.querySelector('header .jugador');
  if (jug) jug.innerHTML = `<b>${esc(E.nombre)} ${esc(E.apellido)}</b><br>${aciertos()} de ${TOTAL} aciertos`;
  $('#retro').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function tablaResultado(res) {
  return `<table class="res"><thead><tr>${res.cols.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead>
    <tbody>${res.filas.map(f => `<tr>${f.map(v => `<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}

function solucion(rt, tabla) {
  if (rt.tipo === 'orden' && !rt.sql) {
    return `<div class="paso-a-paso"><h2>${ICONO.codigo} El orden correcto</h2><div class="fases">${rt.items.map((x, i) =>
      `<span class="fase actual">${i + 1} ${esc(x)}</span>`).join('')}</div></div>`;
  }
  if (rt.tipo === 'clasifica') return '';
  const sql = rt.tipo === 'error' ? rt.corregida : rt.sql;
  const msg = rt.tipo === 'error' ? `<div class="msg">Mensaje de SQL Server con la consulta original:\n${esc(rt.mensaje)}</div><h3 style="margin:12px 0 6px;color:#146b3d">Consulta corregida</h3>` : '';
  const ps = rt.fases ? pasos(rt, tabla) : [];
  return `<div class="paso-a-paso"><h2>${ICONO.ojo} Cómo lo resuelve SQL, paso a paso</h2>${msg}
    <pre class="sql">${resaltar(sql)}</pre>
    ${ps.length ? `<p></p><div class="fases" id="fases">${ps.map((p, i) => `<button class="fase" data-i="${i}">${i + 1} ${p.fase}</button>`).join('')}</div>
      <div class="explicacion-fase" id="expf"></div><div id="tpasos"></div>
      <div class="fila-btn"><button class="btn sec" id="pant">${ICONO.ant} Anterior</button>
        <button class="btn azul" id="pplay">${ICONO.play} Reproducir</button>
        <button class="btn sec" id="psig">Siguiente ${ICONO.sig}</button></div>` : ''}
    <div class="resultado"><h3>${ICONO.bien} Resultado real en SQL Server</h3>${tablaResultado(rt.resultado)}</div></div>`;
}

function activarPasos(rt, tabla) {
  if (!rt.fases || rt.tipo === 'clasifica' || (rt.tipo === 'orden' && !rt.sql)) return;
  const ps = pasos(rt, tabla);
  let k = 0;
  const ver = i => {
    k = Math.max(0, Math.min(ps.length - 1, i));
    document.querySelectorAll('#fases .fase').forEach((b, j) => { b.className = 'fase' + (j < k ? ' hecha' : j === k ? ' actual' : ''); });
    $('#expf').innerHTML = `Paso ${k + 1} de ${ps.length} · ${ps[k].texto}`;
    $('#tpasos').innerHTML = tablaHTML(tabla, ps[k].est);
  };
  document.querySelectorAll('#fases .fase').forEach(b => { b.onclick = () => { detener(); ver(+b.dataset.i); }; });
  $('#pant').onclick = () => { detener(); ver(k - 1); };
  $('#psig').onclick = () => { detener(); ver(k + 1); };
  $('#pplay').onclick = () => {
    if (reproduciendo) { detener(); return; }
    ver(0);
    $('#pplay').innerHTML = `${ICONO.pausa} Pausa`;
    reproduciendo = setInterval(() => { if (k >= ps.length - 1) detener(); else ver(k + 1); }, 2200);
  };
  ver(0);
}
function detener() {
  if (reproduciendo) { clearInterval(reproduciendo); reproduciendo = null; }
  const b = document.getElementById('pplay'); if (b) b.innerHTML = `${ICONO.play} Reproducir`;
}

function confeti() {
  const c = document.createElement('div'); c.className = 'confeti';
  const colores = ['#EAAA00', '#FFFFFF', '#910048', '#7fb4ff', '#1E9E5A'];
  c.innerHTML = Array.from({ length: 70 }, () => `<i style="left:${Math.random() * 100}%;background:${colores[Math.floor(Math.random() * colores.length)]};animation-duration:${2 + Math.random() * 2.5}s;animation-delay:${Math.random() * .8}s"></i>`).join('');
  document.body.appendChild(c);
  setTimeout(() => c.remove(), 5000);
}

function finNivel(n) {
  const nv = J.niveles[n], est = estrellas(n), bien = aciertosNivel(n);
  const msj = repaso ? 'Repaso terminado. Tu puntaje no cambia.' :
    est === 3 ? '¡Nivel perfecto!' : est === 2 ? '¡Muy bien! Casi perfecto.' : est === 1 ? 'Bien. Repasa los porqués para el siguiente nivel.' : 'Revisa las explicaciones: el siguiente nivel usa lo de este.';
  const siguiente = n + 1 < J.niveles.length;
  pintar(`<div class="card fin">${datoSvg({ cara: est >= 2 ? 'festeja' : 'feliz', brazos: est >= 2 ? 'arriba' : 'abajo' })}
      <h2 style="justify-content:center">Nivel ${n + 1} · ${nv.titulo}</h2>
      ${estrellasHTML(est)}
      <p><b>${bien} de ${nv.retos.length}</b> retos correctos · ${msj}</p>
      <div class="fila-btn">
        ${siguiente ? `<button class="btn grande" id="sig">Ir al nivel ${n + 2} ${ICONO.sig}</button>` : `<button class="btn grande" id="cert">${ICONO.trofeo} Ver mi certificado</button>`}
      </div>
      <div class="fila-btn"><button class="btn sec" id="mapa">${ICONO.mapa} Volver al mapa</button></div></div>`);
  if (est >= 2 && !repaso) confeti();
  $('#mapa').onclick = mapa;
  if (siguiente) $('#sig').onclick = () => intro(n + 1);
  else $('#cert').onclick = certificado;
}

/* ---------------- certificado ---------------- */
function rango(p) { return p >= 90 ? 'Maestro de la agregación' : p >= 75 ? 'Analista de datos' : p >= 50 ? 'Explorador SQL' : 'Aprendiz SQL'; }
function codigo(texto) {
  let h = 0x811c9dc5;
  for (const ch of texto) { h ^= ch.codePointAt(0); h = Math.imul(h, 0x01000193) >>> 0; }
  const s = h.toString(36).toUpperCase().padStart(8, '0').slice(-8);
  return s.slice(0, 4) + '-' + s.slice(4);
}
const cargarImg = src => new Promise((ok, mal) => { const i = new Image(); i.onload = () => ok(i); i.onerror = mal; i.src = src; });

async function dibujarCertificado() {
  try { await Promise.all([document.fonts.load('800 60px Poppins'), document.fonts.load('600 30px Poppins'), document.fonts.load('400 28px Poppins')]); } catch { /* sigue con la fuente del sistema */ }
  const W = 1600, H = 1131, c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d');
  const AZUL = '#002C71', DORADO = '#EAAA00', MAG = '#910048', GRIS = '#4a5461';
  x.fillStyle = '#fff'; x.fillRect(0, 0, W, H);
  x.fillStyle = '#fbf7ec'; x.fillRect(60, 60, W - 120, H - 120);
  x.strokeStyle = DORADO; x.lineWidth = 16; x.strokeRect(28, 28, W - 56, H - 56);
  x.strokeStyle = AZUL; x.lineWidth = 3; x.strokeRect(60, 60, W - 120, H - 120);
  x.fillStyle = DORADO;
  [[60, 60, 1, 1], [W - 60, 60, -1, 1], [60, H - 60, 1, -1], [W - 60, H - 60, -1, -1]].forEach(([a, b, sx, sy]) => {
    x.beginPath(); x.moveTo(a, b); x.lineTo(a + 84 * sx, b); x.lineTo(a, b + 84 * sy); x.closePath(); x.fill();
  });
  try { const logo = await cargarImg('logo-uide.png'); const h = 120, w = logo.width * h / logo.height; x.drawImage(logo, 110, 92, w, h); } catch { /* sin logo */ }
  try {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 0 128 142" width="256" height="284">${dato({ cara: 'festeja', brazos: 'arriba' })}</svg>`;
    const im = await cargarImg('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg));
    x.drawImage(im, W - 300, 92, 180, 200);
  } catch { /* sin mascota */ }
  const centro = (txt, y, fuente, color) => { x.font = fuente; x.fillStyle = color; x.textAlign = 'center'; x.fillText(txt, W / 2, y); };
  centro('CERTIFICADO DE LOGRO', 330, '800 66px Poppins, sans-serif', AZUL);
  x.fillStyle = DORADO; x.fillRect(W / 2 - 160, 352, 320, 6);
  centro('Se otorga a', 425, '400 30px Poppins, sans-serif', GRIS);
  const nombre = `${E.nombre} ${E.apellido}`;
  let tam = 78; x.font = `800 ${tam}px Poppins, sans-serif`;
  while (x.measureText(nombre).width > W - 360 && tam > 40) { tam -= 4; x.font = `800 ${tam}px Poppins, sans-serif`; }
  centro(nombre, 515, `800 ${tam}px Poppins, sans-serif`, MAG);
  x.strokeStyle = DORADO; x.lineWidth = 3; x.beginPath(); x.moveTo(W / 2 - 420, 545); x.lineTo(W / 2 + 420, 545); x.stroke();
  centro('por completar la Misión Agregación: funciones de agregación y agrupación en SQL', 610, '600 30px Poppins, sans-serif', AZUL);
  centro('COUNT · SUM · AVG · MIN · MAX · GROUP BY · HAVING', 658, '600 24px "JetBrains Mono", Consolas, monospace', GRIS);
  centro('Sistemas de Gestión de Bases de Datos · Semana 6 · Universidad Internacional del Ecuador', 704, '400 24px Poppins, sans-serif', GRIS);
  const a = aciertos(), p = Math.round(a / TOTAL * 100);
  const datos = [[`${a} de ${TOTAL}`, 'aciertos'], [`${p} %`, 'de logro'], [rango(p), 'nivel alcanzado']];
  datos.forEach(([v, et], i) => {
    const cx = W / 2 + (i - 1) * 420, y = 760;
    x.fillStyle = i === 2 ? '#fdf2f7' : '#eef3fb'; x.strokeStyle = i === 2 ? MAG : AZUL; x.lineWidth = 2;
    x.beginPath();
    if (x.roundRect) x.roundRect(cx - 190, y, 380, 110, 18); else x.rect(cx - 190, y, 380, 110);
    x.fill(); x.stroke();
    x.textAlign = 'center'; x.fillStyle = i === 2 ? MAG : AZUL;
    let t = 40; x.font = `800 ${t}px Poppins, sans-serif`;
    while (x.measureText(v).width > 350 && t > 22) { t -= 2; x.font = `800 ${t}px Poppins, sans-serif`; }
    x.fillText(v, cx, y + 58);
    x.font = '400 20px Poppins, sans-serif'; x.fillStyle = GRIS; x.fillText(et, cx, y + 92);
  });
  const fecha = new Date().toLocaleDateString('es-EC', { day: 'numeric', month: 'long', year: 'numeric' });
  x.textAlign = 'left'; x.fillStyle = GRIS; x.font = '400 24px Poppins, sans-serif';
  x.fillText(fecha.charAt(0).toUpperCase() + fecha.slice(1), 130, 985);
  x.font = '400 18px Poppins, sans-serif'; x.fillText('Fecha', 130, 1012);
  x.strokeStyle = GRIS; x.lineWidth = 1.5; x.beginPath(); x.moveTo(1000, 970); x.lineTo(1420, 970); x.stroke();
  x.textAlign = 'center'; x.fillStyle = AZUL; x.font = '600 24px Poppins, sans-serif';
  x.fillText('Mgtr. María del Carmen Salazar Torres', 1210, 1004);
  x.fillStyle = GRIS; x.font = '400 18px Poppins, sans-serif'; x.fillText('Docente', 1210, 1030);
  centro(`Código de verificación: ${codigo(`${nombre}|${a}|${fecha}`)}`, 1040, '400 18px "JetBrains Mono", Consolas, monospace', '#8a95a1');
  return c;
}

async function certificado() {
  if (!todoHecho()) { mapa(); return; }
  pintar(`<div class="card centro"><h2 style="justify-content:center">${ICONO.trofeo} Tu certificado</h2>
      <p class="suave">Generando…</p><div id="certzona"></div></div>`);
  const c = await dibujarCertificado();
  const url = c.toDataURL('image/png');
  const archivo = `Certificado-${E.nombre}-${E.apellido}.png`.replace(/\s+/g, '-');
  $('#certzona').innerHTML = `<img class="cert" src="${url}" alt="Certificado de ${esc(E.nombre)} ${esc(E.apellido)}">
    <div class="fila-btn"><a class="btn grande" id="descargar" href="${url}" download="${esc(archivo)}">${ICONO.descargar} Descargar certificado</a></div>
    <p class="suave">En el celular también puedes mantener presionada la imagen para guardarla.</p>
    <div class="fila-btn"><button class="btn sec" id="mapa">${ICONO.mapa} Volver al mapa</button></div>`;
  document.querySelector('.card .suave').remove();
  $('#mapa').onclick = mapa;
  confeti();
}

/* ---------------- arranque ---------------- */
inicio();
