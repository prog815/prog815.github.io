
// Список возможных тикеров валютных пар
const currencyPairs = ["AUDHKD", "AUDJPY", "AUDSEK", "AUDUSD", "CADJPY", "CADSEK", "CHFAUD", "CHFHKD", "CHFJPY", "EURAUD", "EURCAD", "EURCHF", "EURCNY", "EURCZK", "EURGBP", "EURHKD", "EURILS", "EURJPY", "EURNOK", "EURNZD", "EURRUB", "EURSEK", "EURSGD", "EURUSD", "EURZAR", "GBPAUD", "GBPCAD", "GBPCHF", "GBPHKD", "GBPJPY", "GBPNOK", "GBPRUB", "GBPSEK", "GBPSGD", "GBPUSD", "HKDSEK", "HKDSGD", "JPYHKD", "JPYSEK", "NZDSEK", "NZDUSD", "SGDAUD", "SGDCHF", "SGDJPY", "USDAED", "USDARS", "USDBRL", "USDCAD", "USDCHF", "USDCLP", "USDCNY", "USDCOP", "USDCZK", "USDDKK", "USDEGP", "USDGBP", "USDHKD", "USDHUF", "USDIDR", "USDILS", "USDINR", "USDISK", "USDJPY", "USDKRW", "USDKWD", "USDKZT", "USDMXN", "USDMYR", "USDNOK", "USDPEN", "USDPHP", "USDPKR", "USDPLN", "USDQAR", "USDRON", "USDRUB", "USDSAR", "USDSEK", "USDSGD", "USDTHB", "USDTRY", "USDTWD", "USDUAH", "USDVND", "USDZAR"];

// Данные по временным диапазонам и соответствующим тикерам с наименьшей нормой
const periodData = {"\u043c\u0435\u0441\u044f\u0446": {"suffix": "1m", "lowestNormTickers": ["USDISK", "CHFJPY", "SGDCHF", "USDTWD", "NZDSEK"], "startDate": "2025-01-06"}, "\u043a\u0432\u0430\u0440\u0442\u0430\u043b": {"suffix": "1q", "lowestNormTickers": ["USDGBP", "GBPHKD", "HKDSEK", "GBPUSD", "USDSEK"], "startDate": "2024-11-06"}, "\u0433\u043e\u0434": {"suffix": "1y", "lowestNormTickers": ["USDCLP", "AUDSEK", "SGDCHF", "SGDJPY", "USDPLN"], "startDate": "2024-02-06"}, "\u0442\u0440\u0438 \u0433\u043e\u0434\u0430": {"suffix": "3y", "lowestNormTickers": ["AUDSEK", "GBPRUB", "NZDSEK", "USDRUB", "USDKRW"], "startDate": "2022-02-06"}, "\u043f\u044f\u0442\u044c \u043b\u0435\u0442": {"suffix": "5y", "lowestNormTickers": ["SGDCHF", "CHFHKD", "GBPUSD", "GBPHKD", "USDPEN"], "startDate": "2020-02-06"}, "\u0434\u0435\u0441\u044f\u0442\u044c \u043b\u0435\u0442": {"suffix": "10y", "lowestNormTickers": ["USDKWD", "EURUSD", "USDCAD", "USDDKK", "USDMYR"], "startDate": "2015-02-06"}};

// Функция для отображения диаграмм и списков тикеров
function displayCharts() {
    const graphsContainer = document.getElementById('graphs-container');
    
    for (const [periodName, data] of Object.entries(periodData)) {
        const {suffix, lowestNormTickers, startDate} = data;

        // Формирование заголовка с датами начала и окончания периода
        const headerText = `За ${periodName} (с ${startDate} по 2025-02-06)`;

        // Создание заголовка для временного диапазона
        const header = document.createElement('h2');
        header.textContent = headerText;
        header.style.marginTop = '20px';  // Добавляем отступ сверху
        graphsContainer.appendChild(header);

        // Создание элемента для графика
        const chartDiv = document.createElement('div');
        chartDiv.className = 'chart';
        
        // Генерация имени файла графика
        const imgElement = document.createElement('img');
        imgElement.src = `https://prog815.github.io/abscur2/contents/pairs-distr-${suffix}.png`;
        imgElement.alt = `Асимметрия и эксцесс валютных пар (${periodName})`;
        imgElement.style.width = '100%';  // Устанавливаем ширину изображения
        chartDiv.appendChild(imgElement);
        
        // Выводим список тикеров с наименьшей нормой (из lowest_norm_tickers)
        const tickerLinks = lowestNormTickers.map(ticker => 
            `<a href="https://www.abscur.ru/p/blog-page_71.html?pair=${ticker}">${ticker}</a>`
        ).join(' ');  // Объединяем ссылки через пробел
        
        const tickerContainer = document.createElement('div');
        tickerContainer.innerHTML = tickerLinks;  // Добавляем HTML со ссылками
        chartDiv.appendChild(tickerContainer);
        
        graphsContainer.appendChild(chartDiv);
    }
}

// Вызов функции для отображения графиков
displayCharts();
