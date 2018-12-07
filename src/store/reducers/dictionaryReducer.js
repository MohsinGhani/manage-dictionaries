import {
    CREATE_DICTIONARY, CREATE_DICTIONARY_SUCCESS, CREATE_DICTIONARY_FAILURE,
    GET_DICTIONARIES, GET_DICTIONARIES_SUCCESS, GET_DICTIONARIES_FAILURE,
} from './../constants'

const initialState = {
    createdDictionary: null,
    createDictionaryLoader: false,
    createDictionaryError: null,

    dictionaries: null,
    getDictionariesLoader: false,
    getDictionariesError: null,
}

export default function dictionaryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DICTIONARIES:
            return {
                ...state,
                dictionaries: null,
                getDictionariesLoader: true,
                getDictionariesError: null
            }

        case GET_DICTIONARIES_SUCCESS:
            return {
                ...state,
                dictionaries: action.payload.dictionaries,
                getDictionariesLoader: false,
                getDictionariesError: null
            }

        case GET_DICTIONARIES_FAILURE:
            return {
                ...state,
                dictionaries: null,
                getDictionariesLoader: false,
                getDictionariesError: action.payload
            }

        case CREATE_DICTIONARY:
            return {
                ...state,
                createdDictionary: null,
                createDictionaryLoader: true,
                createDictionaryError: null
            }

        case CREATE_DICTIONARY_SUCCESS:
            return {
                ...state,
                createdDictionary: action.payload,
                createDictionaryLoader: false,
                createDictionaryError: null
            }

        case CREATE_DICTIONARY_FAILURE:
            return {
                ...state,
                createdDictionary: null,
                createDictionaryLoader: false,
                createDictionaryError: action.payload
            }

        default:
            return state
    }

}