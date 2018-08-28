import 'lib/browser_polyfill.js';

async function toggleExtension(tabId) {
  const currentTab =
    tabId === undefined
      ? (await browser.tabs.query({
          active: true,
          currentWindow: true
        }))[0]
      : await browser.tabs.get(tabId);

  console.log(currentTab);

  if (currentTab) {
    await browser.tabs.executeScript(currentTab.id, {
      file: '/toggle_extension.js',
      runAt: 'document_start',
      matchAboutBlank: true
    });
  }
}

browser.commands.onCommand.addListener(command => {
  switch (command) {
    case 'toggleExtension':
      toggleExtension();
      break;
    default:
      console.error(`Unknown command: '${command}'`);
  }
});
