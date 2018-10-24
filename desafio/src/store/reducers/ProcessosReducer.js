import { handleActions } from 'redux-actions';

const initialState = {
  processos: null,
  processo: null,
  isFetching: false,
  fetchError: false,
};

const ProcessosReducer = handleActions(
  {
    REQUEST_PROCESSOS: state => ({
      ...state,
      processo: null,
      isFetching: true,
    }),
    RESPONSE_BUSCAR_PROCESSOS: (state, action) => ({
      ...state,
      isFetching: false,
      processos: action.payload,
    }),
    RESPONSE_BUSCAR_PROCESSOS_FAILURE: (state, action) => ({
      ...state,
      isFetching: false,
      fetchError: true
    }),
    CHOOSE_PROCESSO: (state, action) => ({
      ...state,
      processo: action.payload,
    }),
    UNSELECT_PROCESSO: (state, action) => ({
      ...state,
      processo: null,
    }),
  },
  initialState
);

export default ProcessosReducer;
