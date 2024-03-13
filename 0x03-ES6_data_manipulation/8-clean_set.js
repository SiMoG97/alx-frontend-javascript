export default function cleanSet(set, startString) {
  if (
    !set
    || !startString
    || !(set instanceof Set)
    || typeof startString !== 'string'
  ) return '';

  return Array.from(set)
    .filter((elem) => elem && elem.startsWith(startString))
    .map((elem) => elem.replace(startString, ''))
    .join('-');
}
