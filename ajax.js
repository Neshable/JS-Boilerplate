var ourRequest = new XMLHttpRequest();

ourRequest.open('GET', 'your-url');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
  } else {
    console.log("Connected, but errors occurred.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();
