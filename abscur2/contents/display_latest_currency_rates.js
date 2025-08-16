
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0899", "AUDJPY": "95.7259", "AUDSEK": "6.2161", "AUDUSD": "0.6504", "CADJPY": "106.5055", "CADSEK": "6.9310", "CHFAUD": "1.9069", "CHFHKD": "9.7058", "CHFJPY": "182.5375", "EURAUD": "1.7968", "EURCAD": "1.6164", "EURCHF": "0.9431", "EURCNY": "8.4004", "EURCZK": "24.4230", "EURGBP": "0.8630", "EURHKD": "9.1538", "EURILS": "3.9454", "EURJPY": "172.1600", "EURNOK": "11.9022", "EURNZD": "1.9742", "EURRUB": "93.7462", "EURSEK": "11.1792", "EURSGD": "1.5004", "EURUSD": "1.1697", "EURZAR": "20.5984", "GBPAUD": "2.0835", "GBPCAD": "1.8726", "GBPCHF": "1.0926", "GBPHKD": "10.6047", "GBPJPY": "199.4436", "GBPNOK": "13.7887", "GBPRUB": "108.6052", "GBPSEK": "12.9511", "GBPSGD": "1.7382", "GBPUSD": "1.3551", "HKDSEK": "1.2212", "HKDSGD": "0.1639", "JPYHKD": "0.0532", "JPYSEK": "0.0649", "NZDSEK": "5.6570", "NZDUSD": "0.5919", "SGDAUD": "1.1987", "SGDCHF": "0.6286", "SGDJPY": "114.7423", "USDAED": "3.6728", "USDARS": "1 298.0000", "USDBRL": "5.4005", "USDCAD": "1.3819", "USDCHF": "0.8063", "USDCLP": "962.0800", "USDCNY": "7.1830", "USDCOP": "4 015.5000", "USDCZK": "20.8800", "USDDKK": "6.3756", "USDEGP": "48.2500", "USDGBP": "0.7379", "USDHKD": "7.8258", "USDHUF": "337.5800", "USDIDR": "16 155.0000", "USDILS": "3.3730", "USDINR": "87.5080", "USDISK": "122.2800", "USDJPY": "147.1800", "USDKRW": "1 388.6600", "USDKWD": "0.3054", "USDKZT": "540.2900", "USDMXN": "18.7230", "USDMYR": "4.2100", "USDNOK": "10.1754", "USDPEN": "3.5575", "USDPHP": "57.0060", "USDPKR": "282.9300", "USDPLN": "3.6342", "USDQAR": "3.6266", "USDRON": "4.3221", "USDRUB": "80.1455", "USDSAR": "3.7522", "USDSEK": "9.5573", "USDSGD": "1.2827", "USDTHB": "32.4100", "USDTRY": "40.7980", "USDTWD": "30.0180", "USDUAH": "41.2400", "USDVND": "26 240.0000", "USDZAR": "17.6100"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.08.2025</th></tr>';

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
