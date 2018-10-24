import { handleActions } from 'redux-actions';

const initialState = {
  processos: null,
  query: '',
  processo: null,
  isFetching: false,
  fetchNovoProcesso: false,
  fetchDeletarProcesso: false,
  fetchError: false,
};

const ProcessosReducer = handleActions(
  {
    REQUEST_PROCESSOS: state => ({
      ...state,
      processo: null,
      isFetching: true,
      fetchError: false,
    }),
    RESPONSE_BUSCAR_PROCESSOS: (state, action) => ({
      ...state,
      isFetching: false,
      query: action.payload.query,
      processos: action.payload.processos,
    }),
    RESPONSE_BUSCAR_PROCESSOS_FAILURE: state => ({
      ...state,
      isFetching: false,
      fetchError: true
    }),
    REQUEST_NOVO_PROCESSO: state => ({
      ...state,
      processo: null,
      fetchNovoProcess: true,
      fetchError: false,
    }),
    RESPONSE_NOVO_PROCESSO: state => ({
      ...state,
      isFetching: false,
    }),
    RESPONSE_NOVO_PROCESSO_FAILURE: state => ({
      ...state,
      isFetching: false,
      fetchError: true
    }),
    REQUEST_DELETAR_PROCESSO: state => ({
      ...state,
      fetchDeletarProcesso: false,
    }),
    RESPONSE_DELETAR_PROCESSO: (state, action) => {
      
      const processos = state.processos.filter(({ id }) => id !==  action.payload.processo.id);
      
      return {
        ...state,
        fetchDeletarProcesso: false,
        processos,
        processo: null,
      };
    },
    RESPONSE_DELETAR_PROCESSO_FAILURE: (state, action) => ({
      ...state,
      fetchDeletarProcesso: false,
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
