
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0344", "AUDJPY": "97.7789", "AUDSEK": "6.2452", "AUDUSD": "0.6469", "CADJPY": "107.9334", "CADSEK": "6.7740", "CHFAUD": "1.9349", "CHFHKD": "9.7413", "CHFJPY": "189.1977", "EURAUD": "1.7943", "EURCAD": "1.6270", "EURCHF": "0.9282", "EURCNY": "8.2883", "EURCZK": "24.2910", "EURGBP": "0.8695", "EURHKD": "9.0415", "EURILS": "3.8305", "EURJPY": "175.6100", "EURNOK": "11.7264", "EURNZD": "2.0304", "EURRUB": "94.8267", "EURSEK": "11.0212", "EURSGD": "1.5063", "EURUSD": "1.1618", "EURZAR": "20.3305", "GBPAUD": "2.0649", "GBPCAD": "1.8706", "GBPCHF": "1.0672", "GBPHKD": "10.3956", "GBPJPY": "201.9062", "GBPNOK": "13.4826", "GBPRUB": "109.0287", "GBPSEK": "12.6718", "GBPSGD": "1.7319", "GBPUSD": "1.3358", "HKDSEK": "1.2190", "HKDSGD": "0.1666", "JPYHKD": "0.0515", "JPYSEK": "0.0628", "NZDSEK": "5.4271", "NZDUSD": "0.5721", "SGDAUD": "1.1923", "SGDCHF": "0.6162", "SGDJPY": "116.5831", "USDAED": "3.6721", "USDARS": "1 421.4955", "USDBRL": "5.5217", "USDCAD": "1.4004", "USDCHF": "0.7989", "USDCLP": "958.8800", "USDCNY": "7.1360", "USDCOP": "3 923.5000", "USDCZK": "20.9080", "USDDKK": "6.4240", "USDEGP": "47.5100", "USDGBP": "0.7486", "USDHKD": "7.7823", "USDHUF": "337.6200", "USDIDR": "16 545.0000", "USDILS": "3.2970", "USDINR": "88.7520", "USDISK": "121.7100", "USDJPY": "151.1500", "USDKRW": "1 429.0400", "USDKWD": "0.3065", "USDKZT": "536.7300", "USDMXN": "18.5770", "USDMYR": "4.2220", "USDNOK": "10.0933", "USDPEN": "3.4336", "USDPHP": "58.2310", "USDPKR": "281.9500", "USDPLN": "3.6638", "USDQAR": "3.6270", "USDRON": "4.3793", "USDRUB": "81.6205", "USDSAR": "3.7507", "USDSEK": "9.4863", "USDSGD": "1.2965", "USDTHB": "32.6500", "USDTRY": "41.8121", "USDTWD": "30.6790", "USDUAH": "41.6504", "USDVND": "26 310.0000", "USDZAR": "17.4991"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 10.10.2025</th></tr>';

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
