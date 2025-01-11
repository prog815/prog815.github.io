
// Список последних парных валютных курсов
const latestCurrencyRates = {"AUDHKD": 4.7806, "AUDJPY": 96.903, "AUDSEK": 6.8866, "AUDUSD": 0.6143, "CADJPY": 109.359, "CADSEK": 7.7627, "CHFAUD": 1.775, "CHFHKD": 8.4974, "CHFJPY": 172.112, "EURAUD": 1.66748, "EURCAD": 1.4775, "EURCHF": 0.9385, "EURCNY": 7.5081, "EURCZK": 25.069, "EURGBP": 0.83916, "EURHKD": 7.972, "EURILS": 3.7784, "EURJPY": 161.611, "EURNOK": 11.74923, "EURNZD": 1.84413, "EURRUB": 104.395, "EURSEK": 11.48731, "EURSGD": 1.404, "EURUSD": 1.02444, "EURZAR": 19.556, "GBPAUD": 1.98679, "GBPCAD": 1.76054, "GBPCHF": 1.11859, "GBPHKD": 9.506, "GBPJPY": 192.552, "GBPNOK": 14.0007, "GBPRUB": 124.422, "GBPSEK": 13.6863, "GBPSGD": 1.6738, "GBPUSD": 1.22065, "HKDSEK": 1.4388, "HKDSGD": 0.176, "JPYHKD": 0.0491, "JPYSEK": 0.0706, "NZDSEK": 6.2057, "NZDUSD": 0.5554, "SGDAUD": 1.1863, "SGDCHF": 0.6676, "SGDJPY": 114.79, "USDAED": 3.6723, "USDARS": 1036.5, "USDBRL": 6.1053, "USDCAD": 1.4422, "USDCHF": 0.91642, "USDCLP": 1010.25, "USDCNY": 7.332, "USDCOP": 4338.5, "USDCZK": 24.467, "USDDKK": 7.28103, "USDEGP": 50.51, "USDGBP": 0.81912, "USDHKD": 7.7873, "USDHUF": 403.31, "USDIDR": 16179.0, "USDILS": 3.6841, "USDINR": 86.145, "USDISK": 140.71, "USDJPY": 157.74, "USDKRW": 1473.05, "USDKWD": 0.3084, "USDKZT": 527.13, "USDMXN": 20.701, "USDMYR": 4.493, "USDNOK": 11.4662, "USDPEN": 3.7664, "USDPHP": 58.642, "USDPKR": 278.36, "USDPLN": 4.1609, "USDQAR": 3.64, "USDRON": 4.8543, "USDRUB": 102.226, "USDSAR": 3.7508, "USDSEK": 11.21082, "USDSGD": 1.3714, "USDTHB": 34.6, "USDTRY": 35.3852, "USDTWD": 33.088, "USDUAH": 42.2825, "USDVND": 25360.0, "USDZAR": 19.096};

// Функция для форматирования числа с разделителями разрядов и 4 знаками после запятой
function formatNumber(num) {
    return num.toLocaleString('ru-RU', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
}

// Создание таблицы с последними курсами валют
function createCurrencyRatesTable() {
    const tableContainer = document.getElementById('currency-rates-table');
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.width = 'auto';  // Сжимаем таблицу до размера данных

    // Заголовок таблицы
    const headerRow = document.createElement('tr');
    const tickerHeader = document.createElement('th');
    tickerHeader.innerText = 'Тикер валютной пары';
    tickerHeader.style.border = '1px solid black';
    tickerHeader.style.textAlign = 'center';
    
    const rateHeader = document.createElement('th');
    rateHeader.innerText = 'Курс на 2025-01-11 00:00:00';
    rateHeader.style.border = '1px solid black';
    rateHeader.style.textAlign = 'right';

    headerRow.appendChild(tickerHeader);
    headerRow.appendChild(rateHeader);
    table.appendChild(headerRow);

    // Заполнение таблицы данными
    for (const [pair, rate] of Object.entries(latestCurrencyRates)) {
        const row = document.createElement('tr');
        
        // Создание ячейки с тикером валютной пары
        const pairCell = document.createElement('td');
        pairCell.style.border = '1px solid black';
        pairCell.style.textAlign = 'center';
        pairCell.innerHTML = `<a href="https://www.abscur.ru/p/blog-page_54.html?pair=${pair}">${pair}</a>`;
        
        // Создание ячейки с курсом
        const rateCell = document.createElement('td');
        rateCell.style.border = '1px solid black';
        rateCell.style.textAlign = 'right';
        rateCell.innerText = formatNumber(rate);
        
        row.appendChild(pairCell);
        row.appendChild(rateCell);
        table.appendChild(row);
    }

    // Добавление таблицы в контейнер
    tableContainer.appendChild(table);
}

// Вызов функции для создания таблицы
createCurrencyRatesTable();
