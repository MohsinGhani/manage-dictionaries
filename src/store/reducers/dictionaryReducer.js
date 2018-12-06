import {
    CREATE_DICTIONARY, CREATE_DICTIONARY_SUCCESS, CREATE_DICTIONARY_FAILURE
} from './../constants'

const initialState = {
    createdDictionary: null,
    createDictionaryLoader: false,
    createDictionaryError: null
}

export default function dictionaryReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_DICTIONARY:
            return {
                createdDictionary: null,
                createDictionaryLoader: true,
                createDictionaryError: null
            }

        case CREATE_DICTIONARY_SUCCESS:
            return {
                createdDictionary: action.payload,
                createDictionaryLoader: false,
                createDictionaryError: null
            }

        case CREATE_DICTIONARY_FAILURE:
            return {
                createdDictionary: null,
                createDictionaryLoader: false,
                createDictionaryError: action.payload
            }

        default:
            return state
    }

}