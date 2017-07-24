var chai = require('chai'), expect = chai.expect, should = chai.should()

var terms = require('../bahai-term-phonemes')

// object with a bunch of text blocks for testing
var tests = require('./testblocks.js')() 

describe('Bahá’í Terms to IPA Phonemes', function() {

  describe('Recognize Bahá’í terms', function () {
    it(`Should recognize "Baha'i"`, () => expect(terms.isPossibleTerm("Baha'i")).to.be.true )
    it(`Should recognize "Bahá’í"`, () => expect(terms.isPossibleTerm("Bahá’í")).to.be.true )
    it(`Should recognize "Baha’i"`, () => expect(terms.isPossibleTerm("Baha’i")).to.be.true ) 
  })

  describe('Correctly replaces single Bahá’í terms', function () {
    it(`Correctly replaces term "Bahá’í"`, function () {
      let src = `Bahá’í`
      let cmp = 'b @ h A: ? i:'
      let dest = terms.phonemes(src)
      if (dest!=cmp) console.log(dest)
      expect(dest===cmp).to.be.true;
    })
    it(`Correctly replaces term "Ma<u>sh</u>riqu’l-A<u>dh</u>kár"`, function () {
      let src = `Ma<u>sh</u>riqu’l-A<u>dh</u>kár`
      let cmp = 'm @ s  r e g @U ? l ? @ z k A: r'
      let dest = terms.phonemes(src)
      if (dest!=cmp) console.log(dest)
      expect(dest===cmp).to.be.true;
    })  
    it(`Correctly replaces term "‘Abdu’l-Bahá"`, function () {
      let src = `‘Abdu’l-Bahá`
      let cmp = '@ b d @U ? l ? b @ h A:'
      let dest = terms.phonemes(src)
      if (dest!=cmp) console.log(dest)
      expect(dest===cmp).to.be.true;
    })  

    it(`Correctly replaces term "‘Abdu’l-Ḥamíd"`, function () {
      let src = `‘Abdu’l-Ḥamíd`
      let cmp = '@ b d @U ? l ? h @ m i: d'
      let dest = terms.phonemes(src)
      if (dest!=cmp) console.log(dest)
      expect(dest===cmp).to.be.true;
    })  

    it(`Correctly replaces term "‘Abdu’l-Ḥamíd’s" (with possessive)`, function () {
      let src = `‘Abdu’l-Ḥamíd’s`
      let cmp = '@ b d @U ? l ? h @ m i: d s'
      let dest = terms.phonemes(src)
      if (dest!=cmp) console.log(dest)
      expect(dest===cmp).to.be.true;
    })  

  })

  describe('Correctly replaces Bahá’í terms in a block of text', function () {
    it(`Correctly replaces block`, function () {
      let src = tests.plaintext
      let cmp = tests.plaintext_ipa
      let dest = terms.parse(src)
      if (dest!=cmp) console.log(dest)
      expect(dest===cmp).to.be.true;
    })
  })


  describe('Tokens correctly give same result for various states of utf8', function () {
    var tt = [`'Abdu'l-Bahá`, `‘Abdu’l-Bahá`,  `Abdu'l-Bahá`]  
    //console.log(terms.phonemes(tt[0]),terms.phonemes(tt[1]),terms.phonemes(tt[2]))
    it(`Compare phonemes of 'Abdu'l-Bahá ‘Abdu’l-Bahá Abdu'l-Bahá`, () => expect(
      terms.phonemes(tt[0]) == terms.phonemes(tt[1]) &&
      terms.phonemes(tt[1]) == terms.phonemes(tt[2]) 
    ).to.be.true )  
  }) // Test ability to determine if a token is a word



}) // Bahá’í Terms to IPA Phonemes
 