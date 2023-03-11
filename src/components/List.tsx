import { useState } from 'react'
import { PartOfSpeech } from '../types'

type Props = {
	words: [WordsType]
}

type WordsType = {
	word: string
	id: number
	partOfSpeech: PartOfSpeech
	def: [DefinitionType]
}

type DefinitionType = {
	definition: string
}

type ListItem = DefinitionType & Pick<WordsType, 'partOfSpeech' | 'word' | 'id'>

const List = ({ words }: Props) => {
	const [favorites, setFavorites] = useState(false)

	const list = words.reduce(
		(acc: ListItem[], { word, partOfSpeech, def, id }: WordsType) => {
			let defenitions: ListItem[] = []
			if (Array.isArray(def)) {
				defenitions = def.map((d, index) => ({
					definition: d.definition,
					word,
					partOfSpeech,
					id: id + index,
				}))
			}
			acc.push(...defenitions)
			return acc
		},
		[]
	)
	return (
		<div className='mt-6 w-5/6 mr-20'>
			{list.map((item: ListItem) => {
				return (
					<div key={item.id} className='flex gap-2 justify-between'>
						<div className='flex gap-2'>
							<button>X</button>
							<h3 className='font-bold'>{item.word}</h3>
							<h3 className='italic'>{item.partOfSpeech}</h3>
							<h3>{item.definition}</h3>
						</div>
						<svg
							width='28px'
							height='28px'
							viewBox='-6.72 -6.72 37.44 37.44'
							fill='white'
							xmlns='http://www.w3.org/2000/svg'
							stroke='#0000FF'
							className='hover:fill-blue-600 active:fill-blue-600'
							onClick={() => setFavorites(!favorites)}
						>
							<g id='SVGRepo_bgCarrier' strokeWidth='0' />

							<g
								id='SVGRepo_tracerCarrier'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>

							<g id='SVGRepo_iconCarrier'>
								{' '}
								<path
									opacity='0.1'
									d='M20.9244 9.07557L20.8931 9.10687L16.8321 13.1679C16.3185 13.6815 16.1238 14.4331 16.3233 15.1315L17.9462 20.8117C17.9646 20.8761 17.8928 20.9285 17.837 20.8913L17.8186 20.879L13.1094 17.7396C12.4376 17.2917 11.5624 17.2917 10.8906 17.7396L6.17083 20.8861C6.1124 20.9251 6.03711 20.8701 6.0564 20.8026L6.06393 20.7762L7.67671 15.1315C7.87625 14.4331 7.68147 13.6815 7.16787 13.1679L3.13547 9.13547L3.09579 9.09579C3.06044 9.06044 3.08548 9 3.13547 9H8.16667C8.97407 9 9.70228 8.51452 10.0128 7.76923L11.9369 3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931C20.9326 9 20.9523 9.04768 20.9244 9.07557Z'
									fill='#ffffff'
								/>{' '}
								<path
									d='M20.9244 9.07557L20.8931 9.10687L16.8321 13.1679C16.3185 13.6815 16.1238 14.4331 16.3233 15.1315L17.9462 20.8117C17.9646 20.8761 17.8928 20.9285 17.837 20.8913L17.8186 20.879L13.1094 17.7396C12.4376 17.2917 11.5624 17.2917 10.8906 17.7396L6.17083 20.8861C6.1124 20.9251 6.03711 20.8701 6.0564 20.8026L6.06393 20.7762L7.67671 15.1315C7.87625 14.4331 7.68147 13.6815 7.16787 13.1679L3.13547 9.13547L3.09579 9.09579C3.06044 9.06044 3.08548 9 3.13547 9H8.16667C8.97407 9 9.70228 8.51452 10.0128 7.76923L11.9369 3.15144C11.9603 3.09535 12.0397 3.09535 12.0631 3.15144L13.9872 7.76923C14.2977 8.51452 15.0259 9 15.8333 9H20.8931C20.9326 9 20.9523 9.04768 20.9244 9.07557Z'
									stroke='#0000FF'
									strokeWidth='0.43200000000000005'
									strokeLinejoin='round'
								/>{' '}
							</g>
						</svg>
					</div>
				)
			})}
		</div>
	)
}

export default List
