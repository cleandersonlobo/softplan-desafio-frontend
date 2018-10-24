import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Snackbar} from '@material-ui/core'
import { SearchInput, SnackbarsDialog, CadastrarProcesso} from '../../components';
import { 
  novoProcesso,
} from '../../store/actions/ProcessosActions';

import styles from './styles';

class BuscarProcessos extends Component {
  
  state = {
    open: false,
    openSnackBar: false,
    variant: 'success',
    message: "Pronto!"
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

  handleModalClickOpen = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ openSnackBar: false });
  }
  
  handleNavigateToBuscar = query => this.props.history.push(`/buscar/${query}`);

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        justify="center"
      >
        <Grid item xs={12} sm={9} md={5} >
          <p className={classes.title}> Busca de processos </p>
          <SearchInput 
            placeholder="Pesquise por uma informação do processo"
            onSubmitSearch={this.handleNavigateToBuscar}
          />
          <p 
            className={classNames(classes.subtitle)} 
          >
            Você pode criar um novo processo {' '}
            <a 
              href=" "
              onClick={this.handleModalClickOpen}
              className={classNames(classes.link)}>
              clincando aqui
            </a>
          </p>
        </Grid>

        <CadastrarProcesso 
          open={this.state.open}
          handleModalClickOpen={this.handleModalClickOpen}
          handleModalClose={this.handleModalClose}
          novoProcesso={this.props.dispatchNovoProcesso}
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
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  const { processos } = state;
  return {
    fetchNovoProcesso: processos.fetchNovoProcesso,
  };
};

const mapDispatchToProps = dispatch => ({
  dispatchNovoProcesso: (processo) => dispatch(novoProcesso(processo)),
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(BuscarProcessos))
  );

