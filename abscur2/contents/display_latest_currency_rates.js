
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9384", "AUDJPY": "96.4400", "AUDSEK": "6.8253", "AUDUSD": "0.6350", "CADJPY": "106.8420", "CADSEK": "7.5616", "CHFAUD": "1.7393", "CHFHKD": "8.5942", "CHFJPY": "167.8280", "EURAUD": "1.6417", "EURCAD": "1.4819", "EURCHF": "0.9434", "EURCNY": "7.5968", "EURCZK": "25.1107", "EURGBP": "0.8285", "EURHKD": "8.1082", "EURILS": "3.6929", "EURJPY": "158.3470", "EURNOK": "11.6276", "EURNZD": "1.8251", "EURRUB": "93.6120", "EURSEK": "11.2085", "EURSGD": "1.4006", "EURUSD": "1.0427", "EURZAR": "19.3014", "GBPAUD": "1.9814", "GBPCAD": "1.7884", "GBPCHF": "1.1387", "GBPHKD": "9.7850", "GBPJPY": "191.1260", "GBPNOK": "14.0332", "GBPRUB": "112.9490", "GBPSEK": "13.5277", "GBPSGD": "1.6903", "GBPUSD": "1.2585", "HKDSEK": "1.3809", "HKDSGD": "0.1726", "JPYHKD": "0.0510", "JPYSEK": "0.0703", "NZDSEK": "6.1410", "NZDUSD": "0.5714", "SGDAUD": "1.1718", "SGDCHF": "0.6735", "SGDJPY": "113.0590", "USDAED": "3.6727", "USDARS": "1 058.0000", "USDBRL": "5.7205", "USDCAD": "1.4208", "USDCHF": "0.9046", "USDCLP": "952.3800", "USDCNY": "7.2850", "USDCOP": "4 089.9200", "USDCZK": "24.0750", "USDDKK": "7.1513", "USDEGP": "50.5600", "USDGBP": "0.7945", "USDHKD": "7.7767", "USDHUF": "385.6100", "USDIDR": "16 270.0000", "USDILS": "3.5474", "USDINR": "86.8400", "USDISK": "140.4000", "USDJPY": "151.8920", "USDKRW": "1 441.8100", "USDKWD": "0.3084", "USDKZT": "501.8200", "USDMXN": "20.3047", "USDMYR": "4.4380", "USDNOK": "11.1435", "USDPEN": "3.6830", "USDPHP": "58.1420", "USDPKR": "279.1600", "USDPLN": "4.0026", "USDQAR": "3.6400", "USDRON": "4.7709", "USDRUB": "89.6800", "USDSAR": "3.7473", "USDSEK": "10.7503", "USDSGD": "1.3430", "USDTHB": "33.6900", "USDTRY": "36.3021", "USDTWD": "32.7660", "USDUAH": "41.5554", "USDVND": "25 500.0000", "USDZAR": "18.5155"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.02.2025</th></tr>';

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
