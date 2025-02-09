
// JavaScript код для отображения диаграмм акционных портфелей по коэффициенту Шарпа
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var header = document.createElement("p");
    header.innerHTML = "<strong>За месяц (начало: 2025-01-10)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_risk_return_1m.png";
    img.alt = "moex_sharpe_risk_return_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_value_1m.png";
    img.alt = "moex_sharpe_value_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_parts_1m.png";
    img.alt = "moex_sharpe_parts_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "<strong>Топ акции по долям в портфеле:</strong> "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 34.66%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=TATN">Татнфт 3ао (TATN)</a> - 26.85%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 26.43%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=GAZP">ГАЗПРОМ ао (GAZP)</a> - 6.42%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За квартал (начало: 2024-11-10)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_risk_return_1q.png";
    img.alt = "moex_sharpe_risk_return_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_value_1q.png";
    img.alt = "moex_sharpe_value_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_parts_1q.png";
    img.alt = "moex_sharpe_parts_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "<strong>Топ акции по долям в портфеле:</strong> "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 50.50%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 33.75%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 15.75%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За год (начало: 2024-02-10)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_risk_return_1y.png";
    img.alt = "moex_sharpe_risk_return_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_value_1y.png";
    img.alt = "moex_sharpe_value_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_parts_1y.png";
    img.alt = "moex_sharpe_parts_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "<strong>Топ акции по долям в портфеле:</strong> "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 69.66%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 30.34%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За три года (начало: 2022-02-10)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_risk_return_3y.png";
    img.alt = "moex_sharpe_risk_return_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_value_3y.png";
    img.alt = "moex_sharpe_value_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_parts_3y.png";
    img.alt = "moex_sharpe_parts_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "<strong>Топ акции по долям в портфеле:</strong> "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 96.56%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За пять лет (начало: 2020-02-10)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_risk_return_5y.png";
    img.alt = "moex_sharpe_risk_return_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_value_5y.png";
    img.alt = "moex_sharpe_value_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_parts_5y.png";
    img.alt = "moex_sharpe_parts_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "<strong>Топ акции по долям в портфеле:</strong> "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 72.29%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 20.92%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За десять лет (начало: 2015-02-10)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_risk_return_10y.png";
    img.alt = "moex_sharpe_risk_return_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_value_10y.png";
    img.alt = "moex_sharpe_value_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/moex_sharpe_parts_10y.png";
    img.alt = "moex_sharpe_parts_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var stockList = document.createElement("p");
    stockList.innerHTML = "<strong>Топ акции по долям в портфеле:</strong> "; 
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 49.73%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 36.83%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 13.45%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);

});
