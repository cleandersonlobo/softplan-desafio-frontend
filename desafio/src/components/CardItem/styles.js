const styles = theme => ({ 
  root: {
    margin: 20,
  },
  cardItem: { 
    padding: theme.spacing.unit,
    display: 'flex',
  },
  title: {
    ...theme.typography.title,
    fontWeight: 800,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    fontSize: 14,
    color: theme.palette.secondary.main
  },
  button: {
    marginTop: '16px',
    cursor: 'pointer',
    padding: 0, 
    border: 0,
    outline: 0,
  },
  image: {
    width: 80,
    height: 80,
  },
  headline: {
    fontSize: 24,
    paddingBottom: theme.spacing.unit,
  },
  body: {
    fontSize: 14,
    paddingBottom: theme.spacing.unit,
  },
  activeText: {
    color: theme.palette.primary.main
  },
  activeBorder: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  buttonAction: {
    fontWeight: 'bold', 
    marginLeft: theme.spacing.unit,
  }, 
  btnRemover: {
    color: theme.palette.secondary.main, 
    border: `1px solid ${theme.palette.secondary.litgh}`
  }, 
  btnEditar: {
    color: theme.palette.primary.main, 
    border: `1px solid ${theme.palette.primary.main}`
  }, 
});

export default styles;