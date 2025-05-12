
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9852", "AUDJPY": "93.2080", "AUDSEK": "6.2217", "AUDUSD": "0.6411", "CADJPY": "104.2780", "CADSEK": "6.9625", "CHFAUD": "1.8755", "CHFHKD": "9.3564", "CHFJPY": "174.8640", "EURAUD": "1.7538", "EURCAD": "1.5673", "EURCHF": "0.9346", "EURCNY": "8.1398", "EURCZK": "24.9280", "EURGBP": "0.8456", "EURHKD": "8.7494", "EURILS": "3.9946", "EURJPY": "163.5220", "EURNOK": "11.6576", "EURNZD": "1.9033", "EURRUB": "92.8020", "EURSEK": "10.9210", "EURSGD": "1.4597", "EURUSD": "1.1246", "EURZAR": "20.4687", "GBPAUD": "2.0745", "GBPCAD": "1.8537", "GBPCHF": "1.1053", "GBPHKD": "10.3450", "GBPJPY": "193.3670", "GBPNOK": "13.7872", "GBPRUB": "109.7490", "GBPSEK": "12.9124", "GBPSGD": "1.7252", "GBPUSD": "1.3298", "HKDSEK": "1.2469", "HKDSGD": "0.1668", "JPYHKD": "0.0533", "JPYSEK": "0.0663", "NZDSEK": "5.7234", "NZDUSD": "0.5906", "SGDAUD": "1.2012", "SGDCHF": "0.6399", "SGDJPY": "111.9880", "USDAED": "3.6728", "USDARS": "1 125.0000", "USDBRL": "5.6493", "USDCAD": "1.3937", "USDCHF": "0.8309", "USDCLP": "935.2500", "USDCNY": "7.2399", "USDCOP": "4 217.2500", "USDCZK": "22.1500", "USDDKK": "6.6291", "USDEGP": "50.5700", "USDGBP": "0.7517", "USDHKD": "7.7786", "USDHUF": "358.8090", "USDIDR": "16 509.0000", "USDILS": "3.5473", "USDINR": "85.3590", "USDISK": "130.3000", "USDJPY": "145.3230", "USDKRW": "1 395.5600", "USDKWD": "0.3067", "USDKZT": "515.8300", "USDMXN": "19.4330", "USDMYR": "4.2940", "USDNOK": "10.3559", "USDPEN": "3.6518", "USDPHP": "55.3720", "USDPKR": "281.3000", "USDPLN": "3.7590", "USDQAR": "3.6400", "USDRON": "4.5474", "USDRUB": "82.3750", "USDSAR": "3.7507", "USDSEK": "9.6895", "USDSGD": "1.2975", "USDTHB": "32.9300", "USDTRY": "38.7319", "USDTWD": "30.1370", "USDUAH": "41.5113", "USDVND": "25 952.0000", "USDZAR": "18.1879"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 09.05.2025</th></tr>';

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
