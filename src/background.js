// import 'lib/browser_polyfill.js';

// async function toggleExtension(tabId) {
//   const currentTab =
//     tabId === undefined
//       ? (await browser.tabs.query({
//           active: true,
//           currentWindow: true
//         }))[0]
//       : await browser.tabs.get(tabId);

//   if (currentTab) {
//     await browser.tabs.executeScript(currentTab.id, {
//       file: '/toggle_extension.js',
//       runAt: 'document_start',
//       matchAboutBlank: true
//     });
//   }
// }

// async function closeSaka(tab) {
//   if (tab) {
//     if (tab.url === browser.runtime.getURL('popup.html')) {
//       await browser.tabs.remove(tab.id);
//     } else {
//       await browser.tabs.executeScript(tab.id, {
//         file: '/toggle_extension.js',
//         runAt: 'document_start',
//         matchAboutBlank: true
//       });
//     }
//   }
// }

// browser.browserAction.onClicked.addListener(() => {
//   browser.extension.getBackgroundPage().console.log('Click: ');
//   toggleExtension();
// });

// browser.commands.onCommand.addListener(command => {
//   browser.extension.getBackgroundPage().console.log('Command: ', command);
//   switch (command) {
//     case 'toggleExtension':
//       toggleExtension();
//       break;
//     default:
//       console.error(`Unknown command: '${command}'`);
//   }
// });

// browser.runtime.onMessage.addListener(async (message, sender) => {
//   browser.extension.getBackgroundPage().console.log('onMessage: ', message);
//   switch (message.key) {
//     case 'emojiSelection':
//       console.log('Got the message in BG');
//       browser.runtime.sendMessage({ greeting: 'greeting from bg' });
//       break;
//     default:
//       console.error(`Unknown message: '${message}'`);
//   }
// });

// browser.contextMenus.create({
//   title: 'emoji-lookup',
//   contexts: ['all'],
//   onclick: () => toggleExtension()
// });
