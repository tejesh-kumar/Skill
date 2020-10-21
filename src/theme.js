import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1200,
			xl: 1920
		}
	},
	palette: {
		primary: {
			main: '#613F99'
		},
		secondary: {
			main: '#F7F7F7'
		},
		tertiary: {
			main: '#FFFFFF'
		},
		text: {
			primary: '#626262',
			secondary: '#333333',
			tertiary: '#919191',
			white: '#ffffff'
		}
	},
	typography: {
		// htmlFontSize: 10,
		fontFamily: "'Rubik', sans-serif",
		// fontSize: 10,
		body1: {}
	}
});

export default theme;
