/*
initalize start variable that will attempt to execute
the beastify.js file when the popup is clicked open
*/

const start = browser.tabs.executeScript({file: '/content_scripts/beastify.js'});

/*
run start and if script executes start event listener
for button clicks otherwise report error occured
*/

start.then(listenForBtn, onError);
