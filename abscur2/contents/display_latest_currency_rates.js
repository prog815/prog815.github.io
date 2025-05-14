
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0415", "AUDJPY": "95.3730", "AUDSEK": "6.2828", "AUDUSD": "0.6467", "CADJPY": "105.8000", "CADSEK": "6.9711", "CHFAUD": "1.8414", "CHFHKD": "9.2889", "CHFJPY": "175.7140", "EURAUD": "1.7289", "EURCAD": "1.5589", "EURCHF": "0.9385", "EURCNY": "8.0535", "EURCZK": "24.8870", "EURGBP": "0.8405", "EURHKD": "8.7202", "EURILS": "3.9720", "EURJPY": "164.9480", "EURNOK": "11.5907", "EURNZD": "1.8847", "EURRUB": "89.3140", "EURSEK": "10.8744", "EURSGD": "1.4549", "EURUSD": "1.1186", "EURZAR": "20.4766", "GBPAUD": "2.0565", "GBPCAD": "1.8543", "GBPCHF": "1.1162", "GBPHKD": "10.3730", "GBPJPY": "196.2240", "GBPNOK": "13.7900", "GBPRUB": "106.2360", "GBPSEK": "12.9342", "GBPSGD": "1.7309", "GBPUSD": "1.3305", "HKDSEK": "1.2454", "HKDSGD": "0.1670", "JPYHKD": "0.0526", "JPYSEK": "0.0654", "NZDSEK": "5.7591", "NZDUSD": "0.5934", "SGDAUD": "1.1871", "SGDCHF": "0.6445", "SGDJPY": "112.9990", "USDAED": "3.6728", "USDARS": "1 124.5000", "USDBRL": "5.5961", "USDCAD": "1.3936", "USDCHF": "0.8388", "USDCLP": "939.0000", "USDCNY": "7.2040", "USDCOP": "4 217.2000", "USDCZK": "22.2460", "USDDKK": "6.6650", "USDEGP": "50.3900", "USDGBP": "0.7515", "USDHKD": "7.7962", "USDHUF": "360.7600", "USDIDR": "16 510.0000", "USDILS": "3.5592", "USDINR": "85.2500", "USDISK": "130.1000", "USDJPY": "147.4530", "USDKRW": "1 415.9800", "USDKWD": "0.3069", "USDKZT": "508.4800", "USDMXN": "19.3865", "USDMYR": "4.3200", "USDNOK": "10.3497", "USDPEN": "3.6642", "USDPHP": "55.7580", "USDPKR": "281.5000", "USDPLN": "3.7845", "USDQAR": "3.6385", "USDRON": "4.5599", "USDRUB": "79.7250", "USDSAR": "3.7506", "USDSEK": "9.7141", "USDSGD": "1.3011", "USDTHB": "33.2100", "USDTRY": "38.7837", "USDTWD": "30.4260", "USDUAH": "41.5387", "USDVND": "25 950.0000", "USDZAR": "18.3212"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 13.05.2025</th></tr>';

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
