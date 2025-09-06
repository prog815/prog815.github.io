
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=NVTK">Новатэк ао (NVTK)</a> - 12.28%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 6.84%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=FEES">Россети (FEES)</a> - 4.01%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RUAL">РУСАЛ ао (RUAL)</a> - 3.62%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=HYDR">РусГидро (HYDR)</a> - 3.54%  `;
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 23.95%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 19.85%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKM">Ростел -ао (RTKM)</a> - 18.91%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 16.45%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=RTKMP">Ростел -ап (RTKMP)</a> - 13.88%  `;
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 103.35%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 49.43%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=NVTK">Новатэк ао (NVTK)</a> - 41.48%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 41.17%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=LSRG">ЛСР ао (LSRG)</a> - 36.91%  `;
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 192.02%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 110.51%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 79.91%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 71.51%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 56.93%  `;
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 717.78%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 134.49%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 36.31%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 32.20%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=CBOM">МКБ ао (CBOM)</a> - 28.30%  `;
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 992.88%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 843.82%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 689.34%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 455.87%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 302.52%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);

});
