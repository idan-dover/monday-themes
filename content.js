chrome.runtime.onMessage.addListener((message) => {
  switch (message.action) {
    case 'changeTheme':
      const { classes, theme } = message;
      classes.forEach((cls) => {
        const elements = document.querySelectorAll(`.${cls}`);
        elements.forEach((element) => {
          // element.classList.remove(cls);
          // element.classList.add(theme);
          Object.entries(extensionThemes[theme]).forEach(
            ([property, color]) => {
              element.style.setProperty(property, color);
            }
          );
        });
      });
    default:
      throw new Error('Monday change theme not a supported action');
  }
});
