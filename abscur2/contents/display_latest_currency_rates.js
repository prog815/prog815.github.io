
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0417", "AUDJPY": "98.5570", "AUDSEK": "6.1035", "AUDUSD": "0.6487", "CADJPY": "108.3589", "CADSEK": "6.7105", "CHFAUD": "1.9364", "CHFHKD": "9.7626", "CHFJPY": "190.8429", "EURAUD": "1.7873", "EURCAD": "1.6262", "EURCHF": "0.9233", "EURCNY": "8.2599", "EURCZK": "24.2870", "EURGBP": "0.8673", "EURHKD": "9.0140", "EURILS": "3.8133", "EURJPY": "176.2100", "EURNOK": "11.6606", "EURNZD": "2.0199", "EURRUB": "94.3735", "EURSEK": "10.9123", "EURSGD": "1.5058", "EURUSD": "1.1598", "EURZAR": "20.1572", "GBPAUD": "2.0604", "GBPCAD": "1.8740", "GBPCHF": "1.0641", "GBPHKD": "10.3880", "GBPJPY": "203.0696", "GBPNOK": "13.4382", "GBPRUB": "108.7598", "GBPSEK": "12.5758", "GBPSGD": "1.7353", "GBPUSD": "1.3366", "HKDSEK": "1.2106", "HKDSGD": "0.1671", "JPYHKD": "0.0512", "JPYSEK": "0.0619", "NZDSEK": "5.4016", "NZDUSD": "0.5741", "SGDAUD": "1.1874", "SGDCHF": "0.6132", "SGDJPY": "117.0223", "USDAED": "3.6729", "USDARS": "1 490.0000", "USDBRL": "5.3876", "USDCAD": "1.4021", "USDCHF": "0.7961", "USDCLP": "953.6000", "USDCNY": "7.1230", "USDCOP": "3 889.5000", "USDCZK": "20.9410", "USDDKK": "6.4382", "USDEGP": "47.4800", "USDGBP": "0.7482", "USDHKD": "7.7720", "USDHUF": "335.2400", "USDIDR": "16 585.0000", "USDILS": "3.2879", "USDINR": "88.0010", "USDISK": "121.9400", "USDJPY": "151.9300", "USDKRW": "1 431.1700", "USDKWD": "0.3063", "USDKZT": "538.1100", "USDMXN": "18.4308", "USDMYR": "4.2260", "USDNOK": "10.0540", "USDPEN": "3.3893", "USDPHP": "58.2760", "USDPKR": "282.1300", "USDPLN": "3.6545", "USDQAR": "3.6361", "USDRON": "4.3788", "USDRUB": "81.3705", "USDSAR": "3.7503", "USDSEK": "9.4088", "USDSGD": "1.2983", "USDTHB": "32.7900", "USDTRY": "41.9665", "USDTWD": "30.6780", "USDUAH": "41.7405", "USDVND": "26 333.0000", "USDZAR": "17.3799"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 22.10.2025</th></tr>';

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
