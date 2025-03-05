
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">Российский рубль (RUB)</a> - 8.16%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 4.37%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 3.46%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">Венгерский форинт (HUF)</a> - 3.04%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">Казахстанский тенге (KZT)</a> - 2.74%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">Российский рубль (RUB)</a> - 12.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">Колумбийское песо (COP)</a> - 6.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">Шведская крона (SEK)</a> - 4.61%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">Казахстанский тенге (KZT)</a> - 4.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 3.95%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">Малайзийский ринггит (MYR)</a> - 10.82%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">Тайский бат (THB)</a> - 10.67%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">Чилийское песо (CLP)</a> - 8.25%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">Перуанский новый соль (PEN)</a> - 7.09%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">Южноафриканский рэнд (ZAR)</a> - 6.93%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">Российский рубль (RUB)</a> - 45.98%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">Польский злотый (PLN)</a> - 38.77%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 22.84%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">Перуанский новый соль (PEN)</a> - 21.22%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 21.06%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 34.67%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 30.96%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">Саудовский риял (SAR)</a> - 26.98%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">Дирхам ОАЭ (AED)</a> - 26.81%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">Доллар США (USD)</a> - 26.80%  `;
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
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">Новый израильский шекель (ILS)</a> - 65.76%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">Швейцарский франк (CHF)</a> - 65.14%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">Чешская крона (CZK)</a> - 58.06%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">Сингапурский доллар (SGD)</a> - 54.44%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">Саудовский риял (SAR)</a> - 51.13%  `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
