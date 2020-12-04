// ==UserScript==
// @name         ditchqwerty settings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  apply settings
// @author       You
// @match        https://www.ditchqwerty.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// select colemak-dhm
  // one to left
  changeLayout(layoutList[currentLayoutIndex-1].innerHTML);
  currentLayoutIndex--;
  current = document.querySelector(".js-"+currentLayout);
  // to right
  changeLayout(layoutList[currentLayoutIndex+1].innerHTML);
  currentLayoutIndex++;
  current = document.querySelector(".js-"+currentLayout);

// custom settigs
wordLimitModeInput.value = 30
scoreMax = 30
document.getElementsByClassName('lvl5')[0].click()

})();
