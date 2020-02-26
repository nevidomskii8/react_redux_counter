import {combineReducers}  from 'redux'

import counter1 from './reducer/Counter1'
import counter2 from './reducer/Counter2'

export default  combineReducers({
    counter1, counter2
})