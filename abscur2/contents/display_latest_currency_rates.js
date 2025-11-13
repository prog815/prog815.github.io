
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0809", "AUDJPY": "101.1886", "AUDSEK": "6.1703", "AUDUSD": "0.6538", "CADJPY": "110.5105", "CADSEK": "6.7387", "CHFAUD": "1.9177", "CHFHKD": "9.7435", "CHFJPY": "194.0446", "EURAUD": "1.7717", "EURCAD": "1.6235", "EURCHF": "0.9246", "EURCNY": "8.2442", "EURCZK": "24.2110", "EURGBP": "0.8825", "EURHKD": "9.0086", "EURILS": "3.7031", "EURJPY": "179.4100", "EURNOK": "11.6735", "EURNZD": "2.0437", "EURRUB": "94.2088", "EURSEK": "10.9401", "EURSGD": "1.5084", "EURUSD": "1.1592", "EURZAR": "19.7948", "GBPAUD": "2.0083", "GBPCAD": "1.8389", "GBPCHF": "1.0473", "GBPHKD": "10.2038", "GBPJPY": "203.2130", "GBPNOK": "13.2223", "GBPRUB": "106.7082", "GBPSEK": "12.3916", "GBPSGD": "1.7085", "GBPUSD": "1.3130", "HKDSEK": "1.2144", "HKDSGD": "0.1674", "JPYHKD": "0.0502", "JPYSEK": "0.0610", "NZDSEK": "5.3483", "NZDUSD": "0.5667", "SGDAUD": "1.1755", "SGDCHF": "0.6130", "SGDJPY": "118.9441", "USDAED": "3.6729", "USDARS": "1 407.0000", "USDBRL": "5.2925", "USDCAD": "1.4005", "USDCHF": "0.7976", "USDCLP": "929.1200", "USDCNY": "7.1020", "USDCOP": "3 704.5000", "USDCZK": "20.8860", "USDDKK": "6.4413", "USDEGP": "47.1500", "USDGBP": "0.7616", "USDHKD": "7.7714", "USDHUF": "331.6000", "USDIDR": "16 695.0000", "USDILS": "3.1945", "USDINR": "88.5700", "USDISK": "126.6500", "USDJPY": "154.7700", "USDKRW": "1 469.2700", "USDKWD": "0.3070", "USDKZT": "524.1800", "USDMXN": "18.2847", "USDMYR": "4.1330", "USDNOK": "10.0703", "USDPEN": "3.3676", "USDPHP": "59.0650", "USDPKR": "281.0000", "USDPLN": "3.6490", "USDQAR": "3.6420", "USDRON": "4.3823", "USDRUB": "81.2705", "USDSAR": "3.7503", "USDSEK": "9.4376", "USDSGD": "1.3012", "USDTHB": "32.3100", "USDTRY": "42.0970", "USDTWD": "31.0640", "USDUAH": "42.0759", "USDVND": "26 325.0000", "USDZAR": "17.0763"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 13.11.2025</th></tr>';

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
