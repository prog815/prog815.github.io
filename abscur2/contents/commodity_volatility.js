
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.41%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 0.98%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=SI=F">Серебро (SI=F)</a> - 1.32%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 1.36%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=PL=F">Платина (PL=F)</a> - 1.42%  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.55%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.00%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 1.35%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 1.35%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.37%  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.38%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 1.04%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.13%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZC=F">Кукуруза (ZC=F)</a> - 1.31%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.38%  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.43%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.85%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.34%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.37%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 1.40%  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.42%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.90%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.36%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.41%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 1.42%  `;
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
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZN=F">Цинк (ZN=F)</a> - 0.41%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=GC=F">Золото (GC=F)</a> - 0.86%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ALI=F">Алюминий (ALI=F)</a> - 1.19%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=ZS=F">Соя (ZS=F)</a> - 1.24%, `;
    productList.innerHTML += `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=HG=F">Медь (HG=F)</a> - 1.30%  `;
    productList.innerHTML = productList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(productList);

});
