
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.6560", "AUDJPY": "86.9130", "AUDSEK": "5.9918", "AUDUSD": "1.6676", "CADJPY": "101.9390", "CADSEK": "7.0269", "CHFAUD": "1.9835", "CHFHKD": "9.2385", "CHFJPY": "172.4090", "EURAUD": "1.8399", "EURCAD": "1.5687", "EURCHF": "0.9272", "EURCNY": "8.1074", "EURCZK": "25.1719", "EURGBP": "0.8619", "EURHKD": "8.5677", "EURILS": "4.2040", "EURJPY": "159.9030", "EURNOK": "12.1316", "EURNZD": "1.9981", "EURRUB": "95.2140", "EURSEK": "11.0392", "EURSGD": "1.4867", "EURUSD": "1.1047", "EURZAR": "21.8298", "GBPAUD": "2.1346", "GBPCAD": "1.8256", "GBPCHF": "1.0944", "GBPHKD": "9.9530", "GBPJPY": "187.4850", "GBPNOK": "13.9407", "GBPRUB": "110.3500", "GBPSEK": "12.9334", "GBPSGD": "1.7248", "GBPUSD": "1.2907", "HKDSEK": "1.2980", "HKDSGD": "0.1732", "JPYHKD": "0.0528", "JPYSEK": "0.0684", "NZDSEK": "5.6373", "NZDUSD": "0.5591", "SGDAUD": "1.2269", "SGDCHF": "0.6344", "SGDJPY": "108.6390", "USDAED": "3.6728", "USDARS": "1 073.2500", "USDBRL": "5.8435", "USDCAD": "1.4247", "USDCHF": "0.8544", "USDCLP": "979.4800", "USDCNY": "7.2810", "USDCOP": "4 278.0000", "USDCZK": "22.9910", "USDDKK": "6.8189", "USDEGP": "51.3600", "USDGBP": "0.7805", "USDHKD": "7.7676", "USDHUF": "370.3600", "USDIDR": "16 555.0000", "USDILS": "3.7698", "USDINR": "85.7440", "USDISK": "130.8000", "USDJPY": "145.4140", "USDKRW": "1 469.0800", "USDKWD": "0.3075", "USDKZT": "520.5300", "USDMXN": "20.6511", "USDMYR": "4.4580", "USDNOK": "10.8836", "USDPEN": "3.6760", "USDPHP": "57.3150", "USDPKR": "280.3580", "USDPLN": "3.9238", "USDQAR": "3.6400", "USDRON": "4.5444", "USDRUB": "85.9800", "USDSAR": "3.7505", "USDSEK": "10.0996", "USDSGD": "1.3464", "USDTHB": "34.5240", "USDTRY": "38.0060", "USDTWD": "33.0510", "USDUAH": "41.3426", "USDVND": "25 570.0000", "USDZAR": "19.3380"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 09.04.2025</th></tr>';

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
