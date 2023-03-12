import { useState } from 'react';
import { ListItem } from '../types';
import './Phonetic.css';

type Props = {
  item: ListItem;
};

const Phonetic = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
  const { phonetic, word, partOfSpeech, definition } = item;
  const text = phonetic ? phonetic : '/ Sorry phonetic for this word does not exist /';

  return (
    <div className="flex flex-col gap-2 min-w-full">
      <div className="flex gap-2">
        <button onClick={() => setOpen(!open)}>
          <svg
            fill="#a8a8a1"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            viewBox="0 0 24.75 24.75"
            stroke="#a8a8a8"
            strokeWidth="0.198"
            className="mt-1"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
              {' '}
              <g>
                {' '}
                <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z" />{' '}
              </g>{' '}
            </g>
          </svg>
        </button>
        <h3 className="font-bold">{word}</h3>
        <h3 className="italic">{partOfSpeech}</h3>
        <h3 className="liner max-w-xs">{definition}</h3>
      </div>
      <p className="italic bg-slate-100 max-w-full  py-0 px-5">
        {open ? text + ' ' + definition : ''}
      </p>
    </div>
  );
};

export default Phonetic;
