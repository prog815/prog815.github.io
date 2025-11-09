
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0479", "AUDJPY": "99.5719", "AUDSEK": "6.1750", "AUDUSD": "0.6491", "CADJPY": "109.2048", "CADSEK": "6.7746", "CHFAUD": "1.9143", "CHFHKD": "9.6630", "CHFJPY": "190.6064", "EURAUD": "1.7801", "EURCAD": "1.6245", "EURCHF": "0.9308", "EURCNY": "8.2365", "EURCZK": "24.2750", "EURGBP": "0.8785", "EURHKD": "8.9939", "EURILS": "3.7475", "EURJPY": "177.4100", "EURNOK": "11.7216", "EURNZD": "2.0553", "EURRUB": "93.6135", "EURSEK": "11.0020", "EURSGD": "1.5045", "EURUSD": "1.1565", "EURZAR": "19.9955", "GBPAUD": "2.0270", "GBPCAD": "1.8482", "GBPCHF": "1.0589", "GBPHKD": "10.2319", "GBPJPY": "201.8284", "GBPNOK": "13.3352", "GBPRUB": "106.5000", "GBPSEK": "12.5165", "GBPSGD": "1.7116", "GBPUSD": "1.3157", "HKDSEK": "1.2233", "HKDSGD": "0.1673", "JPYHKD": "0.0507", "JPYSEK": "0.0620", "NZDSEK": "5.3521", "NZDUSD": "0.5626", "SGDAUD": "1.1843", "SGDCHF": "0.6187", "SGDJPY": "117.9184", "USDAED": "3.6726", "USDARS": "1 415.0000", "USDBRL": "5.3321", "USDCAD": "1.4047", "USDCHF": "0.8048", "USDCLP": "944.2500", "USDCNY": "7.1210", "USDCOP": "3 777.5000", "USDCZK": "20.9900", "USDDKK": "6.4565", "USDEGP": "47.3000", "USDGBP": "0.7601", "USDHKD": "7.7768", "USDHUF": "332.5400", "USDIDR": "16 680.0000", "USDILS": "3.2404", "USDINR": "88.6390", "USDISK": "126.4400", "USDJPY": "153.4000", "USDKRW": "1 455.8400", "USDKWD": "0.3068", "USDKZT": "524.5600", "USDMXN": "18.4400", "USDMYR": "4.1730", "USDNOK": "10.1354", "USDPEN": "3.3750", "USDPHP": "58.9080", "USDPKR": "280.8000", "USDPLN": "3.6618", "USDQAR": "3.6357", "USDRON": "4.3960", "USDRUB": "80.9455", "USDSAR": "3.7500", "USDSEK": "9.5132", "USDSGD": "1.3009", "USDTHB": "32.3600", "USDTRY": "42.1896", "USDTWD": "30.9670", "USDUAH": "41.8036", "USDVND": "26 280.0000", "USDZAR": "17.2897"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 07.11.2025</th></tr>';

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
