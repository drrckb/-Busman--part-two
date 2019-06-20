/* I cannot seem to get any of the BELOW 54 DEGREE options to prompt*/

var tempFahr = 'since it is below 54 degrees outside';
var tempFahr1 = 'since it is between 54 and 70 degrees outside';
var tempFahr2 = 'since it is above 70 degrees outside';

var eventType = ' and you are going to a casual event';
var eventType1 = ' and you are going to a semi-formal event';
var eventType2 = ' and you are going to a formal event';

var result = ' you should wear something comfy and a coat.';
var result1 = ' you should wear something comfy and a jacket';
var result2 = ' you should wear something comfy and no jacket';
var result3 = ' you should wear a polo and a coat';
var result4 = ' you should wear a polo and a jacket';
var result5 = ' you should wear a polo and no jacket';
var result6 = ' you should wear a suit and a coat';
var result7 = ' you should wear a suit and a jacket';
var result8 = ' you should wear a suit and no jacket';

var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'casual - below than 54') {
    para.textcontent = ('tempFahr + eventType + result');
  } else if (choice === 'casual - between 54 and 70') {
    para.textContent = (tempFahr1 + eventType + result1);
  } else if (choice === 'casual - above 70') {
    para.textContent = (tempFahr2 + eventType + result2);
  } else if (choice === 'semi - below than 54') {
    para.textContent = (tempFahr + eventType1 + result3);
  } else if (choice === 'semi - between 54 and 70') {
    para.textContent = (tempFahr1 + eventType1 + result4);
  } else if (choice === 'semi - above 70') {
    para.textContent = (tempFahr2 + eventType1 + result5);
  } else if (choice === 'formal - below than 54') {
    para.textContent = (tempFahr + eventType2 + result6);
  } else if (choice === 'formal - between 54 and 70') {
    para.textContent = (tempFahr1 + eventType2 + result7);
  } else if (choice === 'formal - above 70') {
    para.textContent = (tempFahr2 + eventType2 + result8);
  } else {
    para.textContent = '';
  }
}
