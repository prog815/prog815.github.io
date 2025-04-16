
// JavaScript код для отображения диаграмм коэффициента Сортино валют
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино валют за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sortino_1m.png";
    img.alt = "currency_sortino_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Сортино: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">Канадский доллар (CAD)</a> - 0.610, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 0.570, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.569, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.518, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">Исландская крона (ISK)</a> - 0.515  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино валют за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sortino_1q.png";
    img.alt = "currency_sortino_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Сортино: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 0.462, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.410, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 0.409, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">Румынский лей (RON)</a> - 0.407, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">Датская крона (DKK)</a> - 0.406  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино валют за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sortino_1y.png";
    img.alt = "currency_sortino_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Сортино: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">Исландская крона (ISK)</a> - 0.154, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.149, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 0.149, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.137, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">Датская крона (DKK)</a> - 0.135  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино валют за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sortino_3y.png";
    img.alt = "currency_sortino_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Сортино: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.252, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.151, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">Датская крона (DKK)</a> - 0.134, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.134, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.112  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино валют за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sortino_5y.png";
    img.alt = "currency_sortino_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Сортино: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.186, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.105, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">Датская крона (DKK)</a> - 0.086, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.084, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 0.081  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино валют за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sortino_10y.png";
    img.alt = "currency_sortino_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Сортино: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.138, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.085, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.084, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">Доллар США (USD)</a> - 0.083, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">Дирхам ОАЭ (AED)</a> - 0.083  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
