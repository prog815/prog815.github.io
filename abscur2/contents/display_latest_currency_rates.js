
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.7969", "AUDJPY": "95.1360", "AUDSEK": "6.8892", "AUDUSD": "0.6156", "CADJPY": "105.3780", "CADSEK": "7.6309", "CHFAUD": "1.7752", "CHFHKD": "8.5237", "CHFJPY": "168.9530", "EURAUD": "1.6663", "EURCAD": "1.5046", "EURCHF": "0.9385", "EURCNY": "7.4474", "EURCZK": "25.2461", "EURGBP": "0.8307", "EURHKD": "8.0023", "EURILS": "3.6950", "EURJPY": "158.5910", "EURNOK": "11.7059", "EURNZD": "1.8412", "EURRUB": "102.4370", "EURSEK": "11.4838", "EURSGD": "1.4018", "EURUSD": "1.0268", "EURZAR": "19.3243", "GBPAUD": "2.0052", "GBPCAD": "1.8081", "GBPCHF": "1.1291", "GBPHKD": "9.6280", "GBPJPY": "190.8910", "GBPNOK": "14.0808", "GBPRUB": "123.4760", "GBPSEK": "13.8092", "GBPSGD": "1.6869", "GBPUSD": "1.2371", "HKDSEK": "1.4329", "HKDSGD": "0.1750", "JPYHKD": "0.0502", "JPYSEK": "0.0718", "NZDSEK": "6.2213", "NZDUSD": "0.5582", "SGDAUD": "1.1883", "SGDCHF": "0.6701", "SGDJPY": "113.2900", "USDAED": "3.6727", "USDARS": "1 050.5000", "USDBRL": "5.8485", "USDCAD": "1.4626", "USDCHF": "0.9145", "USDCLP": "988.1400", "USDCNY": "7.2507", "USDCOP": "4 224.8500", "USDCZK": "24.5720", "USDDKK": "7.2643", "USDEGP": "50.3000", "USDGBP": "0.8087", "USDHKD": "7.7935", "USDHUF": "397.3500", "USDIDR": "16 429.0000", "USDILS": "3.5992", "USDINR": "87.0280", "USDISK": "140.8500", "USDJPY": "154.6370", "USDKRW": "1 463.1900", "USDKWD": "0.3085", "USDKZT": "522.5300", "USDMXN": "20.9286", "USDMYR": "4.4695", "USDNOK": "11.4021", "USDPEN": "3.7247", "USDPHP": "58.5440", "USDPKR": "278.9500", "USDPLN": "4.1151", "USDQAR": "3.6400", "USDRON": "4.8433", "USDRUB": "99.6500", "USDSAR": "3.7476", "USDSEK": "11.1784", "USDSGD": "1.3648", "USDTHB": "33.9800", "USDTRY": "35.9804", "USDTWD": "32.9870", "USDUAH": "41.8242", "USDVND": "25 060.0000", "USDZAR": "18.8309"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 03.02.2025</th></tr>';

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
