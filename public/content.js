/* global chrome */

// Run once DOM is idle
function processNameElements() {
  const elements = document.querySelectorAll('.StyledBox-core-12_18_1__sc-fgsy0p-0.dnMafh > p');
  const names = [];

  elements.forEach((p) => {
    // Extract the text inside the <p>
    const name = p.textContent.trim();
    names.push(name);

    // Create and insert inline SVG icon
    const icon = document.createElement('span');
    icon.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" fill="black"><path d="M297 154.9h20.1c3.6 0 5.3 1.8 5.3 5.3V351.7c0 3.6-1.8 5.3-5.3 5.3H297c-3.6 0-5.3-1.8-5.3-5.3V272.2c0-2.1-1-3.1-3.1-3.1H222.2c-2.5 0-3.8 1-3.8 3.1v79.5c0 3.6-1.8 5.3-5.3 5.3H193.3c-3.6 0-5.3-1.8-5.3-5.3V160.3c0-3.6 1.8-5.3 5.3-5.3h19.8c3.6 0 5.3 1.8 5.3 5.3v78.6c0 2.1 1.3 3.1 3.8 3.1h66.3c2.1 0 3.1-1.1 3.1-3.1V160.3c0-2.4 .8-3.9 2.3-4.7c.8-.4 1.8-.6 3-.6zM0 256L256 0 512 256 256 512 0 256zM256 36.6L36.6 256 256 475.4 475.4 256 256 36.6z"/></svg>
      `;
    icon.setAttribute('data-icon', 'true');
    icon.style.marginLeft = '6px';
    icon.style.display = 'inline-flex';

    p.appendChild(icon);
  });

  // Check if background script is ready before sending message
  if (chrome.runtime?.id) {
    // Send message to background script
    chrome.runtime.sendMessage({ type: 'NAMES_FOUND', payload: names }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Error sending message:', chrome.runtime.lastError);
      } else {
        console.log('Names sent successfully:', response);
      }
    });
  } else {
    console.error('Extension runtime not ready');
  }
}

// Wait for extension to be ready before processing
function initialize() {
  if (chrome.runtime?.id) {
    // Run after page idle and with a fallback timer
    requestIdleCallback(processNameElements);
    setTimeout(processNameElements, 2000);
  } else {
    // Try again in 100ms if not ready
    setTimeout(initialize, 100);
  }
}

initialize();
