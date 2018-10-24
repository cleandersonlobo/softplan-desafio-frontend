import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CardContent, Card, CardHeader, IconButton, Typography, Hidden } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styles from './styles';

class CardItem extends Component {
  render() {
    const { processo, classes, onClose } = this.props;
    return (
      <Card key={processo.id}>
        <CardHeader
        avatar={
          <Hidden smDown>
              <img src={require('../../assets/img/150x150.png')}  alt="IMG"/>  
          </Hidden>
          }
          action={
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          }
          title={
            <Fragment>
              <Grid container>
                <Grid item xs>
                  <div className={classNames(classes.title)}>Número</div>
                  <Typography className={classNames(classes.headline)}>{processo.numero}</Typography>
                </Grid>
                <Grid item xs>
                  <div className={classNames(classes.title)}>Data</div>
                  <Typography className={classNames(classes.headline)}>{processo.entrada}</Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs>
                  <div className={classNames(classes.title)}>Assunto</div>
                  <Typography className={classNames(classes.headline)} noWrap>{processo.assunto}</Typography>
                </Grid>
              </Grid>
            </Fragment>
          }
        />
        <CardContent>
          <Grid item xs>
            <div className={classNames(classes.title)}>Interresados</div>
            <Grid container>
              {processo.interessados.map((item) => (
                <Grid item xs={6} key={item}>
                  <Typography className={classNames(classes.body)}>
                    {item}
                  </Typography>      
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs>
            <div className={classNames(classes.title)}>Descrição</div>
            <Typography className={classNames(classes.body)}>
              {processo.descricao}
            </Typography>  
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(CardItem);
