/* global chrome */

let storedNames = [];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Background script received message:', message);

  if (message.type === 'NAMES_FOUND') {
    console.log('Storing names:', message.payload);
    storedNames = message.payload;
    sendResponse({ success: true });
  }

  if (message.type === 'GET_NAMES') {
    console.log('Sending stored names:', storedNames);
    sendResponse({ names: storedNames });
  }

  return true; // for async sendResponse
});