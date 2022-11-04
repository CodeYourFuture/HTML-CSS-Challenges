  function checkForm(form)
  {
    ...
    if(!form.terms.checked) {
      alert("Please indicate that you accept the Terms and Conditions");
      form.terms.focus();
      return false;
    }
    return true;
  }

/* <script>
      var inputs = document.querySelectorAll('[name="option[]"]')
var radioForCheckboxes = document.getElementById('radio-for-checkboxes')
function checkCheckboxes () {
    var isAtLeastOneServiceSelected = false;
    for(var i = inputs.length-1; i >= 0; --i) {
        if (inputs[i].checked) isAtLeastOneCheckboxSelected = true;
    }
    radioForCheckboxes.checked = isAtLeastOneCheckboxSelected
}
for(var i = inputs.length-1; i >= 0; --i) {
    inputs[i].addEventListener('change', checkCheckboxes)
} -->
*/