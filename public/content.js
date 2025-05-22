/* global chrome */

// Run once DOM is idle
function processNameElements() {
    const elements = document.querySelectorAll('.StyledBox-core-12_18_1__sc-fgsy0p-0.dnMafh > p');
    const names = [];
  
    elements.forEach(p => {
  
      // Extract the text inside the <p>
      const name = p.textContent.trim();
      names.push(name);
  
      // Create and insert inline SVG icon
      const icon = document.createElement('span');
      icon.innerHTML = `
        <svg width="16" height="16" fill="black" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="6"/>
        </svg>
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
  