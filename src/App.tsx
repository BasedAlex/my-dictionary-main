import React, { useEffect, useState } from 'react'
import Head from './components/Head'
import Filter from './components/Filter'
import List from './components/List'
import { PartOfSpeech } from './types'

// const REACT_APP_DICTIONARY_API_KEY = 'b61a8bc2-4395-43f3-b11e-ce714d16b441'
// const REACT_APP_SCHOOL_DICTIONARY_API_KEY =
// 	'94fe77fd-e082-4c4b-9f72-a093355eebb5'
// const PRIVATE_API_URL = `https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?key=${REACT_APP_SCHOOL_DICTIONARY_API_KEY}`
const PUBLIC_API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en`

function App() {
	const [searchWord, setSearchWord] = useState('')
	const [typeWord, setTypeWord] = useState<PartOfSpeech>()
	const [words, setWords] = useState([])

	const onFilter = (list: any) => {
		if (list.title === 'No Definitions Found') {
			const error = [list]
			return error.flatMap((item: any) => ({
				word: item.title,
				partOfSpeech: item.message,
				def: item.resolution,
			}))
		} else {
			return list
				.filter(
					(item: any) => !typeWord || item.meanings[0].partOfSpeech === typeWord
				)
				.flatMap((item: any) => ({
					word: item.word,
					partOfSpeech: item.meanings[0].partOfSpeech,
					def: item.meanings[0].definitions,
				}))
		}
	}

	useEffect(() => {
		fetch(`${PUBLIC_API_URL}/${searchWord}`)
			.then(response => response.json())
			.then(response => {
				setWords(response)
				console.log(response)
			})
			.catch(err => console.log(err))
	}, [searchWord])

	return (
		<div>
			<Head />
			<div className='flex'>
				<Filter
					setTypeWord={setTypeWord}
					setSearchWord={setSearchWord}
					value={searchWord}
				/>
				<List words={onFilter(words)} />
			</div>
		</div>
	)
}
export default App
