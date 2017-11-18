'use strict';

var language = null;
var languageInStorage = localStorage.getItem('language');


window.onload = function () {
  if (JSON.parse(localStorage.getItem('language') === null)) {
  } else if (JSON.parse(localStorage.getItem('language') === 'English')) {
      document.getElementById("monologue").innerHTML = "Hamlet in English";
  } else if (JSON.parse(localStorage.getItem('language') === 'French')) {
      document.getElementById("monologue").innerHTML = "Hamlet in French";
  } else if (JSON.parse(localStorage.getItem('language') === 'Spanish')) {
      document.getElementById("monologue").innerHTML = "Hamlet in Spanish";
  } else if (JSON.parse(localStorage.getItem('language') === 'Russian')) {
      document.getElementById("monologue").innerHTML = "Hamlet in Russian";
  } else {}
}

    
document.getElementById("English").addEventListener("click", function(){
    document.getElementById("monologue").innerHTML = "Hamlet in English";
    localStorage.setItem('language', 'English');

});


document.getElementById("French").addEventListener("click", function(){
    document.getElementById("monologue").innerHTML = "Hamlet in French";
    var language = 'French';
    localStorage.setItem('language', 'French');
});
