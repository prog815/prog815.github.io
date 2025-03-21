
// JavaScript код для отображения диаграмм валютных портфелей по коэффициенту Шарпа
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("charts-container");
    var header = document.createElement("p");
    header.innerHTML = "<strong>За месяц (начало: 2025-02-21)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_risk_return_1m.png";
    img.alt = "currency_sharp_risk_return_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_value_1m.png";
    img.alt = "currency_sharp_value_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_parts_1m.png";
    img.alt = "currency_sharp_parts_1m.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 16.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 7.39%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">DKK (Датская крона)</a> - 5.70%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">INR (Индийская рупия)</a> - 5.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 4.89%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 4.52%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=UAH">UAH (Украинская гривна)</a> - 4.49%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 3.85%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 3.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 3.40%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 3.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 2.98%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.91%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 2.69%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.59%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NZD">NZD (Новозеландский доллар)</a> - 2.57%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">EGP (Египетский фунт)</a> - 2.37%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 2.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 2.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 1.87%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 1.67%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">PHP (Филиппинское песо)</a> - 1.41%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 1.17%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За квартал (начало: 2024-12-21)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_risk_return_1q.png";
    img.alt = "currency_sharp_risk_return_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_value_1q.png";
    img.alt = "currency_sharp_value_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_parts_1q.png";
    img.alt = "currency_sharp_parts_1q.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 6.93%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 4.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 3.58%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 3.00%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 2.84%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 2.77%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 2.61%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">PHP (Филиппинское песо)</a> - 2.57%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.55%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">DKK (Датская крона)</a> - 2.53%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 2.51%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 2.50%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 2.48%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 2.46%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=JPY">JPY (Японская иена)</a> - 2.41%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">EGP (Египетский фунт)</a> - 2.38%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 2.34%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 2.28%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NZD">NZD (Новозеландский доллар)</a> - 2.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 2.25%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 2.24%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 2.24%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">VND (Вьетнамский донг)</a> - 2.23%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 2.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 2.18%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.16%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.15%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 2.11%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 2.09%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 2.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EUR">EUR (Евро)</a> - 2.00%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=INR">INR (Индийская рупия)</a> - 1.96%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CNY">CNY (Китайский юань)</a> - 1.93%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">CAD (Канадский доллар)</a> - 1.91%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">KRW (Южнокорейская вона)</a> - 1.85%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 1.85%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За год (начало: 2024-03-21)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_risk_return_1y.png";
    img.alt = "currency_sharp_risk_return_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_value_1y.png";
    img.alt = "currency_sharp_value_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_parts_1y.png";
    img.alt = "currency_sharp_parts_1y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 7.37%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 3.39%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 3.05%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">RON (Румынский лей)</a> - 2.63%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 2.40%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 2.40%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 2.36%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HUF">HUF (Венгерский форинт)</a> - 2.36%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 2.36%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 2.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 2.33%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.32%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.32%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 2.31%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">DKK (Датская крона)</a> - 2.29%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 2.28%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">CZK (Чешская крона)</a> - 2.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 2.26%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 2.24%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 2.22%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 2.20%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 2.20%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 2.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">EGP (Египетский фунт)</a> - 2.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=UAH">UAH (Украинская гривна)</a> - 2.18%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NZD">NZD (Новозеландский доллар)</a> - 2.18%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 2.15%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 2.11%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 2.10%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">MYR (Малайзийский ринггит)</a> - 2.10%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=VND">VND (Вьетнамский донг)</a> - 2.10%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AUD">AUD (Австралийский доллар)</a> - 2.09%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 2.08%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 2.06%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PHP">PHP (Филиппинское песо)</a> - 2.04%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">CAD (Канадский доллар)</a> - 2.01%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KRW">KRW (Южнокорейская вона)</a> - 2.00%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За три года (начало: 2022-03-21)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_risk_return_3y.png";
    img.alt = "currency_sharp_risk_return_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_value_3y.png";
    img.alt = "currency_sharp_value_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_parts_3y.png";
    img.alt = "currency_sharp_parts_3y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 20.30%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 10.52%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 7.34%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 7.31%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 5.82%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 5.69%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 4.11%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=HKD">HKD (Гонконгский доллар)</a> - 3.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 3.41%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">MYR (Малайзийский ринггит)</a> - 2.80%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 2.77%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 2.73%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RON">RON (Румынский лей)</a> - 2.72%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.41%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 2.40%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 2.26%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 2.26%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 2.11%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За пять лет (начало: 2020-03-21)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_risk_return_5y.png";
    img.alt = "currency_sharp_risk_return_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_value_5y.png";
    img.alt = "currency_sharp_value_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_parts_5y.png";
    img.alt = "currency_sharp_parts_5y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 18.58%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KWD">KWD (Кувейтский динар)</a> - 6.30%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 5.57%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 5.56%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 5.55%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 4.63%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">CZK (Чешская крона)</a> - 4.59%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 3.88%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 3.86%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 3.79%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 3.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">MYR (Малайзийский ринггит)</a> - 3.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=IDR">IDR (Индонезийская рупия)</a> - 2.78%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.67%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=KZT">KZT (Казахстанский тенге)</a> - 2.24%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.20%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NOK">NOK (Норвежская крона)</a> - 2.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 1.97%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 1.87%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 1.75%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 1.74%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 1.70%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 1.67%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);
    var header = document.createElement("p");
    header.innerHTML = "<strong>За десять лет (начало: 2015-03-21)</strong>";
    container.appendChild(header);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_risk_return_10y.png";
    img.alt = "currency_sharp_risk_return_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_value_10y.png";
    img.alt = "currency_sharp_value_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var img = document.createElement("img");
    img.src = "https://prog815.github.io/abscur2/contents/currency_sharp_parts_10y.png";
    img.alt = "currency_sharp_parts_10y.png";
    img.style.width = "100%";
    container.appendChild(img);
    var currencyList = document.createElement("p");
    currencyList.innerHTML = "<strong>Топ валют по долям в портфеле:</strong> "; 
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SGD">SGD (Сингапурский доллар)</a> - 10.89%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SAR">SAR (Саудовский риял)</a> - 9.27%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=USD">USD (Доллар США)</a> - 6.80%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=AED">AED (Дирхам ОАЭ)</a> - 6.16%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CZK">CZK (Чешская крона)</a> - 5.71%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CHF">CHF (Швейцарский франк)</a> - 4.13%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PLN">PLN (Польский злотый)</a> - 3.72%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=TWD">TWD (Новый тайваньский доллар)</a> - 3.45%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MXN">MXN (Мексиканское песо)</a> - 3.10%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=THB">THB (Тайский бат)</a> - 3.07%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=DKK">DKK (Датская крона)</a> - 2.87%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ZAR">ZAR (Южноафриканский рэнд)</a> - 2.82%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=RUB">RUB (Российский рубль)</a> - 2.70%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=COP">COP (Колумбийское песо)</a> - 2.53%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ILS">ILS (Новый израильский шекель)</a> - 2.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CLP">CLP (Чилийское песо)</a> - 2.42%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=ISK">ISK (Исландская крона)</a> - 2.29%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=CAD">CAD (Канадский доллар)</a> - 2.19%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=BRL">BRL (Бразильский реал)</a> - 2.12%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=GBP">GBP (Фунт стерлингов)</a> - 2.08%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=QAR">QAR (Катарский риал)</a> - 2.05%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=PEN">PEN (Перуанский новый соль)</a> - 1.68%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=NZD">NZD (Новозеландский доллар)</a> - 1.65%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=MYR">MYR (Малайзийский ринггит)</a> - 1.64%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=SEK">SEK (Шведская крона)</a> - 1.56%, `;
    currencyList.innerHTML += `<a href="https://www.abscur.ru/p/2.html?abs=EGP">EGP (Египетский фунт)</a> - 1.48%, `;
    currencyList.innerHTML = currencyList.innerHTML.slice(0, -2); // Удаляем последнюю запятую
    container.appendChild(currencyList);

});
