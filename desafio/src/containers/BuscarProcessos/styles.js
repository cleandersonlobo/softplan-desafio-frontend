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
  },
  title: {
    fontSize: 24,
    color: theme.palette.primary.main,
    textAlign: 'center'
  }
});


export default styles;