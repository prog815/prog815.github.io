
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0309", "AUDJPY": "92.4180", "AUDSEK": "6.2127", "AUDUSD": "0.6489", "CADJPY": "103.3760", "CADSEK": "6.9663", "CHFAUD": "1.8764", "CHFHKD": "9.3979", "CHFJPY": "173.2100", "EURAUD": "1.7514", "EURCAD": "1.5655", "EURCHF": "0.9345", "EURCNY": "8.2072", "EURCZK": "24.9110", "EURGBP": "0.8498", "EURHKD": "8.8145", "EURILS": "4.0807", "EURJPY": "161.9280", "EURNOK": "11.6743", "EURNZD": "1.8926", "EURRUB": "91.7820", "EURSEK": "10.8768", "EURSGD": "1.4646", "EURUSD": "1.1372", "EURZAR": "20.6742", "GBPAUD": "2.0597", "GBPCAD": "1.8413", "GBPCHF": "1.0989", "GBPHKD": "10.2980", "GBPJPY": "190.4580", "GBPNOK": "13.7300", "GBPRUB": "108.0420", "GBPSEK": "12.7910", "GBPSGD": "1.7222", "GBPUSD": "1.3371", "HKDSEK": "1.2459", "HKDSGD": "0.1668", "JPYHKD": "0.0536", "JPYSEK": "0.0663", "NZDSEK": "5.7382", "NZDUSD": "0.6005", "SGDAUD": "1.1953", "SGDCHF": "0.6364", "SGDJPY": "110.3360", "USDAED": "3.6729", "USDARS": "1 194.0000", "USDBRL": "5.7141", "USDCAD": "1.3767", "USDCHF": "0.8215", "USDCLP": "940.5700", "USDCNY": "7.2199", "USDCOP": "4 300.4700", "USDCZK": "21.9150", "USDDKK": "6.5586", "USDEGP": "50.6100", "USDGBP": "0.7476", "USDHKD": "7.7524", "USDHUF": "355.2400", "USDIDR": "16 445.0000", "USDILS": "3.6013", "USDINR": "84.3200", "USDISK": "128.8000", "USDJPY": "142.4160", "USDKRW": "1 374.7600", "USDKWD": "0.3061", "USDKZT": "514.4300", "USDMXN": "19.6580", "USDMYR": "4.2300", "USDNOK": "10.2546", "USDPEN": "3.6527", "USDPHP": "55.4030", "USDPKR": "281.1700", "USDPLN": "3.7553", "USDQAR": "3.6395", "USDRON": "4.4745", "USDRUB": "81.3750", "USDSAR": "3.7498", "USDSEK": "9.5533", "USDSGD": "1.2880", "USDTHB": "32.5900", "USDTRY": "38.6321", "USDTWD": "29.9420", "USDUAH": "41.6036", "USDVND": "25 948.0000", "USDZAR": "18.1956"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 06.05.2025</th></tr>';

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
