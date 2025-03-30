
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8880", "AUDJPY": "94.2190", "AUDSEK": "6.2873", "AUDUSD": "0.6287", "CADJPY": "104.6370", "CADSEK": "6.9843", "CHFAUD": "1.8054", "CHFHKD": "8.8196", "CHFJPY": "170.1540", "EURAUD": "1.7216", "EURCAD": "1.5499", "EURCHF": "0.9531", "EURCNY": "7.8629", "EURCZK": "24.8920", "EURGBP": "0.8366", "EURHKD": "8.4149", "EURILS": "3.9992", "EURJPY": "162.2660", "EURNOK": "11.3512", "EURNZD": "1.8942", "EURRUB": "91.9720", "EURSEK": "10.8335", "EURSGD": "1.4524", "EURUSD": "1.0823", "EURZAR": "19.9443", "GBPAUD": "2.0583", "GBPCAD": "1.8528", "GBPCHF": "1.1393", "GBPHKD": "10.0640", "GBPJPY": "193.9440", "GBPNOK": "13.5690", "GBPRUB": "109.4295", "GBPSEK": "12.9468", "GBPSGD": "1.7360", "GBPUSD": "1.2938", "HKDSEK": "1.2851", "HKDSGD": "0.1726", "JPYHKD": "0.0517", "JPYSEK": "0.0662", "NZDSEK": "5.7125", "NZDUSD": "0.5713", "SGDAUD": "1.1844", "SGDCHF": "0.6547", "SGDJPY": "111.6260", "USDAED": "3.6728", "USDARS": "1 070.5000", "USDBRL": "5.7587", "USDCAD": "1.4317", "USDCHF": "0.8803", "USDCLP": "950.4300", "USDCNY": "7.2630", "USDCOP": "4 198.9700", "USDCZK": "22.9940", "USDDKK": "6.8876", "USDEGP": "50.5200", "USDGBP": "0.7726", "USDHKD": "7.7777", "USDHUF": "371.3400", "USDIDR": "16 554.0000", "USDILS": "3.6883", "USDINR": "85.5140", "USDISK": "131.6800", "USDJPY": "149.8300", "USDKRW": "1 469.7300", "USDKWD": "0.3083", "USDKZT": "496.8660", "USDMXN": "20.3440", "USDMYR": "4.4350", "USDNOK": "10.4600", "USDPEN": "3.6568", "USDPHP": "57.3600", "USDPKR": "279.9600", "USDPLN": "3.8549", "USDQAR": "3.6400", "USDRON": "4.5922", "USDRUB": "84.9250", "USDSAR": "3.7479", "USDSEK": "9.9986", "USDSGD": "1.3424", "USDTHB": "33.8700", "USDTRY": "37.8759", "USDTWD": "33.1830", "USDUAH": "41.4863", "USDVND": "25 550.0000", "USDZAR": "18.4136"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 30.03.2025</th></tr>';

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
