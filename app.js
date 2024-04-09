var importedCountries = document.getElementById('countries');

//console.log(countries);
var sameCountries = [];
var htmlCountry = '';

function findCountriesName(countryName) {
    for (var i in countries) {
        var country = countries[i];
        const flagsUrl = country.flags?.svg;
        if (country.name.common === countryName) {
            
            htmlCountry += `<tr>
            <td>${ country.population }</td>
            <td>${ country.area }</td>
            <td>${ country.region }</td>
            <td class="flagsurl" style="background-image: url(${flagsUrl})"></td>
            </tr>`;
            return country;
        }
    }
    return null;
}
sameCountries = [];

function findCountriesInSameRegion(country) {
    var countriesInSameRegion = [];
    for (var i in countries) {
        var otherCountry = countries[i];
        const flagsUrl = otherCountry.flags?.svg;
        if (otherCountry.region === country.region && otherCountry !== country) {
            countriesInSameRegion.push(otherCountry);
            
            sameCountries += `<tr>
            <td>${ otherCountry.name.common }</td>
            <td>${ otherCountry.area }</td>
            <td>${ otherCountry.region }</td>
            <td class="flagsurl" style="background-image: url(${flagsUrl})"></td>
            </tr>`;
        }
    }
    return countriesInSameRegion;
}

var selectedCountryName = prompt("Enter Country Name");

var selectedCountry = findCountriesName(selectedCountryName);
var countriesInSameRegion = findCountriesInSameRegion(selectedCountry);


document.getElementById('selected-country-title').innerHTML = selectedCountryName.toUpperCase();
document.querySelector("#selected-country-data tbody").innerHTML = htmlCountry;
document.getElementById('same-region-title').innerHTML = "Also in " + selectedCountry.region + ":";
document.querySelector("#same-region-countries tbody").innerHTML = sameCountries;



























/**
 * сразу по загрузке страницы попросит ввести название страны.
 * далее в selectedCountryName и будет храниться это название
 * при этом, вся таблица (массив Array) стран хранится в переменной countries
 *
 * ДЗ:
 * необходимо:
 * 1. найти данные страны по введенному названию страны (необходимую страну из массива countries по selectedCountryName).
 * полученный объект выдать в консоль
 * 2. также из полученного объекта составить верстку с использованием данных из предыдущей домашки
 * (название страны, population, area, region, flag)
 * верстка может быть в формате таблицы, div, ul или любой другой удобный формат.
 * в html файле я добавил div с id="selected-country-data", можно использовать его для
 * document.getElementById().
 *
 * 2. в index.html есть h2 c id="selected-country-title".
 * там нужно вставить текст: Selected Country <название, которое ввел пользователь через prompt>
 * (например, текст будет "Selected Country: Ukraine")
 *
 * 3. найти из countries информацию по всем странам в этом же регионе
 * (поле region у них будет такое же, как и в уже выбранной стране)
 * сформировать из этих данных массив и отобразить в таблице
 * для этого я создал в index.html таблицу с tbody id="same-region-countries", можно использовать его.
 *
 * 4. схоже с пунктом #2. в элемент id="same-region-title" нужно вставить текст
 * Also in <тут название региона>:
 * (например, Also in Europe:)
 *
 *  5. поиск страны должен быть гибким.
 *  если пользователь введет название страны: Ukraine, UKRAINE, ukraine, uKrAiNe - такая страна должна успешно найтись
 *  если пользователь ввел неправильное или неполное название -
 *  показываем сообщение о том, что такая страна не найдена, в консоль.
 */