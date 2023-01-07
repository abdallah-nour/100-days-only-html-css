const toggleInputs = document.querySelectorAll("#toggle--input");

toggleInputs.forEach(input => {
  input.addEventListener("click", (e) => {
    e.stopPropagation();
    const { currentTarget } = e;
    currentTarget.classList.toggle("active");
  });
});

/**
 * 
 * @param {number} duration duration for setInterval() in milliseconds
 * @returns {number} intervalId 
 */
function runTrafficLight(duration = 1500) {
  let order = 0;

  const intervalId = setInterval(() => {
    toggleInputs.forEach(input => input.classList.remove("active"));
    toggleInputs.item(order++ % 3).classList.add("active");
  }, duration);

  return intervalId;
}

/**
 * 
 * @param {number} intervalId interval id which returned from runTrafficLight()
 */
function stopTrafficLight(intervalId) {
  clearInterval(intervalId);
}

const intervalId = runTrafficLight();
