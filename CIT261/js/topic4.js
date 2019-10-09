var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'file:///Users/heatherkleinman/Desktop/heathercostello.github.io/CIT261/js/topic4.json');
ourRequest.onload = function() {
    console.log(ourRequest.responseText);
};
ourRequest.send();