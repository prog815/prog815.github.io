
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0618", "AUDJPY": "95.7550", "AUDSEK": "6.2087", "AUDUSD": "0.6480", "CADJPY": "106.6239", "CADSEK": "6.9134", "CHFAUD": "1.9151", "CHFHKD": "9.6941", "CHFJPY": "183.3830", "EURAUD": "1.7915", "EURCAD": "1.6101", "EURCHF": "0.9362", "EURCNY": "8.3080", "EURCZK": "24.5300", "EURGBP": "0.8633", "EURHKD": "9.0754", "EURILS": "3.9228", "EURJPY": "171.6800", "EURNOK": "11.7575", "EURNZD": "1.9860", "EURRUB": "93.7520", "EURSEK": "11.1359", "EURSGD": "1.4934", "EURUSD": "1.1618", "EURZAR": "20.4456", "GBPAUD": "2.0762", "GBPCAD": "1.8696", "GBPCHF": "1.0835", "GBPHKD": "10.5660", "GBPJPY": "198.6788", "GBPNOK": "13.5975", "GBPRUB": "108.9136", "GBPSEK": "12.8274", "GBPSGD": "1.7323", "GBPUSD": "1.3522", "HKDSEK": "1.2140", "HKDSGD": "0.1640", "JPYHKD": "0.0532", "JPYSEK": "0.0646", "NZDSEK": "5.5656", "NZDUSD": "0.5867", "SGDAUD": "1.2031", "SGDCHF": "0.6255", "SGDJPY": "114.6905", "USDAED": "3.6726", "USDARS": "1 320.0000", "USDBRL": "5.4217", "USDCAD": "1.3826", "USDCHF": "0.8013", "USDCLP": "957.4000", "USDCNY": "7.1660", "USDCOP": "4 014.5000", "USDCZK": "20.9070", "USDDKK": "6.3685", "USDEGP": "48.4500", "USDGBP": "0.7395", "USDHKD": "7.8139", "USDHUF": "336.9400", "USDIDR": "16 335.0000", "USDILS": "3.3694", "USDINR": "87.3260", "USDISK": "122.2400", "USDJPY": "146.9300", "USDKRW": "1 383.8200", "USDKWD": "0.3053", "USDKZT": "537.1100", "USDMXN": "18.5810", "USDMYR": "4.2250", "USDNOK": "10.0558", "USDPEN": "3.4876", "USDPHP": "56.4010", "USDPKR": "282.9000", "USDPLN": "3.6351", "USDQAR": "3.6177", "USDRON": "4.3087", "USDRUB": "80.5455", "USDSAR": "3.7527", "USDSEK": "9.4863", "USDSGD": "1.2811", "USDTHB": "32.3700", "USDTRY": "40.9307", "USDTWD": "30.3670", "USDUAH": "41.3500", "USDVND": "26 300.0000", "USDZAR": "17.4316"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 25.08.2025</th></tr>';

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
