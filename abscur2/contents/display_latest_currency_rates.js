
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0923", "AUDJPY": "97.8561", "AUDSEK": "6.1510", "AUDUSD": "0.6546", "CADJPY": "107.2228", "CADSEK": "6.7398", "CHFAUD": "1.9156", "CHFHKD": "9.7545", "CHFJPY": "187.4483", "EURAUD": "1.7872", "EURCAD": "1.6314", "EURCHF": "0.9332", "EURCNY": "8.3461", "EURCZK": "24.2470", "EURGBP": "0.8726", "EURHKD": "9.1024", "EURILS": "3.9141", "EURJPY": "174.9200", "EURNOK": "11.6512", "EURNZD": "2.0268", "EURRUB": "97.5518", "EURSEK": "10.9950", "EURSGD": "1.5106", "EURUSD": "1.1701", "EURZAR": "20.2648", "GBPAUD": "2.0471", "GBPCAD": "1.8682", "GBPCHF": "1.0687", "GBPHKD": "10.4241", "GBPJPY": "200.3166", "GBPNOK": "13.3429", "GBPRUB": "111.7165", "GBPSEK": "12.5914", "GBPSGD": "1.7299", "GBPUSD": "1.3400", "HKDSEK": "1.2079", "HKDSGD": "0.1659", "JPYHKD": "0.0520", "JPYSEK": "0.0629", "NZDSEK": "5.4237", "NZDUSD": "0.5772", "SGDAUD": "1.1833", "SGDCHF": "0.6176", "SGDJPY": "115.7940", "USDAED": "3.6721", "USDARS": "1 329.0000", "USDBRL": "5.3426", "USDCAD": "1.3942", "USDCHF": "0.7975", "USDCLP": "958.7100", "USDCNY": "7.1340", "USDCOP": "3 898.6100", "USDCZK": "20.7220", "USDDKK": "6.3777", "USDEGP": "48.0800", "USDGBP": "0.7463", "USDHKD": "7.7792", "USDHUF": "333.7000", "USDIDR": "16 725.0000", "USDILS": "3.3451", "USDINR": "88.6570", "USDISK": "121.0400", "USDJPY": "149.4900", "USDKRW": "1 409.4500", "USDKWD": "0.3053", "USDKZT": "541.9600", "USDMXN": "18.3430", "USDMYR": "4.2190", "USDNOK": "9.9574", "USDPEN": "3.4910", "USDPHP": "58.0990", "USDPKR": "282.1600", "USDPLN": "3.6420", "USDQAR": "3.6357", "USDRON": "4.3402", "USDRUB": "83.3705", "USDSAR": "3.7504", "USDSEK": "9.3966", "USDSGD": "1.2910", "USDTHB": "32.1800", "USDTRY": "41.3580", "USDTWD": "30.4440", "USDUAH": "41.3506", "USDVND": "26 385.0000", "USDZAR": "17.3189"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 26.09.2025</th></tr>';

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
