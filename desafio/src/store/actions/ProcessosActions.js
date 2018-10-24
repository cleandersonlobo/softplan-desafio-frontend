import api from '../../config/interceptors';
import { createActions } from 'redux-actions';
import { ENDPOINTS } from '../../config/index';

export const {
  requestProcessos,
  responseBuscarProcessos,
  responseBuscarProcessosFailure,
  requestNovoProcesso,
  responseNovoProcesso,
  responseNovoProcessoFailure,
  requestDeletarProcesso,
  responseDeletarProcesso,
  responseDeletarProcessoFailure,
  chooseProcesso,
  unselectProcesso,
} = createActions(
  'REQUEST_PROCESSOS',
  'RESPONSE_BUSCAR_PROCESSOS',
  'RESPONSE_BUSCAR_PROCESSOS_FAILURE',
  'REQUEST_NOVO_PROCESSO',
  'RESPONSE_NOVO_PROCESSO',
  'RESPONSE_NOVO_PROCESSO_FAILURE',
  'REQUEST_DELETAR_PROCESSO',
  'RESPONSE_DELETAR_PROCESSO',
  'RESPONSE_DELETAR_PROCESSO_FAILURE',
  'CHOOSE_PROCESSO',
  'UNSELECT_PROCESSO'
);


export const buscarProcessos = (query) => dispatch => {
  dispatch(requestProcessos());

  return api
  .get(`${ENDPOINTS.buscarProcesso.replace('{query}', query)}`)
    .then(response => {
      if (response.status !== 200) {
        throw response.data;
      }
      dispatch(responseBuscarProcessos({ processos: response.data, query}));
    })
    .catch(errors => {
      dispatch(responseBuscarProcessosFailure(errors));
      throw errors;
    });
};

export const novoProcesso = (processo) => dispatch => {
  dispatch(requestNovoProcesso());

  return api
  .post(ENDPOINTS.processo, processo)
    .then(response => {
      if (response.status !== 200) {
        throw response.data;
      }
      dispatch(responseNovoProcesso());
    })
    .catch(errors => {
      dispatch(responseNovoProcessoFailure(errors));
      throw errors;
    });
};


export const deletarProcesso = ({ id }) => (dispatch) => {
  dispatch(requestDeletarProcesso());

  return api
  .delete(`${ENDPOINTS.processo}${id}`)
    .then(response => {
      if (response.status !== 200) {
        throw response.data;
      }
      dispatch(responseDeletarProcesso({processo: response.data }));
    })
    .catch(errors => {
      dispatch(responseDeletarProcessoFailure(errors));
      throw errors;
    });
};
