import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress, Hidden } from '@material-ui/core';
import ListaItemCard from '../ListaItemCard';
import CardItem from '../CardItem';
import styles from './styles';

class ListaMain extends Component {
  
  static propTypes = {
    processos: PropTypes.oneOfType([PropTypes.any, PropTypes.array]),
    isFetching: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    chooseProcesso: PropTypes.func.isRequired,
    unselectProcess: PropTypes.func.isRequired,
  };

  handleOnClickClose = () => this.props.unselectProcess();

  renderCardItem = (processo) => {
    if (processo) {
      return (
        <Grid item xs={12} sm={6} md={6}>
          <CardItem
            processo={processo}
            onClose={this.handleOnClickClose}
          />
        </Grid> 
      )
    }

    return null;
  }

  render() {
    const { classes, processos, chooseProcesso, processo, isFetching } = this.props;
    
    if (isFetching) {
      return (
        <div className={classes.circular}>
          <CircularProgress size={100} color="secondary" />
        </div>
      )
    }
    
    return (
      <Grid
        container
        className={classes.root}
      >
        <Grid container spacing={24}>
          <Grid item xs={12} sm={processo ? 6 : 12} md={processo ? 5 : 12}>
            {processos && processos.length
              ? processos.map((item) => (
                <ListaItemCard
                  key={item.id}
                  processo={item}
                  processoSelected={processo}
                  onClick={(item) => {
                    chooseProcesso(item)
                  }}
                >
                  <Hidden only={['sm', 'md', 'md', 'lg']}>
                    {this.renderCardItem(processo)}
                  </Hidden>
                </ListaItemCard>)
                )
              : <Grid container alignItems="center" justify="center" spacing={24}>
                  <p>Nenhum processo foi encontrado!</p>
                </Grid> 
            }
            </Grid>
              <Hidden only={['xs']}>
                {this.renderCardItem(processo)}
              </Hidden>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(ListaMain);
