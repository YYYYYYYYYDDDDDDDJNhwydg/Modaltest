import React from 'react';
import './AnagramGroup.css';

interface Props {
  words: string[];
}

const groupAnagrams = (words: string[]): string[][] => {
  const anagrams: { [key: string]: string[] } = {};

  words.forEach(word => {
    const sortedWord = word.split('').sort().join('');
    if (!anagrams[sortedWord]) {
      anagrams[sortedWord] = [];
    }
    anagrams[sortedWord].push(word);
  });

  return Object.values(anagrams);
};

const AnagramGroup: React.FC<Props> = ({ words }) => {
  const groupedAnagrams = groupAnagrams(words);

  return (
    <div>
      {groupedAnagrams.map((group, index) => (
        <div key={index} className="anagram-group">
          {group.map(word => (
            <span key={word} className="anagram-word">{word}</span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnagramGroup;
