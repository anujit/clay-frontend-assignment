import {combineReducers} from 'redux';
import resources from './resources';
import userInfo from './userInfo';
import events from './events';

export default combineReducers ({
    resources,
    userInfo,
    events
});
