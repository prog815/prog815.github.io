
// JavaScript код для отображения диаграмм товаров
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста товаров за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1m_commodity_up_down.png";
    img.alt = "1m_commodity_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "Топ товары по росту: "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 33.20%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 7.74%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 7.72%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 4.04%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 2.84%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста товаров за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1q_commodity_up_down.png";
    img.alt = "1q_commodity_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "Топ товары по росту: "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 21.61%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 11.61%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 9.73%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 6.48%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 5.49%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста товаров за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1y_commodity_up_down.png";
    img.alt = "1y_commodity_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "Топ товары по росту: "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 61.37%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 39.35%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 23.98%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 19.06%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 16.00%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста товаров за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/3y_commodity_up_down.png";
    img.alt = "3y_commodity_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "Топ товары по росту: "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 164.86%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 122.23%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 109.43%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 82.14%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 71.09%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста товаров за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/5y_commodity_up_down.png";
    img.alt = "5y_commodity_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "Топ товары по росту: "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 174.15%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 170.48%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 161.22%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 75.57%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 69.55%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг роста товаров за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/10y_commodity_up_down.png";
    img.alt = "10y_commodity_up_down.png";
    img.style.width = "100%";
    container.appendChild(img);
    var commodityList = document.createElement("p");
    commodityList.innerHTML = "Топ товары по росту: "; 
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 311.20%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 297.35%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 291.62%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 211.25%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 177.06%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);

});
