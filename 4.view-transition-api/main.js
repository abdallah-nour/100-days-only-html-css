// for browser compatibility 
const startTransition = (transitionFn) => {
  if (!document.startViewTransition) {
    transitionFn();
  } else {
    document.startViewTransition(transitionFn);
  }
}

document.getElementById('moveBtn').addEventListener('click', () => {
  const doUseWebTransition = document.querySelector("#doUseWebTransition").checked;
  doUseWebTransition ? startTransition(moveCat) : moveCat();
});

// this is the function that's do the transition in UI 
const moveCat = () => {
  document
    .querySelectorAll('.thumbnail, .cat-details')
    .forEach((target) => target.classList.toggle('hidden'));
}
