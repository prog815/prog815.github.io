
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0409", "AUDJPY": "98.5677", "AUDSEK": "6.0942", "AUDUSD": "0.6486", "CADJPY": "108.6043", "CADSEK": "6.7147", "CHFAUD": "1.9376", "CHFHKD": "9.7675", "CHFJPY": "190.9891", "EURAUD": "1.7889", "EURCAD": "1.6246", "EURCHF": "0.9238", "EURCNY": "8.2729", "EURCZK": "24.2710", "EURGBP": "0.8691", "EURHKD": "9.0233", "EURILS": "3.8305", "EURJPY": "176.4400", "EURNOK": "11.6260", "EURNZD": "2.0219", "EURRUB": "94.6163", "EURSEK": "10.9086", "EURSGD": "1.5063", "EURUSD": "1.1610", "EURZAR": "20.1882", "GBPAUD": "2.0591", "GBPCAD": "1.8688", "GBPCHF": "1.0627", "GBPHKD": "10.3795", "GBPJPY": "202.9559", "GBPNOK": "13.3734", "GBPRUB": "108.8372", "GBPSEK": "12.5482", "GBPSGD": "1.7327", "GBPUSD": "1.3355", "HKDSEK": "1.2089", "HKDSGD": "0.1669", "JPYHKD": "0.0511", "JPYSEK": "0.0618", "NZDSEK": "5.3914", "NZDUSD": "0.5738", "SGDAUD": "1.1884", "SGDCHF": "0.6133", "SGDJPY": "117.1343", "USDAED": "3.6721", "USDARS": "1 488.0000", "USDBRL": "5.3997", "USDCAD": "1.3993", "USDCHF": "0.7957", "USDCLP": "950.3400", "USDCNY": "7.1230", "USDCOP": "3 905.5000", "USDCZK": "20.9050", "USDDKK": "6.4326", "USDEGP": "47.5200", "USDGBP": "0.7488", "USDHKD": "7.7720", "USDHUF": "335.0000", "USDIDR": "16 570.0000", "USDILS": "3.2993", "USDINR": "87.7200", "USDISK": "122.1500", "USDJPY": "151.9700", "USDKRW": "1 431.8500", "USDKWD": "0.3063", "USDKZT": "538.0800", "USDMXN": "18.4130", "USDMYR": "4.2280", "USDNOK": "10.0138", "USDPEN": "3.4070", "USDPHP": "58.4280", "USDPKR": "281.9000", "USDPLN": "3.6430", "USDQAR": "3.6389", "USDRON": "4.3759", "USDRUB": "81.4955", "USDSAR": "3.7503", "USDSEK": "9.3959", "USDSGD": "1.2974", "USDTHB": "32.7300", "USDTRY": "41.9697", "USDTWD": "30.7470", "USDUAH": "41.8412", "USDVND": "26 345.0000", "USDZAR": "17.3886"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 23.10.2025</th></tr>';

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
