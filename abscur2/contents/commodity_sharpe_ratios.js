
// JavaScript код для отображения диаграмм коэффициента Шарпа товаров
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа товаров за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1m_commodity_sharpe_ratios.png";
    img.alt = "1m_commodity_sharpe_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Шарпа: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.17, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.12, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 0.11, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 0.02, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 0.01  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа товаров за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1q_commodity_sharpe_ratios.png";
    img.alt = "1q_commodity_sharpe_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Шарпа: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.12, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.07, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 0.03, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 0.01  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа товаров за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1y_commodity_sharpe_ratios.png";
    img.alt = "1y_commodity_sharpe_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Шарпа: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.11, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 0.09, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 0.07, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.06, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 0.03  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа товаров за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/3y_commodity_sharpe_ratios.png";
    img.alt = "3y_commodity_sharpe_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Шарпа: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.09, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 0.04, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.03, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.03, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.02  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа товаров за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/5y_commodity_sharpe_ratios.png";
    img.alt = "5y_commodity_sharpe_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Шарпа: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.06, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 0.05, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.05, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 0.04, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.04  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Шарпа товаров за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/10y_commodity_sharpe_ratios.png";
    img.alt = "10y_commodity_sharpe_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Шарпа: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.06, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 0.03, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.03, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.03, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.02  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);

});
