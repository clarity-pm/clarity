'use strict';
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}


(function () {
  var processImportant = function () {
    var paragraphs = document.getElementsByTagName('p');

    for (var i = 0; i < paragraphs.length; i++) {
      var p = paragraphs[i];

      if (typeof p.firstChild === 'object'
        && p.firstChild instanceof HTMLElement
        && p.firstChild.tagName.toLowerCase() === 'strong'
      ) {
        var html = p.firstChild.innerHTML;
        if (html === 'Important') {
          p.className = (p.className + ' note-important').trim();
        }
      }
    }

  }

  var ready = function () {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
        links[i].target = '_blank';
      }
    }

    var onTextAreaInput = function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    };

    var textAreas = document.getElementsByClassName('autosize');

    for (var i = 0; i < textAreas.length; i++) {
      var textArea = textAreas[i];

      if ('textarea' !== textArea.tagName.toLowerCase()) {
        continue;
      }

      if (textArea.hasAttribute('ac-autosize-listening')) {
        continue;
      }

      textArea.setAttribute('ac-autosize-listening', 'yes');
      textArea.setAttribute('style', 'height:' + (textArea.scrollHeight) + 'px;overflow-y:hidden;');
      textArea.addEventListener('input', onTextAreaInput, false);
      textArea.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
          this.form.submit();
        }
      });
    }

    processImportant();
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(ready, 1);
  } else {
    document.addEventListener('DOMContentLoaded', ready);
  }
})();
