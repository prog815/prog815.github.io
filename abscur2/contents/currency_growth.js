
// JavaScript код для отображения диаграмм роста валют
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста валют за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_growth_1m.png";
    img.alt = "currency_growth_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по росту: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">Новый израильский шекель (ILS)</a> - 3.69%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">Исландская крона (ISK)</a> - 3.06%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 2.79%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">Венгерский форинт (HUF)</a> - 2.78%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 2.71%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста валют за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_growth_1q.png";
    img.alt = "currency_growth_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по росту: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">Новый тайваньский доллар (TWD)</a> - 8.88%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">Новый израильский шекель (ILS)</a> - 8.14%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">Южноафриканский рэнд (ZAR)</a> - 6.54%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">Мексиканское песо (MXN)</a> - 6.16%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 5.47%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста валют за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_growth_1y.png";
    img.alt = "currency_growth_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по росту: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">Исландская крона (ISK)</a> - 10.98%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 10.26%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">Тайский бат (THB)</a> - 10.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">Новый тайваньский доллар (TWD)</a> - 9.53%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">Малайзийский ринггит (MYR)</a> - 8.90%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста валют за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_growth_3y.png";
    img.alt = "currency_growth_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по росту: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 41.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 32.61%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">Венгерский форинт (HUF)</a> - 26.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 25.99%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">Евро (EUR)</a> - 25.37%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста валют за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_growth_5y.png";
    img.alt = "currency_growth_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по росту: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">Мексиканское песо (MXN)</a> - 45.05%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 40.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">Исландская крона (ISK)</a> - 36.11%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 34.08%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 30.45%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста валют за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_growth_10y.png";
    img.alt = "currency_growth_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "Топ валют по росту: "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 69.88%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 67.81%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">Новый израильский шекель (ILS)</a> - 61.69%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">Исландская крона (ISK)</a> - 57.39%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">Новый тайваньский доллар (TWD)</a> - 53.19%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
