
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1722", "AUDJPY": "96.8583", "AUDSEK": "6.2780", "AUDUSD": "0.6589", "CADJPY": "107.7950", "CADSEK": "6.9869", "CHFAUD": "1.9085", "CHFHKD": "9.8713", "CHFJPY": "184.8591", "EURAUD": "1.7817", "EURCAD": "1.6018", "EURCHF": "0.9341", "EURCNY": "8.4039", "EURCZK": "24.5110", "EURGBP": "0.8694", "EURHKD": "9.2212", "EURILS": "3.9315", "EURJPY": "172.6700", "EURNOK": "11.8931", "EURNZD": "1.9484", "EURRUB": "93.0897", "EURSEK": "11.1958", "EURSGD": "1.5003", "EURUSD": "1.1754", "EURZAR": "20.6989", "GBPAUD": "2.0502", "GBPCAD": "1.8422", "GBPCHF": "1.0742", "GBPHKD": "10.6042", "GBPJPY": "198.5823", "GBPNOK": "13.6761", "GBPRUB": "107.0528", "GBPSEK": "12.8714", "GBPSGD": "1.7254", "GBPUSD": "1.3509", "HKDSEK": "1.2138", "HKDSGD": "0.1627", "JPYHKD": "0.0534", "JPYSEK": "0.0648", "NZDSEK": "5.7425", "NZDUSD": "0.6027", "SGDAUD": "1.1883", "SGDCHF": "0.6226", "SGDJPY": "115.0955", "USDAED": "3.6729", "USDARS": "1 272.0000", "USDBRL": "5.5210", "USDCAD": "1.3637", "USDCHF": "0.7952", "USDCLP": "949.9000", "USDCNY": "7.1557", "USDCOP": "4 070.8400", "USDCZK": "20.8660", "USDDKK": "6.3536", "USDEGP": "49.0100", "USDGBP": "0.7402", "USDHKD": "7.8497", "USDHUF": "337.9100", "USDIDR": "16 280.0000", "USDILS": "3.3468", "USDINR": "86.3700", "USDISK": "120.8900", "USDJPY": "147.0000", "USDKRW": "1 372.6100", "USDKWD": "0.3047", "USDKZT": "543.0700", "USDMXN": "18.5430", "USDMYR": "4.2130", "USDNOK": "10.1237", "USDPEN": "3.5412", "USDPHP": "56.7590", "USDPKR": "284.7500", "USDPLN": "3.6202", "USDQAR": "3.6272", "USDRON": "4.3136", "USDRUB": "79.2455", "USDSAR": "3.7514", "USDSEK": "9.5280", "USDSGD": "1.2772", "USDTHB": "32.2300", "USDTRY": "40.6593", "USDTWD": "29.3910", "USDUAH": "41.7300", "USDVND": "26 110.0000", "USDZAR": "17.6222"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.07.2025</th></tr>';

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
