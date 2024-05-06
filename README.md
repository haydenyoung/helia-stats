# Helia Statistics

Quickly add statistics about the current Helia instance to your web app.

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