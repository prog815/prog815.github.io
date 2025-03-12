
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8907", "AUDJPY": "93.1570", "AUDSEK": "6.3474", "AUDUSD": "0.6294", "CADJPY": "102.5700", "CADSEK": "7.0098", "CHFAUD": "1.7981", "CHFHKD": "8.7983", "CHFJPY": "167.5670", "EURAUD": "1.7335", "EURCAD": "1.5748", "EURCHF": "0.9635", "EURCNY": "7.8771", "EURCZK": "24.9845", "EURGBP": "0.8432", "EURHKD": "8.4778", "EURILS": "3.9556", "EURJPY": "161.5640", "EURNOK": "11.6265", "EURNZD": "1.9100", "EURRUB": "93.4340", "EURSEK": "10.9232", "EURSGD": "1.4520", "EURUSD": "1.0912", "EURZAR": "19.8935", "GBPAUD": "2.0558", "GBPCAD": "1.8672", "GBPCHF": "1.1424", "GBPHKD": "10.0520", "GBPJPY": "191.5120", "GBPNOK": "13.7836", "GBPRUB": "110.8150", "GBPSEK": "12.9559", "GBPSGD": "1.7279", "GBPUSD": "1.2941", "HKDSEK": "1.2992", "HKDSGD": "0.1716", "JPYHKD": "0.0522", "JPYSEK": "0.0674", "NZDSEK": "5.7544", "NZDUSD": "0.5713", "SGDAUD": "1.1930", "SGDCHF": "0.6630", "SGDJPY": "111.2210", "USDAED": "3.6725", "USDARS": "1 065.5000", "USDBRL": "5.8181", "USDCAD": "1.4430", "USDCHF": "0.8832", "USDCLP": "933.1300", "USDCNY": "7.2270", "USDCOP": "4 130.0500", "USDCZK": "22.8990", "USDDKK": "6.8373", "USDEGP": "50.5500", "USDGBP": "0.7730", "USDHKD": "7.7706", "USDHUF": "367.3200", "USDIDR": "16 399.0000", "USDILS": "3.6493", "USDINR": "87.1710", "USDISK": "134.3200", "USDJPY": "148.0650", "USDKRW": "1 453.9000", "USDKWD": "0.3079", "USDKZT": "488.1200", "USDMXN": "20.2667", "USDMYR": "4.4170", "USDNOK": "10.6624", "USDPEN": "3.6617", "USDPHP": "57.2370", "USDPKR": "279.8772", "USDPLN": "3.8475", "USDQAR": "3.6400", "USDRON": "4.5602", "USDRUB": "85.3750", "USDSAR": "3.7472", "USDSEK": "10.0133", "USDSGD": "1.3315", "USDTHB": "33.7200", "USDTRY": "36.5945", "USDTWD": "32.8710", "USDUAH": "41.2870", "USDVND": "25 450.0000", "USDZAR": "18.2427"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 12.03.2025</th></tr>';

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
