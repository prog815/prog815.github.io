
// JavaScript код для отображения диаграмм валютных портфелей по коэффициенту Сортино
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var header = document.createElement("p");
    header.innerHTML = "<strong>За месяц (начало: 2025-02-14)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_risk_doh_1m.png";
    img.alt = "currency_portfolio_sortino_risk_doh_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_value_1m.png";
    img.alt = "currency_portfolio_sortino_value_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_parts_1m.png";
    img.alt = "currency_portfolio_sortino_parts_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 38.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 15.47%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 15.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=UAH">UAH (Украинская гривна)</a> - 14.74%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 6.99%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За квартал (начало: 2024-12-14)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_risk_doh_1q.png";
    img.alt = "currency_portfolio_sortino_risk_doh_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_value_1q.png";
    img.alt = "currency_portfolio_sortino_value_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_parts_1q.png";
    img.alt = "currency_portfolio_sortino_parts_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">PHP (Филиппинское песо)</a> - 7.54%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 4.74%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 4.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 4.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 4.31%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 4.08%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">RON (Румынский лей)</a> - 4.06%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=JPY">JPY (Японская иена)</a> - 3.98%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 3.83%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 3.64%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 3.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 3.35%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 3.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CNY">CNY (Китайский юань)</a> - 3.02%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 2.68%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 2.29%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 2.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">EGP (Египетский фунт)</a> - 2.23%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 2.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 2.15%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.06%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 2.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">VND (Вьетнамский донг)</a> - 1.94%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">MYR (Малайзийский ринггит)</a> - 1.90%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 1.74%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=UAH">UAH (Украинская гривна)</a> - 1.67%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 1.55%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 1.54%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 1.39%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NZD">NZD (Новозеландский доллар)</a> - 1.34%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">INR (Индийская рупия)</a> - 1.32%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За год (начало: 2024-03-14)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_risk_doh_1y.png";
    img.alt = "currency_portfolio_sortino_risk_doh_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_value_1y.png";
    img.alt = "currency_portfolio_sortino_value_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_parts_1y.png";
    img.alt = "currency_portfolio_sortino_parts_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 6.93%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 5.46%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">RON (Румынский лей)</a> - 3.39%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 3.36%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 3.34%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 2.58%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 2.54%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 2.54%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 2.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">EUR (Евро)</a> - 2.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 2.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.34%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 2.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.31%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 2.29%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=UAH">UAH (Украинская гривна)</a> - 2.28%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 2.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 2.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 2.26%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 2.22%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NZD">NZD (Новозеландский доллар)</a> - 2.21%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CNY">CNY (Китайский юань)</a> - 2.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">PHP (Филиппинское песо)</a> - 2.16%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AUD">AUD (Австралийский доллар)</a> - 2.14%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 2.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 2.10%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 2.09%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">CZK (Чешская крона)</a> - 2.05%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=JPY">JPY (Японская иена)</a> - 2.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">MYR (Малайзийский ринггит)</a> - 2.00%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 2.00%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">VND (Вьетнамский донг)</a> - 1.98%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 1.96%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 1.92%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">EGP (Египетский фунт)</a> - 1.82%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За три года (начало: 2022-03-14)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_risk_doh_3y.png";
    img.alt = "currency_portfolio_sortino_risk_doh_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_value_3y.png";
    img.alt = "currency_portfolio_sortino_value_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_parts_3y.png";
    img.alt = "currency_portfolio_sortino_parts_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">DKK (Датская крона)</a> - 6.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 5.91%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 5.69%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 4.69%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AUD">AUD (Австралийский доллар)</a> - 3.50%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 3.26%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 3.23%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 3.14%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">KRW (Южнокорейская вона)</a> - 2.87%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 2.87%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 2.60%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">PHP (Филиппинское песо)</a> - 2.52%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 2.51%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">CZK (Чешская крона)</a> - 2.50%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PKR">PKR (Пакистанская рупия)</a> - 2.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 2.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">VND (Вьетнамский донг)</a> - 2.36%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 2.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 2.26%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.20%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 2.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 2.11%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 2.11%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 2.03%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">RON (Румынский лей)</a> - 2.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 1.92%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 1.85%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=JPY">JPY (Японская иена)</a> - 1.84%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 1.71%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">CAD (Канадский доллар)</a> - 1.63%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">INR (Индийская рупия)</a> - 1.56%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 1.44%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За пять лет (начало: 2020-03-14)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_risk_doh_5y.png";
    img.alt = "currency_portfolio_sortino_risk_doh_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_value_5y.png";
    img.alt = "currency_portfolio_sortino_value_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_parts_5y.png";
    img.alt = "currency_portfolio_sortino_parts_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 6.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 5.80%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 5.56%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 5.17%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">DKK (Датская крона)</a> - 4.90%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TRY">TRY (Турецкая лира)</a> - 3.82%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 3.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">CZK (Чешская крона)</a> - 3.06%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 2.52%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">KRW (Южнокорейская вона)</a> - 2.47%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 2.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 2.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AUD">AUD (Австралийский доллар)</a> - 2.40%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 2.36%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 2.36%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 2.32%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 2.32%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.31%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.29%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 2.28%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 2.17%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 2.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">VND (Вьетнамский донг)</a> - 2.11%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 2.04%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 2.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">INR (Индийская рупия)</a> - 1.96%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 1.94%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=JPY">JPY (Японская иена)</a> - 1.85%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">PHP (Филиппинское песо)</a> - 1.79%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PKR">PKR (Пакистанская рупия)</a> - 1.65%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CNY">CNY (Китайский юань)</a> - 1.65%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 1.63%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За десять лет (начало: 2015-03-14)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_risk_doh_10y.png";
    img.alt = "currency_portfolio_sortino_risk_doh_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_value_10y.png";
    img.alt = "currency_portfolio_sortino_value_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_portfolio_sortino_parts_10y.png";
    img.alt = "currency_portfolio_sortino_parts_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 8.61%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 5.63%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">CZK (Чешская крона)</a> - 4.25%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 4.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TRY">TRY (Турецкая лира)</a> - 4.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 4.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">DKK (Датская крона)</a> - 3.46%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 3.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 2.74%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">KRW (Южнокорейская вона)</a> - 2.73%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 2.65%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 2.61%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AUD">AUD (Австралийский доллар)</a> - 2.54%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.52%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 2.51%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.49%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.35%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 2.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 2.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 2.28%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 2.22%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 2.14%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 2.10%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 1.97%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 1.94%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 1.87%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=UAH">UAH (Украинская гривна)</a> - 1.87%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 1.84%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 1.80%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 1.74%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 1.73%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">CAD (Канадский доллар)</a> - 1.68%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
