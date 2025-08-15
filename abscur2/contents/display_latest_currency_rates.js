
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0851", "AUDJPY": "95.9258", "AUDSEK": "6.2167", "AUDUSD": "0.6492", "CADJPY": "106.9485", "CADSEK": "6.9310", "CHFAUD": "1.9078", "CHFHKD": "9.7014", "CHFJPY": "183.0072", "EURAUD": "1.7925", "EURCAD": "1.6090", "EURCHF": "0.9403", "EURCNY": "8.3612", "EURCZK": "24.4670", "EURGBP": "0.8604", "EURHKD": "9.1222", "EURILS": "3.9338", "EURJPY": "172.0800", "EURNOK": "11.8981", "EURNZD": "1.9679", "EURRUB": "92.8716", "EURSEK": "11.1521", "EURSGD": "1.4958", "EURUSD": "1.1646", "EURZAR": "20.4713", "GBPAUD": "2.0843", "GBPCAD": "1.8694", "GBPCHF": "1.0925", "GBPHKD": "10.5987", "GBPJPY": "199.9341", "GBPNOK": "13.8239", "GBPRUB": "107.9036", "GBPSEK": "12.9572", "GBPSGD": "1.7379", "GBPUSD": "1.3531", "HKDSEK": "1.2225", "HKDSGD": "0.1640", "JPYHKD": "0.0530", "JPYSEK": "0.0648", "NZDSEK": "5.6651", "NZDUSD": "0.5916", "SGDAUD": "1.1993", "SGDCHF": "0.6286", "SGDJPY": "115.0420", "USDAED": "3.6726", "USDARS": "1 298.0000", "USDBRL": "5.4155", "USDCAD": "1.3816", "USDCHF": "0.8074", "USDCLP": "965.0100", "USDCNY": "7.1795", "USDCOP": "4 058.4900", "USDCZK": "21.0090", "USDDKK": "6.4076", "USDEGP": "48.2800", "USDGBP": "0.7390", "USDHKD": "7.8329", "USDHUF": "339.1700", "USDIDR": "16 106.0000", "USDILS": "3.3778", "USDINR": "87.6710", "USDISK": "122.8100", "USDJPY": "147.7600", "USDKRW": "1 388.6400", "USDKWD": "0.3054", "USDKZT": "538.1500", "USDMXN": "18.7880", "USDMYR": "4.2100", "USDNOK": "10.2165", "USDPEN": "3.5624", "USDPHP": "57.0200", "USDPKR": "282.9300", "USDPLN": "3.6594", "USDQAR": "3.6371", "USDRON": "4.3439", "USDRUB": "79.7455", "USDSAR": "3.7512", "USDSEK": "9.5759", "USDSGD": "1.2844", "USDTHB": "32.4700", "USDTRY": "40.7650", "USDTWD": "30.0600", "USDUAH": "41.4000", "USDVND": "26 230.0000", "USDZAR": "17.5780"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.08.2025</th></tr>';

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
