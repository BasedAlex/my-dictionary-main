import React from 'react';
import { PartOfSpeech } from '../types';

type Props = {
  setTypeWord: (e: any) => void;
  setSearchWord: (args: string) => void;
  value: string;
  typeWord: PartOfSpeech | null;
};

const filter = ({ setTypeWord, setSearchWord, value, typeWord }: Props) => {
  return (
    <div className="mx-20 w-1/6 bg-gray-300 px-6 py-2 rounded-md mt-8 h-36 max-h-36">
      <div>
        <input
          type="text"
          value={value}
          placeholder="Search Words..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchWord(e.currentTarget.value)
          }
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      		focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      	disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      	invalid:border-pink-500 invalid:text-pink-600
      	focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </div>
      <div
        className="flex flex-col	"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTypeWord(e.target.value)}
      >
        <label className="">
          <input
            type="radio"
            value="adjective"
            name="radiobuttons"
            checked={typeWord === 'adjective'}
            className="default:ring-3 checked:bg-blue-500"
          />{' '}
          adjective
        </label>
        <label>
          <input
            type="radio"
            value="verb"
            name="radiobuttons"
            checked={typeWord === 'verb'}
            className="default:ring-3 checked:bg-blue-500"
          />{' '}
          verb
        </label>
        <label>
          <input
            type="radio"
            value="noun"
            name="radiobuttons"
            checked={typeWord === 'noun'}
            className="default:ring-3 checked:bg-blue-500"
          />{' '}
          noun
        </label>
      </div>
    </div>
  );
};

export default filter;
