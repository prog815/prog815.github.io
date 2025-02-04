
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8383", "AUDJPY": "96.4820", "AUDSEK": "6.8635", "AUDUSD": "0.6213", "CADJPY": "107.7260", "CADSEK": "7.6637", "CHFAUD": "1.7693", "CHFHKD": "8.5673", "CHFJPY": "170.8030", "EURAUD": "1.6635", "EURCAD": "1.4896", "EURCHF": "0.9396", "EURCNY": "7.4845", "EURCZK": "25.1659", "EURGBP": "0.8322", "EURHKD": "8.0495", "EURILS": "3.6888", "EURJPY": "160.5040", "EURNOK": "11.7239", "EURNZD": "1.8425", "EURRUB": "103.3180", "EURSEK": "11.4174", "EURSGD": "1.4013", "EURUSD": "1.0337", "EURZAR": "19.3947", "GBPAUD": "1.9986", "GBPCAD": "1.7900", "GBPCHF": "1.1288", "GBPHKD": "9.6690", "GBPJPY": "192.8590", "GBPNOK": "14.0880", "GBPRUB": "124.1400", "GBPSEK": "13.7199", "GBPSGD": "1.6837", "GBPUSD": "1.2419", "HKDSEK": "1.4167", "HKDSGD": "0.1740", "JPYHKD": "0.0499", "JPYSEK": "0.0706", "NZDSEK": "6.1972", "NZDUSD": "0.5608", "SGDAUD": "1.1864", "SGDCHF": "0.6697", "SGDJPY": "114.5040", "USDAED": "3.6727", "USDARS": "1 053.5000", "USDBRL": "5.8175", "USDCAD": "1.4412", "USDCHF": "0.9087", "USDCLP": "981.3200", "USDCNY": "7.2440", "USDCOP": "4 172.0000", "USDCZK": "24.3400", "USDDKK": "7.2191", "USDEGP": "50.2725", "USDGBP": "0.8052", "USDHKD": "7.7876", "USDHUF": "394.0200", "USDIDR": "16 339.0000", "USDILS": "3.5641", "USDINR": "87.0380", "USDISK": "141.0000", "USDJPY": "155.3140", "USDKRW": "1 454.9500", "USDKWD": "0.3089", "USDKZT": "519.8300", "USDMXN": "20.4943", "USDMYR": "4.4395", "USDNOK": "11.3465", "USDPEN": "3.7032", "USDPHP": "58.2450", "USDPKR": "278.9580", "USDPLN": "4.0833", "USDQAR": "3.6400", "USDRON": "4.8142", "USDRUB": "99.1800", "USDSAR": "3.7476", "USDSEK": "11.0512", "USDSGD": "1.3562", "USDTHB": "33.7900", "USDTRY": "35.9472", "USDTWD": "32.8620", "USDUAH": "41.7263", "USDVND": "25 195.0000", "USDZAR": "18.7489"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.02.2025</th></tr>';

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
