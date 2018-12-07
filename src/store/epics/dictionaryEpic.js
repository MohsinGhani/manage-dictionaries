import { CREATE_DICTIONARY } from './../constants'
import { Observable } from 'rxjs/Rx';
import { dictionaryAction } from './../actions/index'

export default class dictionaryEpic {

    static createDictionary = (action$) =>
        action$.ofType(CREATE_DICTIONARY)
            .switchMap(({ payload }) => {
                let createdDictionaries = localStorage.getItem('dictionaries')
                if (createdDictionaries) {
                    let newDictionaries = JSON.parse(createdDictionaries)
                    newDictionaries.push(payload)
                    localStorage.setItem('dictionaries', JSON.stringify(newDictionaries))
                    return Observable.of(
                        dictionaryAction.createDictionarySuccess(payload)
                    )
                }
                else {
                    let createdDictionary = []
                    createdDictionary[0] = payload
                    createdDictionary = JSON.stringify(createdDictionary)
                    localStorage.setItem('dictionaries', createdDictionary)
                    return Observable.of(
                        dictionaryAction.createDictionarySuccess(payload)
                    )
                }
            })
}