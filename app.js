var requestData = function() {
  var url = "https://api.punkapi.com/v2/beers"
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', function(){
    var beers = JSON.parse(this.responseText)
    console.log(beers)
    render(beers);
  });
  request.send();
}

var render = function(beers){
  populateSelect(beers);
  for (var beer of beers){
    displayBeerName(beer.name);
    displayBeerPicture(beer.image_url);
    displayMalts(beer.ingredients["malt"]);
    displayHops(beer.ingredients["hops"]);
    displayYeast(beer.ingredients["yeast"]);
  }

  var select = document.getElementById('beer-select');
  select.addEventListener('change', function(){
    beerObject = JSON.parse(this.value);
    console.log(beerObject.image_url);
  })
}

var displayBeerName = function(beerName){
  var beerSection = document.getElementById("beers");
  var beerNameItem = document.createElement("h3");
  beerNameItem.classList.add("beer-name");
  beerNameItem.textContent = beerName;
  beerSection.appendChild(beerNameItem);
}

var displayBeerPicture = function(beerPictureUrl){
  var beerSection = document.getElementById("beers");
  var beerPictureElement = document.createElement('img');
  beerPictureElement.classList.add("beer-picture");
  beerPictureElement.src = beerPictureUrl;
  beerSection.appendChild(beerPictureElement);
}

var displayMalts = function(malts){
  var beerSection = document.getElementById("beers");
  var maltTitle = document.createElement("h4");
  maltTitle.textContent = "malts:"
  maltTitle.classList.add("malts-title")
  beerSection.appendChild(maltTitle);
  for (var malt of malts){
    var maltElement = document.createElement("p");
    maltElement.classList.add("malt");
    maltElement.textContent = malt.name;
    beerSection.appendChild(maltElement);
  }
}

var displayHops = function(hops){
  var beerSection = document.getElementById("beers");
  var hopsTitle = document.createElement("h4");
  hopsTitle.textContent = "hops:"
  hopsTitle.classList.add("hops-title")
  beerSection.appendChild(hopsTitle);
  for (var hop of hops){
    var hopElement = document.createElement("p");
    hopElement.classList.add("hop");
    hopElement.textContent = hop.name;
    beerSection.appendChild(hopElement);
  }
}

var displayYeast = function(yeast){
  var beerSection = document.getElementById("beers");
  var yeastTitle = document.createElement("h4");
  yeastTitle.textContent = "yeast:"
  yeastTitle.classList.add("yeast-title")
  beerSection.appendChild(yeastTitle);
  var yeastElement = document.createElement("p");
  yeastElement.classList.add("yeast");
  yeastElement.textContent = yeast  ;
  beerSection.appendChild(yeastElement);
}

var populateSelect = function(beers){
  var select = document.getElementById('beer-select')
  for (var beer of beers){
    var optionItem = document.createElement("option");
    optionItem.value = JSON.stringify(beer);
    console.log(optionItem.value);
    optionItem.textContent = beer.name;
    select.appendChild(optionItem);

  }
}


window.addEventListener("load", requestData);
