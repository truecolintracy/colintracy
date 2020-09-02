import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        maxHeight: 28,
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.5),
        color: theme.palette.common.white,
        position: 'relative',
        zIndex: 2
    },
    secondaryNavLink: {
        display: 'flex',
        alignContent: 'center',
        textTransform: 'uppercase',
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.5),
        borderRight: `1px solid ${theme.palette.common.white}`,
        transition: 'color 0.3s ease-in-out',
        '&:hover': {
            color: '#969492' // #50 Shade to comply with A11y
        },
    },
    secondaryNavLinkSocial: {
        display: 'flex',
        alignContent: 'center',
        paddingLeft: theme.spacing(0.5),
        paddingRight: theme.spacing(0.25),
        '& img': {
            width: theme.spacing(2),
            height: 'auto',
            display: 'block'
        }
    }
}));

export default useStyles;