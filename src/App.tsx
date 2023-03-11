import React, { useEffect, useState } from 'react'
import Head from './components/Head'
import Filter from './components/Filter'
import List from './components/List'
import { ListItem, PartOfSpeech, SwitchType } from './types'
import { getList, hasFavorite } from './utils'

const PUBLIC_API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`

function App() {
	const [searchWord, setSearchWord] = useState('')
	const [typeWord, setTypeWord] = useState<PartOfSpeech>(PartOfSpeech.noun)
	const [words, setWords] = useState([])
	const [favorites, setFavorites] = useState<ListItem[]>([])
	const [turn, setSwitch] = useState<SwitchType>('regular')

	const onFilter = (list: any) => {
		if (list.title === 'No Definitions Found') {
			return []
		} else {
			return list
				.filter(
					(item: any) => !typeWord || item.meanings[0].partOfSpeech === typeWord
				)
				.map((item: any) => ({
					word: item.word,
					partOfSpeech: item.meanings[0].partOfSpeech,
					def: item.meanings[0].definitions,
				}))
		}
	}

	const onSwitch = (value: SwitchType) => {
		if (value === 'favorites') {
			setSearchWord('')
			setTypeWord(PartOfSpeech.noun)
		}

		setSwitch(value)
	}

	const onFavorites = (list: ListItem[]) => {
		return list
			.filter((item: ListItem) => !typeWord || item.partOfSpeech === typeWord)
			.filter((item: ListItem) => item.word.includes(searchWord))
			.sort((a: any, b: any) => a.word.localeCompare(b.word))
	}

	const onSetFavorites = (item: ListItem) => {
		if (hasFavorite(favorites, item.definition)) {
			setFavorites(prev => prev.filter(p => p.definition !== item.definition))
		} else {
			setFavorites([...favorites, { ...item, isFavorite: true }])
		}
	}

	useEffect(() => {
		if (!searchWord) {
			setWords([])
		} else {
			fetch(`${PUBLIC_API_URL}/${searchWord}`)
				.then(response => response.json())
				.then(response => {
					setWords(response)
					console.log('response', response)
				})
		}
	}, [searchWord])

	return (
		<div>
			<Head setSwitch={onSwitch} turn={turn} />
			<div className='flex'>
				<Filter
					setTypeWord={setTypeWord}
					setSearchWord={setSearchWord}
					value={searchWord}
					typeWord={typeWord}
				/>
				{turn === 'regular' && (
					<List
						list={getList(onFilter(words), favorites)}
						setFavorites={onSetFavorites}
					/>
				)}
				{turn === 'favorites' && (
					<List list={onFavorites(favorites)} setFavorites={onSetFavorites} />
				)}
			</div>
		</div>
	)
}
export default App
