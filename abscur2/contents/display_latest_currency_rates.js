
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1211", "AUDJPY": "96.3725", "AUDSEK": "6.2386", "AUDUSD": "0.6524", "CADJPY": "107.3781", "CADSEK": "6.9511", "CHFAUD": "1.8970", "CHFHKD": "9.7149", "CHFJPY": "182.8218", "EURAUD": "1.7827", "EURCAD": "1.6012", "EURCHF": "0.9404", "EURCNY": "8.3613", "EURCZK": "24.3980", "EURGBP": "0.8652", "EURHKD": "9.1361", "EURILS": "3.9826", "EURJPY": "171.9300", "EURNOK": "11.9410", "EURNZD": "1.9522", "EURRUB": "93.1068", "EURSEK": "11.1278", "EURSGD": "1.4955", "EURUSD": "1.1639", "EURZAR": "20.6492", "GBPAUD": "2.0615", "GBPCAD": "1.8502", "GBPCHF": "1.0867", "GBPHKD": "10.5569", "GBPJPY": "198.6686", "GBPNOK": "13.7981", "GBPRUB": "107.5859", "GBPSEK": "12.8607", "GBPSGD": "1.7281", "GBPUSD": "1.3449", "HKDSEK": "1.2182", "HKDSGD": "0.1637", "JPYHKD": "0.0531", "JPYSEK": "0.0647", "NZDSEK": "5.6964", "NZDUSD": "0.5957", "SGDAUD": "1.1929", "SGDCHF": "0.6288", "SGDJPY": "114.9661", "USDAED": "3.6727", "USDARS": "1 325.0000", "USDBRL": "5.4333", "USDCAD": "1.3757", "USDCHF": "0.8080", "USDCLP": "967.8000", "USDCNY": "7.1799", "USDCOP": "4 041.5000", "USDCZK": "20.9620", "USDDKK": "6.4110", "USDEGP": "48.5100", "USDGBP": "0.7436", "USDHKD": "7.8496", "USDHUF": "339.2500", "USDIDR": "16 285.0000", "USDILS": "3.4218", "USDINR": "87.4610", "USDISK": "122.6900", "USDJPY": "147.7200", "USDKRW": "1 388.6900", "USDKWD": "0.3054", "USDKZT": "540.3300", "USDMXN": "18.5650", "USDMYR": "4.2350", "USDNOK": "10.2596", "USDPEN": "3.5210", "USDPHP": "56.8590", "USDPKR": "283.1000", "USDPLN": "3.6428", "USDQAR": "3.6269", "USDRON": "4.3539", "USDRUB": "79.9955", "USDSAR": "3.7527", "USDSEK": "9.5626", "USDSGD": "1.2849", "USDTHB": "32.2700", "USDTRY": "40.6478", "USDTWD": "29.8920", "USDUAH": "41.4300", "USDVND": "26 200.0000", "USDZAR": "17.7414"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 08.08.2025</th></tr>';

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
