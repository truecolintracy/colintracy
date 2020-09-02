import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    width: '90vw',
    maxWidth: 320
  },
  mobileNavHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 104,
    '& a': {
      display: 'block',
      width: '100%',
      height: '100%',
      '& img': {
        display: 'block',
        height: '100%',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        maxWidth: '100%'
      }
    }
  },
  menuItem: {
    padding: 0,
    margin: 0
  },
  expansionPanel: {
		boxShadow: 'none',
		margin: '0 !important',
		borderRadius: 0
  },
  expansionPanelSummary: {
    padding: '0 !important',
    minHeight: '0 !important',
    '& > div': {
      paddingTop: '0 !important',
      paddingBottom: '0 !important',
      marginTop: '0 !important',
      marginBottom: '0 !important'
    }
  },
  expansionPanelLinks: {
		padding: 0,
		flexWrap: 'wrap'
	}
}));

export default useStyles;