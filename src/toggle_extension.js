const newRoot = document.createElement('div');
newRoot.id = 'emoji-lookup-root';

// create iframe
const iframe = document.createElement('iframe');
iframe.id = 'emoji-lookup';
iframe.src = chrome.runtime.getURL('popup.html');
iframe.style = `z-index: 2147483647;
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
border-width: 0;
pointer-events: all;
}`;
iframe.frameBorder = 0;
// mount to DOM
newRoot.appendChild(iframe);
document.documentElement.appendChild(newRoot);
