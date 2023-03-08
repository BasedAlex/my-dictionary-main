import React from 'react'
import Head from './components/Head'
import Filter from './components/Filter'
import List from './components/List'

function App() {
	// const options = {
	// 	method: 'GET',
	// 	headers: {},
	// }

	// fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello', options)
	// 	.then(response => response.json())
	// 	.then(response => console.log(response))
	// 	.catch(err => console.error(err))

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
