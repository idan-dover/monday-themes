const classes = ['light-app-theme', 'dark-app-theme', 'black-app-theme'];

document.getElementById('light-theme').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'changeTheme',
      classes: classes,
      theme: 'light',
    });
  });
});

document.getElementById('dark-theme').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'changeTheme',
      classes: classes,
      theme: 'dark',
    });
  });
});

document.getElementById('night-theme').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'changeTheme',
      classes: classes,
      theme: 'night',
    });
  });
});

document.getElementById('coffee-theme').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'changeTheme',
      classes: classes,
      theme: 'coffee',
    });
  });
});

document.getElementById('forest-theme').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: 'changeTheme',
      classes: classes,
      theme: 'forest',
    });
  });
});
