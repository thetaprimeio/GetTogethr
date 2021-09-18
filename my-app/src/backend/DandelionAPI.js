var dandelion = require("node-dandelion");
dandelion.configure({
  "app_key":"66d73cb67dcc43f59aa5681ac3cbc62c",
  "app_id":"66d73cb67dcc43f59aa5681ac3cbc62c"
});

// TXT SIM: Check for the similitudes between the two strings.
dandelion.txtSim(
  {
    "string1": {
      "type":"url",
      "value":"https://en.wikipedia.org/wiki/Batman"
    },
    "string2":{
      "type":"url",
      "value":"https://en.wikipedia.org/wiki/Spider-Man"
    },
    "lang":"en",
    "bow":"never"
  },
  function(results){
      console.log(results)
  }
);