# esri-react-prerender
> Boilerplate for a project that pre-renders it's React components and also uses Esri's JavaScript 4.0 Beta and ES6.

### Demo
<a href='http://robert-w.github.io/esri-react-prerender/'>http://robert-w.github.io/esri-react-prerender/</a>

### Getting Started

<p>This project requires at minimum node and bower.</p>

<ol>
	<li>Clone the repo</li>
	<li>Install dependencies:
		<ul>
			<li><code>npm install</code> (may need sudo depending on your installation)</li>
			<li><code>bower install</code></li>
		</ul>
	</li>
</ol>

### Scripts

#### Development
<p>Run: <code>npm start</code></p>
<p>This will compile all stylus, jade, and es6 modules, and it's using babel for es6 modules so it will compile JSX for you as well.</p>

#### Production
<p>Run: <code>npm run dist</code></p>
<p>Generates a minified build using a custom prerender script, requirejs optimizer, babel, stylus, jade, and gulp in a dist folder.  After running, you can look at the index.html source and you will notice a big string of React markup generated from prerender.js.</p>
