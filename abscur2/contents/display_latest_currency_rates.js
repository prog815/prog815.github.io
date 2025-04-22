
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9742", "AUDJPY": "90.2510", "AUDSEK": "6.1025", "AUDUSD": "0.6410", "CADJPY": "101.7300", "CADSEK": "6.8773", "CHFAUD": "1.9277", "CHFHKD": "9.5952", "CHFJPY": "174.1460", "EURAUD": "1.7944", "EURCAD": "1.5926", "EURCHF": "0.9303", "EURCNY": "8.3884", "EURCZK": "24.9910", "EURGBP": "0.8600", "EURHKD": "8.9315", "EURILS": "4.2709", "EURJPY": "162.0000", "EURNOK": "11.9423", "EURNZD": "1.9199", "EURRUB": "93.8270", "EURSEK": "10.9634", "EURSGD": "1.5010", "EURUSD": "1.1508", "EURZAR": "21.5708", "GBPAUD": "2.0858", "GBPCAD": "1.8514", "GBPCHF": "1.0808", "GBPHKD": "10.3800", "GBPJPY": "188.3920", "GBPNOK": "13.8828", "GBPRUB": "109.0220", "GBPSEK": "12.7412", "GBPSGD": "1.7438", "GBPUSD": "1.3376", "HKDSEK": "1.2262", "HKDSGD": "0.1681", "JPYHKD": "0.0549", "JPYSEK": "0.0672", "NZDSEK": "5.6726", "NZDUSD": "0.5992", "SGDAUD": "1.1951", "SGDCHF": "0.6194", "SGDJPY": "107.9580", "USDAED": "3.6729", "USDARS": "1 091.0000", "USDBRL": "5.7807", "USDCAD": "1.3838", "USDCHF": "0.8077", "USDCLP": "960.8900", "USDCNY": "7.2925", "USDCOP": "4 279.5200", "USDCZK": "21.7080", "USDDKK": "6.4849", "USDEGP": "51.0600", "USDGBP": "0.7474", "USDHKD": "7.7590", "USDHUF": "353.7900", "USDIDR": "16 799.0000", "USDILS": "3.7077", "USDINR": "85.1500", "USDISK": "125.8000", "USDJPY": "140.8080", "USDKRW": "1 421.6200", "USDKWD": "0.3060", "USDKZT": "519.5800", "USDMXN": "19.7435", "USDMYR": "4.3670", "USDNOK": "10.3640", "USDPEN": "3.6989", "USDPHP": "56.6030", "USDPKR": "280.5000", "USDPLN": "3.7041", "USDQAR": "3.6400", "USDRON": "4.3141", "USDRUB": "81.3750", "USDSAR": "3.7487", "USDSEK": "9.5177", "USDSGD": "1.3041", "USDTHB": "33.0590", "USDTRY": "38.1937", "USDTWD": "32.4360", "USDUAH": "41.3955", "USDVND": "25 870.0000", "USDZAR": "18.7275"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.04.2025</th></tr>';

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
