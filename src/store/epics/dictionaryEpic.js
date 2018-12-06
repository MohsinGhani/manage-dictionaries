import { CREATE_DICTIONARY } from './../constants'
import { Observable } from 'rxjs/Rx';
import { dictionaryAction } from './../actions/index'

export default class dictionaryEpic {

    static createDictionary = (action$) =>
        action$.ofType(CREATE_DICTIONARY)
            .switchMap(({ payload }) => {
                return Observable.of(
                    dictionaryAction.createDictionarySuccess(payload)
                )
            })
}