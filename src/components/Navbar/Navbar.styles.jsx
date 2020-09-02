import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        position: 'relative'
    },
    toolBar: {
        backgroundColor: theme.palette.common.white
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    logo: {
        flexGrow: 1,
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    topNav: {
        display: 'flex',
        alignContent: 'flex-end',
        right: 0,
        position: 'absolute',
        height: '100%',
    },
    tertiaryMenu: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        color: theme.palette.primary.light,
    },
    tertiaryMenuItem: {
        marginLeft: theme.spacing(1),
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
            color: theme.palette.secondary.main
        }
    },
    findADealerButton: {
        display: 'flex',
        alignItems: 'center',
        minHeight: '100%',
        textTransform: 'uppercase',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        transition: 'background-color 0.3s ease-in-out',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }
    }
}));

export default useStyles;