
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0100", "AUDJPY": "101.3570", "AUDSEK": "6.1487", "AUDUSD": "0.6437", "CADJPY": "111.7054", "CADSEK": "6.7765", "CHFAUD": "1.9284", "CHFHKD": "9.6614", "CHFJPY": "195.4568", "EURAUD": "1.7891", "EURCAD": "1.6248", "EURCHF": "0.9286", "EURCNY": "8.2026", "EURCZK": "24.1740", "EURGBP": "0.8815", "EURHKD": "8.9717", "EURILS": "3.7824", "EURJPY": "181.5000", "EURNOK": "11.7566", "EURNZD": "2.0636", "EURRUB": "92.2684", "EURSEK": "11.0107", "EURSGD": "1.5074", "EURUSD": "1.1527", "EURZAR": "19.8535", "GBPAUD": "2.0305", "GBPCAD": "1.8423", "GBPCHF": "1.0529", "GBPHKD": "10.1726", "GBPJPY": "205.8002", "GBPNOK": "13.3303", "GBPRUB": "104.6195", "GBPSEK": "12.4846", "GBPSGD": "1.7092", "GBPUSD": "1.3070", "HKDSEK": "1.2273", "HKDSGD": "0.1680", "JPYHKD": "0.0494", "JPYSEK": "0.0607", "NZDSEK": "5.3320", "NZDUSD": "0.5582", "SGDAUD": "1.1880", "SGDCHF": "0.6160", "SGDJPY": "120.4099", "USDAED": "3.6727", "USDARS": "1 424.0000", "USDBRL": "5.3328", "USDCAD": "1.4096", "USDCHF": "0.8056", "USDCLP": "927.1100", "USDCNY": "7.1120", "USDCOP": "3 759.2900", "USDCZK": "20.9720", "USDDKK": "6.4783", "USDEGP": "47.3500", "USDGBP": "0.7651", "USDHKD": "7.7832", "USDHUF": "331.4700", "USDIDR": "16 725.0000", "USDILS": "3.2813", "USDINR": "88.7100", "USDISK": "127.3700", "USDJPY": "157.4600", "USDKRW": "1 474.2300", "USDKWD": "0.3072", "USDKZT": "518.2900", "USDMXN": "18.3791", "USDMYR": "4.1540", "USDNOK": "10.1992", "USDPEN": "3.3781", "USDPHP": "59.0090", "USDPKR": "280.6500", "USDPLN": "3.6728", "USDQAR": "3.6447", "USDRON": "4.4124", "USDRUB": "80.0455", "USDSAR": "3.7503", "USDSEK": "9.5521", "USDSGD": "1.3077", "USDTHB": "32.4400", "USDTRY": "42.3645", "USDTWD": "31.3520", "USDUAH": "42.2178", "USDVND": "26 366.0000", "USDZAR": "17.2235"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.11.2025</th></tr>';

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
