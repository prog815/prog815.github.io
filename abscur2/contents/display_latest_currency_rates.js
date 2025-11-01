
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0842", "AUDJPY": "100.7622", "AUDSEK": "6.2056", "AUDUSD": "0.6543", "CADJPY": "109.9215", "CADSEK": "6.7697", "CHFAUD": "1.9005", "CHFHKD": "9.6623", "CHFJPY": "191.4947", "EURAUD": "1.7612", "EURCAD": "1.6159", "EURCHF": "0.9276", "EURCNY": "8.2086", "EURCZK": "24.3170", "EURGBP": "0.8765", "EURHKD": "8.9624", "EURILS": "3.7509", "EURJPY": "177.6200", "EURNOK": "11.6550", "EURNZD": "2.0143", "EURRUB": "93.1895", "EURSEK": "10.9392", "EURSGD": "1.5000", "EURUSD": "1.1534", "EURZAR": "19.9710", "GBPAUD": "2.0099", "GBPCAD": "1.8424", "GBPCHF": "1.0576", "GBPHKD": "10.2188", "GBPJPY": "202.5254", "GBPNOK": "13.2895", "GBPRUB": "106.2542", "GBPSEK": "12.4728", "GBPSGD": "1.7103", "GBPUSD": "1.3151", "HKDSEK": "1.2143", "HKDSGD": "0.1674", "JPYHKD": "0.0505", "JPYSEK": "0.0612", "NZDSEK": "5.4164", "NZDUSD": "0.5722", "SGDAUD": "1.1752", "SGDCHF": "0.6165", "SGDJPY": "118.4160", "USDAED": "3.6726", "USDARS": "1 444.5000", "USDBRL": "5.3739", "USDCAD": "1.4010", "USDCHF": "0.8042", "USDCLP": "942.1200", "USDCNY": "7.1200", "USDCOP": "3 857.6200", "USDCZK": "21.0830", "USDDKK": "6.4722", "USDEGP": "47.1900", "USDGBP": "0.7604", "USDHKD": "7.7704", "USDHUF": "336.2500", "USDIDR": "16 625.0000", "USDILS": "3.2520", "USDINR": "88.7390", "USDISK": "125.3700", "USDJPY": "154.0000", "USDKRW": "1 428.9100", "USDKWD": "0.3067", "USDKZT": "529.3100", "USDMXN": "18.5420", "USDMYR": "4.1840", "USDNOK": "10.1053", "USDPEN": "3.3811", "USDPHP": "58.6950", "USDPKR": "281.8500", "USDPLN": "3.6821", "USDQAR": "3.6181", "USDRON": "4.4045", "USDRUB": "80.7955", "USDSAR": "3.7501", "USDSEK": "9.4843", "USDSGD": "1.3005", "USDTHB": "32.3600", "USDTRY": "42.0171", "USDTWD": "30.7760", "USDUAH": "41.9687", "USDVND": "26 310.0000", "USDZAR": "17.3143"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 31.10.2025</th></tr>';

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
