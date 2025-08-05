
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0764", "AUDJPY": "95.1166", "AUDSEK": "6.2418", "AUDUSD": "0.6467", "CADJPY": "106.7576", "CADSEK": "7.0057", "CHFAUD": "1.9133", "CHFHKD": "9.7126", "CHFJPY": "181.9847", "EURAUD": "1.7885", "EURCAD": "1.5940", "EURCHF": "0.9351", "EURCNY": "8.3049", "EURCZK": "24.5390", "EURGBP": "0.8708", "EURHKD": "9.0821", "EURILS": "3.9510", "EURJPY": "170.1700", "EURNOK": "11.8772", "EURNZD": "1.9580", "EURRUB": "92.3523", "EURSEK": "11.1671", "EURSGD": "1.4899", "EURUSD": "1.1570", "EURZAR": "20.7479", "GBPAUD": "2.0540", "GBPCAD": "1.8304", "GBPCHF": "1.0673", "GBPHKD": "10.4224", "GBPJPY": "195.6646", "GBPNOK": "13.5105", "GBPRUB": "106.2180", "GBPSEK": "12.7953", "GBPSGD": "1.7107", "GBPUSD": "1.3278", "HKDSEK": "1.2277", "HKDSGD": "0.1641", "JPYHKD": "0.0533", "JPYSEK": "0.0654", "NZDSEK": "5.7009", "NZDUSD": "0.5916", "SGDAUD": "1.1987", "SGDCHF": "0.6239", "SGDJPY": "114.3744", "USDAED": "3.6729", "USDARS": "1 362.0000", "USDBRL": "5.5413", "USDCAD": "1.3785", "USDCHF": "0.8038", "USDCLP": "969.1100", "USDCNY": "7.1760", "USDCOP": "4 122.5300", "USDCZK": "21.1830", "USDDKK": "6.4403", "USDEGP": "48.6200", "USDGBP": "0.7531", "USDHKD": "7.8494", "USDHUF": "343.3600", "USDIDR": "16 485.0000", "USDILS": "3.4059", "USDINR": "87.2300", "USDISK": "123.2800", "USDJPY": "147.3600", "USDKRW": "1 388.7800", "USDKWD": "0.3053", "USDKZT": "542.4400", "USDMXN": "18.8531", "USDMYR": "4.2750", "USDNOK": "10.1751", "USDPEN": "3.5800", "USDPHP": "57.7090", "USDPKR": "282.8800", "USDPLN": "3.6790", "USDQAR": "3.6271", "USDRON": "4.3759", "USDRUB": "79.9955", "USDSAR": "3.7511", "USDSEK": "9.6365", "USDSGD": "1.2884", "USDTHB": "32.4500", "USDTRY": "40.6150", "USDTWD": "29.8200", "USDUAH": "41.7500", "USDVND": "26 190.0000", "USDZAR": "18.0501"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.08.2025</th></tr>';

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
