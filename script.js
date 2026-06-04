// ULELA website scripts

// Pre-fill contact form message with product name from URL query param
(function () {
  if (!window.location.pathname.includes('contact')) return;
  var params = new URLSearchParams(window.location.search);
  var product = params.get('product');
  if (product) {
    var msgBox = document.getElementById('contact-message');
    if (msgBox && !msgBox.value) {
      msgBox.value = 'Hello, I am interested in ' + decodeURIComponent(product) + ' and would like to request a quote. Please provide pricing, MOQ and lead time information. Thank you.';
    }
    var subjectBox = document.getElementById('contact-subject');
    if (subjectBox && !subjectBox.value) {
      subjectBox.value = 'Inquiry: ' + decodeURIComponent(product);
    }
  }
})();
