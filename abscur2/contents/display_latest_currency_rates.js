
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8742", "AUDJPY": "90.6660", "AUDSEK": "6.1424", "AUDUSD": "0.6333", "CADJPY": "102.5220", "CADSEK": "7.0445", "CHFAUD": "1.9315", "CHFHKD": "9.4261", "CHFJPY": "174.0010", "EURAUD": "1.7799", "EURCAD": "1.5749", "EURCHF": "0.9285", "EURCNY": "8.2525", "EURCZK": "25.0690", "EURGBP": "0.8529", "EURHKD": "8.7495", "EURILS": "4.1439", "EURJPY": "161.4660", "EURNOK": "12.0086", "EURNZD": "1.9139", "EURRUB": "94.2460", "EURSEK": "11.1416", "EURSGD": "1.4922", "EURUSD": "1.1281", "EURZAR": "21.4594", "GBPAUD": "2.0864", "GBPCAD": "1.8458", "GBPCHF": "1.0875", "GBPHKD": "10.2580", "GBPJPY": "189.2670", "GBPNOK": "13.9196", "GBPRUB": "109.2600", "GBPSEK": "13.0587", "GBPSGD": "1.7441", "GBPUSD": "1.3222", "HKDSEK": "1.2460", "HKDSGD": "0.1720", "JPYHKD": "0.0537", "JPYSEK": "0.0676", "NZDSEK": "5.6524", "NZDUSD": "0.5890", "SGDAUD": "1.2050", "SGDCHF": "0.6234", "SGDJPY": "108.3050", "USDAED": "3.6729", "USDARS": "1 197.0000", "USDBRL": "5.8864", "USDCAD": "1.3959", "USDCHF": "0.8225", "USDCLP": "969.7800", "USDCNY": "7.3151", "USDCOP": "4 348.4700", "USDCZK": "22.2110", "USDDKK": "6.6161", "USDEGP": "50.9300", "USDGBP": "0.7561", "USDHKD": "7.7571", "USDHUF": "361.4800", "USDIDR": "16 809.0000", "USDILS": "3.6765", "USDINR": "85.6630", "USDISK": "127.5000", "USDJPY": "143.1690", "USDKRW": "1 426.9900", "USDKWD": "0.3067", "USDKZT": "517.9300", "USDMXN": "20.0850", "USDMYR": "4.4100", "USDNOK": "10.6322", "USDPEN": "3.7398", "USDPHP": "56.7120", "USDPKR": "280.2400", "USDPLN": "3.8014", "USDQAR": "3.6400", "USDRON": "4.4092", "USDRUB": "83.3000", "USDSAR": "3.7493", "USDSEK": "9.8623", "USDSGD": "1.3183", "USDTHB": "33.5300", "USDTRY": "38.0958", "USDTWD": "32.5010", "USDUAH": "41.3153", "USDVND": "25 790.0000", "USDZAR": "19.0193"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.04.2025</th></tr>';

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
