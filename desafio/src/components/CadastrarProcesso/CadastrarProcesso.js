import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import { 
  Button,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  withMobileDialog,
  TextField,
  IconButton,
} from '@material-ui/core';
import styles from './styles';

// Modal
class CadastrarProcesso extends Component {
  
  state = {
    assunto: '',
    interessado: '',
    interessados: [],
    descricao: '',
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleAddInteressado = () => {
    const { interessado } = this.state;
    const interessados = [
      ...this.state.interessados,
      interessado,
    ];

    this.setState({ interessados, interessado: '' });
  }
  handleNovoProcesso = () => {
    const { assunto, interessados, descricao }  = this.state;
    
     this.props.novoProcesso({ assunto, interessados, descricao });
    
    this.props.handleModalClose();
    this.setState({
      assunto: '',
      interessado: '',
      interessados: [],
      descricao: '',
    })
  }

  handleClose = () => {
    this.props.handleModalClose();
    this.setState({
      assunto: '',
      interessado: '',
      interessados: [],
      descricao: '',
    })
  }

  render() {
    const { fullScreen, classes } = this.props;
    const { assunto, interessados, descricao }  = this.state;
    const isBtnDisabled = !assunto.length || !interessados.length || !descricao.length 
    
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.props.open}
          onBackdropClick={this.handleClose}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
        
          <DialogTitle id="responsive-dialog-title">
            
            <Grid container >
              <Grid item xs={11}>
                Cadastro do processo
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={this.handleClose}>
                <Close />
              </IconButton>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent>
              <form className={classes.container} noValidate autoComplete="off">
                <Grid container >
                    <Grid item xs={8}>
                      <TextField
                        id="assunto"
                        label="Assunto"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        className={classes.textField}
                        value={this.state.assunto}
                        onChange={this.handleChange('assunto')}
                        margin="normal"
                      />
                    </Grid>
                    <Grid container alignItems="flex-end" >
                      
                        <Grid item xs={12}>
                        {this.state.interessados.length > 0 &&
                          <p className={classes.subtitle}>Interessados</p>
                        }
                          {this.state.interessados.map((item, index) => (
                            <p key={index} className={classes.bodyInteressados}>{item}</p>
                          ))}
                        </Grid>
                      </Grid>
                    <Grid container alignItems="flex-end" spacing={24}>
                      <Grid item xs={8}>
                        <TextField
                            label="Novo Interessado"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            className={classes.textField}
                            value={this.state.interessado}
                            onChange={this.handleChange('interessado')}
                            margin="normal"
                          />
                      </Grid>
                      <Grid item xs={4}>
                        <Button 
                          className={classNames(classes.buttonAction, classes.btnAdd)}
                          variant="contained" 
                          size="small"
                          onClick={this.handleAddInteressado}
                        >
                          Adicionar
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item xs={11}>
                      <TextField
                        id="descricao"
                        label="Descrição"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        multiline
                        className={classes.textField}
                        value={this.state.descricao}
                        onChange={this.handleChange('descricao')}
                        margin="normal"
                      />
                    </Grid>
                </Grid>
              </form>
          </DialogContent>
          <DialogActions>
            <Button 
              onClick={this.handleNovoProcesso} 
              variant="contained" 
              color="primary"
              disabled={isBtnDisabled}
            >
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CadastrarProcesso.propTypes = {
  classes: PropTypes.object.isRequired,
  fullScreen: PropTypes.bool.isRequired,
  novoProcesso: PropTypes.func.isRequired,
};

export default withStyles(styles)(withMobileDialog()(CadastrarProcesso));
