
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9840", "AUDJPY": "92.3990", "AUDSEK": "6.2022", "AUDUSD": "0.6426", "CADJPY": "103.8970", "CADSEK": "6.9742", "CHFAUD": "1.8884", "CHFHKD": "9.4217", "CHFJPY": "174.5720", "EURAUD": "1.7593", "EURCAD": "1.5647", "EURCHF": "0.9314", "EURCNY": "8.1722", "EURCZK": "24.8900", "EURGBP": "0.8506", "EURHKD": "8.7752", "EURILS": "4.0472", "EURJPY": "162.6030", "EURNOK": "11.7043", "EURNZD": "1.9037", "EURRUB": "91.2010", "EURSEK": "10.9252", "EURSGD": "1.4636", "EURUSD": "1.1311", "EURZAR": "20.6400", "GBPAUD": "2.0675", "GBPCAD": "1.8412", "GBPCHF": "1.0988", "GBPHKD": "10.2980", "GBPJPY": "191.1120", "GBPNOK": "13.6937", "GBPRUB": "108.0420", "GBPSEK": "12.8115", "GBPSGD": "1.7232", "GBPUSD": "1.3343", "HKDSEK": "1.2459", "HKDSGD": "0.1668", "JPYHKD": "0.0536", "JPYSEK": "0.0663", "NZDSEK": "5.7382", "NZDUSD": "0.5986", "SGDAUD": "1.1953", "SGDCHF": "0.6364", "SGDJPY": "110.9920", "USDAED": "3.6727", "USDARS": "1 194.0000", "USDBRL": "5.7181", "USDCAD": "1.3795", "USDCHF": "0.8238", "USDCLP": "940.5700", "USDCNY": "7.2250", "USDCOP": "4 302.4800", "USDCZK": "21.9200", "USDDKK": "6.5604", "USDEGP": "50.6310", "USDGBP": "0.7487", "USDHKD": "7.7573", "USDHUF": "355.3900", "USDIDR": "16 530.0000", "USDILS": "3.5846", "USDINR": "84.5470", "USDISK": "128.8000", "USDJPY": "143.2540", "USDKRW": "1 398.1300", "USDKWD": "0.3061", "USDKZT": "514.4300", "USDMXN": "19.6296", "USDMYR": "4.2385", "USDNOK": "10.2726", "USDPEN": "3.6527", "USDPHP": "55.3960", "USDPKR": "281.3501", "USDPLN": "3.7590", "USDQAR": "3.6400", "USDRON": "4.4829", "USDRUB": "80.8000", "USDSAR": "3.7509", "USDSEK": "9.5977", "USDSGD": "1.2905", "USDTHB": "32.6200", "USDTRY": "38.6396", "USDTWD": "30.2840", "USDUAH": "41.6036", "USDVND": "25 948.0000", "USDZAR": "18.2181"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 07.05.2025</th></tr>';

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
