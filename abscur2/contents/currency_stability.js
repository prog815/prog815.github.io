
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">Канадский доллар (CAD)</a> - 0.32%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.39%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">Филиппинское песо (PHP)</a> - 0.57%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 0.60%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">Тайский бат (THB)</a> - 0.71%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">Филиппинское песо (PHP)</a> - 0.48%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 0.68%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">Малайзийский ринггит (MYR)</a> - 0.72%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.74%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">Канадский доллар (CAD)</a> - 1.06%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">Новый тайваньский доллар (TWD)</a> - 1.16%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 1.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CNY">Китайский юань (CNY)</a> - 1.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 1.24%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">Вьетнамский донг (VND)</a> - 1.96%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">Новый тайваньский доллар (TWD)</a> - 1.99%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">Индонезийская рупия (IDR)</a> - 2.37%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 2.58%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">Канадский доллар (CAD)</a> - 2.58%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">Южнокорейская вона (KRW)</a> - 2.71%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">Филиппинское песо (PHP)</a> - 2.90%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">Норвежская крона (NOK)</a> - 3.24%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 3.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">Новый тайваньский доллар (TWD)</a> - 3.54%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 3.22%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">Норвежская крона (NOK)</a> - 3.78%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">Венгерский форинт (HUF)</a> - 4.80%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">Чилийское песо (CLP)</a> - 5.17%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 5.42%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
