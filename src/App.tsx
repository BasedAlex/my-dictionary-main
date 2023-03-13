import React, { useEffect, useState } from 'react';
import Head from './components/Head';
import Filter from './components/Filter';
import List from './components/List';
import { DataResponse, ListItem, PartOfSpeech, SwitchType } from './types';
import { getFavoritesStorage, getList, hasFavorite, setFavoritesStorage } from './utils';

const PUBLIC_API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`;

function App() {
  const [searchWord, setSearchWord] = useState('');
  const [typeWord, setTypeWord] = useState<PartOfSpeech | null>(null);
  const [words, setWords] = useState([]);
  const [favorites, setFavorites] = useState<ListItem[]>([]);
  const [turn, setSwitch] = useState<SwitchType>('regular');

  const onFilter = (list: DataResponse | any) => {
    console.log(list);

    if (list?.title === 'No Definitions Found') {
      return [];
    } else {
      return list
        .filter((item: DataResponse) => !typeWord || item.meanings[0].partOfSpeech === typeWord)
        .map((item: DataResponse) => ({
          word: item.word,
          partOfSpeech: item.meanings[0].partOfSpeech,
          def: item.meanings[0].definitions,
          phonetic: item.phonetic,
        }));
    }
  };

  const onSwitch = (value: SwitchType) => {
    if (value === 'favorites') {
      setSearchWord('');
      setTypeWord(null);
    }

    setSwitch(value);
  };

  const onFavorites = (list: ListItem[]) => {
    return list
      .filter((item: ListItem) => !typeWord || item.partOfSpeech === typeWord)
      .filter((item: ListItem) => item.word.includes(searchWord))
      .sort((a: ListItem, b: ListItem) => a.word.localeCompare(b.word));
  };

  const onSetFavorites = (item: ListItem) => {
    if (hasFavorite(favorites, item.definition)) {
      const newFavorites = favorites.filter((p) => p.definition !== item.definition);
      setFavorites(newFavorites);
      setFavoritesStorage(newFavorites);
    } else {
      setFavorites([...favorites, { ...item, isFavorite: true }]);
      setFavoritesStorage([...favorites, { ...item, isFavorite: true }]);
    }
  };

  useEffect(() => {
    console.log(searchWord);
    if (!searchWord) {
      setWords([]);
    } else {
      fetch(`${PUBLIC_API_URL}/${searchWord}`)
        .then((response) => response.json())
        .then((response) => {
          setWords(response);
        });
    }
  }, [searchWord]);

  useEffect(() => {
    const listFavorite = getFavoritesStorage();
    setFavorites(listFavorite);
  }, []);

  return (
    <div>
      <Head setSwitch={onSwitch} turn={turn} />
      <div className="flex">
        <Filter
          setTypeWord={setTypeWord}
          setSearchWord={setSearchWord}
          value={searchWord}
          typeWord={typeWord}
        />
        {turn === 'regular' && (
          <List list={getList(onFilter(words), favorites)} setFavorites={onSetFavorites} />
        )}
        {turn === 'favorites' && (
          <List list={onFavorites(favorites)} setFavorites={onSetFavorites} />
        )}
      </div>
    </div>
  );
}
export default App;
