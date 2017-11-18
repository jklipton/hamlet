'use strict';

var language = null;
var languageInStorage = localStorage.getItem('language');

window.onload = function () {
  if (JSON.parse(localStorage.getItem('language') === null)) {
  } else if (JSON.parse(localStorage.getItem('language') === 'English')) {
     var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/english.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();
    }  else if (JSON.parse(localStorage.getItem('language') === 'French')) {
     var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/french.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();
  } else if (JSON.parse(localStorage.getItem('language') === 'Spanish')) {
     var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/spanish.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();
    }  else if (JSON.parse(localStorage.getItem('language') === 'Russian')) {
     var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/russian.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();
    }  else {}
 }

    
document.getElementById("English").addEventListener("click", function(){
    localStorage.setItem('language', 'English');
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/english.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();

});

document.getElementById("French").addEventListener("click", function(){
    localStorage.setItem('language', 'French');
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/french.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();
});

document.getElementById("Spanish").addEventListener("click", function(){
    localStorage.setItem('language', 'Spanish');
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/spanish.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();
});

document.getElementById("Russian").addEventListener("click", function(){
    localStorage.setItem('language', 'Russian');
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', 'results/russian.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        document.getElementById("monologue").innerHTML = xhr.responseText;
    } 
}
xhr.send();
});
