
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9570", "AUDJPY": "95.6270", "AUDSEK": "6.8176", "AUDUSD": "0.6373", "CADJPY": "105.5470", "CADSEK": "7.5245", "CHFAUD": "1.7378", "CHFHKD": "8.6208", "CHFJPY": "166.3070", "EURAUD": "1.6375", "EURCAD": "1.4837", "EURCHF": "0.9416", "EURCNY": "7.5765", "EURCZK": "25.0645", "EURGBP": "0.8275", "EURHKD": "8.1184", "EURILS": "3.6933", "EURJPY": "156.5690", "EURNOK": "11.6037", "EURNZD": "1.8228", "EURRUB": "92.0680", "EURSEK": "11.1643", "EURSGD": "1.3966", "EURUSD": "1.0439", "EURZAR": "19.2420", "GBPAUD": "1.9789", "GBPCAD": "1.7930", "GBPCHF": "1.1379", "GBPHKD": "9.8070", "GBPJPY": "189.2560", "GBPNOK": "14.0200", "GBPRUB": "111.2430", "GBPSEK": "13.4891", "GBPSGD": "1.6873", "GBPUSD": "1.2614", "HKDSEK": "1.3737", "HKDSGD": "0.1719", "JPYHKD": "0.0516", "JPYSEK": "0.0708", "NZDSEK": "6.1233", "NZDUSD": "0.5726", "SGDAUD": "1.1723", "SGDCHF": "0.6738", "SGDJPY": "112.1210", "USDAED": "3.6727", "USDARS": "1 058.5000", "USDBRL": "5.6974", "USDCAD": "1.4214", "USDCHF": "0.9021", "USDCLP": "944.4200", "USDCNY": "7.2585", "USDCOP": "4 096.4700", "USDCZK": "24.0090", "USDDKK": "7.1461", "USDEGP": "50.5100", "USDGBP": "0.7930", "USDHKD": "7.7767", "USDHUF": "384.8400", "USDIDR": "16 325.0000", "USDILS": "3.5413", "USDINR": "86.5920", "USDISK": "140.2000", "USDJPY": "150.0870", "USDKRW": "1 436.9800", "USDKWD": "0.3086", "USDKZT": "501.7800", "USDMXN": "20.3550", "USDMYR": "4.4270", "USDNOK": "11.1157", "USDPEN": "3.6880", "USDPHP": "57.9100", "USDPKR": "279.4343", "USDPLN": "3.9819", "USDQAR": "3.6400", "USDRON": "4.7662", "USDRUB": "88.1800", "USDSAR": "3.7473", "USDSEK": "10.6968", "USDSGD": "1.3380", "USDTHB": "33.6000", "USDTRY": "36.3163", "USDTWD": "32.7180", "USDUAH": "41.5705", "USDVND": "25 515.0000", "USDZAR": "18.4344"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 20.02.2025</th></tr>';

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
