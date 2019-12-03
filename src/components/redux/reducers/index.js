import { combineReducers} from 'redux';
import eventItems from './eventReducer';

const rootReducer = combineReducers({
    eventItems: eventItems
});

export default rootReducer;
