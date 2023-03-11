export enum PartOfSpeech {
	adjective = 'adjective',
	verb = 'verb',
	noun = 'noun',
}

export type WordsType = {
	word: string
	partOfSpeech: PartOfSpeech
	def: DefinitionType[]
}

export type DefinitionType = {
	definition: string
	isFavorite: boolean
}

export type ListItem = DefinitionType & Pick<WordsType, 'partOfSpeech' | 'word'>

export type SwitchType = 'favorites' | 'regular'
