const CountryInfo = function () {
  this.ul = document.querySelector('#country-info');
}

CountryInfo.prototype.render = function (country) {

  // TODO: Render country info
  const ul = document.querySelector('#country-info');
    const li = document.createElement('li');
    li.innerText = `The Country selected is: ${country.name}`;
    ul.appendChild(li);

  console.log(country);


}

CountryInfo.prototype.createListItem = function (label, content) {
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  return li;
}

module.exports = CountryInfo;
