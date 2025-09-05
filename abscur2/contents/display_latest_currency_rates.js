
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0822", "AUDJPY": "96.7347", "AUDSEK": "6.1625", "AUDUSD": "0.6515", "CADJPY": "107.4540", "CADSEK": "6.8454", "CHFAUD": "1.9060", "CHFHKD": "9.6868", "CHFJPY": "184.3785", "EURAUD": "1.7867", "EURCAD": "1.6095", "EURCHF": "0.9380", "EURCNY": "8.3183", "EURCZK": "24.4290", "EURGBP": "0.8671", "EURHKD": "9.0863", "EURILS": "3.8937", "EURJPY": "172.9500", "EURNOK": "11.7511", "EURNZD": "1.9918", "EURRUB": "94.6930", "EURSEK": "11.0166", "EURSGD": "1.5021", "EURUSD": "1.1649", "EURZAR": "20.7023", "GBPAUD": "2.0619", "GBPCAD": "1.8562", "GBPCHF": "1.0818", "GBPHKD": "10.4788", "GBPJPY": "199.4532", "GBPNOK": "13.5401", "GBPRUB": "109.2043", "GBPSEK": "12.7063", "GBPSGD": "1.7323", "GBPUSD": "1.3433", "HKDSEK": "1.2126", "HKDSGD": "0.1653", "JPYHKD": "0.0525", "JPYSEK": "0.0637", "NZDSEK": "5.5288", "NZDUSD": "0.5845", "SGDAUD": "1.1902", "SGDCHF": "0.6245", "SGDJPY": "115.1365", "USDAED": "3.6727", "USDARS": "1 362.0000", "USDBRL": "5.4457", "USDCAD": "1.3818", "USDCHF": "0.8053", "USDCLP": "971.8000", "USDCNY": "7.1340", "USDCOP": "3 982.0000", "USDCZK": "20.9730", "USDDKK": "6.4076", "USDEGP": "48.5000", "USDGBP": "0.7444", "USDHKD": "7.8008", "USDHUF": "337.0200", "USDIDR": "16 415.0000", "USDILS": "3.3428", "USDINR": "88.1720", "USDISK": "122.7800", "USDJPY": "148.4800", "USDKRW": "1 393.4000", "USDKWD": "0.3055", "USDKZT": "539.4000", "USDMXN": "18.7210", "USDMYR": "4.2200", "USDNOK": "10.0797", "USDPEN": "3.5251", "USDPHP": "57.1150", "USDPKR": "283.2600", "USDPLN": "3.6465", "USDQAR": "3.6179", "USDRON": "4.3544", "USDRUB": "81.2955", "USDSAR": "3.7522", "USDSEK": "9.4590", "USDSGD": "1.2896", "USDTHB": "32.2700", "USDTRY": "41.0540", "USDTWD": "30.6980", "USDUAH": "41.3000", "USDVND": "26 360.0000", "USDZAR": "17.7654"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.09.2025</th></tr>';

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
