
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 0.888, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">Фунт стерлингов (GBP)</a> - 0.767, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">Румынский лей (RON)</a> - 0.690, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">Датская крона (DKK)</a> - 0.677, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.646  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 0.353, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">Венгерский форинт (HUF)</a> - 0.209, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">Колумбийское песо (COP)</a> - 0.191, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 0.191, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">Чилийское песо (CLP)</a> - 0.149  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">Малайзийский ринггит (MYR)</a> - 0.122, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">Тайский бат (THB)</a> - 0.109, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.101, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.078, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 0.064  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.214, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.106, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.102, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.096, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">Катарский риал (QAR)</a> - 0.095  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.177, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.081, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">Доллар США (USD)</a> - 0.081, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">Дирхам ОАЭ (AED)</a> - 0.081, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.081  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.128, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.075, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">Доллар США (USD)</a> - 0.075, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">Дирхам ОАЭ (AED)</a> - 0.075, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">Саудовский риял (SAR)</a> - 0.075  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
