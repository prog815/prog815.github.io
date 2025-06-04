
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0690", "AUDJPY": "93.0310", "AUDSEK": "6.2180", "AUDUSD": "0.6463", "CADJPY": "104.9040", "CADSEK": "7.0066", "CHFAUD": "1.8773", "CHFHKD": "9.5247", "CHFJPY": "174.7970", "EURAUD": "1.7589", "EURCAD": "1.5604", "EURCHF": "0.9366", "EURCNY": "8.1717", "EURCZK": "24.8640", "EURGBP": "0.8411", "EURHKD": "8.9233", "EURILS": "3.9965", "EURJPY": "163.7640", "EURNOK": "11.5570", "EURNZD": "1.8970", "EURRUB": "89.8220", "EURSEK": "10.9428", "EURSGD": "1.4660", "EURUSD": "1.1375", "EURZAR": "20.3007", "GBPAUD": "2.0896", "GBPCAD": "1.8543", "GBPCHF": "1.1126", "GBPHKD": "10.6030", "GBPJPY": "194.5620", "GBPNOK": "13.7341", "GBPRUB": "106.7610", "GBPSEK": "13.0005", "GBPSGD": "1.7422", "GBPUSD": "1.3514", "HKDSEK": "1.2252", "HKDSGD": "0.1643", "JPYHKD": "0.0542", "JPYSEK": "0.0663", "NZDSEK": "5.7540", "NZDUSD": "0.5996", "SGDAUD": "1.1989", "SGDCHF": "0.6379", "SGDJPY": "111.5220", "USDAED": "3.6728", "USDARS": "1 184.0000", "USDBRL": "5.6352", "USDCAD": "1.3718", "USDCHF": "0.8232", "USDCLP": "940.5300", "USDCNY": "7.1878", "USDCOP": "4 106.7900", "USDCZK": "21.8520", "USDDKK": "6.5556", "USDEGP": "49.6200", "USDGBP": "0.7398", "USDHKD": "7.8446", "USDHUF": "354.6500", "USDIDR": "16 292.0000", "USDILS": "3.5154", "USDINR": "85.6610", "USDISK": "128.5000", "USDJPY": "143.9410", "USDKRW": "1 377.6900", "USDKWD": "0.3066", "USDKZT": "512.5800", "USDMXN": "19.2300", "USDMYR": "4.2400", "USDNOK": "10.1480", "USDPEN": "3.6228", "USDPHP": "55.6400", "USDPKR": "281.7200", "USDPLN": "3.7501", "USDQAR": "3.6400", "USDRON": "4.4438", "USDRUB": "78.8500", "USDSAR": "3.7506", "USDSEK": "9.6128", "USDSGD": "1.2889", "USDTHB": "32.5040", "USDTRY": "39.1166", "USDTWD": "29.9690", "USDUAH": "41.5261", "USDVND": "26 038.0000", "USDZAR": "17.8540"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.06.2025</th></tr>';

for (const [ticker, rate] of Object.entries(currencyRates)) {
    tableHTML += `<tr>
        <td style="border: 1px solid black; text-align: center;">
            <a href="https://www.abscur.ru/p/blog-page_54.html?pair=${ticker}">${ticker}</a>
        </td>
        <td style="border: 1px solid black; text-align: right;">${rate}</td>
    </tr>`;
}

tableHTML += '</table>';

// Вставка таблицы в div с id "currency-rates-table"
document.getElementById('currency-rates-table').innerHTML = tableHTML;
