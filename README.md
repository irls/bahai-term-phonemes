# Bahai-term-phonemes
Simple utility to convert properly formatted HTML/UTF-8 Baha'i terms into IPN phoneme codes for correct pronunciation by TTS engines
 

### Install the interface module into your node project with:
``` 
npm install --save bahai-term-phonemes
```

### Functionality
``` Javascript
import trms from 'bahai-term-phonemes'

isPossibleTerm(str)
// checks if term is likely a Baha'i transliteration

phonemes(word)
// translates a word to IPA code in double-brackets. example:
trms.parse("‘Abdu’l-Ḥamíd")
// output: "[[@ b d @U ? l ? h @ m i: d]]"

parse(str) 
// identifies Baha'i terms in string and returns modified string replacing any such terms with double-bracketed IPA codes, for example: 
trms.parse("Bahá’u’lláh, Whose Mission...")
// output: "[[b @ h A: ? @U ? l l A: h]], Whose Mission..."

strip_accents(str)
// returns ASCII version of string, removing dot-unders, accents and underscores
```
 
### Demo
Browser jsfiddle demo: https://jsfiddle.net/chadananda/xa7dtvc3/




