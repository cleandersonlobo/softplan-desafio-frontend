import React, { Component }  from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Hidden } from '@material-ui/core';
import styles from './styles';


class ListaItemCard extends Component {
  
  state = {
    select: false,
    activeText: {},
    activeBorder: {}, 
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.processoSelected && this.props.processo.id !== nextProps.processoSelected.id){
      this.handleIsProcessoActive(false);
    } else if (nextProps.processoSelected === null) this.handleIsProcessoActive(false);
  }

  handleIsProcessoActive = (select) => {
    const {classes } = this.props;
    if (select) {
      this.setState({ 
        select: true, 
        activeText: classes.activeText,
        activeBorder: classes.activeBorder
      });
    }else this.setState({ select: false,  activeBorder: {}, activeText: {} });
  }


  handleOnClickItem = (e) => {
    const { processo, onClick } = this.props;
    this.handleIsProcessoActive(true);
    onClick(processo)
  } 

  render() {
    const { processo, classes, processoSelected } = this.props;

    return (
      <Grid container alignItems="center" justify="center" spacing={40}>
      <div
        className={classes.button} 
        onClick={this.handleOnClickItem}
      >
          <Paper className={classNames(classes.cardItem, this.state.activeBorder)}>
            <Grid container alignItems="center" justify="center">
              {!processoSelected && 
              <Hidden only={["xs", "sm"]}>
                <Grid item sm={2}>
                  <img src={require('../../assets/img/80x80.png')} alt="IMG" className={classes.image} />  
                </Grid>
              </Hidden>
              }

              <Grid item xs={6} sm={6} md={processoSelected ? 6 : 3}>
                <div className={classNames(classes.title, this.state.activeText)}>Número</div>
                <Typography className={classNames(classes.body, this.state.activeText)} noWrap>{processo.numero}</Typography>
              </Grid>

              <Grid item xs={6}  sm={6} md={processoSelected ? 6 : 2}>
                <div className={classNames(classes.title, this.state.activeText)}>Assunto</div>
                <Typography className={classNames(classes.body, this.state.activeText)} noWrap>{processo.assunto}</Typography>
              </Grid>

              <Grid item xs={12} sm={12} md={processoSelected ? 12 : 2}>
                <div className={classNames(classes.title, this.state.activeText)}>Interessado</div>
                <Typography className={classNames(classes.body, this.state.activeText)} noWrap>{processo.interessados[0]}</Typography>
              </Grid>
              {!processoSelected && 
              <Hidden only={["xs", "sm"]}>
                <Grid item sm={3}>
                  <div className={classNames(classes.title, this.state.activeText)}>Descrição</div>
                  <Typography className={classNames(classes.body, this.state.activeText)} noWrap>{processo.descricao}</Typography>
                </Grid>
              </Hidden>
              }
              </Grid>
              </Paper>
          
          
      </div>
      {this.props.children}
    </Grid>
    )
  }
}


ListaItemCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  processoSelected: PropTypes.oneOfType(
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
  processo: PropTypes.shape({ 
    id: PropTypes.string,
    numero: PropTypes.string,
    entrada: PropTypes.string,
    interessados: PropTypes.array,
    descricao:PropTypes.string,
    assunto: PropTypes.string,
  })
}

export default withStyles(styles)(ListaItemCard);
