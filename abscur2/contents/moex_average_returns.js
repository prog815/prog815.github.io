
// JavaScript код для отображения диаграмм средней доходности акций
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг средней доходности акций за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1m_average_returns.png";
    img.alt = "moex_1m_average_returns.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по средней доходности: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=VTBR">ВТБ ао (VTBR)</a> - 1.44%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 0.67%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=TRNFP">Транснф ап (TRNFP)</a> - 0.53%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=GAZP">ГАЗПРОМ ао (GAZP)</a> - 0.48%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=TATNP">Татнфт 3ап (TATNP)</a> - 0.45%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг средней доходности акций за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1q_average_returns.png";
    img.alt = "moex_1q_average_returns.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по средней доходности: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=VTBR">ВТБ ао (VTBR)</a> - 0.67%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=NVTK">Новатэк ао (NVTK)</a> - 0.64%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 0.60%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 0.59%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=GAZP">ГАЗПРОМ ао (GAZP)</a> - 0.49%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг средней доходности акций за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1y_average_returns.png";
    img.alt = "moex_1y_average_returns.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по средней доходности: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 0.23%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 0.19%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.15%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=NVTK">Новатэк ао (NVTK)</a> - 0.10%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 0.09%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг средней доходности акций за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_3y_average_returns.png";
    img.alt = "moex_3y_average_returns.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по средней доходности: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.30%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 0.15%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 0.15%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 0.14%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MOEX">МосБиржа (MOEX)</a> - 0.13%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг средней доходности акций за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_5y_average_returns.png";
    img.alt = "moex_5y_average_returns.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по средней доходности: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.23%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 0.11%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MTLR">Мечел ао (MTLR)</a> - 0.11%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MTLRP">Мечел ап (MTLRP)</a> - 0.11%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 0.09%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг средней доходности акций за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_10y_average_returns.png";
    img.alt = "moex_10y_average_returns.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по средней доходности: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 0.14%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.12%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 0.12%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 0.10%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MTLRP">Мечел ап (MTLRP)</a> - 0.09%  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);

});
