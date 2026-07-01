const fs = require('fs');
const zlib = require('zlib');

function encode64(data) {
  const r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let res = '';
  for (let i = 0; i < data.length; i += 3) {
    if (i + 2 === data.length) {
      res += r[data[i] >> 2];
      res += r[((data[i] & 3) << 4) | (data[i + 1] >> 4)];
      res += r[(data[i + 1] & 15) << 2];
      res += '=';
      break;
    }
    if (i + 1 === data.length) {
      res += r[data[i] >> 2];
      res += r[(data[i] & 3) << 4];
      res += '==';
      break;
    }
    res += r[data[i] >> 2];
    res += r[((data[i] & 3) << 4) | (data[i + 1] >> 4)];
    res += r[((data[i + 1] & 15) << 2) | (data[i + 2] >> 6)];
    res += r[data[i + 2] & 63];
  }
  return res;
}

function plantumlEncode(data) {
  const compressed = zlib.deflateRawSync(Buffer.from(data, 'utf8'));
  return encode64(compressed);
}

const files = [
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Usuarios.puml',
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Clientes.puml',
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Abogados.puml',
  'MODELO_UML/ADMINISTRADOR/Casos-Uso/Administrador-Administracion.puml',
  'MODELO_UML/GENERAL/Casos-Uso-General/CU-mn-bufete.puml',
  'MODELO_UML/Estructural/diagrama-clases-mn-bufete.puml',
  'MODELO_C4/Nivel-1-Contexto/C4-Contexto-Sistema.puml',
  'MODELO_C4/Nivel-2-Contenedores/C4-Contenedores-Sistema.puml',
  'MODELO_C4/Nivel-3-Componente/C4-Componentes-CaseService.puml'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`${file}`);
  console.log(`https://www.plantuml.com/plantuml/png/${plantumlEncode(content)}`);
  console.log('');
});
