
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0884", "AUDJPY": "97.9327", "AUDSEK": "6.1825", "AUDUSD": "0.6538", "CADJPY": "107.4534", "CADSEK": "6.7836", "CHFAUD": "1.9136", "CHFHKD": "9.7370", "CHFJPY": "187.4015", "EURAUD": "1.7828", "EURCAD": "1.6261", "EURCHF": "0.9324", "EURCNY": "8.3216", "EURCZK": "24.3320", "EURGBP": "0.8738", "EURHKD": "9.0786", "EURILS": "3.9068", "EURJPY": "174.7300", "EURNOK": "11.7028", "EURNZD": "2.0224", "EURRUB": "97.9224", "EURSEK": "11.0308", "EURSGD": "1.5097", "EURUSD": "1.1665", "EURZAR": "20.3186", "GBPAUD": "2.0404", "GBPCAD": "1.8596", "GBPCHF": "1.0663", "GBPHKD": "10.3823", "GBPJPY": "199.8199", "GBPNOK": "13.3832", "GBPRUB": "111.9833", "GBPSEK": "12.6147", "GBPSGD": "1.7265", "GBPUSD": "1.3340", "HKDSEK": "1.2150", "HKDSGD": "0.1663", "JPYHKD": "0.0520", "JPYSEK": "0.0631", "NZDSEK": "5.4535", "NZDUSD": "0.5767", "SGDAUD": "1.1818", "SGDCHF": "0.6176", "SGDJPY": "115.7395", "USDAED": "3.6729", "USDARS": "1 337.0000", "USDBRL": "5.3634", "USDCAD": "1.3940", "USDCHF": "0.7993", "USDCLP": "958.6700", "USDCNY": "7.1320", "USDCOP": "3 900.5000", "USDCZK": "20.8590", "USDDKK": "6.3978", "USDEGP": "48.0800", "USDGBP": "0.7496", "USDHKD": "7.7828", "USDHUF": "335.5300", "USDIDR": "16 735.0000", "USDILS": "3.3492", "USDINR": "88.7380", "USDISK": "121.9300", "USDJPY": "149.7900", "USDKRW": "1 409.0000", "USDKWD": "0.3056", "USDKZT": "541.9600", "USDMXN": "18.4672", "USDMYR": "4.2130", "USDNOK": "10.0324", "USDPEN": "3.5010", "USDPHP": "58.2540", "USDPKR": "282.6000", "USDPLN": "3.6606", "USDQAR": "3.6267", "USDRON": "4.3520", "USDRUB": "83.9455", "USDSAR": "3.7505", "USDSEK": "9.4563", "USDSGD": "1.2942", "USDTHB": "32.2000", "USDTRY": "41.4660", "USDTWD": "30.5150", "USDUAH": "41.4802", "USDVND": "26 380.0000", "USDZAR": "17.4184"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 26.09.2025</th></tr>';

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
