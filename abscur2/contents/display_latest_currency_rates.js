
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0361", "AUDJPY": "99.1370", "AUDSEK": "6.1940", "AUDUSD": "0.6477", "CADJPY": "108.4301", "CADSEK": "6.7746", "CHFAUD": "1.9148", "CHFHKD": "9.6432", "CHFJPY": "189.8301", "EURAUD": "1.7814", "EURCAD": "1.6300", "EURCHF": "0.9310", "EURCNY": "8.2200", "EURCZK": "24.3330", "EURGBP": "0.8789", "EURHKD": "8.9781", "EURILS": "3.7611", "EURJPY": "176.7400", "EURNOK": "11.7593", "EURNZD": "2.0492", "EURRUB": "93.8142", "EURSEK": "11.0424", "EURSGD": "1.5047", "EURUSD": "1.1547", "EURZAR": "20.0465", "GBPAUD": "2.0281", "GBPCAD": "1.8543", "GBPCHF": "1.0592", "GBPHKD": "10.2136", "GBPJPY": "201.0596", "GBPNOK": "13.3776", "GBPRUB": "106.7241", "GBPSEK": "12.5620", "GBPSGD": "1.7118", "GBPUSD": "1.3136", "HKDSEK": "1.2299", "HKDSGD": "0.1676", "JPYHKD": "0.0508", "JPYSEK": "0.0625", "NZDSEK": "5.3859", "NZDUSD": "0.5632", "SGDAUD": "1.1848", "SGDCHF": "0.6188", "SGDJPY": "117.4584", "USDAED": "3.6729", "USDARS": "1 449.5000", "USDBRL": "5.3498", "USDCAD": "1.4116", "USDCHF": "0.8063", "USDCLP": "941.7100", "USDCNY": "7.1220", "USDCOP": "3 787.4000", "USDCZK": "21.0730", "USDDKK": "6.4661", "USDEGP": "47.2500", "USDGBP": "0.7613", "USDHKD": "7.7753", "USDHUF": "334.1300", "USDIDR": "16 690.0000", "USDILS": "3.2572", "USDINR": "88.6680", "USDISK": "126.4700", "USDJPY": "153.0600", "USDKRW": "1 448.8300", "USDKWD": "0.3068", "USDKZT": "525.9000", "USDMXN": "18.5766", "USDMYR": "4.1810", "USDNOK": "10.1839", "USDPEN": "3.3738", "USDPHP": "59.0020", "USDPKR": "281.0300", "USDPLN": "3.6787", "USDQAR": "3.6357", "USDRON": "4.4012", "USDRUB": "81.2455", "USDSAR": "3.7500", "USDSEK": "9.5630", "USDSGD": "1.3031", "USDTHB": "32.3600", "USDTRY": "42.0930", "USDTWD": "30.9830", "USDUAH": "41.9918", "USDVND": "26 285.0000", "USDZAR": "17.3608"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 07.11.2025</th></tr>';

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
