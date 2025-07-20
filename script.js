// Show confirmation when form is submitted
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevents actual form submission
    alert("Thank you for contacting PowerFit Gym! We'll get back to you shortly.");
    form.reset(); // optional: clears the form
  });
});
