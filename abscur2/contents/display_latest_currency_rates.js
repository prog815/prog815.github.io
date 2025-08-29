
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0892", "AUDJPY": "95.9388", "AUDSEK": "6.1853", "AUDUSD": "0.6530", "CADJPY": "106.8665", "CADSEK": "6.8899", "CHFAUD": "1.9114", "CHFHKD": "9.7274", "CHFJPY": "183.3749", "EURAUD": "1.7879", "EURCAD": "1.6060", "EURCHF": "0.9360", "EURCNY": "8.3300", "EURCZK": "24.5210", "EURGBP": "0.8644", "EURHKD": "9.1050", "EURILS": "3.8796", "EURJPY": "171.6400", "EURNOK": "11.7415", "EURNZD": "1.9850", "EURRUB": "93.8065", "EURSEK": "11.0654", "EURSGD": "1.4977", "EURUSD": "1.1682", "EURZAR": "20.6651", "GBPAUD": "2.0692", "GBPCAD": "1.8576", "GBPCHF": "1.0826", "GBPHKD": "10.5307", "GBPJPY": "198.5183", "GBPNOK": "13.5913", "GBPRUB": "108.5014", "GBPSEK": "12.7988", "GBPSGD": "1.7324", "GBPUSD": "1.3512", "HKDSEK": "1.2154", "HKDSGD": "0.1645", "JPYHKD": "0.0530", "JPYSEK": "0.0645", "NZDSEK": "5.5734", "NZDUSD": "0.5884", "SGDAUD": "1.1944", "SGDCHF": "0.6249", "SGDJPY": "114.5932", "USDAED": "3.6727", "USDARS": "1 331.0000", "USDBRL": "5.4125", "USDCAD": "1.3748", "USDCHF": "0.8012", "USDCLP": "966.4800", "USDCNY": "7.1290", "USDCOP": "4 015.0000", "USDCZK": "20.9900", "USDDKK": "6.3890", "USDEGP": "48.4500", "USDGBP": "0.7401", "USDHKD": "7.7936", "USDHUF": "339.4600", "USDIDR": "16 340.0000", "USDILS": "3.3196", "USDINR": "87.5610", "USDISK": "122.2500", "USDJPY": "146.9200", "USDKRW": "1 385.2900", "USDKWD": "0.3052", "USDKZT": "537.2000", "USDMXN": "18.6480", "USDMYR": "4.2140", "USDNOK": "10.0587", "USDPEN": "3.5392", "USDPHP": "56.8980", "USDPKR": "283.3000", "USDPLN": "3.6486", "USDQAR": "3.6367", "USDRON": "4.3388", "USDRUB": "80.3000", "USDSAR": "3.7522", "USDSEK": "9.4722", "USDSGD": "1.2821", "USDTHB": "32.2600", "USDTRY": "40.9945", "USDTWD": "30.4800", "USDUAH": "41.2800", "USDVND": "26 360.0000", "USDZAR": "17.6867"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 29.08.2025</th></tr>';

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
