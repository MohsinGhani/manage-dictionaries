
import {
    CREATE_DICTIONARY,
    CREATE_DICTIONARY_SUCCESS,
    CREATE_DICTIONARY_FAILURE,
} from './../constants'

export class dictionaryAction {

    static createDictionary() {
        return {
            type: CREATE_DICTIONARY
        }
    }

    static createDictionarySuccess(payload) {
        return {
            type: CREATE_DICTIONARY_SUCCESS,
            payload
        }
    }

    static createDictionaryFailure(error) {
        return {
            type: CREATE_DICTIONARY_FAILURE,
            error
        }
    }
}