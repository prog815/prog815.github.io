
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0313", "AUDJPY": "92.9650", "AUDSEK": "6.1987", "AUDUSD": "0.6422", "CADJPY": "104.6380", "CADSEK": "6.9757", "CHFAUD": "1.8824", "CHFHKD": "9.4784", "CHFJPY": "175.1660", "EURAUD": "1.7575", "EURCAD": "1.5617", "EURCHF": "0.9339", "EURCNY": "8.1244", "EURCZK": "24.9140", "EURGBP": "0.8382", "EURHKD": "8.8496", "EURILS": "3.9607", "EURJPY": "163.4820", "EURNOK": "11.4997", "EURNZD": "1.8927", "EURRUB": "90.2050", "EURSEK": "10.9046", "EURSGD": "1.4558", "EURUSD": "1.1293", "EURZAR": "20.2348", "GBPAUD": "2.0960", "GBPCAD": "1.8620", "GBPCHF": "1.1130", "GBPHKD": "10.5530", "GBPJPY": "194.9820", "GBPNOK": "13.7157", "GBPRUB": "107.5930", "GBPSEK": "13.0043", "GBPSGD": "1.7355", "GBPUSD": "1.3466", "HKDSEK": "1.2309", "HKDSGD": "0.1645", "JPYHKD": "0.0539", "JPYSEK": "0.0662", "NZDSEK": "5.7353", "NZDUSD": "0.5965", "SGDAUD": "1.2068", "SGDCHF": "0.6406", "SGDJPY": "112.1000", "USDAED": "3.6725", "USDARS": "1 160.0000", "USDBRL": "5.6887", "USDCAD": "1.3832", "USDCHF": "0.8267", "USDCLP": "939.8300", "USDCNY": "7.1967", "USDCOP": "4 121.7500", "USDCZK": "22.0460", "USDDKK": "6.6016", "USDEGP": "49.7400", "USDGBP": "0.7424", "USDHKD": "7.8357", "USDHUF": "357.2100", "USDIDR": "16 284.0000", "USDILS": "3.5094", "USDINR": "85.3670", "USDISK": "128.5000", "USDJPY": "144.7910", "USDKRW": "1 373.5800", "USDKWD": "0.3070", "USDKZT": "511.1300", "USDMXN": "19.3947", "USDMYR": "4.2200", "USDNOK": "10.1716", "USDPEN": "3.6397", "USDPHP": "55.4510", "USDPKR": "281.9500", "USDPLN": "3.7503", "USDQAR": "3.6400", "USDRON": "4.4687", "USDRUB": "79.7500", "USDSAR": "3.7508", "USDSEK": "9.6454", "USDSGD": "1.2893", "USDTHB": "32.6800", "USDTRY": "39.0617", "USDTWD": "29.8920", "USDUAH": "41.6758", "USDVND": "25 950.0000", "USDZAR": "17.9272"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.05.2025</th></tr>';

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
