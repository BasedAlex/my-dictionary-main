export enum PartOfSpeech {
	adjective = 'adjective',
	verb = 'verb',
	noun = 'noun',
}

export type WordsType = {
	word: string
	partOfSpeech: PartOfSpeech
	def: DefinitionType[]
	phonetic: string
}

export type DefinitionType = {
	definition: string
	isFavorite: boolean
}

export type ListItem = DefinitionType &
	Pick<WordsType, 'partOfSpeech' | 'word' | 'phonetic'>

export type SwitchType = 'favorites' | 'regular'
