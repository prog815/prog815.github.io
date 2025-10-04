
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1361", "AUDJPY": "97.3251", "AUDSEK": "6.1957", "AUDUSD": "0.6601", "CADJPY": "105.7069", "CADSEK": "6.7267", "CHFAUD": "1.9011", "CHFHKD": "9.7578", "CHFJPY": "185.3892", "EURAUD": "1.7771", "EURCAD": "1.6376", "EURCHF": "0.9338", "EURCNY": "8.3584", "EURCZK": "24.2430", "EURGBP": "0.8709", "EURHKD": "9.1354", "EURILS": "3.8810", "EURJPY": "173.1200", "EURNOK": "11.6681", "EURNZD": "2.0132", "EURRUB": "96.5644", "EURSEK": "10.9863", "EURSGD": "1.5129", "EURUSD": "1.1741", "EURZAR": "20.2576", "GBPAUD": "2.0418", "GBPCAD": "1.8799", "GBPCHF": "1.0719", "GBPHKD": "10.4870", "GBPJPY": "198.7196", "GBPNOK": "13.3865", "GBPRUB": "110.8999", "GBPSEK": "12.6116", "GBPSGD": "1.7368", "GBPUSD": "1.3478", "HKDSEK": "1.2026", "HKDSGD": "0.1656", "JPYHKD": "0.0528", "JPYSEK": "0.0638", "NZDSEK": "5.4562", "NZDUSD": "0.5831", "SGDAUD": "1.1756", "SGDCHF": "0.6172", "SGDJPY": "114.4188", "USDAED": "3.6729", "USDARS": "1 424.5000", "USDBRL": "5.3370", "USDCAD": "1.3948", "USDCHF": "0.7953", "USDCLP": "965.2700", "USDCNY": "7.1190", "USDCOP": "3 868.0500", "USDCZK": "20.6480", "USDDKK": "6.3575", "USDEGP": "47.7000", "USDGBP": "0.7419", "USDHKD": "7.7808", "USDHUF": "330.2100", "USDIDR": "16 530.0000", "USDILS": "3.2912", "USDINR": "88.7300", "USDISK": "120.7900", "USDJPY": "147.4400", "USDKRW": "1 407.4000", "USDKWD": "0.3055", "USDKZT": "546.3700", "USDMXN": "18.3810", "USDMYR": "4.2060", "USDNOK": "9.9321", "USDPEN": "3.4603", "USDPHP": "57.8910", "USDPKR": "282.1500", "USDPLN": "3.6181", "USDQAR": "3.6179", "USDRON": "4.3308", "USDRUB": "82.2455", "USDSAR": "3.7503", "USDSEK": "9.3572", "USDSGD": "1.2886", "USDTHB": "32.3000", "USDTRY": "41.6541", "USDTWD": "30.3850", "USDUAH": "41.3000", "USDVND": "26 380.0000", "USDZAR": "17.2189"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.10.2025</th></tr>';

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
