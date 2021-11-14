document.addEventListener("DOMContentLoaded", () => {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", () => {
    event.preventDefault();
    addTodo();
  });
});
