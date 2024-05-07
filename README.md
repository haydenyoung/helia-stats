# Helia Statistics

Quickly add statistics about the current Helia instance to your web app.

## Build

To build this project, clone the repository at https://github.com/haydenyoung/helia-stats and then run:

```
npm run build
```

To run the example embed, first build the project and then start the Vite server:

```
npm run build
npm run dev
```

Use the instructions provided to browser to the example in your web browser.

## Usage

### Include as a module

To use Helia Stats as a module, use import:

```
<div id="heliaStats"></div>
<!--
// Bind helia to the globalThis var so that it accessible within the helia stats module.
<script>
globalThis.helia = helia
</script>
-->
<script type="module" src="./helia-stats.es.js"></script>
``` 

### Include as an embed

To embed Helia Stats into an existing HTML page, add the following:

```
<div id="heliaStats"></div>
<!--
// Bind helia to the globalThis var so that it accessible within the helia stats embed.
<script>
globalThis.helia = helia
</script>
-->
<script language="javascript" src="./helia-stats.embedded.js"></script>
``` 