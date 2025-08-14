
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1361", "AUDJPY": "96.4307", "AUDSEK": "6.2417", "AUDUSD": "0.6543", "CADJPY": "107.1153", "CADSEK": "6.9333", "CHFAUD": "1.8986", "CHFHKD": "9.7512", "CHFJPY": "183.0807", "EURAUD": "1.7874", "EURCAD": "1.6104", "EURCHF": "0.9422", "EURCNY": "8.3969", "EURCZK": "24.4110", "EURGBP": "0.8621", "EURHKD": "9.1873", "EURILS": "3.9547", "EURJPY": "172.4900", "EURNOK": "11.9205", "EURNZD": "1.9582", "EURRUB": "92.9830", "EURSEK": "11.1650", "EURSGD": "1.4981", "EURUSD": "1.1704", "EURZAR": "20.5026", "GBPAUD": "2.0747", "GBPCAD": "1.8678", "GBPCHF": "1.0928", "GBPHKD": "10.6560", "GBPJPY": "200.0684", "GBPNOK": "13.8261", "GBPRUB": "107.8473", "GBPSEK": "12.9499", "GBPSGD": "1.7376", "GBPUSD": "1.3575", "HKDSEK": "1.2153", "HKDSGD": "0.1631", "JPYHKD": "0.0533", "JPYSEK": "0.0647", "NZDSEK": "5.6989", "NZDUSD": "0.5974", "SGDAUD": "1.1940", "SGDCHF": "0.6289", "SGDJPY": "115.1406", "USDAED": "3.6726", "USDARS": "1 313.5000", "USDBRL": "5.3986", "USDCAD": "1.3759", "USDCHF": "0.8050", "USDCLP": "951.4500", "USDCNY": "7.1775", "USDCOP": "4 028.6300", "USDCZK": "20.8570", "USDDKK": "6.3755", "USDEGP": "48.2700", "USDGBP": "0.7367", "USDHKD": "7.8497", "USDHUF": "337.3800", "USDIDR": "16 190.0000", "USDILS": "3.3788", "USDINR": "87.4300", "USDISK": "122.1800", "USDJPY": "147.3800", "USDKRW": "1 379.6400", "USDKWD": "0.3051", "USDKZT": "537.9200", "USDMXN": "18.6242", "USDMYR": "4.2050", "USDNOK": "10.1850", "USDPEN": "3.5405", "USDPHP": "56.5740", "USDPKR": "282.9300", "USDPLN": "3.6295", "USDQAR": "3.6266", "USDRON": "4.3226", "USDRUB": "79.4455", "USDSAR": "3.7522", "USDSEK": "9.5395", "USDSGD": "1.2800", "USDTHB": "32.2800", "USDTRY": "40.7490", "USDTWD": "29.9540", "USDUAH": "41.3500", "USDVND": "26 265.0000", "USDZAR": "17.5176"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 13.08.2025</th></tr>';

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
