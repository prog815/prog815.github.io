
// JavaScript код для отображения диаграмм товарных портфелей по коэффициенту Сортино
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var header = document.createElement("p");
    header.innerHTML = "<strong>За месяц (начало: 2025-06-12)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_risk_doh_1m.png";
    img.alt = "commodity_portfolio_sortino_risk_doh_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_value_1m.png";
    img.alt = "commodity_portfolio_sortino_value_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_parts_1m.png";
    img.alt = "commodity_portfolio_sortino_parts_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 48.34%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 42.24%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За квартал (начало: 2025-04-12)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_risk_doh_1q.png";
    img.alt = "commodity_portfolio_sortino_risk_doh_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_value_1q.png";
    img.alt = "commodity_portfolio_sortino_value_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_parts_1q.png";
    img.alt = "commodity_portfolio_sortino_parts_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 52.10%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 47.89%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За год (начало: 2024-07-12)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_risk_doh_1y.png";
    img.alt = "commodity_portfolio_sortino_risk_doh_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_value_1y.png";
    img.alt = "commodity_portfolio_sortino_value_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_parts_1y.png";
    img.alt = "commodity_portfolio_sortino_parts_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 19.73%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 17.84%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 15.26%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 11.97%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 11.05%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=CL=F">Нефть WTI (CL=F)</a> - 9.30%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 4.17%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 3.08%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За три года (начало: 2022-07-12)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_risk_doh_3y.png";
    img.alt = "commodity_portfolio_sortino_risk_doh_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_value_3y.png";
    img.alt = "commodity_portfolio_sortino_value_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_parts_3y.png";
    img.alt = "commodity_portfolio_sortino_parts_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 19.13%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 18.09%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 12.93%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 11.67%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 10.42%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 6.42%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 5.63%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 5.25%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 5.23%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За пять лет (начало: 2020-07-12)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_risk_doh_5y.png";
    img.alt = "commodity_portfolio_sortino_risk_doh_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_value_5y.png";
    img.alt = "commodity_portfolio_sortino_value_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_parts_5y.png";
    img.alt = "commodity_portfolio_sortino_parts_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 19.75%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 16.67%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 15.10%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 14.40%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 13.04%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 12.00%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За десять лет (начало: 2015-07-12)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_risk_doh_10y.png";
    img.alt = "commodity_portfolio_sortino_risk_doh_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_value_10y.png";
    img.alt = "commodity_portfolio_sortino_value_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_portfolio_sortino_parts_10y.png";
    img.alt = "commodity_portfolio_sortino_parts_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 46.85%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 32.98%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 19.98%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);

});
