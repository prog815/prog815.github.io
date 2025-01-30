
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8524", "AUDJPY": "96.0220", "AUDSEK": "6.8652", "AUDUSD": "0.6229", "CADJPY": "106.9820", "CADSEK": "7.6487", "CHFAUD": "1.7684", "CHFHKD": "8.5845", "CHFJPY": "169.8220", "EURAUD": "1.6704", "EURCAD": "1.4988", "EURCHF": "0.9442", "EURCNY": "7.5402", "EURCZK": "25.1221", "EURGBP": "0.8367", "EURHKD": "8.1064", "EURILS": "3.7231", "EURJPY": "160.3640", "EURNOK": "11.7612", "EURNZD": "1.8409", "EURRUB": "102.0520", "EURSEK": "11.4683", "EURSGD": "1.4045", "EURUSD": "1.0405", "EURZAR": "19.2527", "GBPAUD": "1.9966", "GBPCAD": "1.7919", "GBPCHF": "1.1285", "GBPHKD": "9.6860", "GBPJPY": "191.7140", "GBPNOK": "14.0559", "GBPRUB": "121.9690", "GBPSEK": "13.7045", "GBPSGD": "1.6776", "GBPUSD": "1.2437", "HKDSEK": "1.4132", "HKDSGD": "0.1732", "JPYHKD": "0.0503", "JPYSEK": "0.0710", "NZDSEK": "6.2283", "NZDUSD": "0.5651", "SGDAUD": "1.1888", "SGDCHF": "0.6721", "SGDJPY": "114.1420", "USDAED": "3.6726", "USDARS": "1 051.0000", "USDBRL": "5.9113", "USDCAD": "1.4412", "USDCHF": "0.9077", "USDCLP": "989.9600", "USDCNY": "7.2446", "USDCOP": "4 167.0000", "USDCZK": "24.1350", "USDDKK": "7.1727", "USDEGP": "50.1800", "USDGBP": "0.8040", "USDHKD": "7.7907", "USDHUF": "391.4900", "USDIDR": "16 255.0000", "USDILS": "3.5828", "USDINR": "86.5620", "USDISK": "139.6500", "USDJPY": "154.1670", "USDKRW": "1 441.9100", "USDKWD": "0.3082", "USDKZT": "518.4300", "USDMXN": "20.5184", "USDMYR": "4.3925", "USDNOK": "11.3007", "USDPEN": "3.7137", "USDPHP": "58.3280", "USDPKR": "278.8500", "USDPLN": "4.0399", "USDQAR": "3.6400", "USDRON": "4.7796", "USDRUB": "97.8300", "USDSAR": "3.7476", "USDSEK": "11.0234", "USDSGD": "1.3504", "USDTHB": "33.6800", "USDTRY": "35.7694", "USDTWD": "32.8030", "USDUAH": "42.0195", "USDVND": "25 058.0000", "USDZAR": "18.5099"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 30.01.2025</th></tr>';

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
