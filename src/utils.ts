import { ListItem, WordsType } from './types'

export const getList = (
	words: WordsType[],
	favorites: ListItem[]
): ListItem[] =>
	words.reduce((acc: ListItem[], { word, partOfSpeech, def }: WordsType) => {
		let defenitions: ListItem[] = []
		if (Array.isArray(def)) {
			defenitions = def.map(d => ({
				definition: d.definition,
				word,
				partOfSpeech,
				isFavorite: hasFavorite(favorites, d.definition),
			}))
		}
		acc.push(...defenitions)
		return acc
	}, [])

export const getPages = (list: ListItem[]): ListItem[][] => {
	const len = list.length
	const pages = []
	for (let i = 0; i < len; i = i + 10) {
		pages.push(list.slice(i, i + 10))
	}

	return pages
}

export const hasFavorite = (favorites: ListItem[], definition: string) => {
	return favorites.filter(f => f.definition === definition).length > 0
}
