
// JavaScript код для отображения диаграмм коэффициента Шарпа валют
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа валют за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharpe_1m.png";
    img.alt = "currency_sharpe_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Шарпа: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">Российский рубль (RUB)</a> - 0.330, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 0.281, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=JPY">Японская иена (JPY)</a> - 0.263, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">Чилийское песо (CLP)</a> - 0.232, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">Бразильский реал (BRL)</a> - 0.200  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа валют за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharpe_1q.png";
    img.alt = "currency_sharpe_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Шарпа: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">Колумбийское песо (COP)</a> - 0.196, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 0.143, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">Российский рубль (RUB)</a> - 0.131, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 0.102, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">Перуанский новый соль (PEN)</a> - 0.098  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа валют за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharpe_1y.png";
    img.alt = "currency_sharpe_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Шарпа: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">Малайзийский ринггит (MYR)</a> - 0.117, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.101, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">Тайский бат (THB)</a> - 0.099, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">Перуанский новый соль (PEN)</a> - 0.072, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.066  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа валют за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharpe_3y.png";
    img.alt = "currency_sharpe_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Шарпа: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.118, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">Катарский риал (QAR)</a> - 0.082, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">Доллар США (USD)</a> - 0.082, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">Дирхам ОАЭ (AED)</a> - 0.082, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">Саудовский риял (SAR)</a> - 0.082  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа валют за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharpe_5y.png";
    img.alt = "currency_sharpe_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Шарпа: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.105, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.064, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.062, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">Саудовский риял (SAR)</a> - 0.061, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">Доллар США (USD)</a> - 0.061  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа валют за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharpe_10y.png";
    img.alt = "currency_sharpe_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по коэффициенту Шарпа: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.076, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">Доллар США (USD)</a> - 0.057, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">Дирхам ОАЭ (AED)</a> - 0.057, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">Саудовский риял (SAR)</a> - 0.057, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.052  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
