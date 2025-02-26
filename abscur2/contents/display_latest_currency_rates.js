
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9072", "AUDJPY": "94.4080", "AUDSEK": "6.7045", "AUDUSD": "0.6313", "CADJPY": "104.2530", "CADSEK": "7.4034", "CHFAUD": "1.7674", "CHFHKD": "8.6777", "CHFJPY": "166.9430", "EURAUD": "1.6615", "EURCAD": "1.5045", "EURCHF": "0.9396", "EURCNY": "7.6126", "EURCZK": "24.9300", "EURGBP": "0.8291", "EURHKD": "8.1541", "EURILS": "3.7451", "EURJPY": "156.8620", "EURNOK": "11.6851", "EURNZD": "1.8415", "EURRUB": "90.1980", "EURSEK": "11.1400", "EURSGD": "1.4036", "EURUSD": "1.0490", "EURZAR": "19.2831", "GBPAUD": "2.0037", "GBPCAD": "1.8041", "GBPCHF": "1.1309", "GBPHKD": "9.8350", "GBPJPY": "189.2090", "GBPNOK": "14.0628", "GBPRUB": "109.4630", "GBPSEK": "13.4365", "GBPSGD": "1.6934", "GBPUSD": "1.2654", "HKDSEK": "1.3642", "HKDSGD": "0.1721", "JPYHKD": "0.0517", "JPYSEK": "0.0705", "NZDSEK": "6.0750", "NZDUSD": "0.5721", "SGDAUD": "1.1776", "SGDCHF": "0.6676", "SGDJPY": "111.7240", "USDAED": "3.6725", "USDARS": "1 060.0000", "USDBRL": "5.8004", "USDCAD": "1.4259", "USDCHF": "0.8938", "USDCLP": "942.3100", "USDCNY": "7.2650", "USDCOP": "4 121.9700", "USDCZK": "23.7710", "USDDKK": "7.1073", "USDEGP": "50.5850", "USDGBP": "0.7903", "USDHKD": "7.7740", "USDHUF": "382.0700", "USDIDR": "16 340.0000", "USDILS": "3.5777", "USDINR": "87.1460", "USDISK": "138.3000", "USDJPY": "149.5400", "USDKRW": "1 434.2800", "USDKWD": "0.3085", "USDKZT": "498.9800", "USDMXN": "20.5012", "USDMYR": "4.4225", "USDNOK": "11.1160", "USDPEN": "3.6820", "USDPHP": "57.9470", "USDPKR": "279.7300", "USDPLN": "3.9448", "USDQAR": "3.6400", "USDRON": "4.7403", "USDRUB": "86.4800", "USDSAR": "3.7468", "USDSEK": "10.6197", "USDSGD": "1.3386", "USDTHB": "33.6900", "USDTRY": "36.4260", "USDTWD": "32.7740", "USDUAH": "41.5919", "USDVND": "25 280.0000", "USDZAR": "18.3878"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 26.02.2025</th></tr>';

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
