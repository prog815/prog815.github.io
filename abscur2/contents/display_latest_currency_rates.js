
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1259", "AUDJPY": "95.6971", "AUDSEK": "6.2080", "AUDUSD": "0.6530", "CADJPY": "107.2919", "CADSEK": "6.9602", "CHFAUD": "1.9239", "CHFHKD": "9.8616", "CHFJPY": "184.1080", "EURAUD": "1.7951", "EURCAD": "1.6014", "EURCHF": "0.9331", "EURCNY": "8.4106", "EURCZK": "24.6260", "EURGBP": "0.8624", "EURHKD": "9.2031", "EURILS": "3.9240", "EURJPY": "171.8300", "EURNOK": "11.8259", "EURNZD": "1.9543", "EURRUB": "92.0281", "EURSEK": "11.1529", "EURSGD": "1.4991", "EURUSD": "1.1724", "EURZAR": "20.8537", "GBPAUD": "2.0804", "GBPCAD": "1.8556", "GBPCHF": "1.0814", "GBPHKD": "10.6639", "GBPJPY": "199.0882", "GBPNOK": "13.7024", "GBPRUB": "106.6361", "GBPSEK": "12.9151", "GBPSGD": "1.7371", "GBPUSD": "1.3585", "HKDSEK": "1.2111", "HKDSGD": "0.1629", "JPYHKD": "0.0536", "JPYSEK": "0.0649", "NZDSEK": "5.7022", "NZDUSD": "0.5998", "SGDAUD": "1.1976", "SGDCHF": "0.6225", "SGDJPY": "114.6086", "USDAED": "3.6729", "USDARS": "1 254.0000", "USDBRL": "5.4466", "USDCAD": "1.3659", "USDCHF": "0.7960", "USDCLP": "940.9600", "USDCNY": "7.1780", "USDCOP": "4 042.5000", "USDCZK": "21.0050", "USDDKK": "6.3626", "USDEGP": "49.6300", "USDGBP": "0.7361", "USDHKD": "7.8498", "USDHUF": "341.1500", "USDIDR": "16 200.0000", "USDILS": "3.3470", "USDINR": "85.7500", "USDISK": "121.8200", "USDJPY": "146.5500", "USDKRW": "1 369.8100", "USDKWD": "0.3054", "USDKZT": "519.0400", "USDMXN": "18.6000", "USDMYR": "4.2370", "USDNOK": "10.0864", "USDPEN": "3.5415", "USDPHP": "56.5510", "USDPKR": "284.0700", "USDPLN": "3.6184", "USDQAR": "3.6367", "USDRON": "4.3282", "USDRUB": "78.4955", "USDSAR": "3.7504", "USDSEK": "9.5069", "USDSGD": "1.2787", "USDTHB": "32.5500", "USDTRY": "40.0400", "USDTWD": "29.1080", "USDUAH": "41.7500", "USDVND": "26 110.0000", "USDZAR": "17.7872"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 08.07.2025</th></tr>';

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
