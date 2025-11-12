
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0715", "AUDJPY": "100.5829", "AUDSEK": "6.1681", "AUDUSD": "0.6525", "CADJPY": "109.9893", "CADSEK": "6.7450", "CHFAUD": "1.9150", "CHFHKD": "9.7119", "CHFJPY": "192.6153", "EURAUD": "1.7734", "EURCAD": "1.6234", "EURCHF": "0.9270", "EURCNY": "8.2413", "EURCZK": "24.2310", "EURGBP": "0.8805", "EURHKD": "9.0004", "EURILS": "3.7278", "EURJPY": "178.5100", "EURNOK": "11.6261", "EURNZD": "2.0477", "EURRUB": "93.7349", "EURSEK": "10.9407", "EURSGD": "1.5061", "EURUSD": "1.1580", "EURZAR": "19.8585", "GBPAUD": "2.0153", "GBPCAD": "1.8465", "GBPCHF": "1.0602", "GBPHKD": "10.2398", "GBPJPY": "203.0486", "GBPNOK": "13.3221", "GBPRUB": "107.0247", "GBPSEK": "12.5273", "GBPSGD": "1.7156", "GBPUSD": "1.3173", "HKDSEK": "1.2234", "HKDSGD": "0.1676", "JPYHKD": "0.0504", "JPYSEK": "0.0617", "NZDSEK": "5.3683", "NZDUSD": "0.5645", "SGDAUD": "1.1749", "SGDCHF": "0.6179", "SGDJPY": "118.3507", "USDAED": "3.6729", "USDARS": "1 419.9900", "USDBRL": "5.2907", "USDCAD": "1.4017", "USDCHF": "0.8048", "USDCLP": "937.4100", "USDCNY": "7.1220", "USDCOP": "3 750.6400", "USDCZK": "21.0020", "USDDKK": "6.4608", "USDEGP": "47.2100", "USDGBP": "0.7591", "USDHKD": "7.7733", "USDHUF": "331.6300", "USDIDR": "16 645.0000", "USDILS": "3.2221", "USDINR": "88.6770", "USDISK": "126.3500", "USDJPY": "154.1400", "USDKRW": "1 456.8100", "USDKWD": "0.3070", "USDKZT": "523.2700", "USDMXN": "18.3752", "USDMYR": "4.1570", "USDNOK": "10.1132", "USDPEN": "3.3664", "USDPHP": "58.8560", "USDPKR": "281.0300", "USDPLN": "3.6617", "USDQAR": "3.6420", "USDRON": "4.3975", "USDRUB": "81.2455", "USDSAR": "3.7504", "USDSEK": "9.5098", "USDSGD": "1.3024", "USDTHB": "32.3100", "USDTRY": "42.2296", "USDTWD": "30.9750", "USDUAH": "42.0575", "USDVND": "26 270.0000", "USDZAR": "17.1480"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 11.11.2025</th></tr>';

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
