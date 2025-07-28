import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		transitionDuration: {
  			'6s': '6s'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'aurora-slow': {
  				'0%, 100%': { 
  					transform: 'translateY(0) translateX(0) rotate(0deg)',
  					opacity: '0.5'
  				},
  				'33%': { 
  					transform: 'translateY(-100px) translateX(100px) rotate(120deg)',
  					opacity: '0.8'
  				},
  				'66%': { 
  					transform: 'translateY(50px) translateX(-50px) rotate(240deg)',
  					opacity: '0.3'
  				}
  			},
  			'aurora-medium': {
  				'0%, 100%': { 
  					transform: 'translateY(0) translateX(0) rotate(0deg)',
  					opacity: '0.3'
  				},
  				'50%': { 
  					transform: 'translateY(100px) translateX(-100px) rotate(180deg)',
  					opacity: '0.6'
  				}
  			},
  			'aurora-fast': {
  				'0%, 100%': { 
  					transform: 'translateY(0) translateX(0) rotate(0deg)',
  					opacity: '0.4'
  				},
  				'25%': { 
  					transform: 'translateY(-50px) translateX(50px) rotate(90deg)',
  					opacity: '0.7'
  				},
  				'75%': { 
  					transform: 'translateY(50px) translateX(-50px) rotate(270deg)',
  					opacity: '0.2'
  				}
  			},
  			'pulse-slow': {
  				'0%, 100%': { 
  					opacity: '0.3',
  					transform: 'scale(1)'
  				},
  				'50%': { 
  					opacity: '0.6',
  					transform: 'scale(1.1)'
  				}
  			},
  			'pulse-medium': {
  				'0%, 100%': { 
  					opacity: '0.4',
  					transform: 'scale(1)'
  				},
  				'50%': { 
  					opacity: '0.7',
  					transform: 'scale(1.15)'
  				}
  			},
  			'pulse-fast': {
  				'0%, 100%': { 
  					opacity: '0.2',
  					transform: 'scale(1)'
  				},
  				'50%': { 
  					opacity: '0.5',
  					transform: 'scale(1.2)'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'aurora-slow': 'aurora-slow 20s ease-in-out infinite',
  			'aurora-medium': 'aurora-medium 15s ease-in-out infinite',
  			'aurora-fast': 'aurora-fast 10s ease-in-out infinite',
  			'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
  			'pulse-medium': 'pulse-medium 6s ease-in-out infinite',
  			'pulse-fast': 'pulse-fast 4s ease-in-out infinite'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
