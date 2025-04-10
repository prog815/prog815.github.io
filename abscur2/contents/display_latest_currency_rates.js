
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.7722", "AUDJPY": "90.5940", "AUDSEK": "6.1343", "AUDUSD": "0.6150", "CADJPY": "104.5560", "CADSEK": "7.0269", "CHFAUD": "1.8971", "CHFHKD": "9.0626", "CHFJPY": "172.1050", "EURAUD": "1.7791", "EURCAD": "1.5421", "EURCHF": "0.9375", "EURCNY": "8.0564", "EURCZK": "24.9850", "EURGBP": "0.8537", "EURHKD": "8.4998", "EURILS": "4.0975", "EURJPY": "161.3680", "EURNOK": "11.8024", "EURNZD": "1.9382", "EURRUB": "94.3480", "EURSEK": "10.9314", "EURSGD": "1.4682", "EURUSD": "1.0950", "EURZAR": "21.1165", "GBPAUD": "2.0826", "GBPCAD": "1.8054", "GBPCHF": "1.0977", "GBPHKD": "9.9490", "GBPJPY": "188.8720", "GBPNOK": "13.8176", "GBPRUB": "110.4420", "GBPSEK": "12.7943", "GBPSGD": "1.7177", "GBPUSD": "1.2818", "HKDSEK": "1.2980", "HKDSGD": "0.1727", "JPYHKD": "0.0524", "JPYSEK": "0.0684", "NZDSEK": "5.6140", "NZDUSD": "0.5642", "SGDAUD": "1.2119", "SGDCHF": "0.6381", "SGDJPY": "109.9110", "USDAED": "3.6729", "USDARS": "1 076.2500", "USDBRL": "5.8187", "USDCAD": "1.4089", "USDCHF": "0.8565", "USDCLP": "980.1800", "USDCNY": "7.3445", "USDCOP": "4 297.9700", "USDCZK": "22.8240", "USDDKK": "6.8146", "USDEGP": "51.6200", "USDGBP": "0.7798", "USDHKD": "7.7610", "USDHUF": "368.5400", "USDIDR": "16 859.0000", "USDILS": "3.7425", "USDINR": "86.6160", "USDISK": "132.2000", "USDJPY": "147.3680", "USDKRW": "1 445.7800", "USDKWD": "0.3073", "USDKZT": "520.3300", "USDMXN": "20.2430", "USDMYR": "4.4940", "USDNOK": "10.7542", "USDPEN": "3.7148", "USDPHP": "57.2810", "USDPKR": "280.5600", "USDPLN": "3.8660", "USDQAR": "3.6400", "USDRON": "4.5423", "USDRUB": "85.9000", "USDSAR": "3.7510", "USDSEK": "9.9671", "USDSGD": "1.3406", "USDTHB": "34.1900", "USDTRY": "37.9320", "USDTWD": "32.5810", "USDUAH": "41.1740", "USDVND": "25 960.0000", "USDZAR": "19.3094"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 09.04.2025</th></tr>';

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
