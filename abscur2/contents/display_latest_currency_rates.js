
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0951", "AUDJPY": "94.0340", "AUDSEK": "6.2281", "AUDUSD": "0.6491", "CADJPY": "105.7720", "CADSEK": "7.0103", "CHFAUD": "1.8731", "CHFHKD": "9.5540", "CHFJPY": "176.1850", "EURAUD": "1.7546", "EURCAD": "1.5596", "EURCHF": "0.9363", "EURCNY": "8.1891", "EURCZK": "24.7480", "EURGBP": "0.8425", "EURHKD": "8.9414", "EURILS": "3.9868", "EURJPY": "165.0530", "EURNOK": "11.5170", "EURNZD": "1.8941", "EURRUB": "89.5530", "EURSEK": "10.9875", "EURSGD": "1.4689", "EURUSD": "1.1393", "EURZAR": "20.2606", "GBPAUD": "2.0831", "GBPCAD": "1.8513", "GBPCHF": "1.1113", "GBPHKD": "10.6100", "GBPJPY": "195.8940", "GBPNOK": "13.6709", "GBPRUB": "107.5090", "GBPSEK": "13.0387", "GBPSGD": "1.7425", "GBPUSD": "1.3521", "HKDSEK": "1.2276", "HKDSGD": "0.1642", "JPYHKD": "0.0539", "JPYSEK": "0.0660", "NZDSEK": "5.7869", "NZDUSD": "0.6014", "SGDAUD": "1.1942", "SGDCHF": "0.6387", "SGDJPY": "112.3270", "USDAED": "3.6725", "USDARS": "1 184.5000", "USDBRL": "5.5622", "USDCAD": "1.3688", "USDCHF": "0.8215", "USDCLP": "934.1900", "USDCNY": "7.1940", "USDCOP": "4 111.9900", "USDCZK": "21.7150", "USDDKK": "6.5439", "USDEGP": "49.5700", "USDGBP": "0.7391", "USDHKD": "7.8463", "USDHUF": "353.7900", "USDIDR": "16 273.0000", "USDILS": "3.5010", "USDINR": "85.7370", "USDISK": "126.2000", "USDJPY": "144.7880", "USDKRW": "1 359.1600", "USDKWD": "0.3067", "USDKZT": "509.9800", "USDMXN": "19.0444", "USDMYR": "4.2250", "USDNOK": "10.0942", "USDPEN": "3.6460", "USDPHP": "55.7860", "USDPKR": "281.9500", "USDPLN": "3.7719", "USDQAR": "3.6400", "USDRON": "4.4241", "USDRUB": "78.7250", "USDSAR": "3.7505", "USDSEK": "9.6315", "USDSGD": "1.2891", "USDTHB": "32.6550", "USDTRY": "39.3343", "USDTWD": "29.9150", "USDUAH": "41.4717", "USDVND": "26 045.0000", "USDZAR": "17.7788"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 06.06.2025</th></tr>';

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
