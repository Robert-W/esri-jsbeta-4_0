# esri-jsbeta-4_0
> Boilerplate for a project using ES6, Esri's new JavaScript 4.0 Beta 1, and React.  It also pre-renders all the React components for improved SEO and user experience on load.

### Demo
<a href='http://robert-w.github.io/esri-jsbeta-4_0/'>http://robert-w.github.io/esri-jsbeta-4_0/</a>

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

##### NOTE
>3d Mode does not work on mobile devices, this boilerplate needs to add a webGL check and hide the mode change button in that case but it is not currently doing so

### Scripts

#### Development
<p>Run: <code>npm start</code></p>
<p>This will compile all stylus, jade, and es6 modules via babel for which will also compile JSX for you as well. This outputs everything to a build folder in your project you can serve files from.</p>

#### Production
<p>Run: <code>npm run dist</code></p>
<p>Generates a minified build using a custom prerender script, requirejs optimizer, babel, stylus, jade, and gulp in a dist folder.  After running, you can look at the index.html source and you will notice a big string of React markup generated from prerender.js.</p>
