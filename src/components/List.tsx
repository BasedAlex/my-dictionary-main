import React from 'react'

const data = [
	{
		id: 1,
		word: 'Freedom',
		part: 'adjective',
		meaning: 'the quality of state of being free: such as',
	},
	{
		id: 2,
		word: 'Free',
		part: 'adjective',
		meaning: 'not costing or charging anything',
	},
	{
		id: 3,
		word: 'Frequency',
		part: 'noun',
		meaning: 'the fact or condition of occuring frequently',
	},
]

const List = () => {
	return (
		<div className='mt-6'>
			{data.map(item => {
				return (
					<div key={item.id} className='flex gap-2'>
						<h3 className='font-bold'>{item.word}</h3>
						<h3 className='italic'>{item.part}</h3>
						<h3>{item.meaning}</h3>
					</div>
				)
			})}
		</div>
	)
}

export default List
