
// JavaScript код для отображения диаграмм стабильности валют
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг стабильности валют за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_stability_1m.png";
    img.alt = "currency_stability_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ стабильные валюты: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CNY">Китайский юань (CNY)</a> - 0.16%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.18%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">Малайзийский ринггит (MYR)</a> - 0.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.21%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг стабильности валют за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_stability_1q.png";
    img.alt = "currency_stability_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ стабильные валюты: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.17%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">Датская крона (DKK)</a> - 0.37%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.40%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">Румынский лей (RON)</a> - 0.41%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг стабильности валют за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_stability_1y.png";
    img.alt = "currency_stability_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ стабильные валюты: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.47%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">Канадский доллар (CAD)</a> - 0.96%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">Малайзийский ринггит (MYR)</a> - 0.98%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">Тайский бат (THB)</a> - 1.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">Филиппинское песо (PHP)</a> - 1.25%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг стабильности валют за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_stability_3y.png";
    img.alt = "currency_stability_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ стабильные валюты: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">Вьетнамский донг (VND)</a> - 2.14%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">Индонезийская рупия (IDR)</a> - 2.32%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">Южнокорейская вона (KRW)</a> - 2.43%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">Канадский доллар (CAD)</a> - 2.51%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 2.53%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг стабильности валют за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_stability_5y.png";
    img.alt = "currency_stability_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ стабильные валюты: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=JPY">Японская иена (JPY)</a> - 2.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">Южнокорейская вона (KRW)</a> - 2.49%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">Норвежская крона (NOK)</a> - 2.90%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NZD">Новозеландский доллар (NZD)</a> - 2.91%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">Филиппинское песо (PHP)</a> - 3.00%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг стабильности валют за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_stability_10y.png";
    img.alt = "currency_stability_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ стабильные валюты: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 3.17%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">Норвежская крона (NOK)</a> - 4.24%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">Венгерский форинт (HUF)</a> - 4.86%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">Южнокорейская вона (KRW)</a> - 5.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">Чилийское песо (CLP)</a> - 5.17%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
