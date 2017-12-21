const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {
  console.log(country);
  
}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
