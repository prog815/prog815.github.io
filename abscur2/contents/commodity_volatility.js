
// JavaScript код для отображения диаграмм волатильности товаров
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("charts-container");
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг волатильности товаров за месяц";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1m_commodity_volatility.png";
    img.alt = "1m_commodity_volatility.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по волатильности: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.28%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.69%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 0.81%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZW=F">Пшеница (ZW=F)</a> - 1.09%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.15%  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг волатильности товаров за квартал";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1q_commodity_volatility.png";
    img.alt = "1q_commodity_volatility.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по волатильности: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.26%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.82%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.02%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.03%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 1.33%  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг волатильности товаров за год";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/1y_commodity_volatility.png";
    img.alt = "1y_commodity_volatility.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по волатильности: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.26%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.82%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.02%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.03%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 1.33%  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг волатильности товаров за три года";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/3y_commodity_volatility.png";
    img.alt = "3y_commodity_volatility.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по волатильности: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.26%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.82%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.02%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.03%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 1.33%  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг волатильности товаров за пять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/5y_commodity_volatility.png";
    img.alt = "5y_commodity_volatility.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по волатильности: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.26%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.82%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.02%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.03%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 1.33%  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);
    var h2 = document.createElement("h2");
    h2.innerText = "Рейтинг волатильности товаров за десять лет";
    container.appendChild(h2);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/10y_commodity_volatility.png";
    img.alt = "10y_commodity_volatility.png";
    img.style.width = "100%";
    container.appendChild(img);
    var productList = document.createElement("p");
    productList.innerHTML = "Топ товары по волатильности: "; 
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.26%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.82%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.02%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.03%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 1.33%  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);

});
