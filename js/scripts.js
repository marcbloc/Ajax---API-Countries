var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
	url: url + countryName,
	method: 'GET',
	success: showCountriesList
});
}
function showCountriesList(resp) {
	countriesList.empty();
resp.forEach(function(item) {
	$('<h2>').text(item.name).appendTo(countriesList)
	$('<ul>')
	.append($('<li>').text("Capitol: "+ item.capital))
	.append($('<li>').text("Region: "+ item.region))
	.append($('<li>').text("Population: "+ item.population))
	.appendTo(countriesList);
})
}