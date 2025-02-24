
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9471", "AUDJPY": "95.3250", "AUDSEK": "6.7754", "AUDUSD": "0.6365", "CADJPY": "105.3950", "CADSEK": "7.4907", "CHFAUD": "1.7457", "CHFHKD": "8.6419", "CHFJPY": "166.5070", "EURAUD": "1.6441", "EURCAD": "1.4873", "EURCHF": "0.9413", "EURCNY": "7.5854", "EURCZK": "25.0630", "EURGBP": "0.8281", "EURHKD": "8.1349", "EURILS": "3.7266", "EURJPY": "156.7320", "EURNOK": "11.6205", "EURNZD": "1.8214", "EURRUB": "92.0880", "EURSEK": "11.1441", "EURSGD": "1.3996", "EURUSD": "1.0463", "EURZAR": "19.1923", "GBPAUD": "1.9853", "GBPCAD": "1.7973", "GBPCHF": "1.1340", "GBPHKD": "9.8150", "GBPJPY": "188.6040", "GBPNOK": "14.0856", "GBPRUB": "111.7910", "GBPSEK": "13.4478", "GBPSGD": "1.6869", "GBPUSD": "1.2636", "HKDSEK": "1.3686", "HKDSGD": "0.1720", "JPYHKD": "0.0517", "JPYSEK": "0.0707", "NZDSEK": "6.1234", "NZDUSD": "0.5742", "SGDAUD": "1.1763", "SGDCHF": "0.6701", "SGDJPY": "111.7090", "USDAED": "3.6728", "USDARS": "1 058.2500", "USDBRL": "5.7295", "USDCAD": "1.4231", "USDCHF": "0.8979", "USDCLP": "942.0000", "USDCNY": "7.2530", "USDCOP": "4 084.9000", "USDCZK": "23.9350", "USDDKK": "7.1289", "USDEGP": "50.5000", "USDGBP": "0.7914", "USDHKD": "7.7695", "USDHUF": "385.1600", "USDIDR": "16 300.0000", "USDILS": "3.5651", "USDINR": "86.5900", "USDISK": "139.1000", "USDJPY": "149.3240", "USDKRW": "1 432.0000", "USDKWD": "0.3087", "USDKZT": "505.6200", "USDMXN": "20.4090", "USDMYR": "4.4160", "USDNOK": "11.1361", "USDPEN": "3.6850", "USDPHP": "57.8720", "USDPKR": "279.4000", "USDPLN": "3.9717", "USDQAR": "3.6385", "USDRON": "4.7556", "USDRUB": "88.5000", "USDSAR": "3.7460", "USDSEK": "10.6344", "USDSGD": "1.3361", "USDTHB": "33.5200", "USDTRY": "36.3864", "USDTWD": "32.7710", "USDUAH": "41.7316", "USDVND": "25 510.0000", "USDZAR": "18.3450"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.02.2025</th></tr>';

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
