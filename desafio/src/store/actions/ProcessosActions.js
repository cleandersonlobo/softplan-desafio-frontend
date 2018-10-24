import api from '../../config/interceptors';
import { createActions } from 'redux-actions';
import { ENDPOINTS } from '../../config/index';

export const {
  requestProcessos,
  responseBuscarProcessos,
  responseBuscarProcessosFailure,
  chooseProcesso,
  unselectProcesso,
} = createActions(
  'REQUEST_PROCESSOS',
  'RESPONSE_BUSCAR_PROCESSOS',
  'RESPONSE_BUSCAR_PROCESSOS_FAILURE',
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
      dispatch(responseBuscarProcessos(response.data));
    })
    .catch(errors => {
      dispatch(responseBuscarProcessosFailure(errors));
      throw errors;
    });
};
