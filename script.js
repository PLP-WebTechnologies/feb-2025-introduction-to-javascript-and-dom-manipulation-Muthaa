// Change Text Content
document.getElementById('change-text-btn').addEventListener('click', () => {
  const introText = document.getElementById('intro-text');
  introText.textContent = 'You clicked the button! The text has changed. 🎉';
});

// Modify CSS Style
document.getElementById('change-color-btn').addEventListener('click', () => {
  const box = document.getElementById('color-box');
  box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
});

// Add/Remove an Element
let elementAdded = false;
document.getElementById('toggle-element-btn').addEventListener('click', () => {
  const targetArea = document.getElementById('toggle-target-area');

  if (!elementAdded) {
    const newPara = document.createElement('p');
    newPara.id = 'dynamic-paragraph';
    newPara.textContent = 'I was added dynamically! 🚀';
    targetArea.appendChild(newPara);
  } else {
    const existingPara = document.getElementById('dynamic-paragraph');
    if (existingPara) {
      targetArea.removeChild(existingPara);
    }
  }

  elementAdded = !elementAdded;
});
