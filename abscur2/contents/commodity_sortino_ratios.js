
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.61, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.26, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 0.22, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.18, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.14  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.53, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.40, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.32, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.22, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.12  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.53, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.40, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.32, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.22, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.12  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.53, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.40, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.32, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.22, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.12  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.53, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.40, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.32, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.22, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.12  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 0.53, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 0.40, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 0.32, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.22, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 0.12  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);

});
