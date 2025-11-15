
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0721", "AUDJPY": "101.0073", "AUDSEK": "6.1353", "AUDUSD": "0.6536", "CADJPY": "110.2283", "CADSEK": "6.7293", "CHFAUD": "1.9325", "CHFHKD": "9.7931", "CHFJPY": "194.7083", "EURAUD": "1.7773", "EURCAD": "1.6291", "EURCHF": "0.9223", "EURCNY": "8.2493", "EURCZK": "24.1460", "EURGBP": "0.8818", "EURHKD": "9.0320", "EURILS": "3.7509", "EURJPY": "179.5800", "EURNOK": "11.6931", "EURNZD": "2.0443", "EURRUB": "93.9425", "EURSEK": "10.9629", "EURSGD": "1.5080", "EURUSD": "1.1620", "EURZAR": "19.8391", "GBPAUD": "2.0147", "GBPCAD": "1.8461", "GBPCHF": "1.0451", "GBPHKD": "10.2352", "GBPJPY": "203.4983", "GBPNOK": "13.2508", "GBPRUB": "106.4574", "GBPSEK": "12.4233", "GBPSGD": "1.7089", "GBPUSD": "1.3168", "HKDSEK": "1.2138", "HKDSGD": "0.1670", "JPYHKD": "0.0503", "JPYSEK": "0.0611", "NZDSEK": "5.3579", "NZDUSD": "0.5679", "SGDAUD": "1.1789", "SGDCHF": "0.6097", "SGDJPY": "119.0784", "USDAED": "3.6729", "USDARS": "1 403.4900", "USDBRL": "5.2964", "USDCAD": "1.4020", "USDCHF": "0.7937", "USDCLP": "925.0000", "USDCNY": "7.0990", "USDCOP": "3 755.5000", "USDCZK": "20.7800", "USDDKK": "6.4252", "USDEGP": "47.1500", "USDGBP": "0.7594", "USDHKD": "7.7728", "USDHUF": "330.5900", "USDIDR": "16 690.0000", "USDILS": "3.2280", "USDINR": "88.6600", "USDISK": "126.7000", "USDJPY": "154.5400", "USDKRW": "1 447.9300", "USDKWD": "0.3066", "USDKZT": "523.9400", "USDMXN": "18.2975", "USDMYR": "4.1300", "USDNOK": "10.0629", "USDPEN": "3.3730", "USDPHP": "59.0180", "USDPKR": "280.8500", "USDPLN": "3.6343", "USDQAR": "3.6420", "USDRON": "4.3712", "USDRUB": "80.8455", "USDSAR": "3.7499", "USDSEK": "9.4345", "USDSGD": "1.2978", "USDTHB": "32.3600", "USDTRY": "42.2425", "USDTWD": "30.7110", "USDUAH": "41.9447", "USDVND": "26 325.0000", "USDZAR": "17.0732"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.11.2025</th></tr>';

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
