export enum PartOfSpeech {
  adjective = 'adjective',
  verb = 'verb',
  noun = 'noun',
}

export type WordsType = {
  word: string;
  partOfSpeech: PartOfSpeech;
  def: DefinitionType[];
  phonetic: string;
  meanings?: MeaningsType[];
};

export type MeaningsType = {
  partOfSpeech: string;
  definitions: DefinitionType[];
};

export type DataResponse = {
  word: string;
  partOfSpeech: PartOfSpeech;
  def: DefinitionType[];
  phonetic: string;
  meanings: MeaningsType[];
};

export type DefinitionType = {
  definition: string;
  isFavorite: boolean;
};

export type StrongQuery = DefinitionType & Pick<WordsType, 'partOfSpeech' | 'word' | 'phonetic'>;

export type ListItem = DefinitionType & Pick<WordsType, 'partOfSpeech' | 'word' | 'phonetic'>;

export type SwitchType = 'favorites' | 'regular';
