
import {
    CREATE_DICTIONARY, CREATE_DICTIONARY_SUCCESS, CREATE_DICTIONARY_FAILURE,
    GET_DICTIONARIES, GET_DICTIONARIES_SUCCESS, GET_DICTIONARIES_FAILURE,
} from './../constants'

export class dictionaryAction {

    static getDictionaries() {
        return {
            type: GET_DICTIONARIES
        }
    }

    static getDictionariesSuccess(payload) {
        return {
            type: GET_DICTIONARIES_SUCCESS,
            payload
        }
    }

    static getDictionariesFailure(error) {
        return {
            type: GET_DICTIONARIES_FAILURE,
            error
        }
    }
    
    static createDictionary(payload) {
        return {
            type: CREATE_DICTIONARY,
            payload
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