import emoji from 'emojilib/simplemap.json';
import Fuse from 'fuse.js';

const MAXRESULTS = 5;
const emojiNameToValueMap = Object.entries(emoji).map(([key, value]) => ({
  name: key,
  value
}));

export default async function getFilteredSuggestions(searchString) {
  const fuse = new Fuse(emojiNameToValueMap, {
    shouldSort: true,
    threshold: 0.8,
    minMatchCharLength: 1,
    includeMatches: true,
    keys: ['name']
  });

  return fuse
    .search(searchString)
    .map(({ item }) => ({
      ...item
    }))
    .slice(0, MAXRESULTS);
}
