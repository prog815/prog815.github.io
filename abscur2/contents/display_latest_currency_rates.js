
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9491", "AUDJPY": "92.6870", "AUDSEK": "6.2169", "AUDUSD": "0.6381", "CADJPY": "104.8530", "CADSEK": "7.0320", "CHFAUD": "1.8870", "CHFHKD": "9.3457", "CHFJPY": "175.1260", "EURAUD": "1.7680", "EURCAD": "1.5634", "EURCHF": "0.9364", "EURCNY": "8.2044", "EURCZK": "24.8890", "EURGBP": "0.8499", "EURHKD": "8.7555", "EURILS": "4.0750", "EURJPY": "164.0130", "EURNOK": "11.7765", "EURNZD": "1.9106", "EURRUB": "92.4130", "EURSEK": "10.9999", "EURSGD": "1.4804", "EURUSD": "1.1286", "EURZAR": "20.9495", "GBPAUD": "2.0783", "GBPCAD": "1.8381", "GBPCHF": "1.1006", "GBPHKD": "10.3020", "GBPJPY": "192.8180", "GBPNOK": "13.8594", "GBPRUB": "108.7070", "GBPSEK": "12.9419", "GBPSGD": "1.7402", "GBPUSD": "1.3271", "HKDSEK": "1.2550", "HKDSGD": "0.1690", "JPYHKD": "0.0531", "JPYSEK": "0.0666", "NZDSEK": "5.7324", "NZDUSD": "0.5905", "SGDAUD": "1.1941", "SGDCHF": "0.6310", "SGDJPY": "110.5550", "USDAED": "3.6729", "USDARS": "1 170.5000", "USDBRL": "5.6632", "USDCAD": "1.3850", "USDCHF": "0.8297", "USDCLP": "946.7800", "USDCNY": "7.2706", "USDCOP": "4 252.4700", "USDCZK": "22.0480", "USDDKK": "6.6101", "USDEGP": "50.7400", "USDGBP": "0.7533", "USDHKD": "7.7566", "USDHUF": "357.9300", "USDIDR": "16 594.0000", "USDILS": "3.6136", "USDINR": "84.5600", "USDISK": "128.2000", "USDJPY": "145.2810", "USDKRW": "1 435.0800", "USDKWD": "0.3067", "USDKZT": "514.1300", "USDMXN": "19.5950", "USDMYR": "4.3120", "USDNOK": "10.4246", "USDPEN": "3.6623", "USDPHP": "55.8710", "USDPKR": "280.7600", "USDPLN": "3.7888", "USDQAR": "3.6400", "USDRON": "4.4071", "USDRUB": "81.7500", "USDSAR": "3.7503", "USDSEK": "9.7414", "USDSGD": "1.3118", "USDTHB": "33.5000", "USDTRY": "38.5529", "USDTWD": "32.1050", "USDUAH": "41.4706", "USDVND": "25 978.0000", "USDZAR": "18.5657"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 01.05.2025</th></tr>';

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
