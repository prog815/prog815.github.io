
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9641", "AUDJPY": "91.7540", "AUDSEK": "6.1902", "AUDUSD": "0.6397", "CADJPY": "103.4150", "CADSEK": "6.9788", "CHFAUD": "1.8826", "CHFHKD": "9.3482", "CHFJPY": "172.8280", "EURAUD": "1.7737", "EURCAD": "1.5735", "EURCHF": "0.9415", "EURCNY": "8.2776", "EURCZK": "24.9582", "EURGBP": "0.8507", "EURHKD": "8.8161", "EURILS": "4.1156", "EURJPY": "162.7290", "EURNOK": "11.8467", "EURNZD": "1.9073", "EURRUB": "93.4040", "EURSEK": "11.0018", "EURSGD": "1.4913", "EURUSD": "1.1350", "EURZAR": "21.1524", "GBPAUD": "2.0843", "GBPCAD": "1.8494", "GBPCHF": "1.1067", "GBPHKD": "10.3460", "GBPJPY": "191.2430", "GBPNOK": "13.9229", "GBPRUB": "109.7720", "GBPSEK": "12.9165", "GBPSGD": "1.7523", "GBPUSD": "1.3338", "HKDSEK": "1.2472", "HKDSGD": "0.1693", "JPYHKD": "0.0538", "JPYSEK": "0.0670", "NZDSEK": "5.7559", "NZDUSD": "0.5947", "SGDAUD": "1.1891", "SGDCHF": "0.6314", "SGDJPY": "109.1100", "USDAED": "3.6728", "USDARS": "1 168.0000", "USDBRL": "5.6889", "USDCAD": "1.3864", "USDCHF": "0.8295", "USDCLP": "934.3600", "USDCNY": "7.2970", "USDCOP": "4 217.3700", "USDCZK": "21.9720", "USDDKK": "6.5749", "USDEGP": "50.7800", "USDGBP": "0.7496", "USDHKD": "7.7565", "USDHUF": "356.3900", "USDIDR": "16 849.0000", "USDILS": "3.6300", "USDINR": "85.0010", "USDISK": "127.7500", "USDJPY": "143.3800", "USDKRW": "1 443.8800", "USDKWD": "0.3067", "USDKZT": "512.7300", "USDMXN": "19.5322", "USDMYR": "4.3600", "USDNOK": "10.4504", "USDPEN": "3.6681", "USDPHP": "56.3490", "USDPKR": "280.7300", "USDPLN": "3.7647", "USDQAR": "3.6400", "USDRON": "4.3827", "USDRUB": "82.2800", "USDSAR": "3.7482", "USDSEK": "9.6929", "USDSGD": "1.3141", "USDTHB": "33.6000", "USDTRY": "38.4382", "USDTWD": "32.4930", "USDUAH": "41.7513", "USDVND": "25 985.0000", "USDZAR": "18.6242"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.04.2025</th></tr>';

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
