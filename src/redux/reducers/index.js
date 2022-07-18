import { combineReducers } from 'redux';
import { reducers as formReducers } from './form.reducer';

const reducers = combineReducers({
  formReducers,
});

export { reducers };
