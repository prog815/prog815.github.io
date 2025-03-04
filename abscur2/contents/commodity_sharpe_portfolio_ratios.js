
// JavaScript код для отображения диаграмм товарных портфелей по коэффициенту Шарпа
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var header = document.createElement("p");
    header.innerHTML = "<strong>За месяц (начало: 2025-02-05)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_risk_return_1m.png";
    img.alt = "commodity_sharp_risk_return_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_value_1m.png";
    img.alt = "commodity_sharp_value_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_parts_1m.png";
    img.alt = "commodity_sharp_parts_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 68.36%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 22.25%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За квартал (начало: 2024-12-05)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_risk_return_1q.png";
    img.alt = "commodity_sharp_risk_return_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_value_1q.png";
    img.alt = "commodity_sharp_value_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_parts_1q.png";
    img.alt = "commodity_sharp_parts_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 66.18%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 16.62%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 6.59%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 6.57%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За год (начало: 2024-03-05)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_risk_return_1y.png";
    img.alt = "commodity_sharp_risk_return_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_value_1y.png";
    img.alt = "commodity_sharp_value_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_parts_1y.png";
    img.alt = "commodity_sharp_parts_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 41.00%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 34.15%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 11.26%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 5.69%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За три года (начало: 2022-03-05)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_risk_return_3y.png";
    img.alt = "commodity_sharp_risk_return_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_value_3y.png";
    img.alt = "commodity_sharp_value_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_parts_3y.png";
    img.alt = "commodity_sharp_parts_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 83.06%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 13.87%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За пять лет (начало: 2020-03-05)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_risk_return_5y.png";
    img.alt = "commodity_sharp_risk_return_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_value_5y.png";
    img.alt = "commodity_sharp_value_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_parts_5y.png";
    img.alt = "commodity_sharp_parts_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 54.09%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 14.12%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 10.02%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 8.70%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 6.23%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За десять лет (начало: 2015-03-05)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_risk_return_10y.png";
    img.alt = "commodity_sharp_risk_return_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_value_10y.png";
    img.alt = "commodity_sharp_value_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/commodity_sharp_parts_10y.png";
    img.alt = "commodity_sharp_parts_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "<strong>Топ товары по долям в портфеле:</strong> "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 42.59%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 31.53%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 7.90%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 7.51%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 3.45%, `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);

});
