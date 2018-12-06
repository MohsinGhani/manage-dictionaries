import { combineEpics } from 'redux-observable';
import dictionaryEpic from './dictionaryEpic'

const rootEpic = combineEpics(
    dictionaryEpic.createDictionary
);

export default rootEpic;