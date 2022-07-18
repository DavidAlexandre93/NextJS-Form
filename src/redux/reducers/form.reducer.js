import { actionsTypes } from '../constants/form';

const INITIAL_STATE = {
  form: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADICIONAR:
      return { form: [...state.form, { ...action.payload }] };
    case actionsTypes.REMOVER:
      return { form: state.form.filter(x => x.id !== action.payload.id) };
    default:
      return state;
  }
};

export { reducers };
