var rule = {
  conditions: [
    new chrome.declarativeWebRequest.RequestMatcher({
      originAndPathMatches: /google*/
     	resourceType: ["script"]
 	})
  ],
  actions: [
    new chrome.declarativeWebRequest.CancelRequest()
  ]
 };


function report(details) {
  if (chrome.extension.lastError) {
    console.log(chrome.extension.lastError.message);
  } else if (details.length < 1) {
    console.log('Error, but no message.');
  } else {
    console.log('All OK.');
  }
}
console.log("hello");
console.log("hello");
console.log(rule);

chrome.declarativeWebRequest.onRequest.addRules([rule], report);

chrome.runtime.onInstalled.addListener(function(details) {
  console.log('Adding rules.');
  chrome.declarativeWebRequest.onRequest.addRules([rule], report);
});
