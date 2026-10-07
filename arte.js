'use strict';
// Ilustraciones de Misión Agregación en SVG: Dato (la mascota, un cilindro de base de datos),
// los stickers de las respuestas incorrectas y los íconos. Nada de emojis: todo lo visual sale de aquí.

const TRAZO = '#1b2a3a';
const T = `stroke="${TRAZO}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;

// Dato de cuerpo entero en una caja de 120 × 140.
function dato({ cara = 'feliz', brazos = 'abajo', color = '#EAAA00', tapa = '#FFD45C' } = {}) {
  const ojo = (x, y, r = 6) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${TRAZO}"/><circle cx="${x + 2}" cy="${y - 2}" r="2" fill="#fff"/>`;
  const CARAS = {
    feliz: ojo(47, 68) + ojo(73, 68) + `<path d="M50 80 Q60 90 70 80" fill="none" ${T}/>`,
    festeja: `<path d="M41 69 Q47 61 53 69 M67 69 Q73 61 79 69" fill="none" ${T}/>`
      + `<path d="M48 78 Q60 94 72 78 Z" fill="#fff" ${T}/>`,
    piensa: ojo(50, 65, 5) + ojo(76, 65, 5) + `<path d="M52 84 h14" ${T}/>`,
    triste: ojo(47, 71, 5) + ojo(73, 71, 5) + `<path d="M40 60 L52 57 M68 57 L80 60" ${T}/><path d="M51 86 Q60 79 69 86" fill="none" ${T}/>`,
    sorpresa: `<circle cx="47" cy="68" r="8" fill="#fff" ${T}/><circle cx="73" cy="68" r="8" fill="#fff" ${T}/>`
      + `<circle cx="47" cy="68" r="3.5" fill="${TRAZO}"/><circle cx="73" cy="68" r="3.5" fill="${TRAZO}"/>`
      + `<ellipse cx="60" cy="85" rx="5" ry="6" fill="${TRAZO}"/>`,
    mareo: `<path d="M41 62 l12 12 M53 62 l-12 12 M67 62 l12 12 M79 62 l-12 12" ${T} stroke-width="3.5"/>`
      + `<path d="M50 85 q5 -5 10 0 q5 5 10 0" fill="none" ${T}/>`,
  };
  const BRAZOS = {
    abajo: `<path d="M20 78 L8 98 M100 78 L112 98" ${T}/><circle cx="8" cy="99" r="4.5" fill="${color}" ${T}/><circle cx="112" cy="99" r="4.5" fill="${color}" ${T}/>`,
    arriba: `<path d="M20 70 L6 42 M100 70 L114 42" ${T}/><circle cx="6" cy="40" r="4.5" fill="${color}" ${T}/><circle cx="114" cy="40" r="4.5" fill="${color}" ${T}/>`,
    piensa: `<path d="M20 78 L8 98 M100 80 L84 92" ${T}/><circle cx="8" cy="99" r="4.5" fill="${color}" ${T}/><circle cx="82" cy="93" r="4.5" fill="${color}" ${T}/>`,
  };
  return `<g>
    <path d="M45 120 l-3 13 M75 120 l3 13" ${T}/><ellipse cx="40" cy="135" rx="8" ry="4" fill="${TRAZO}"/><ellipse cx="80" cy="135" rx="8" ry="4" fill="${TRAZO}"/>
    ${BRAZOS[brazos] || BRAZOS.abajo}
    <path d="M20 26 V114 A40 12 0 0 0 100 114 V26" fill="${color}" ${T}/>
    <path d="M20 50 A40 12 0 0 0 100 50 M20 100 A40 12 0 0 0 100 100" fill="none" stroke="${TRAZO}" stroke-width="2.5" opacity=".55"/>
    <ellipse cx="60" cy="26" rx="40" ry="12" fill="${tapa}" ${T}/>
    <ellipse cx="60" cy="26" rx="22" ry="5" fill="#fff" opacity=".45"/>
    ${CARAS[cara] || CARAS.feliz}
  </g>`;
}

function datoSvg(op = {}, clase = 'dato') {
  return `<svg viewBox="-4 0 128 142" class="${clase}" role="img" aria-label="Dato, la mascota">${dato(op)}</svg>`;
}

const letra = (x, y, s, tam, relleno) => `<text x="${x}" y="${y}" font-size="${tam}" font-family="Poppins, sans-serif" font-weight="800"
  fill="${relleno}" stroke="${TRAZO}" stroke-width="2" paint-order="stroke" text-anchor="middle">${s}</text>`;

const STICKERS = [
  { txt: 'Msg 8120', cara: 'mareo', extra: letra(190, 60, '?', 40, '#EAAA00') + letra(48, 70, '?', 30, '#EAAA00') + letra(204, 108, '?', 22, '#EAAA00') },
  { txt: 'NULL no cuenta', cara: 'sorpresa', extra:
    `<rect x="172" y="50" width="56" height="40" rx="7" fill="#fff" stroke="${TRAZO}" stroke-width="3" stroke-dasharray="7 5"/>
     <text x="200" y="76" font-size="15" font-family="JetBrains Mono, monospace" font-weight="700" fill="${TRAZO}" text-anchor="middle">NULL</text>` },
  { txt: 'casi, casi', cara: 'triste', extra:
    `<path d="M150 58 q-7 10 0 15 q7 -5 0 -15 Z" fill="#7cc4ff" stroke="${TRAZO}" stroke-width="2"/>
     <g fill="#cfd8e3" ${T}><circle cx="186" cy="40" r="11"/><circle cx="201" cy="33" r="13"/><circle cx="216" cy="41" r="10"/></g>` },
  { txt: 'revisa los datos', cara: 'piensa', extra:
    `<path d="M196 92 L220 116" stroke="${TRAZO}" stroke-width="9" stroke-linecap="round"/>
     <circle cx="180" cy="74" r="22" fill="rgba(200,235,255,.5)" stroke="${TRAZO}" stroke-width="5"/>
     <path d="M168 63 a14 14 0 0 1 10 -5" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>` },
  { txt: 'vuelve a contar', cara: 'sorpresa', extra:
    letra(182, 52, '1', 26, '#9CC3FF') + letra(204, 80, '2', 26, '#F4A6C6') + letra(180, 108, '3', 26, '#B5E27A') },
  { txt: 'Msg 147', cara: 'mareo', extra:
    `<path d="M44 40 l12 8 -8 5 13 10 M190 84 l10 6 -7 4 11 9" fill="none" stroke="#EAAA00" stroke-width="4" stroke-linejoin="round"/>
     <g fill="#d7dde5" ${T}><circle cx="182" cy="44" r="11"/><circle cx="196" cy="32" r="9"/><circle cx="200" cy="50" r="8"/></g>` },
];

function sticker(k) {
  const s = STICKERS[k % STICKERS.length];
  const ancho = s.txt.length * 8 + 30;
  return `<svg viewBox="0 0 240 212" class="sticker" role="img" aria-label="Sticker: ${s.txt}">
    <defs><filter id="borde-stk" x="-15%" y="-15%" width="130%" height="130%">
      <feMorphology in="SourceAlpha" operator="dilate" radius="6" result="d"/>
      <feGaussianBlur in="d" stdDeviation="4" result="b"/><feOffset in="b" dy="5" result="o"/>
      <feFlood flood-color="#000" flood-opacity=".35"/><feComposite in2="o" operator="in" result="sombra"/>
      <feFlood flood-color="#fff"/><feComposite in2="d" operator="in" result="borde"/>
      <feMerge><feMergeNode in="sombra"/><feMergeNode in="borde"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <g filter="url(#borde-stk)"><g transform="translate(60 14)">${dato({ cara: s.cara, color: '#F4A6C6', tapa: '#FBC9DD' })}</g>${s.extra}
      <rect x="${120 - ancho / 2}" y="168" width="${ancho}" height="30" rx="15" fill="#910048"/>
      <text x="120" y="188" font-size="13" font-family="JetBrains Mono, monospace" font-weight="700" fill="#fff" text-anchor="middle">${s.txt}</text></g></svg>`;
}

// Íconos de trazo (24 × 24, heredan el color del texto).
const ic = d => `<svg viewBox="0 0 24 24" class="ic" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2"
  stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICONO = {
  trofeo: ic('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 5M17 6h3a3 3 0 0 1-3 5"/>'),
  candado: ic('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  estrella: ic('<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor"/>'),
  bien: ic('<path d="m4 12 5 5L20 6"/>'),
  sig: ic('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  ant: ic('<path d="M19 12H5M11 6l-6 6 6 6"/>'),
  play: ic('<path d="M7 4v16l13-8z" fill="currentColor"/>'),
  pausa: ic('<path d="M7 4v16M17 4v16"/>'),
  descargar: ic('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>'),
  codigo: ic('<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>'),
  ojo: ic('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
  agenda: ic('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M7 14h3M7 17h3M14 14h3"/>'),
  enviar: ic('<path d="M21 3 10 14M21 3l-7 18-4-7-7-4z"/>'),
  persona: ic('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  banco: ic('<path d="M3 9.5 12 4l9 5.5zM5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>'),
  // un ícono por área del banco (día de la semana)
  operaciones: ic('<path d="M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4"/>'),
  tesoreria: ic('<rect x="3" y="4" width="18" height="15" rx="2"/><circle cx="12" cy="11.5" r="3.5"/><path d="M12 8v1M12 14v1M15.5 11.5h-1M9.5 11.5h-1M6 19v2M18 19v2"/>'),
  cajero: ic('<rect x="4" y="3" width="16" height="12" rx="2"/><path d="M8 7h8M8 10h5M7 15v5h10v-5M10 18h4"/>'),
  agencia: ic('<path d="M4 21V8l8-5 8 5v13M2 21h20M9 21v-6h6v6M8 10h2M14 10h2"/>'),
  riesgo: ic('<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="M12 8v5M12 16v.5"/>'),
  comite: ic('<rect x="3" y="3" width="18" height="12" rx="1.5"/><path d="M7 11l3-3 3 2 4-4M12 15v3M8 21l4-3 4 3"/>'),
};
