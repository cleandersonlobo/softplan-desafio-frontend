import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import { SearchInput } from '../../components';
import styles from './styles';

class BuscarProcessos extends Component {
  
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
              onClick={(e) => e.preventDefault()}
              className={classNames(classes.link)}>
              clincando aqui
            </a>
          </p>
        </Grid>
        
      </Grid>
    )
  }
}

export default withStyles(styles)(BuscarProcessos);
