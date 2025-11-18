
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0472", "AUDJPY": "100.7818", "AUDSEK": "6.1444", "AUDUSD": "0.6492", "CADJPY": "110.4754", "CADSEK": "6.7353", "CHFAUD": "1.9356", "CHFHKD": "9.7694", "CHFJPY": "195.0741", "EURAUD": "1.7842", "EURCAD": "1.6286", "EURCHF": "0.9223", "EURCNY": "8.2375", "EURCZK": "24.1500", "EURGBP": "0.8810", "EURHKD": "9.0106", "EURILS": "3.7662", "EURJPY": "179.9200", "EURNOK": "11.7002", "EURNZD": "2.0484", "EURRUB": "94.1635", "EURSEK": "10.9694", "EURSGD": "1.5101", "EURUSD": "1.1590", "EURZAR": "19.8894", "GBPAUD": "2.0263", "GBPCAD": "1.8485", "GBPCHF": "1.0469", "GBPHKD": "10.2273", "GBPJPY": "204.2182", "GBPNOK": "13.2801", "GBPRUB": "106.8785", "GBPSEK": "12.4505", "GBPSGD": "1.7140", "GBPUSD": "1.3155", "HKDSEK": "1.2174", "HKDSGD": "0.1676", "JPYHKD": "0.0501", "JPYSEK": "0.0610", "NZDSEK": "5.3541", "NZDUSD": "0.5657", "SGDAUD": "1.1823", "SGDCHF": "0.6108", "SGDJPY": "119.1496", "USDAED": "3.6729", "USDARS": "1 385.0000", "USDBRL": "5.3290", "USDCAD": "1.4052", "USDCHF": "0.7958", "USDCLP": "922.7500", "USDCNY": "7.1100", "USDCOP": "3 755.0000", "USDCZK": "20.8370", "USDDKK": "6.4426", "USDEGP": "47.0000", "USDGBP": "0.7602", "USDHKD": "7.7745", "USDHUF": "331.6700", "USDIDR": "16 720.0000", "USDILS": "3.2495", "USDINR": "88.6310", "USDISK": "126.6800", "USDJPY": "155.2400", "USDKRW": "1 462.1700", "USDKWD": "0.3070", "USDKZT": "521.6800", "USDMXN": "18.4192", "USDMYR": "4.1480", "USDNOK": "10.0951", "USDPEN": "3.3600", "USDPHP": "58.8730", "USDPKR": "280.7500", "USDPLN": "3.6504", "USDQAR": "3.6450", "USDRON": "4.3846", "USDRUB": "81.2455", "USDSAR": "3.7501", "USDSEK": "9.4645", "USDSGD": "1.3029", "USDTHB": "32.4100", "USDTRY": "42.2207", "USDTWD": "31.1730", "USDUAH": "42.0770", "USDVND": "26 335.0000", "USDZAR": "17.1608"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.11.2025</th></tr>';

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
