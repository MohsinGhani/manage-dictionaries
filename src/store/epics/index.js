import { combineEpics } from 'redux-observable';
import dictionaryEpic from './dictionaryEpic'

const rootEpic = combineEpics(
    dictionaryEpic.createDictionary,
    dictionaryEpic.getDictionaries,
);

export default rootEpic;