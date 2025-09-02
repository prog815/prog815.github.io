
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1076", "AUDJPY": "96.4111", "AUDSEK": "6.1490", "AUDUSD": "0.6551", "CADJPY": "107.0327", "CADSEK": "6.8265", "CHFAUD": "1.9064", "CHFHKD": "9.7374", "CHFJPY": "183.8017", "EURAUD": "1.7865", "EURCAD": "1.6100", "EURCHF": "0.9370", "EURCNY": "8.3574", "EURCZK": "24.3960", "EURGBP": "0.8643", "EURHKD": "9.1293", "EURILS": "3.9301", "EURJPY": "172.3200", "EURNOK": "11.7013", "EURNZD": "1.9832", "EURRUB": "94.3400", "EURSEK": "10.9914", "EURSGD": "1.5032", "EURUSD": "1.1709", "EURZAR": "20.6159", "GBPAUD": "2.0673", "GBPCAD": "1.8622", "GBPCHF": "1.0844", "GBPHKD": "10.5591", "GBPJPY": "199.3123", "GBPNOK": "13.5392", "GBPRUB": "109.1166", "GBPSEK": "12.7120", "GBPSGD": "1.7387", "GBPUSD": "1.3543", "HKDSEK": "1.2039", "HKDSGD": "0.1647", "JPYHKD": "0.0530", "JPYSEK": "0.0638", "NZDSEK": "5.5399", "NZDUSD": "0.5902", "SGDAUD": "1.1890", "SGDCHF": "0.6237", "SGDJPY": "114.6362", "USDAED": "3.6727", "USDARS": "1 375.5000", "USDBRL": "5.4399", "USDCAD": "1.3750", "USDCHF": "0.8007", "USDCLP": "967.5000", "USDCNY": "7.1430", "USDCOP": "4 015.2300", "USDCZK": "20.8340", "USDDKK": "6.3726", "USDEGP": "48.5000", "USDGBP": "0.7384", "USDHKD": "7.7967", "USDHUF": "337.2300", "USDIDR": "16 410.0000", "USDILS": "3.3565", "USDINR": "87.9810", "USDISK": "122.3000", "USDJPY": "147.1700", "USDKRW": "1 392.7100", "USDKWD": "0.3055", "USDKZT": "538.2700", "USDMXN": "18.6385", "USDMYR": "4.2220", "USDNOK": "9.9972", "USDPEN": "3.5346", "USDPHP": "57.1370", "USDPKR": "283.0000", "USDPLN": "3.6396", "USDQAR": "3.6273", "USDRON": "4.3264", "USDRUB": "80.5705", "USDSAR": "3.7525", "USDSEK": "9.3864", "USDSGD": "1.2838", "USDTHB": "32.2800", "USDTRY": "41.0823", "USDTWD": "30.6140", "USDUAH": "41.2500", "USDVND": "26 340.0000", "USDZAR": "17.6083"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 02.09.2025</th></tr>';

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
