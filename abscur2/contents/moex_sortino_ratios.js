
// JavaScript код для отображения диаграмм коэффициента Сортино акций
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино акций за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1m_sortino_ratios.png";
    img.alt = "moex_1m_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по коэффициенту Сортино: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=TRNFP">Транснф ап (TRNFP)</a> - 0.32, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 0.21, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MTSS">МТС-ао (MTSS)</a> - 0.10, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=TGKA">ТГК-1 (TGKA)</a> - 0.10, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 0.05  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино акций за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1q_sortino_ratios.png";
    img.alt = "moex_1q_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по коэффициенту Сортино: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=TRNFP">Транснф ап (TRNFP)</a> - 0.23, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=VTBR">ВТБ ао (VTBR)</a> - 0.10, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 0.05, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 0.05, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MTSS">МТС-ао (MTSS)</a> - 0.00  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино акций за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_1y_sortino_ratios.png";
    img.alt = "moex_1y_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по коэффициенту Сортино: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 0.14, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 0.07, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 0.06, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=GAZP">ГАЗПРОМ ао (GAZP)</a> - 0.05, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.04  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино акций за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_3y_sortino_ratios.png";
    img.alt = "moex_3y_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по коэффициенту Сортино: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.13, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 0.09, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 0.08, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 0.07, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MOEX">МосБиржа (MOEX)</a> - 0.07  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино акций за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_5y_sortino_ratios.png";
    img.alt = "moex_5y_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по коэффициенту Сортино: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.11, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 0.06, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 0.05, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MOEX">МосБиржа (MOEX)</a> - 0.04, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 0.04  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино акций за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_10y_sortino_ratios.png";
    img.alt = "moex_10y_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "Топ акции по коэффициенту Сортино: "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 0.08, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 0.07, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 0.07, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBERP">Сбербанк-п (SBERP)</a> - 0.06, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SBER">Сбербанк (SBER)</a> - 0.05  `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);

});
