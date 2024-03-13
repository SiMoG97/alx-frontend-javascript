export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');

  map.forEach((val, key, m) => {
    if (val === 1) {
      m.set(key, 100);
    }
  });

  return map;
}
