import React, { useState } from 'react'

const Head = ({ setSwitch, turn }: any) => {
	return (
		<>
			<div className='flex justify-between items-center bg-blue-400 text-white px-6 mx-20 h-10 text-xl font-medium rounded-md	'>
				<h3 className='' onClick={() => setSwitch('regular')}>
					Word Keeper
				</h3>
				<div className='flex justify-between items-center'>
					<svg
						width='28px'
						height='28px'
						viewBox='-6.72 -6.72 37.44 37.44'
						fill='white'
						xmlns='http://www.w3.org/2000/svg'
						stroke='#ffffff'
						className={`${
							turn === 'favorites' ? 'fill-blue-600' : 'fill-white'
						}`}
						onClick={() => setSwitch('favorites')}
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
								stroke='#ffffff'
								strokeWidth='0.43200000000000005'
								strokeLinejoin='round'
							/>{' '}
						</g>
					</svg>
					<h3 className=''>Starred words</h3>
				</div>
			</div>
		</>
	)
}

export default Head
