const styles = theme => ({ 
  cardItem: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    ...theme.typography.title,
    fontWeight: 800,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    fontSize: 14,
    color: theme.palette.secondary.dark
  },
  button: {
    cursor: 'pointer', 
    outline: 0,
    marginRight: 40,
    marginLeft: 40,
  },
  image: {
    width: 80,
    height: 80,
  },
  body: {
    paddingBottom: theme.spacing.unit * 2,
  },
  activeText: {
    color: theme.palette.primary.main
  },
  activeBorder: {
    border: `1px solid ${theme.palette.primary.main}`
  }
});

export default styles;