
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1211", "AUDJPY": "96.3725", "AUDSEK": "6.2386", "AUDUSD": "0.6524", "CADJPY": "107.3781", "CADSEK": "6.9511", "CHFAUD": "1.8970", "CHFHKD": "9.7149", "CHFJPY": "182.8218", "EURAUD": "1.7827", "EURCAD": "1.6012", "EURCHF": "0.9404", "EURCNY": "8.3613", "EURCZK": "24.3980", "EURGBP": "0.8652", "EURHKD": "9.1361", "EURILS": "3.9826", "EURJPY": "171.9300", "EURNOK": "11.9410", "EURNZD": "1.9522", "EURRUB": "93.1068", "EURSEK": "11.1278", "EURSGD": "1.4955", "EURUSD": "1.1639", "EURZAR": "20.6492", "GBPAUD": "2.0615", "GBPCAD": "1.8350", "GBPCHF": "1.0771", "GBPHKD": "10.4830", "GBPJPY": "196.7859", "GBPNOK": "13.5830", "GBPRUB": "106.8340", "GBPSEK": "12.8205", "GBPSGD": "1.7160", "GBPUSD": "1.3355", "HKDSEK": "1.2230", "HKDSGD": "0.1637", "JPYHKD": "0.0533", "JPYSEK": "0.0651", "NZDSEK": "5.6908", "NZDUSD": "0.5928", "SGDAUD": "1.1971", "SGDCHF": "0.6277", "SGDJPY": "114.6782", "USDAED": "3.6729", "USDARS": "1 331.0000", "USDBRL": "5.4625", "USDCAD": "1.3740", "USDCHF": "0.8065", "USDCLP": "974.8000", "USDCNY": "7.1790", "USDCOP": "4 049.5000", "USDCZK": "21.0520", "USDDKK": "6.4008", "USDEGP": "48.4000", "USDGBP": "0.7488", "USDHKD": "7.8495", "USDHUF": "341.2700", "USDIDR": "16 355.0000", "USDILS": "3.4333", "USDINR": "87.7000", "USDISK": "122.3200", "USDJPY": "147.3500", "USDKRW": "1 384.4900", "USDKWD": "0.3052", "USDKZT": "536.9900", "USDMXN": "18.6060", "USDMYR": "4.2270", "USDNOK": "10.1707", "USDPEN": "3.5540", "USDPHP": "57.3200", "USDPKR": "283.3800", "USDPLN": "3.6620", "USDQAR": "3.6180", "USDRON": "4.3508", "USDRUB": "79.9955", "USDSAR": "3.7522", "USDSEK": "9.5998", "USDSGD": "1.2849", "USDTHB": "32.3100", "USDTRY": "40.6359", "USDTWD": "29.8970", "USDUAH": "41.4800", "USDVND": "26 200.0000", "USDZAR": "17.7600"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 08.08.2025</th></tr>';

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
