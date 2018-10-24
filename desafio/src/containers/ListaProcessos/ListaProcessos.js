import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, Snackbar } from '@material-ui/core'
import { SearchInput, ListaMain, CadastrarProcesso, SnackbarsDialog } from '../../components';
import { 
  buscarProcessos,
  chooseProcesso, 
  unselectProcesso, 
  novoProcesso,
  deletarProcesso,
} from '../../store/actions/ProcessosActions';
import styles from './styles';

class ListaProcessos extends Component {
  
  static propTypes = {
    processo: PropTypes.oneOfType(
      [
        PropTypes.any, 
        PropTypes.shape(
          { 
            id: PropTypes.string,
            numero: PropTypes.string,
            entrada: PropTypes.string,
            interessados: PropTypes.array,
            descricao:PropTypes.string,
            assunto: PropTypes.string,
          })
      ]
    ), 
    processos: PropTypes.arrayOf(
      PropTypes.shape({ 
        id: PropTypes.string,
        numero: PropTypes.string,
        entrada: PropTypes.string,
        interessados: PropTypes.array,
        descricao:PropTypes.string,
        assunto: PropTypes.string,
      })
    ),
    isFetching: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    dispatchChooseProcesso: PropTypes.func.isRequired,
    dispatchUnselectProcess: PropTypes.func.isRequired,
    dispatchDeletarProcesso: PropTypes.func.isRequired,
  }

  state = {
    query: this.props.match.params.query || '',
    open: false,
    openSnackBar: false,
    variant: 'success',
    message: "Pronto!"
  }

  componentWillMount() {
    this.props.dispatchBuscarProcessos(this.props.match.params.query)
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.fetchNovoProcesso && nextProps.fetchNovoProcesso){
      if(!nextProps.fetchError) this.setState({ openSnackBar: true, variant: 'success' });
      else this.setState({ openSnackBar: true, variant: 'error' });
    }
    
    if (!this.props.fetchDeletarProcesso && nextProps.fetchDeletarProcesso){
      if(!nextProps.fetchError) this.setState({ openSnackBar: true, variant: 'success' });
      else this.setState({ openSnackBar: true, variant: 'error' });
    }

  }

  handleBuscarProcessos = query => this.props.dispatchBuscarProcessos(query)

  handleClose = () => {
    this.setState({ openSnackBar: false });
  }
  handleModalClickOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

 
  handleNavigatorToHome = () => this.props.history.push('/');

  render() {
    
    const { 
      classes,
      isFetching, 
      processos, 
      processo, 
      dispatchChooseProcesso, 
      dispatchUnselectProcess,
      dispatchDeletarProcesso
    } = this.props;
    
    return (
      <Fragment>
        <Grid
          container
          className={classes.root}
        > 
            <Grid item xs={12} sm={2} md={1}>
            <p onClick={this.handleNavigatorToHome} style={{ cursor: 'pointer'}}> 
              Busca de processos
            </p>
            </Grid>
            <Grid item xs={9} sm={8} md={7} >
              <SearchInput
                value= {this.state.query}
                onSubmitSearch={this.handleBuscarProcessos}
              />
            </Grid>
            <Grid item xs={2} sm={2} md={4} >
              <Button onClick={this.handleModalClickOpen} variant="outlined" size="large" className={classes.button}>
                NOVO
              </Button>
            </Grid>
        </Grid>

        <ListaMain
          chooseProcesso={dispatchChooseProcesso}
          unselectProcess={dispatchUnselectProcess}
          deletarProcesso={dispatchDeletarProcesso}
          isFetching={isFetching}
          processos={processos}
          processo={processo}
        />

        {/* Modal p/ cadastrar ou editar um processo */}

        <CadastrarProcesso
          open={this.state.open}
          handleModalClickOpen={this.handleModalClickOpen}
          handleModalClose={this.handleModalClose}
          novoProcesso={this.props.dispatchNovoProcesso}
          editarProcesso={this.props.dispatchEditarProcesso}
        />

        <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={this.state.openSnackBar}
            autoHideDuration={1000}
            onClose={this.handleClose}
          >
            <SnackbarsDialog
              variant={this.state.variant}
              className={classes.margin}
              message={this.state.message}
            />
          </Snackbar>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  const { processos } = state;
  return {
    ...processos,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchBuscarProcessos: query => dispatch(buscarProcessos(query)),
  dispatchChooseProcesso:  processo => dispatch(chooseProcesso(processo)),
  dispatchUnselectProcess:  () => dispatch(unselectProcesso()),
  dispatchNovoProcesso: (processo) => dispatch(novoProcesso(processo)),
  dispatchDeletarProcesso: (processo) => dispatch(deletarProcesso(processo)),  
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ListaProcessos))
  );
