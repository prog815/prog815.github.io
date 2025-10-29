
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1138", "AUDJPY": "100.1122", "AUDSEK": "6.1647", "AUDUSD": "0.6582", "CADJPY": "109.0635", "CADSEK": "6.7159", "CHFAUD": "1.9156", "CHFHKD": "9.7962", "CHFJPY": "191.7791", "EURAUD": "1.7684", "EURCAD": "1.6246", "EURCHF": "0.9240", "EURCNY": "8.2702", "EURCZK": "24.2960", "EURGBP": "0.8777", "EURHKD": "9.0514", "EURILS": "3.7894", "EURJPY": "177.2000", "EURNOK": "11.6268", "EURNZD": "2.0149", "EURRUB": "92.3210", "EURSEK": "10.9113", "EURSGD": "1.5069", "EURUSD": "1.1650", "EURZAR": "19.9839", "GBPAUD": "2.0161", "GBPCAD": "1.8506", "GBPCHF": "1.0524", "GBPHKD": "10.3100", "GBPJPY": "201.8367", "GBPNOK": "13.2437", "GBPRUB": "105.1588", "GBPSEK": "12.4287", "GBPSGD": "1.7165", "GBPUSD": "1.3270", "HKDSEK": "1.2055", "HKDSGD": "0.1665", "JPYHKD": "0.0511", "JPYSEK": "0.0616", "NZDSEK": "5.4145", "NZDUSD": "0.5781", "SGDAUD": "1.1746", "SGDCHF": "0.6131", "SGDJPY": "117.5879", "USDAED": "3.6728", "USDARS": "1 471.0000", "USDBRL": "5.3578", "USDCAD": "1.3946", "USDCHF": "0.7931", "USDCLP": "942.3200", "USDCNY": "7.1000", "USDCOP": "3 892.5000", "USDCZK": "20.8550", "USDDKK": "6.4094", "USDEGP": "47.3200", "USDGBP": "0.7536", "USDHKD": "7.7694", "USDHUF": "332.9700", "USDIDR": "16 600.0000", "USDILS": "3.2527", "USDINR": "88.2140", "USDISK": "122.9300", "USDJPY": "152.1000", "USDKRW": "1 431.4000", "USDKWD": "0.3065", "USDKZT": "533.0000", "USDMXN": "18.4080", "USDMYR": "4.1950", "USDNOK": "9.9802", "USDPEN": "3.3890", "USDPHP": "59.0430", "USDPKR": "281.9000", "USDPLN": "3.6298", "USDQAR": "3.6269", "USDRON": "4.3616", "USDRUB": "79.2455", "USDSAR": "3.7499", "USDSEK": "9.3660", "USDSGD": "1.2935", "USDTHB": "32.3200", "USDTRY": "41.9498", "USDTWD": "30.5390", "USDUAH": "41.9328", "USDVND": "26 308.0000", "USDZAR": "17.1536"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 29.10.2025</th></tr>';

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
