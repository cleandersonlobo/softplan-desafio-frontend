import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core'
import { SearchInput, ListaMain } from '../../components';
import { buscarProcessos, chooseProcesso, unselectProcesso } from '../../store/actions/ProcessosActions';
import styles from './styles';

class ListaProcessos extends Component {
  
  state = {
    query: this.props.match.params.query || '',
  }

  componentWillMount() {
    this.props.dispatchBuscarProcessos(this.props.match.params.query)
  }

  handleBuscarProcessos = query => this.props.dispatchBuscarProcessos(query)

  render() {
    
    const { 
      classes,
      isFetching, 
      processos, 
      processo, 
      dispatchChooseProcesso, 
      dispatchUnselectProcess 
    } = this.props;
    
    return (
      <Fragment>
        <Grid
          container
          className={classes.root}
        > 
            <Grid item xs={12} sm={2} md={1}>
            <p> Busca de processos</p>
            </Grid>
            <Grid item xs={9} sm={8} md={7} >
              <SearchInput
                value= {this.state.query}
                onSubmitSearch={this.handleBuscarProcessos}
              />
            </Grid>
            <Grid item xs={2} sm={2} md={4} >
              <Button variant="outlined" size="large" className={classes.button}>
                NOVO
              </Button>
            </Grid>
        </Grid>

        <ListaMain
          chooseProcesso={dispatchChooseProcesso}
          unselectProcess={dispatchUnselectProcess}
          isFetching={isFetching}
          processos={processos}
          processo={processo}
        />

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
  
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withStyles(styles)(ListaProcessos))
  );
