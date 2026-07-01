const fs = require('fs');
const zlib = require('zlib');

function encode6bit(b) {
  if (b < 10) return String.fromCharCode(48 + b);
  b -= 10;
  if (b < 26) return String.fromCharCode(65 + b);
  b -= 26;
  if (b < 26) return String.fromCharCode(97 + b);
  b -= 26;
  if (b === 0) return '-';
  if (b === 1) return '_';
  return '?';
}

function append3bytes(b1, b2, b3) {
  let c1 = b1 >> 2;
  let c2 = ((b1 & 0x3) << 4) | (b2 >> 4);
  let c3 = ((b2 & 0xF) << 2) | (b3 >> 6);
  let c4 = b3 & 0x3F;
  return encode6bit(c1) + encode6bit(c2) + encode6bit(c3) + encode6bit(c4);
}

function plantumlEncode(data) {
  const compressed = zlib.deflateRawSync(Buffer.from(data, 'utf8'));
  let res = '';
  for (let i = 0; i < compressed.length; i += 3) {
    if (i + 2 === compressed.length) {
      res += append3bytes(compressed[i], compressed[i + 1], 0);
      break;
    }
    if (i + 1 === compressed.length) {
      res += append3bytes(compressed[i], 0, 0);
      break;
    }
    res += append3bytes(compressed[i], compressed[i + 1], compressed[i + 2]);
  }
  return res;
}

const files = [
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Usuarios.puml',
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Clientes.puml',
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Abogados.puml',
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Administracion.puml',
  'MODELO_UML/ABOGADO/Casos-Uso/Abogado-GestionCasos.puml',
  'MODELO_UML/ABOGADO/Casos-Uso/Abogado-Audiencias.puml',
  'MODELO_UML/GENERAL/Casos-Uso-General/CU-mn-bufete.puml',
  'MODELO_UML/Estructural/diagrama-clases-mn-bufete.puml'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`${file}`);
  console.log(`https://www.plantuml.com/plantuml/png/${plantumlEncode(content)}`);
  console.log('');
});
