
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1998", "AUDJPY": "97.8926", "AUDSEK": "6.1659", "AUDUSD": "0.6683", "CADJPY": "106.6240", "CADSEK": "6.7158", "CHFAUD": "1.9045", "CHFHKD": "9.9028", "CHFJPY": "186.4325", "EURAUD": "1.7745", "EURCAD": "1.6302", "EURCHF": "0.9323", "EURCNY": "8.4417", "EURCZK": "24.2940", "EURGBP": "0.8694", "EURHKD": "9.2325", "EURILS": "3.9434", "EURJPY": "173.8100", "EURNOK": "11.5690", "EURNZD": "1.9813", "EURRUB": "98.7198", "EURSEK": "10.9478", "EURSGD": "1.5135", "EURUSD": "1.1866", "EURZAR": "20.5760", "GBPAUD": "2.0421", "GBPCAD": "1.8731", "GBPCHF": "1.0801", "GBPHKD": "10.5774", "GBPJPY": "200.4050", "GBPNOK": "13.3535", "GBPRUB": "112.8407", "GBPSEK": "12.6050", "GBPSGD": "1.7407", "GBPUSD": "1.3596", "HKDSEK": "1.1917", "HKDSGD": "0.1646", "JPYHKD": "0.0528", "JPYSEK": "0.0629", "NZDSEK": "5.5348", "NZDUSD": "0.5970", "SGDAUD": "1.1717", "SGDCHF": "0.6205", "SGDJPY": "115.1293", "USDAED": "3.6728", "USDARS": "1 465.0000", "USDBRL": "5.3163", "USDCAD": "1.3777", "USDCHF": "0.7944", "USDCLP": "951.5800", "USDCNY": "7.1150", "USDCOP": "3 901.5000", "USDCZK": "20.6550", "USDDKK": "6.3468", "USDEGP": "48.1200", "USDGBP": "0.7355", "USDHKD": "7.7798", "USDHUF": "330.8800", "USDIDR": "16 405.0000", "USDILS": "3.3497", "USDINR": "88.0970", "USDISK": "121.6200", "USDJPY": "147.4000", "USDKRW": "1 384.9900", "USDKWD": "0.3050", "USDKZT": "540.4000", "USDMXN": "18.3560", "USDMYR": "4.2000", "USDNOK": "9.8216", "USDPEN": "3.4890", "USDPHP": "57.0720", "USDPKR": "282.6200", "USDPLN": "3.6099", "USDQAR": "3.6340", "USDRON": "4.3028", "USDRUB": "82.9955", "USDSAR": "3.7509", "USDSEK": "9.2711", "USDSGD": "1.2803", "USDTHB": "31.7700", "USDTRY": "41.2815", "USDTWD": "30.1930", "USDUAH": "41.2461", "USDVND": "26 355.0000", "USDZAR": "17.3486"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 16.09.2025</th></tr>';

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
