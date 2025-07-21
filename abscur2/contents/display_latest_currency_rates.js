
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1070", "AUDJPY": "96.8456", "AUDSEK": "6.2754", "AUDUSD": "0.6508", "CADJPY": "108.4542", "CADSEK": "7.0276", "CHFAUD": "1.9176", "CHFHKD": "9.7931", "CHFJPY": "185.7107", "EURAUD": "1.7852", "EURCAD": "1.5951", "EURCHF": "0.9315", "EURCNY": "8.3440", "EURCZK": "24.6220", "EURGBP": "0.8667", "EURHKD": "9.1224", "EURILS": "3.9007", "EURJPY": "172.9900", "EURNOK": "11.8082", "EURNZD": "1.9495", "EURRUB": "91.4888", "EURSEK": "11.2095", "EURSGD": "1.4937", "EURUSD": "1.1625", "EURZAR": "20.5881", "GBPAUD": "2.0596", "GBPCAD": "1.8392", "GBPCHF": "1.0741", "GBPHKD": "10.5184", "GBPJPY": "199.4649", "GBPNOK": "13.6152", "GBPRUB": "105.4895", "GBPSEK": "12.9249", "GBPSGD": "1.7223", "GBPUSD": "1.3404", "HKDSEK": "1.2288", "HKDSGD": "0.1637", "JPYHKD": "0.0527", "JPYSEK": "0.0648", "NZDSEK": "5.7788", "NZDUSD": "0.5962", "SGDAUD": "1.1959", "SGDCHF": "0.6236", "SGDJPY": "115.8145", "USDAED": "3.6728", "USDARS": "1 285.0000", "USDBRL": "5.5785", "USDCAD": "1.3721", "USDCHF": "0.8013", "USDCLP": "962.5300", "USDCNY": "7.1776", "USDCOP": "4 025.5000", "USDCZK": "21.1800", "USDDKK": "6.4212", "USDEGP": "49.3600", "USDGBP": "0.7460", "USDHKD": "7.8472", "USDHUF": "342.8800", "USDIDR": "16 285.0000", "USDILS": "3.3554", "USDINR": "86.1450", "USDISK": "122.3400", "USDJPY": "148.8100", "USDKRW": "1 390.8100", "USDKWD": "0.3056", "USDKZT": "532.2000", "USDMXN": "18.7310", "USDMYR": "4.2440", "USDNOK": "10.1576", "USDPEN": "3.5650", "USDPHP": "57.0000", "USDPKR": "284.6200", "USDPLN": "3.6472", "USDQAR": "3.6367", "USDRON": "4.3723", "USDRUB": "78.7000", "USDSAR": "3.7509", "USDSEK": "9.6426", "USDSGD": "1.2849", "USDTHB": "32.3300", "USDTRY": "40.3613", "USDTWD": "29.3950", "USDUAH": "41.7300", "USDVND": "26 140.0000", "USDZAR": "17.7102"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.07.2025</th></tr>';

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
