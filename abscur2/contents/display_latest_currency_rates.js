
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8484", "AUDJPY": "96.6690", "AUDSEK": "6.8522", "AUDUSD": "0.6224", "CADJPY": "107.5760", "CADSEK": "7.6267", "CHFAUD": "1.7714", "CHFHKD": "8.5933", "CHFJPY": "171.2750", "EURAUD": "1.6712", "EURCAD": "1.5016", "EURCHF": "0.9430", "EURCNY": "7.5370", "EURCZK": "25.1214", "EURGBP": "0.8373", "EURHKD": "8.1017", "EURILS": "3.7348", "EURJPY": "161.5270", "EURNOK": "11.7760", "EURNZD": "1.8424", "EURRUB": "102.2220", "EURSEK": "11.4544", "EURSGD": "1.4051", "EURUSD": "1.0397", "EURZAR": "19.4031", "GBPAUD": "1.9961", "GBPCAD": "1.7928", "GBPCHF": "1.1262", "GBPHKD": "9.6740", "GBPJPY": "192.9200", "GBPNOK": "14.0653", "GBPRUB": "122.0940", "GBPSEK": "13.6803", "GBPSGD": "1.6781", "GBPUSD": "1.2417", "HKDSEK": "1.4124", "HKDSGD": "0.1734", "JPYHKD": "0.0499", "JPYSEK": "0.0704", "NZDSEK": "6.2160", "NZDUSD": "0.5641", "SGDAUD": "1.1889", "SGDCHF": "0.6708", "SGDJPY": "114.8310", "USDAED": "3.6726", "USDARS": "1 050.0000", "USDBRL": "5.8475", "USDCAD": "1.4436", "USDCHF": "0.9073", "USDCLP": "987.7000", "USDCNY": "7.2440", "USDCOP": "4 177.0700", "USDCZK": "24.1610", "USDDKK": "7.1795", "USDEGP": "50.1800", "USDGBP": "0.8055", "USDHKD": "7.7904", "USDHUF": "392.4500", "USDIDR": "16 170.0000", "USDILS": "3.6000", "USDINR": "86.5300", "USDISK": "139.6000", "USDJPY": "155.3120", "USDKRW": "1 446.8000", "USDKWD": "0.3083", "USDKZT": "517.2800", "USDMXN": "20.4802", "USDMYR": "4.3925", "USDNOK": "11.3308", "USDPEN": "3.7328", "USDPHP": "58.4000", "USDPKR": "278.8000", "USDPLN": "4.0538", "USDQAR": "3.6400", "USDRON": "4.7850", "USDRUB": "98.2800", "USDSAR": "3.7477", "USDSEK": "11.0227", "USDSGD": "1.3520", "USDTHB": "33.7600", "USDTRY": "35.7712", "USDTWD": "32.8320", "USDUAH": "41.9479", "USDVND": "25 058.0000", "USDZAR": "18.6648"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 29.01.2025</th></tr>';

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
