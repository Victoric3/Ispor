/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
	  "**/*.{html,jsx,js}",
	  "**/*.js",
	  "**/*.html",
	],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  // Primary Colors
		  'ispor-blue': '#53a2ca',
		  'ispor-light-blue': '#6EC1D6',
		  'ispor-dark-navy': '#1A2A3A',
		  'ispor-soft-teal': '#8FD6E1',
  
		  // Neutral Colors
		  'ispor-light-gray': '#F5F9FC',
		  'ispor-medium-gray': '#A0AEC0',
		  'ispor-dark-gray': '#17181B',
  
		  // Accent Colors
		  'ispor-cyan': '#00C9FF',
		  'ispor-purple': '#9400FF',
		  'ispor-pink': '#FF00FF',
  
		  // Gradients (for utility classes)
		  'gradient-primary': 'linear-gradient(135deg, #53a2ca, #6EC1D6)',
		  'gradient-dark': 'linear-gradient(135deg, #1A2A3A, #0F172A)',
		  'gradient-soft': 'linear-gradient(135deg, #8FD6E1, #F5F9FC)',
		},
		fontFamily: {
		  poly: ['"poly"', "serif"],
		},
	  },
	},
	plugins: [
	  function({ addVariant }) {
		addVariant('firefox', ':-moz-any(&)');
	  }
	],
  };
  