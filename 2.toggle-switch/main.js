const toggleInputs = document.querySelectorAll("#toggle");

/**
 * 
 * @param {Event} e Event
 */
function toggle(e) {
  const { currentTarget } = e;
  currentTarget.classList.toggle("active");
  currentTarget.ariaChecked = !(currentTarget.ariaChecked === "true");
}

toggleInputs.forEach(input => {
  input.addEventListener("click", toggle);
});

const duration = 1000;

setInterval(() => {
  toggleInputs.forEach(input => input.classList.toggle("active"));
}, duration);
