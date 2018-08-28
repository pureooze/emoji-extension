import emoji from 'emojilib/emojis.json';
import Fuse from 'fuse.js';

const MAXRESULTS = 5;
const knownEmojis = Object.values(emoji);

export default async function getFilteredSuggestions(searchString) {
  const fuse = new Fuse(knownEmojis, {
    shouldSort: true,
    threshold: 0.5,
    minMatchCharLength: 1,
    includeMatches: true,
    keys: ['keywords', 'category']
  });

  return fuse
    .search(searchString)
    .map(({ item, matches, score }) => ({
      ...item,
      score,
      matches
    }))
    .slice(0, MAXRESULTS);
}
