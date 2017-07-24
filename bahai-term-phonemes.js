// Translate Baha'i terms to IPA phonemes for use in TTS


var term_phonemes = {

  isPossibleTerm: function (term) {
    term = term.toLowerCase().trim() 
    // trim leading and trailing punctuation
    var newterm = term.replace(/^[^a-zḥṭẓḍṣ_áíú]/g, '').replace(/[^a-zḥṭẓḍṣ_áíú]$/g, '') 
    // trim contraction suffix and possessives
    newterm = newterm.replace(/[‘’']s$/im, '').replace(/n[‘’']t$/im, '') 
    //console.log(newterm)
    var isTerm = (newterm != newterm.replace(/[ẓḥṭẓḍṣ_áíú’‘']/g, '')) 
    //console.log(newterm)
    return isTerm 
  },

  parse: function (text) {
    if (!text) return
    var trm = this
    var words = text.split(' ') 
    words.forEach(function(element, index, array){
      if (trm.isPossibleTerm(element)) array[index] = trm.phonemes(element, true)
    }) 
    return words.join(' ') 
  }, 

  strip_accents: function (term) {
    var in_chrs =  'àáâãäçèéêëìíîïñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ',
        out_chrs = 'aaaaaceeeeiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY',
        transl = {} 
    eval('var chars_rgx = /['+in_chrs+']/g') 
    for(var i = 0;  i < in_chrs.length;  i++){ transl[in_chrs.charAt(i)] = out_chrs.charAt(i)  }
    return term.replace(chars_rgx, function(match){ return transl[match]  }) 
  },

  phonemes:  function (term, includePunctuation=false) {
    var original = term;
    var prefix = term.replace(/^([^a-zḥṭẓḍṣ_áíú]*).*/i, '$1')
    var suffix = term.replace(/.*?([^a-zḥṭẓḍṣ_áíú]*)$/i, '$1')
    var term = term.replace(/^[^a-zḥṭẓḍṣ_áíú]/ig, '').replace(/[^a-zḥṭẓḍṣ_áíú]$/ig, '')

    // Bahá’u’lláh ->  ba hah ow lah
    term = term.toLowerCase().trim();
    // conver html to glyph
    term = term.replace(/<u>/g, '_').replace(/<\/u>/g,'');
    // remove any remaining tags and whitespace
    term = term.replace(/<(.|\n)*?>/g, '').replace(/\s+/g, ' ').trim();
    // replace any letters that sound like another
    term = term.replace(/ḍ/g, 'z').replace(/_dh/g, 'z').replace(/_th/g, 's').replace(/u/g, 'o').replace(/aw/g, 'o');
    term = term.replace(/_gh/g, 'g');
    // replace apostrophe ’s with just s 
    term = term.replace(/([\’\‘\'\`]s)$/m, 's') 

    // connectors
    term = term.replace(/-i-/g, 'i-')
    .replace(/’(d-D|_kh-_kh|_sh-_sh|_ch-_ch|_zh-_zh|b-b|p-p|j-j|t-t|d-d|r-r|z-z|s-s|f-f|q-q|k-k|l-l|m-m|n-n|h-h)/, '$1') ;
    // remove beginning or ending ayn and hamza
    term = term.replace(/^[’‘']/, '').replace(/[’‘']$/, '');

    var vowels = {
      'ay' : 'eI',
      'iy' : 'eI',
      'ih' : 'eI',
      'a'  : '@',
      'á'  : 'A:',
      'i'  : 'e',
      'í'  : 'i:',
      'o'  : '@U',
      'ú'  : 'u:'
    };
    var consonants = {
      '_kh' : 'x',
      '_zh' : 'Z',
      '_sh' : 'S',
      '_ch' : 'tS',
      'b'   : 'b',
      'p'   : 'p',
      'j'   : 'dZ',
      't'   : 't',
      'ṭ'   : 't',
      'd'   : 'd',
      'r'   : 'r',
      'z'   : 'z',
      'ẓ'   : 'z',
      's'   : 's',
      'ṣ'   : 's',
      'f'   : 'f',
      'q'   : 'g',
      'k'   : 'k',
      'l'   : 'l',
      'm'   : 'm',
      'n'   : 'n',
      'h'   : 'h',
      'ḥ'   : 'h',
      'w'   : 'w',
      'v'   : 'v',
      'y'   : 'j',
      '’'   : '?',
      '‘'   : '?',
      "'"   : '?',     
      '-'   : '?',
    };
    for(var key in vowels) if (key.length>1) {
      var regex = new RegExp(key, 'gi');
      term = term.replace(regex, vowels[key]+' ');
    }
    for(var key in consonants) if (key.length>1) {
      var regex = new RegExp(key, 'gi');
      term = term.replace(regex, consonants[key]+' ');
    }

    for(var key in vowels) if (key.length<2) {
      var regex = new RegExp(key, 'gi');
      term = term.replace(regex, vowels[key]+' ');
    }
    for(var key in consonants) if (key.length<2) {
      var regex = new RegExp(key, 'gi');
      term = term.replace(regex, consonants[key]+' ');
    }

    if (includePunctuation) return prefix +'[['+ term.trim() + ']]'+ suffix
     else return term.trim() 
  } 

}

  
module.exports = term_phonemes
