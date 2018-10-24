export default theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    padding: 20,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  button: {
    fontWeight: 'bold', 
    marginLeft: theme.spacing.unit,
    color: theme.palette.secondary.main,
    boxShadow: '0px 5px 0px 0px rgba(158,158,158,1)',
    height: 58, 
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