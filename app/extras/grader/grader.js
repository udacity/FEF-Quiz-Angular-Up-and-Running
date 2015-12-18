var theTag = document.querySelector('#the-tag');
var nameField = document.querySelector('#name-yoself');
var orangeCheckbox = document.querySelector('#checkbox-orange');
var strikeCheckbox = document.querySelector('#checkbox-strikethrough');

if (tagNameHasNameBinding()) {
  window.dispatchEvent(new CustomEvent('name-exists', {'detail': 'passed'}));
}

nameField.addEventListener('keydown', verifyNameField);

orangeCheckbox.addEventListener('click', function() {
  window.dispatchEvent(new CustomEvent('checked-orange', {'detail': 'passed'}));
});

strikeCheckbox.addEventListener('click', function() {
  window.dispatchEvent(new CustomEvent('checked-strikethrough', {'detail': 'passed'}));
});

function tagNameHasNameBinding() {
  return theTag.className.toString().indexOf('ng-binding') >= 0;
}

function verifyNameField() {
  if (theTag.innerText.length > 0) {
    window.dispatchEvent(new CustomEvent('textbox-name', {'detail': 'passed'}));
    nameField.removeEventListener('keydown', verifyNameField);
  }
}
