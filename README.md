# Bahai-term-phonemes
Simple utility to convert properly formatted HTML/UTF-8 Baha'i terms into IPN phoneme codes for correct pronunciation by TTS engines
 

### Install the interface module into your node project with:
``` 
npm install --save bahai-term-phonemes
```

### Functionality
``` Javascript
var pho = require('bahai-term-phonemes'); 

pho.replace(str) 
// identifies Baha'i terms in string and returns modified string replacing any such terms with double-bracketed IPN codes
// for example: pho.replace("Bahá’u’lláh, Whose Mission")
// output: [[b @ h A: ? @U ? l l A: h]], Whose Mission
```
 
### Demo

Browser jsfiddle demo: https://jsfiddle.net/chadananda/xa7dtvc3/