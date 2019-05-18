import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const WHITE_COLOR = '#ffffff';
export const GREY_COLOR = '#c8c3c6';
export const LIGHT_GREY_COLOR = '#efedef';
export const PRIMARY_PURPLE_COLOR = '#410441';
export const SECONDARY_PURPLE_COLOR = '#c467c4';

export const DEFAULT_MODAL_STYLE = {
    width: '600px',
    minWidth: '400px',
    maxWidth: '600px',
    height: '637px',
    border: 'solid 1px ' + LIGHT_GREY_COLOR,
    borderRadius: '9px',
    backgroundColor: WHITE_COLOR,
    padding: '0'
};

export const SHADOW_NONE = getMuiTheme({
    paper: {
        zDepthShadows: 'none'
    }
});