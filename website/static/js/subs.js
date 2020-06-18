'use strict';
(function () {
  function storageAvailable(type) {
    var storage;
    try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return e instanceof DOMException && (
          // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        (storage && storage.length !== 0);
    }
  }

  var renderSubCallout = function () {
    var overlayWrapper = document.createElement('div');
    overlayWrapper.className = 'updates-subscribe-wrapper';

    var clearOverlay = function () {
      document.body.removeChild(overlayWrapper);
    };

    var overLayContainer = document.createElement('div');
    overLayContainer.className = 'updates-subscribe-container';
    overlayWrapper.appendChild(overLayContainer);

    var intro = document.createElement('div');
    intro.className = 'intro';
    overLayContainer.appendChild(intro);

    var logo = document.createElement('img');
    logo.src = '/img/icon_dark.svg';
    logo.className = 'logo';
    intro.appendChild(logo);

    var heading = document.createElement('h2');
    heading.className = 'capture';
    heading.innerHTML = 'Subscribe to Clarity email updates?'
    intro.appendChild(heading);

    var about = document.createElement('div');
    about.className = 'about';
    about.innerHTML = 'Receive update notifications about changes to Clarity methodology and ' +
      'useful related resources. No paid promotions, no spam, I promise.';
    overLayContainer.appendChild(about);

    var form = document.createElement('form');
    form.target = 'subscribe_window';
    form.method = 'POST';
    form.action = 'https://tinyletter.com/claritypm';
    overLayContainer.appendChild(form);

    var emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.type = 'email';
    emailInput.required = true;
    emailInput.placeholder = 'Enter your email address';
    emailInput.autocomplete = 'email';
    form.appendChild(emailInput);

    var hiddenInput = document.createElement('input');
    hiddenInput.name = 'embed';
    hiddenInput.type = 'hidden';
    hiddenInput.value = '1';
    form.appendChild(hiddenInput);

    var submit = document.createElement('button');
    submit.type = 'submit';
    submit.innerHTML = 'Subscribe';
    submit.className = 'button submit';
    form.appendChild(submit);

    var cancel = document.createElement('button');
    cancel.type = 'button';
    cancel.innerHTML = 'No, thanks!'
    cancel.className = 'button cancel';
    form.appendChild(cancel);

    form.addEventListener('submit', function () {
      setTimeout(clearOverlay, 100);
    });

    cancel.addEventListener('click', clearOverlay);

    document.body.appendChild(overlayWrapper);
  };

  var ready = function () {
    // No storage...
    if (!storageAvailable('sessionStorage') || !storageAvailable('localStorage')) {
      return;
    }

    // Newsletter popover already shown. Hide it forever.
    if (localStorage.getItem('subscribe_shown')) {
      return;
    }

    // Session not started.
    if (!sessionStorage.getItem('session_start_t')) {
      sessionStorage.setItem('session_start_t', (parseInt(new Date() * 1)).toString());
    }

    // Leave index alone
    if ('/' === document.location.pathname) {
      return;
    }

    var interval = setInterval(function () {
      var sessionStartTime = sessionStorage.getItem('session_start_t');
      var nowTime = parseInt(new Date() * 1);
      var delay = 60000; // 60 seconds

      if (nowTime - sessionStartTime < delay) {
        return;
      }

      localStorage.setItem('subscribe_shown', 'yes');
      renderSubCallout();
      clearInterval(interval);
    }, 1000);
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(ready, 1);
  } else {
    document.addEventListener('DOMContentLoaded', ready);
  }
})();
