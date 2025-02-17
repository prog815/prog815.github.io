
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9491", "AUDJPY": "96.3650", "AUDSEK": "6.8118", "AUDUSD": "0.6364", "CADJPY": "106.7630", "CADSEK": "7.5467", "CHFAUD": "1.7420", "CHFHKD": "8.6287", "CHFJPY": "167.9640", "EURAUD": "1.6455", "EURCAD": "1.4853", "EURCHF": "0.9442", "EURCNY": "7.6020", "EURCZK": "25.0250", "EURGBP": "0.8313", "EURHKD": "8.1463", "EURILS": "3.7165", "EURJPY": "158.5880", "EURNOK": "11.6482", "EURNZD": "1.8260", "EURRUB": "96.0550", "EURSEK": "11.2107", "EURSGD": "1.4044", "EURUSD": "1.0474", "EURZAR": "19.2852", "GBPAUD": "1.9791", "GBPCAD": "1.7864", "GBPCHF": "1.1356", "GBPHKD": "9.7960", "GBPJPY": "190.7210", "GBPNOK": "14.0101", "GBPRUB": "115.5240", "GBPSEK": "13.4841", "GBPSGD": "1.6891", "GBPUSD": "1.2593", "HKDSEK": "1.3746", "HKDSGD": "0.1724", "JPYHKD": "0.0511", "JPYSEK": "0.0702", "NZDSEK": "6.1393", "NZDUSD": "0.5736", "SGDAUD": "1.1714", "SGDCHF": "0.6722", "SGDJPY": "112.8920", "USDAED": "3.6727", "USDARS": "1 056.0000", "USDBRL": "5.7042", "USDCAD": "1.4187", "USDCHF": "0.9017", "USDCLP": "942.2000", "USDCNY": "7.2610", "USDCOP": "4 123.4702", "USDCZK": "23.9120", "USDDKK": "7.1240", "USDEGP": "50.5500", "USDGBP": "0.7941", "USDHKD": "7.7802", "USDHUF": "383.2400", "USDIDR": "16 210.0000", "USDILS": "3.5532", "USDINR": "86.8470", "USDISK": "139.9000", "USDJPY": "151.4280", "USDKRW": "1 442.9000", "USDKWD": "0.3100", "USDKZT": "497.3200", "USDMXN": "20.3794", "USDMYR": "4.4300", "USDNOK": "11.1220", "USDPEN": "3.6990", "USDPHP": "58.0060", "USDPKR": "279.2048", "USDPLN": "3.9697", "USDQAR": "3.6400", "USDRON": "4.7499", "USDRUB": "91.6300", "USDSAR": "3.7474", "USDSEK": "10.7071", "USDSGD": "1.3414", "USDTHB": "33.6900", "USDTRY": "36.2316", "USDTWD": "32.7190", "USDUAH": "41.7996", "USDVND": "25 370.0000", "USDZAR": "18.4262"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 17.02.2025</th></tr>';

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
