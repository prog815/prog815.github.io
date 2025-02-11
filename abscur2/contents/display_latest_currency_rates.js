
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8940", "AUDJPY": "95.6920", "AUDSEK": "6.8473", "AUDUSD": "0.6280", "CADJPY": "106.3550", "CADSEK": "7.6092", "CHFAUD": "1.7430", "CHFHKD": "8.5324", "CHFJPY": "166.8440", "EURAUD": "1.6434", "EURCAD": "1.4786", "EURCHF": "0.9426", "EURCNY": "7.5400", "EURCZK": "25.0910", "EURGBP": "0.8337", "EURHKD": "8.0432", "EURILS": "3.7005", "EURJPY": "157.2790", "EURNOK": "11.5703", "EURNZD": "1.8276", "EURRUB": "99.1770", "EURSEK": "11.2525", "EURSGD": "1.3990", "EURUSD": "1.0322", "EURZAR": "19.0721", "GBPAUD": "1.9708", "GBPCAD": "1.7732", "GBPCHF": "1.1306", "GBPHKD": "9.6440", "GBPJPY": "188.6540", "GBPNOK": "13.8788", "GBPRUB": "118.9330", "GBPSEK": "13.4938", "GBPSGD": "1.6781", "GBPUSD": "1.2379", "HKDSEK": "1.3979", "HKDSGD": "0.1739", "JPYHKD": "0.0509", "JPYSEK": "0.0711", "NZDSEK": "6.1549", "NZDUSD": "0.5646", "SGDAUD": "1.1741", "SGDCHF": "0.6736", "SGDJPY": "112.3720", "USDAED": "3.6728", "USDARS": "1 055.7500", "USDBRL": "5.7950", "USDCAD": "1.4328", "USDCHF": "0.9133", "USDCLP": "962.0000", "USDCNY": "7.3068", "USDCOP": "4 145.2300", "USDCZK": "24.3120", "USDDKK": "7.2252", "USDEGP": "50.4200", "USDGBP": "0.8077", "USDHKD": "7.7926", "USDHUF": "391.1500", "USDIDR": "16 370.0000", "USDILS": "3.5899", "USDINR": "86.6920", "USDISK": "142.0000", "USDJPY": "152.3220", "USDKRW": "1 453.1000", "USDKWD": "0.3088", "USDKZT": "505.9800", "USDMXN": "20.6040", "USDMYR": "4.4655", "USDNOK": "11.2102", "USDPEN": "3.7097", "USDPHP": "58.1470", "USDPKR": "279.2098", "USDPLN": "4.0438", "USDQAR": "3.6400", "USDRON": "4.8190", "USDRUB": "96.0800", "USDSAR": "3.7470", "USDSEK": "10.8955", "USDSGD": "1.3553", "USDTHB": "34.0900", "USDTRY": "36.0471", "USDTWD": "32.8200", "USDUAH": "41.4733", "USDVND": "25 380.0000", "USDZAR": "18.4861"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.02.2025</th></tr>';

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
