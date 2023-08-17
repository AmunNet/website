<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Poppins:wght@400;600;800&family=Roboto:ital,wght@0,300;1,300&display=swap');
/* Oswald & Roboto with Italics & Poppins*/

/* Todo: Define color styles */
:root {
	--pure-white: #ffffff;
	--primary-color: #191923;
	--secondary-color: #20202a;
	--tertiary-color: #2d2d3a;
	--fourth-color: #2b2b35;
	--accent-color: #ffc107;
	--heading-color: #fafafc;
	--text-color: #8a8a8a;
	--rgba-primary-color: 25, 25, 35;
	--rgba-secondary-color: 32, 32, 42;
	--rgba-tertiary-color: 45, 45, 58;
	--rgba-fourth-color: 43, 43, 53;
	--rgba-accent-color: 255, 193, 7;
	--rgba-heading-color: 250, 250, 252;
	--rgba-text-color: 138, 138, 138;
	--column-width: 42rem;
	--column-margin-top: 4rem;

	font-family: 'Poppins', sans-serif;
	font-size: 62.5%;
	margin: 0;
}

/*:global(body) {
    margin: 0;
    
    
    line-height: 1.5;
    color: #8c8c8e;
}*/

:global(body) {
	height: calc(100vh - 2rem);
	max-width: 1440px;
	margin: auto;
	padding: 1rem;
	overflow: hidden;
	color: var(--text-color);
	background: var(--primary-color);
	background: linear-gradient(
		159deg,
		var(--primary-color) 0%,
		var(--secondary-color) 80%,
		var(--tertiary-color) 99%
	);
    display: flex;
	position: relative;
    flex-direction: row;
	font-size: 1.6rem;
}

:global(body::before) {
	content: '';
	width: 80vw;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	background: radial-gradient(
		50% 50% at 50% 50%,
		var(--pure-white) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	opacity: 0.05;
}

:global(*::-webkit-scrollbar) {
	display: none;
}

:global(p) {
	font-weight: 400;
	line-height: 1.5;
}

:global(h1, h2, h3, h4, h5, h6, p > span) {
	margin: 0;
	line-height: 1.5;
	color: var(--heading-color);
}

:global(h1) {
}

:global(h2) {
	font-weight: 600;
}

:global(h3) {
	font-weight: 600;
}

:global(a) {
	color: var(--accent-color);
	text-decoration: none;
	-webkit-transition: .4s ease-in-out;
	transition: .4s ease-in-out;
}

:global(a > *) {
	color: var(--text-color);
	text-decoration: none;
}

:global(a:hover) {
	color: var(--heading-color);
	-webkit-transition: .4s ease-in-out;
	transition: .4s ease-in-out;
}

:global(pre) {
	font-size: 16px;
	font-family: var(--font-mono);
	background-color: rgba(255, 255, 255, 0.45);
	border-radius: 3px;
	box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
	padding: 0.5em;
	overflow-x: auto;
	color: var(--text-color);
}
</style>
<slot/>