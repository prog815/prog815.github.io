
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9216", "AUDJPY": "94.1510", "AUDSEK": "6.4238", "AUDUSD": "0.6324", "CADJPY": "103.4820", "CADSEK": "7.0523", "CHFAUD": "1.7861", "CHFHKD": "8.8074", "CHFJPY": "168.2270", "EURAUD": "1.7194", "EURCAD": "1.5630", "EURCHF": "0.9622", "EURCNY": "7.8774", "EURCZK": "25.0026", "EURGBP": "0.8412", "EURHKD": "8.4525", "EURILS": "3.9875", "EURJPY": "161.8350", "EURNOK": "11.5740", "EURNZD": "1.8916", "EURRUB": "93.0290", "EURSEK": "11.0178", "EURSGD": "1.4514", "EURUSD": "1.0877", "EURZAR": "19.8078", "GBPAUD": "2.0437", "GBPCAD": "1.8577", "GBPCHF": "1.1436", "GBPHKD": "10.0470", "GBPJPY": "192.4170", "GBPNOK": "13.7538", "GBPRUB": "108.9610", "GBPSEK": "13.0900", "GBPSGD": "1.7253", "GBPUSD": "1.2929", "HKDSEK": "1.3004", "HKDSGD": "0.1713", "JPYHKD": "0.0520", "JPYSEK": "0.0676", "NZDSEK": "5.8549", "NZDUSD": "0.5751", "SGDAUD": "1.1847", "SGDCHF": "0.6626", "SGDJPY": "111.6110", "USDAED": "3.6723", "USDARS": "1 065.7500", "USDBRL": "5.7452", "USDCAD": "1.4368", "USDCHF": "0.8845", "USDCLP": "928.6600", "USDCNY": "7.2350", "USDCOP": "4 097.4700", "USDCZK": "22.9880", "USDDKK": "6.8571", "USDEGP": "50.5100", "USDGBP": "0.7728", "USDHKD": "7.7717", "USDHUF": "367.2300", "USDIDR": "16 334.0000", "USDILS": "3.6544", "USDINR": "86.9260", "USDISK": "133.6900", "USDJPY": "148.6850", "USDKRW": "1 448.8800", "USDKWD": "0.3078", "USDKZT": "499.0300", "USDMXN": "19.9230", "USDMYR": "4.4450", "USDNOK": "10.6317", "USDPEN": "3.6558", "USDPHP": "57.2300", "USDPKR": "280.1077", "USDPLN": "3.8466", "USDQAR": "3.6400", "USDRON": "4.5718", "USDRUB": "85.2500", "USDSAR": "3.7474", "USDSEK": "10.1272", "USDSGD": "1.3327", "USDTHB": "33.6500", "USDTRY": "36.6686", "USDTWD": "32.9350", "USDUAH": "41.5270", "USDVND": "25 500.0000", "USDZAR": "18.1885"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 17.03.2025</th></tr>';

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
