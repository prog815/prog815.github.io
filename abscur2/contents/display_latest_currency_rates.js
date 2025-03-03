
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8415", "AUDJPY": "94.1780", "AUDSEK": "6.6361", "AUDUSD": "0.6225", "CADJPY": "104.8050", "CADSEK": "7.3813", "CHFAUD": "1.7816", "CHFHKD": "8.6278", "CHFJPY": "167.8100", "EURAUD": "1.6807", "EURCAD": "1.5102", "EURCHF": "0.9431", "EURCNY": "7.6274", "EURCZK": "25.1085", "EURGBP": "0.8256", "EURHKD": "8.1390", "EURILS": "3.7594", "EURJPY": "158.2830", "EURNOK": "11.6934", "EURNZD": "1.8662", "EURRUB": "93.7990", "EURSEK": "11.1545", "EURSGD": "1.4106", "EURUSD": "1.0467", "EURZAR": "19.4894", "GBPAUD": "2.0357", "GBPCAD": "1.8294", "GBPCHF": "1.1420", "GBPHKD": "9.8530", "GBPJPY": "191.7660", "GBPNOK": "14.1590", "GBPRUB": "113.6070", "GBPSEK": "13.5045", "GBPSGD": "1.7079", "GBPUSD": "1.2674", "HKDSEK": "1.3694", "HKDSGD": "0.1732", "JPYHKD": "0.0512", "JPYSEK": "0.0699", "NZDSEK": "5.9760", "NZDUSD": "0.5607", "SGDAUD": "1.1915", "SGDCHF": "0.6685", "SGDJPY": "112.2190", "USDAED": "3.6722", "USDARS": "1 063.5000", "USDBRL": "5.9031", "USDCAD": "1.4434", "USDCHF": "0.9010", "USDCLP": "955.3100", "USDCNY": "7.2900", "USDCOP": "4 152.5700", "USDCZK": "23.9940", "USDDKK": "7.1294", "USDEGP": "50.6000", "USDGBP": "0.7892", "USDHKD": "7.7764", "USDHUF": "382.9600", "USDIDR": "16 475.0000", "USDILS": "3.5953", "USDINR": "87.2520", "USDISK": "139.6500", "USDJPY": "151.2770", "USDKRW": "1 458.4600", "USDKWD": "0.3085", "USDKZT": "500.6200", "USDMXN": "20.4958", "USDMYR": "4.4635", "USDNOK": "11.1737", "USDPEN": "3.7200", "USDPHP": "57.7510", "USDPKR": "279.6344", "USDPLN": "3.9912", "USDQAR": "3.6400", "USDRON": "4.7553", "USDRUB": "89.5500", "USDSAR": "3.7472", "USDSEK": "10.6559", "USDSGD": "1.3479", "USDTHB": "34.1100", "USDTRY": "36.3920", "USDTWD": "32.8560", "USDUAH": "41.5140", "USDVND": "25 340.0000", "USDZAR": "18.6453"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.03.2025</th></tr>';

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
