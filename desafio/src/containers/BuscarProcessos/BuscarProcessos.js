import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import { SearchInput } from '../../components';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    padding: 20,
  },
  margin: {
    margin: theme.spacing.unit,
  }, 
  subtitle: {
    marginTop: 50,
    color: theme.palette.secondary.main,
    textAlign: 'center'
  },
  link: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  }
});

class BuscarProcessos extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        justify="center"
      >
        <Grid item xs={12} sm={9} md={5} >
          <p style={{ fontSize: 24, color: '#005b95', textAlign: 'center'}}> Busca de processos </p>
          <SearchInput 
            placeholder="Pesquise por uma informação do processo"
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
