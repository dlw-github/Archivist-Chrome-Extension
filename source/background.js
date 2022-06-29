chrome.action.onClicked.addListener((tab) => {
  console.log('Current URL: ' + tab.url);
  var url_input = tab.url.split('?')[0]; 
  url_output = "https://archive.is/newest/"+ url_input;
  chrome.tabs.update({'url': url_output}, function(tab) {
  });
});