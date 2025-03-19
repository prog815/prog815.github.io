
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 7.73%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 3.05%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 2.73%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 2.22%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 20.52%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 16.05%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 15.34%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 13.63%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 9.72%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 136.12%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 114.94%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 43.05%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 40.77%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 25.03%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 106.95%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 85.36%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 62.52%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 24.35%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 24.30%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 287.51%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 233.75%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=CL=F">Нефть WTI (CL=F)</a> - 209.72%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=NG=F">Природный газ (NG=F)</a> - 186.03%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 164.99%  `;
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
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=KC=F">Кофе (KC=F)</a> - 305.45%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 280.64%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 214.94%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 173.72%, `;
    commodityList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 132.24%  `;
    commodityList.innerHTML = commodityList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(commodityList);

});
