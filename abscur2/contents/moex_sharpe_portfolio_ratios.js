
// JavaScript код для отображения диаграмм акционных портфелей по коэффициенту Шарпа
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var header = document.createElement("p");
    header.innerHTML = "<strong>За месяц (начало: 2025-02-08)</strong>";
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFKS">Система ао (AFKS)</a> - 70.75%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=MAGN">ММК (MAGN)</a> - 29.25%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За квартал (начало: 2024-12-08)</strong>";
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 23.73%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 23.61%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 19.28%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=NVTK">Новатэк ао (NVTK)</a> - 17.44%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PIKK">ПИК ао (PIKK)</a> - 11.13%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За год (начало: 2024-03-08)</strong>";
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 55.72%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=AFLT">Аэрофлот (AFLT)</a> - 44.28%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За три года (начало: 2022-03-08)</strong>";
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 91.18%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За пять лет (начало: 2020-03-08)</strong>";
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 67.96%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PHOR">ФосАгро ао (PHOR)</a> - 23.99%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За десять лет (начало: 2015-03-08)</strong>";
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
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=BSPB">БСП ао (BSPB)</a> - 44.20%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=PLZL">Полюс (PLZL)</a> - 42.22%, `;
    stockList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=SELG">Селигдар (SELG)</a> - 13.58%, `;
    stockList.innerHTML = stockList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(stockList);

});
