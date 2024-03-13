export default function cleanSet(set, startString) {
  const arrToJoin = [];
  if (startString === '') return '';

  for (const elm of set) {
    if (elm.startsWith(startString)) {
      arrToJoin.push(elm.replace(startString, ''));
    }
  }
  return arrToJoin.join('-');
}
