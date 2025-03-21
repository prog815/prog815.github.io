
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8944", "AUDJPY": "93.8060", "AUDSEK": "6.3390", "AUDUSD": "0.6296", "CADJPY": "103.9590", "CADSEK": "7.0221", "CHFAUD": "1.7976", "CHFHKD": "8.8353", "CHFJPY": "168.7520", "EURAUD": "1.7226", "EURCAD": "1.5541", "EURCHF": "0.9574", "EURCNY": "7.8547", "EURCZK": "24.9940", "EURGBP": "0.8371", "EURHKD": "8.4164", "EURILS": "4.0141", "EURJPY": "161.5720", "EURNOK": "11.4039", "EURNZD": "1.8835", "EURRUB": "91.8070", "EURSEK": "11.0000", "EURSGD": "1.4465", "EURUSD": "1.0852", "EURZAR": "19.7406", "GBPAUD": "2.0572", "GBPCAD": "1.8563", "GBPCHF": "1.1434", "GBPHKD": "10.0470", "GBPJPY": "193.0150", "GBPNOK": "13.6006", "GBPRUB": "109.5730", "GBPSEK": "13.0292", "GBPSGD": "1.7270", "GBPUSD": "1.2962", "HKDSEK": "1.2936", "HKDSGD": "0.1714", "JPYHKD": "0.0500", "JPYSEK": "0.0671", "NZDSEK": "5.7987", "NZDUSD": "0.5759", "SGDAUD": "1.1881", "SGDCHF": "0.6616", "SGDJPY": "111.6090", "USDAED": "3.6729", "USDARS": "1 068.7000", "USDBRL": "5.6752", "USDCAD": "1.4322", "USDCHF": "0.8821", "USDCLP": "926.2800", "USDCNY": "7.2490", "USDCOP": "4 168.7700", "USDCZK": "23.0510", "USDDKK": "6.8695", "USDEGP": "50.5200", "USDGBP": "0.7713", "USDHKD": "7.7718", "USDHUF": "367.2500", "USDIDR": "16 469.0000", "USDILS": "3.6845", "USDINR": "86.3050", "USDISK": "132.7500", "USDJPY": "148.8400", "USDKRW": "1 465.9800", "USDKWD": "0.3079", "USDKZT": "502.8200", "USDMXN": "20.1350", "USDMYR": "4.4150", "USDNOK": "10.5388", "USDPEN": "3.6202", "USDPHP": "57.3170", "USDPKR": "280.1625", "USDPLN": "3.8628", "USDQAR": "3.6400", "USDRON": "4.5821", "USDRUB": "84.7750", "USDSAR": "3.7507", "USDSEK": "10.1265", "USDSGD": "1.3351", "USDTHB": "33.7700", "USDTRY": "37.9996", "USDTWD": "33.0130", "USDUAH": "41.5730", "USDVND": "25 350.0000", "USDZAR": "18.1688"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.03.2025</th></tr>';

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
