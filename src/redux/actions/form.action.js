import { actionsTypes } from '../constants/form';

const actions = {
  adicionar: form => ({
    type: actionsTypes.ADICIONAR,
    payload: form,
  }),
  remover: form => ({
    type: actionsTypes.REMOVER,
    payload: form,
  }),
};

export { actions };
