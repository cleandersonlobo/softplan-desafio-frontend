const styles = theme => ({ 
  cardItem: { 
    padding: theme.spacing.unit,
    marginTop: 20,
    marginBottom: 40,
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