
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1298", "AUDJPY": "95.6136", "AUDSEK": "6.2102", "AUDUSD": "0.6535", "CADJPY": "106.9127", "CADSEK": "6.9441", "CHFAUD": "1.9272", "CHFHKD": "9.8864", "CHFJPY": "184.2695", "EURAUD": "1.7929", "EURCAD": "1.6039", "EURCHF": "0.9306", "EURCNY": "8.4150", "EURCZK": "24.6330", "EURGBP": "0.8623", "EURHKD": "9.1997", "EURILS": "3.8832", "EURJPY": "171.4800", "EURNOK": "11.8199", "EURNZD": "1.9524", "EURRUB": "91.5918", "EURSEK": "11.1375", "EURSGD": "1.5003", "EURUSD": "1.1719", "EURZAR": "20.8868", "GBPAUD": "2.0790", "GBPCAD": "1.8592", "GBPCHF": "1.0787", "GBPHKD": "10.6647", "GBPJPY": "198.7768", "GBPNOK": "13.7018", "GBPRUB": "106.1746", "GBPSEK": "12.9108", "GBPSGD": "1.7391", "GBPUSD": "1.3586", "HKDSEK": "1.2106", "HKDSGD": "0.1631", "JPYHKD": "0.0537", "JPYSEK": "0.0649", "NZDSEK": "5.7008", "NZDUSD": "0.5999", "SGDAUD": "1.1954", "SGDCHF": "0.6203", "SGDJPY": "114.2958", "USDAED": "3.6729", "USDARS": "1 252.5400", "USDBRL": "5.5757", "USDCAD": "1.3685", "USDCHF": "0.7940", "USDCLP": "949.4000", "USDCNY": "7.1815", "USDCOP": "4 017.5000", "USDCZK": "21.0070", "USDDKK": "6.3651", "USDEGP": "49.5600", "USDGBP": "0.7360", "USDHKD": "7.8498", "USDHUF": "340.5000", "USDIDR": "16 240.0000", "USDILS": "3.3120", "USDINR": "85.6700", "USDISK": "122.2000", "USDJPY": "146.3100", "USDKRW": "1 373.7700", "USDKWD": "0.3050", "USDKZT": "518.6500", "USDMXN": "18.6279", "USDMYR": "4.2480", "USDNOK": "10.0852", "USDPEN": "3.5490", "USDPHP": "56.6110", "USDPKR": "283.5000", "USDPLN": "3.6166", "USDQAR": "3.6358", "USDRON": "4.3283", "USDRUB": "78.1500", "USDSAR": "3.7505", "USDSEK": "9.5030", "USDSGD": "1.2801", "USDTHB": "32.6100", "USDTRY": "39.8594", "USDTWD": "29.2050", "USDUAH": "41.7700", "USDVND": "26 138.0000", "USDZAR": "17.8215"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 09.07.2025</th></tr>';

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
