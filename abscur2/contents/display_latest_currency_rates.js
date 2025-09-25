
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1191", "AUDJPY": "97.9911", "AUDSEK": "6.1799", "AUDUSD": "0.6581", "CADJPY": "107.1763", "CADSEK": "6.7592", "CHFAUD": "1.9116", "CHFHKD": "9.7856", "CHFJPY": "187.3192", "EURAUD": "1.7824", "EURCAD": "1.6306", "EURCHF": "0.9330", "EURCNY": "8.3702", "EURCZK": "24.2910", "EURGBP": "0.8726", "EURHKD": "9.1296", "EURILS": "3.9304", "EURJPY": "174.7500", "EURNOK": "11.6537", "EURNZD": "2.0181", "EURRUB": "98.2921", "EURSEK": "11.0268", "EURSGD": "1.5121", "EURUSD": "1.1737", "EURZAR": "20.3422", "GBPAUD": "2.0429", "GBPCAD": "1.8678", "GBPCHF": "1.0687", "GBPHKD": "10.4575", "GBPJPY": "200.1812", "GBPNOK": "13.3492", "GBPRUB": "112.5875", "GBPSEK": "12.6246", "GBPSGD": "1.7321", "GBPUSD": "1.3444", "HKDSEK": "1.2072", "HKDSGD": "0.1656", "JPYHKD": "0.0522", "JPYSEK": "0.0631", "NZDSEK": "5.4596", "NZDUSD": "0.5814", "SGDAUD": "1.1794", "SGDCHF": "0.6170", "SGDJPY": "115.5697", "USDAED": "3.6728", "USDARS": "1 337.0000", "USDBRL": "5.3324", "USDCAD": "1.3893", "USDCHF": "0.7949", "USDCLP": "952.6300", "USDCNY": "7.1220", "USDCOP": "3 883.5000", "USDCZK": "20.6960", "USDDKK": "6.3583", "USDEGP": "48.1100", "USDGBP": "0.7438", "USDHKD": "7.7786", "USDHUF": "333.2800", "USDIDR": "16 670.0000", "USDILS": "3.3485", "USDINR": "88.7570", "USDISK": "121.0000", "USDJPY": "148.9000", "USDKRW": "1 404.7600", "USDKWD": "0.3053", "USDKZT": "542.0600", "USDMXN": "18.4070", "USDMYR": "4.2050", "USDNOK": "9.9295", "USDPEN": "3.4996", "USDPHP": "57.5960", "USDPKR": "282.5500", "USDPLN": "3.6332", "USDQAR": "3.6357", "USDRON": "4.3231", "USDRUB": "83.7455", "USDSAR": "3.7507", "USDSEK": "9.3905", "USDSGD": "1.2884", "USDTHB": "32.0900", "USDTRY": "41.4485", "USDTWD": "30.3600", "USDUAH": "41.4506", "USDVND": "26 395.0000", "USDZAR": "17.3317"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 25.09.2025</th></tr>';

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
