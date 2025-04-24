
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9710", "AUDJPY": "91.0420", "AUDSEK": "6.1637", "AUDUSD": "0.6360", "CADJPY": "103.0820", "CADSEK": "6.9758", "CHFAUD": "1.8895", "CHFHKD": "9.3475", "CHFJPY": "172.4630", "EURAUD": "1.7785", "EURCAD": "1.5713", "EURCHF": "0.9396", "EURCNY": "8.2444", "EURCZK": "24.9880", "EURGBP": "0.8537", "EURHKD": "8.7807", "EURILS": "4.1247", "EURJPY": "162.0350", "EURNOK": "11.9707", "EURNZD": "1.9032", "EURRUB": "93.9620", "EURSEK": "10.9756", "EURSGD": "1.4900", "EURUSD": "1.1324", "EURZAR": "21.1001", "GBPAUD": "2.0826", "GBPCAD": "1.8399", "GBPCHF": "1.0994", "GBPHKD": "10.2850", "GBPJPY": "189.7600", "GBPNOK": "14.0153", "GBPRUB": "110.0320", "GBPSEK": "12.7553", "GBPSGD": "1.7444", "GBPUSD": "1.3261", "HKDSEK": "1.2343", "HKDSGD": "0.1696", "JPYHKD": "0.0544", "JPYSEK": "0.0672", "NZDSEK": "5.7491", "NZDUSD": "0.5945", "SGDAUD": "1.1936", "SGDCHF": "0.6301", "SGDJPY": "108.7290", "USDAED": "3.6727", "USDARS": "1 160.0000", "USDBRL": "5.7111", "USDCAD": "1.3883", "USDCHF": "0.8290", "USDCLP": "939.9000", "USDCNY": "7.2885", "USDCOP": "4 305.3100", "USDCZK": "22.0490", "USDDKK": "6.5915", "USDEGP": "50.9100", "USDGBP": "0.7540", "USDHKD": "7.7591", "USDHUF": "360.4100", "USDIDR": "16 859.0000", "USDILS": "3.6417", "USDINR": "85.3240", "USDISK": "126.6000", "USDJPY": "143.1240", "USDKRW": "1 426.4000", "USDKWD": "0.3059", "USDKZT": "518.5800", "USDMXN": "19.6020", "USDMYR": "4.3880", "USDNOK": "10.5648", "USDPEN": "3.6888", "USDPHP": "56.5180", "USDPKR": "280.7500", "USDPLN": "3.7757", "USDQAR": "3.6400", "USDRON": "4.3663", "USDRUB": "82.8750", "USDSAR": "3.7479", "USDSEK": "9.6826", "USDSGD": "1.3161", "USDTHB": "33.4970", "USDTRY": "38.3015", "USDTWD": "32.5470", "USDUAH": "41.5185", "USDVND": "25 965.0000", "USDZAR": "18.6275"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 23.04.2025</th></tr>';

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
