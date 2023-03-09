import React from 'react'
import Head from './components/Head'
import Filter from './components/Filter'
import List from './components/List'

// const REACT_APP_DICTIONARY_API_KEY = 'b61a8bc2-4395-43f3-b11e-ce714d16b441'
// const REACT_APP_SCHOOL_DICTIONARY_API_KEY =
// 	'94fe77fd-e082-4c4b-9f72-a093355eebb5'

// const PRIVATE_API_URL = `https://www.dictionaryapi.com/api/v3/references/sd4/json/baseball?key=${REACT_APP_SCHOOL_DICTIONARY_API_KEY}`

const PUBLIC_API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`

function App() {
	const options = {
		method: 'GET',
		headers: {},
	}
	fetch(PUBLIC_API_URL, options)
		.then(response => response.json())
		.then(response => console.log(response))
		.catch(err => console.error(err))

	return (
		<div>
			<Head />
			<div className='flex'>
				<Filter />
				<List />
			</div>
		</div>
	)
}

export default App
