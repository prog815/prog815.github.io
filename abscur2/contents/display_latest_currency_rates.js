
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1816", "AUDJPY": "96.6980", "AUDSEK": "6.2685", "AUDUSD": "0.6601", "CADJPY": "107.7608", "CADSEK": "6.9857", "CHFAUD": "1.9125", "CHFHKD": "9.9100", "CHFJPY": "184.9388", "EURAUD": "1.7828", "EURCAD": "1.6002", "EURCHF": "0.9323", "EURCNY": "8.4272", "EURCZK": "24.5280", "EURGBP": "0.8665", "EURHKD": "9.2392", "EURILS": "3.9080", "EURJPY": "172.4200", "EURNOK": "11.8824", "EURNZD": "1.9464", "EURRUB": "92.2715", "EURSEK": "11.1786", "EURSGD": "1.5026", "EURUSD": "1.1770", "EURZAR": "20.6505", "GBPAUD": "2.0573", "GBPCAD": "1.8461", "GBPCHF": "1.0757", "GBPHKD": "10.6599", "GBPJPY": "198.9334", "GBPNOK": "13.7111", "GBPRUB": "106.4611", "GBPSEK": "12.8960", "GBPSGD": "1.7336", "GBPUSD": "1.3580", "HKDSEK": "1.2098", "HKDSGD": "0.1626", "JPYHKD": "0.0536", "JPYSEK": "0.0648", "NZDSEK": "5.7405", "NZDUSD": "0.6045", "SGDAUD": "1.1867", "SGDCHF": "0.6205", "SGDJPY": "114.7501", "USDAED": "3.6729", "USDARS": "1 258.0000", "USDBRL": "5.5199", "USDCAD": "1.3594", "USDCHF": "0.7921", "USDCLP": "948.4000", "USDCNY": "7.1547", "USDCOP": "4 033.6000", "USDCZK": "20.8390", "USDDKK": "6.3395", "USDEGP": "49.0400", "USDGBP": "0.7364", "USDHKD": "7.8497", "USDHUF": "338.2800", "USDIDR": "16 285.0000", "USDILS": "3.3203", "USDINR": "86.3700", "USDISK": "120.6500", "USDJPY": "146.4900", "USDKRW": "1 374.5900", "USDKWD": "0.3048", "USDKZT": "538.1900", "USDMXN": "18.5370", "USDMYR": "4.2250", "USDNOK": "10.0965", "USDPEN": "3.5538", "USDPHP": "56.7800", "USDPKR": "284.6000", "USDPLN": "3.6077", "USDQAR": "3.6363", "USDRON": "4.3025", "USDRUB": "78.3955", "USDSAR": "3.7516", "USDSEK": "9.4963", "USDSGD": "1.2766", "USDTHB": "32.1500", "USDTRY": "40.4435", "USDTWD": "29.2340", "USDUAH": "41.7760", "USDVND": "26 125.0000", "USDZAR": "17.5450"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 23.07.2025</th></tr>';

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
