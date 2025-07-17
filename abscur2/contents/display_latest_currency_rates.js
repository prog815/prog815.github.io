
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1226", "AUDJPY": "96.4934", "AUDSEK": "6.3336", "AUDUSD": "0.6526", "CADJPY": "108.0690", "CADSEK": "7.0934", "CHFAUD": "1.9147", "CHFHKD": "9.8082", "CHFJPY": "184.7557", "EURAUD": "1.7814", "EURCAD": "1.5918", "EURCHF": "0.9311", "EURCNY": "8.3522", "EURCZK": "24.5950", "EURGBP": "0.8667", "EURHKD": "9.1321", "EURILS": "3.8934", "EURJPY": "172.0200", "EURNOK": "11.8974", "EURNZD": "1.9560", "EURRUB": "91.1524", "EURSEK": "11.2910", "EURSGD": "1.4923", "EURUSD": "1.1634", "EURZAR": "20.7119", "GBPAUD": "2.0565", "GBPCAD": "1.8363", "GBPCHF": "1.0741", "GBPHKD": "10.5348", "GBPJPY": "198.4429", "GBPNOK": "13.7248", "GBPRUB": "105.1535", "GBPSEK": "13.0253", "GBPSGD": "1.7215", "GBPUSD": "1.3421", "HKDSEK": "1.2364", "HKDSGD": "0.1634", "JPYHKD": "0.0531", "JPYSEK": "0.0656", "NZDSEK": "5.7707", "NZDUSD": "0.5946", "SGDAUD": "1.1946", "SGDCHF": "0.6239", "SGDJPY": "115.2725", "USDAED": "3.6729", "USDARS": "1 260.0000", "USDBRL": "5.5683", "USDCAD": "1.3682", "USDCHF": "0.8003", "USDCLP": "966.4400", "USDCNY": "7.1771", "USDCOP": "4 010.0300", "USDCZK": "21.1410", "USDDKK": "6.4117", "USDEGP": "49.3700", "USDGBP": "0.7451", "USDHKD": "7.8495", "USDHUF": "342.9300", "USDIDR": "16 265.0000", "USDILS": "3.3466", "USDINR": "85.8700", "USDISK": "122.0300", "USDJPY": "147.8600", "USDKRW": "1 386.6500", "USDKWD": "0.3054", "USDKZT": "528.2200", "USDMXN": "18.7032", "USDMYR": "4.2400", "USDNOK": "10.2264", "USDPEN": "3.5450", "USDPHP": "56.9800", "USDPKR": "284.7000", "USDPLN": "3.6495", "USDQAR": "3.6369", "USDRON": "4.3528", "USDRUB": "78.3500", "USDSAR": "3.7508", "USDSEK": "9.7052", "USDSGD": "1.2827", "USDTHB": "32.4400", "USDTRY": "40.2498", "USDTWD": "29.3320", "USDUAH": "41.8500", "USDVND": "26 140.0000", "USDZAR": "17.8029"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 16.07.2025</th></tr>';

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
