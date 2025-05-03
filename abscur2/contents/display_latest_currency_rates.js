
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9882", "AUDJPY": "93.4150", "AUDSEK": "6.2196", "AUDUSD": "0.6440", "CADJPY": "104.8890", "CADSEK": "6.9855", "CHFAUD": "1.8767", "CHFHKD": "9.3751", "CHFJPY": "175.3620", "EURAUD": "1.7527", "EURCAD": "1.5606", "EURCHF": "0.9334", "EURCNY": "8.2118", "EURCZK": "24.8870", "EURGBP": "0.8514", "EURHKD": "8.7559", "EURILS": "4.0563", "EURJPY": "163.7820", "EURNOK": "11.7591", "EURNZD": "1.8996", "EURRUB": "93.5490", "EURSEK": "10.9105", "EURSGD": "1.4657", "EURUSD": "1.1295", "EURZAR": "20.7655", "GBPAUD": "2.0588", "GBPCAD": "1.8331", "GBPCHF": "1.0963", "GBPHKD": "10.2810", "GBPJPY": "192.3410", "GBPNOK": "13.8114", "GBPRUB": "109.8650", "GBPSEK": "12.8329", "GBPSGD": "1.7203", "GBPUSD": "1.3264", "HKDSEK": "1.2448", "HKDSGD": "0.1673", "JPYHKD": "0.0532", "JPYSEK": "0.0661", "NZDSEK": "5.7382", "NZDUSD": "0.5943", "SGDAUD": "1.1955", "SGDCHF": "0.6356", "SGDJPY": "111.7080", "USDAED": "3.6728", "USDARS": "1 172.7300", "USDBRL": "5.6571", "USDCAD": "1.3813", "USDCHF": "0.8263", "USDCLP": "946.7800", "USDCNY": "7.2710", "USDCOP": "4 245.2500", "USDCZK": "22.0260", "USDDKK": "6.6001", "USDEGP": "50.7200", "USDGBP": "0.7537", "USDHKD": "7.7498", "USDHUF": "357.7900", "USDIDR": "16 429.0000", "USDILS": "3.5863", "USDINR": "84.4790", "USDISK": "128.4000", "USDJPY": "144.9180", "USDKRW": "1 397.8900", "USDKWD": "0.3067", "USDKZT": "516.4800", "USDMXN": "19.5697", "USDMYR": "4.2580", "USDNOK": "10.4041", "USDPEN": "3.6487", "USDPHP": "55.6500", "USDPKR": "280.8500", "USDPLN": "3.7779", "USDQAR": "3.6400", "USDRON": "4.3782", "USDRUB": "82.6250", "USDSAR": "3.7496", "USDSEK": "9.6560", "USDSGD": "1.2969", "USDTHB": "32.9950", "USDTRY": "38.5674", "USDTWD": "30.7010", "USDUAH": "41.5945", "USDVND": "25 980.0000", "USDZAR": "18.3789"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 02.05.2025</th></tr>';

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
