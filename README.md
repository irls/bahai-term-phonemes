# Bahai-term-phonemes
Simple utility to convert properly formatted HTML/UTF-8 Baha'i terms into IPN phoneme codes for correct pronunciation by TTS engines
 

### Install the interface module into your node project with:
``` 
npm install --save bahai-term-phonemes
```

### Functionality
``` Javascript
import terms from 'bahai-term-phonemes'
// or
const terms = require('bahai-term-phonemes')


// checks if term is likely a Baha'i transliteration
isPossibleTerm(str)

// translates a word to IPA code in double-brackets 
phonemes("‘Abdu’l-Ḥamíd") 
// output: "[[@ b d @U ? l ? h @ m i: d]]"

// replaces Baha'i terms in string 
parse("Bahá’u’lláh, Whose Mission...")
// output: "[[b @ h A: ? @U ? l l A: h]], Whose Mission..."

// returns ASCII version of string, removing dot-unders, accents and underscores
strip_accents("‘Abdu’l-Ḥamíd")
// output: "'Abdu'l-Hamid"

```
 
### Demo
Browser jsfiddle demo: https://jsfiddle.net/chadananda/xa7dtvc3/




