
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 10.04%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.56%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.81%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 13.84%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 12.32%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 87.18%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 58.53%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 41.27%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 33.99%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 22.94%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 200.59%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 128.09%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 82.85%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 81.68%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 76.75%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 199.14%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 178.41%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 102.57%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 92.27%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 84.32%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 431.66%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 348.09%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 326.75%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 218.12%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 155.78%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);

});
