
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1171", "AUDJPY": "96.8267", "AUDSEK": "6.2567", "AUDUSD": "0.6519", "CADJPY": "108.1398", "CADSEK": "6.9877", "CHFAUD": "1.9091", "CHFHKD": "9.7693", "CHFJPY": "184.8538", "EURAUD": "1.7765", "EURCAD": "1.5916", "EURCHF": "0.9311", "EURCNY": "8.3176", "EURCZK": "24.5600", "EURGBP": "0.8674", "EURHKD": "9.0961", "EURILS": "3.8853", "EURJPY": "172.1200", "EURNOK": "11.8082", "EURNZD": "1.9407", "EURRUB": "94.2632", "EURSEK": "11.1217", "EURSGD": "1.4907", "EURUSD": "1.1588", "EURZAR": "20.6970", "GBPAUD": "2.0486", "GBPCAD": "1.8403", "GBPCHF": "1.0677", "GBPHKD": "10.5446", "GBPJPY": "198.3664", "GBPNOK": "13.6321", "GBPRUB": "106.6660", "GBPSEK": "12.7670", "GBPSGD": "1.7208", "GBPUSD": "1.3434", "HKDSEK": "1.2108", "HKDSGD": "0.1632", "JPYHKD": "0.0532", "JPYSEK": "0.0644", "NZDSEK": "5.7154", "NZDUSD": "0.6014", "SGDAUD": "1.1892", "SGDCHF": "0.6205", "SGDJPY": "115.2783", "USDAED": "3.6728", "USDARS": "1 279.5000", "USDBRL": "5.5628", "USDCAD": "1.3699", "USDCHF": "0.7948", "USDCLP": "963.3000", "USDCNY": "7.1740", "USDCOP": "4 135.5000", "USDCZK": "20.9040", "USDDKK": "6.3562", "USDEGP": "49.0400", "USDGBP": "0.7444", "USDHKD": "7.8492", "USDHUF": "337.6300", "USDIDR": "16 310.0000", "USDILS": "3.3446", "USDINR": "86.4750", "USDISK": "120.9700", "USDJPY": "147.6600", "USDKRW": "1 383.3000", "USDKWD": "0.3049", "USDKZT": "544.5300", "USDMXN": "18.5210", "USDMYR": "4.2180", "USDNOK": "10.1475", "USDPEN": "3.5440", "USDPHP": "57.1350", "USDPKR": "283.2500", "USDPLN": "3.6138", "USDQAR": "3.6362", "USDRON": "4.3149", "USDRUB": "79.4000", "USDSAR": "3.7515", "USDSEK": "9.5035", "USDSGD": "1.2809", "USDTHB": "32.3400", "USDTRY": "40.5589", "USDTWD": "29.4680", "USDUAH": "41.7560", "USDVND": "26 120.0000", "USDZAR": "17.7563"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.07.2025</th></tr>';

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
