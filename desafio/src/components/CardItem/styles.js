const styles = theme => ({ 
  cardItem: { 
    padding: theme.spacing.unit,
    display: 'flex',
    margin: 40,
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
  }
});

export default styles;