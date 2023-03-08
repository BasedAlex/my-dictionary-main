import React from 'react'

const filter = () => {
	return (
		<div className='mx-20 w-1/6 bg-gray-300 px-6 py-2 rounded-md mt-8'>
			<div>
				<input
					type='text'
					className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      		focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      	disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      	invalid:border-pink-500 invalid:text-pink-600
      	focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
				/>
			</div>
			<div className='flex flex-col	'>
				<label className=''>
					<input
						type='checkbox'
						className='default:ring-3 checked:bg-blue-500'
					/>{' '}
					adjective
				</label>
				<label>
					<input
						type='checkbox'
						className='default:ring-3 checked:bg-blue-500'
					/>{' '}
					verb
				</label>
				<label>
					<input
						type='checkbox'
						className='default:ring-3 checked:bg-blue-500'
					/>{' '}
					noun
				</label>
			</div>
		</div>
	)
}

export default filter
