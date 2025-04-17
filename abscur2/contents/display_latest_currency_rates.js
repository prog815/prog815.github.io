
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8742", "AUDJPY": "90.2830", "AUDSEK": "6.1424", "AUDUSD": "0.6369", "CADJPY": "102.2230", "CADSEK": "7.0445", "CHFAUD": "1.9315", "CHFHKD": "9.5430", "CHFJPY": "174.2200", "EURAUD": "1.7880", "EURCAD": "1.5798", "EURCHF": "0.9266", "EURCNY": "8.3262", "EURCZK": "24.9930", "EURGBP": "0.8604", "EURHKD": "8.8191", "EURILS": "4.1930", "EURJPY": "161.5160", "EURNOK": "12.0408", "EURNZD": "1.9208", "EURRUB": "94.5880", "EURSEK": "11.1208", "EURSGD": "1.4929", "EURUSD": "1.1397", "EURZAR": "21.5634", "GBPAUD": "2.0779", "GBPCAD": "1.8356", "GBPCHF": "1.0766", "GBPHKD": "10.2970", "GBPJPY": "187.6160", "GBPNOK": "13.9196", "GBPRUB": "109.2600", "GBPSEK": "12.9201", "GBPSGD": "1.7416", "GBPUSD": "1.3241", "HKDSEK": "1.2460", "HKDSGD": "0.1720", "JPYHKD": "0.0545", "JPYSEK": "0.0676", "NZDSEK": "5.6524", "NZDUSD": "0.5932", "SGDAUD": "1.2050", "SGDCHF": "0.6199", "SGDJPY": "107.9040", "USDAED": "3.6729", "USDARS": "1 136.0000", "USDBRL": "5.8562", "USDCAD": "1.3858", "USDCHF": "0.8129", "USDCLP": "965.8000", "USDCNY": "7.2980", "USDCOP": "4 300.4300", "USDCZK": "21.9370", "USDDKK": "6.5499", "USDEGP": "51.0700", "USDGBP": "0.7551", "USDHKD": "7.7621", "USDHUF": "357.2900", "USDIDR": "16 819.0000", "USDILS": "3.6813", "USDINR": "85.5670", "USDISK": "127.5000", "USDJPY": "141.7170", "USDKRW": "1 414.2000", "USDKWD": "0.3065", "USDKZT": "523.6800", "USDMXN": "19.9170", "USDMYR": "4.4080", "USDNOK": "10.5528", "USDPEN": "3.7190", "USDPHP": "56.6280", "USDPKR": "280.0836", "USDPLN": "3.7507", "USDQAR": "3.6400", "USDRON": "4.3757", "USDRUB": "82.8750", "USDSAR": "3.7493", "USDSEK": "9.7525", "USDSGD": "1.3097", "USDTHB": "33.1100", "USDTRY": "38.1167", "USDTWD": "32.3600", "USDUAH": "41.1753", "USDVND": "25 830.0000", "USDZAR": "18.8081"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 16.04.2025</th></tr>';

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
