
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">Перуанский новый соль (PEN)</a> - 0.804, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">Индийская рупия (INR)</a> - 0.698, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">Египетский фунт (EGP)</a> - 0.561, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">Индонезийская рупия (IDR)</a> - 0.538, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PKR">Пакистанская рупия (PKR)</a> - 0.427  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">Перуанский новый соль (PEN)</a> - 0.316, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">Египетский фунт (EGP)</a> - 0.285, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.181, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PKR">Пакистанская рупия (PKR)</a> - 0.175, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">Колумбийское песо (COP)</a> - 0.170  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 0.133, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">Исландская крона (ISK)</a> - 0.131, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 0.116, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">Перуанский новый соль (PEN)</a> - 0.105, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 0.099  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.167, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 0.128, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">Датская крона (DKK)</a> - 0.122, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 0.120, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">Новый израильский шекель (ILS)</a> - 0.118  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.141, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">Новый израильский шекель (ILS)</a> - 0.108, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.097, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">Фунт стерлингов (GBP)</a> - 0.081, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">Кувейтский динар (KWD)</a> - 0.074  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 0.123, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">Новый израильский шекель (ILS)</a> - 0.105, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 0.092, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">Гонконгский доллар (HKD)</a> - 0.079, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">Новый тайваньский доллар (TWD)</a> - 0.069  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
