
// JavaScript код для отображения диаграмм акций
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста акций за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1m_stock_up_down.png";
    img.alt = "moex_1m_stock_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по росту: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKMP">Ростел -ап (RTKMP)</a> - 23.78%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=GMKN">ГМКНорНик (GMKN)</a> - 19.95%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 16.29%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 16.12%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKM">Ростел -ао (RTKM)</a> - 14.37%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста акций за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1q_stock_up_down.png";
    img.alt = "moex_1q_stock_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по росту: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKMP">Ростел -ап (RTKMP)</a> - 35.65%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 20.93%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKM">Ростел -ао (RTKM)</a> - 18.16%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 17.76%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 16.34%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста акций за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1y_stock_up_down.png";
    img.alt = "moex_1y_stock_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по росту: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKMP">Ростел -ап (RTKMP)</a> - 35.65%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 20.93%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKM">Ростел -ао (RTKM)</a> - 18.16%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 17.76%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 16.34%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста акций за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_3y_stock_up_down.png";
    img.alt = "moex_3y_stock_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по росту: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKMP">Ростел -ап (RTKMP)</a> - 35.65%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 20.93%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKM">Ростел -ао (RTKM)</a> - 18.16%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 17.76%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 16.34%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста акций за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_5y_stock_up_down.png";
    img.alt = "moex_5y_stock_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по росту: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKMP">Ростел -ап (RTKMP)</a> - 35.65%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 20.93%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKM">Ростел -ао (RTKM)</a> - 18.16%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 17.76%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 16.34%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста акций за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_10y_stock_up_down.png";
    img.alt = "moex_10y_stock_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по росту: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKMP">Ростел -ап (RTKMP)</a> - 35.65%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 20.93%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKM">Ростел -ао (RTKM)</a> - 18.16%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 17.76%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 16.34%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);

});
