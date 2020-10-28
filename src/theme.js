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
			main: '#1477FC'
		},
		secondary: {
			main: '#F8F9FA'
		},
		tertiary: {
			main: '#FFFFFF'
		},
		tableOuterBackground: '#DEE2E6',
		inputBorder: '#B3C0CC',
		addNewPopup: {
			backgroundColor: '#FCFCFC',
			boxShadow: '#00000029',
			pink: '#ED78A5',
			inputBorder: '#B3C0CC'
		},
		text: {
			primary: '#54575A',
			secondary: '#4E555A',
			tertiary: '#8494A3',
			blue: '#1477FC',
			white: '#FFFFFF',
			green: '#32D1A6',
			red: '#ff0000',
			icon: '#7F8890',

			logoBorder: '#707070'
		}
	},
	typography: {
		// htmlFontSize: 10,
		fontFamily: "'Helvetica Neue', sans-serif",
		// fontSize: 10,
		body1: {}
	}
});

export default theme;
