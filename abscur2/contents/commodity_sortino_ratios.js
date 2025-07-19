
// JavaScript код для отображения диаграмм коэффициента Сортино товаров
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино товаров за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1m_commodity_sortino_ratios.png";
    img.alt = "1m_commodity_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Сортино: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.60, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.32, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SB=F">Сахар (SB=F)</a> - 0.31, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.22  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино товаров за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1q_commodity_sortino_ratios.png";
    img.alt = "1q_commodity_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Сортино: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.47, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.43, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.28, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.23, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.18  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино товаров за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1y_commodity_sortino_ratios.png";
    img.alt = "1y_commodity_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Сортино: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.47, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.43, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.28, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.23, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.18  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино товаров за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/3y_commodity_sortino_ratios.png";
    img.alt = "3y_commodity_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Сортино: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.47, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.43, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.28, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.23, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.18  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино товаров за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/5y_commodity_sortino_ratios.png";
    img.alt = "5y_commodity_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Сортино: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.47, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.43, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.28, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.23, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.18  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг коэффициента Сортино товаров за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/10y_commodity_sortino_ratios.png";
    img.alt = "10y_commodity_sortino_ratios.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по коэффициенту Сортино: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.47, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.43, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.28, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.23, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.18  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);

});
