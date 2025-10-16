
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0611", "AUDJPY": "98.3270", "AUDSEK": "6.1622", "AUDUSD": "0.6510", "CADJPY": "107.5630", "CADSEK": "6.7410", "CHFAUD": "1.9283", "CHFHKD": "9.7595", "CHFJPY": "189.6058", "EURAUD": "1.7880", "EURCAD": "1.6351", "EURCHF": "0.9275", "EURCNY": "8.2999", "EURCZK": "24.2620", "EURGBP": "0.8689", "EURHKD": "9.0548", "EURILS": "3.8093", "EURJPY": "175.9200", "EURNOK": "11.7286", "EURNZD": "2.0341", "EURRUB": "91.5984", "EURSEK": "11.0273", "EURSGD": "1.5092", "EURUSD": "1.1646", "EURZAR": "20.1888", "GBPAUD": "2.0585", "GBPCAD": "1.8698", "GBPCHF": "1.0662", "GBPHKD": "10.3516", "GBPJPY": "202.1768", "GBPNOK": "13.5188", "GBPRUB": "105.8562", "GBPSEK": "12.6762", "GBPSGD": "1.7284", "GBPUSD": "1.3316", "HKDSEK": "1.2246", "HKDSGD": "0.1670", "JPYHKD": "0.0512", "JPYSEK": "0.0627", "NZDSEK": "5.4394", "NZDUSD": "0.5715", "SGDAUD": "1.1880", "SGDCHF": "0.6169", "SGDJPY": "116.9723", "USDAED": "3.6728", "USDARS": "1 355.0000", "USDBRL": "5.4817", "USDCAD": "1.4042", "USDCHF": "0.8007", "USDCLP": "961.1100", "USDCNY": "7.1260", "USDCOP": "3 922.5000", "USDCZK": "20.8990", "USDDKK": "6.4339", "USDEGP": "47.6100", "USDGBP": "0.7510", "USDHKD": "7.7738", "USDHUF": "337.2600", "USDIDR": "16 570.0000", "USDILS": "3.3064", "USDINR": "88.7550", "USDISK": "121.8600", "USDJPY": "151.8300", "USDKRW": "1 428.6000", "USDKWD": "0.3067", "USDKZT": "538.1600", "USDMXN": "18.4930", "USDMYR": "4.2280", "USDNOK": "10.1523", "USDPEN": "3.4240", "USDPHP": "58.2070", "USDPKR": "282.1800", "USDPLN": "3.6694", "USDQAR": "3.6369", "USDRON": "4.3813", "USDRUB": "79.4955", "USDSAR": "3.7501", "USDSEK": "9.5195", "USDSGD": "1.2980", "USDTHB": "32.6600", "USDTRY": "41.8038", "USDTWD": "30.6840", "USDUAH": "41.7902", "USDVND": "26 343.0000", "USDZAR": "17.3831"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 15.10.2025</th></tr>';

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
