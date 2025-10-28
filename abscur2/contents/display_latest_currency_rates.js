
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0926", "AUDJPY": "100.2216", "AUDSEK": "6.1483", "AUDUSD": "0.6556", "CADJPY": "109.2709", "CADSEK": "6.7035", "CHFAUD": "1.9182", "CHFHKD": "9.7685", "CHFJPY": "192.2409", "EURAUD": "1.7757", "EURCAD": "1.6289", "EURCHF": "0.9259", "EURCNY": "8.2784", "EURCZK": "24.3090", "EURGBP": "0.8729", "EURHKD": "9.0442", "EURILS": "3.7871", "EURJPY": "177.9900", "EURNOK": "11.6196", "EURNZD": "2.0179", "EURRUB": "92.2655", "EURSEK": "10.9190", "EURSGD": "1.5096", "EURUSD": "1.1643", "EURZAR": "20.0458", "GBPAUD": "2.0340", "GBPCAD": "1.8656", "GBPCHF": "1.0604", "GBPHKD": "10.3585", "GBPJPY": "203.8521", "GBPNOK": "13.3082", "GBPRUB": "105.6739", "GBPSEK": "12.5058", "GBPSGD": "1.7290", "GBPUSD": "1.3335", "HKDSEK": "1.2073", "HKDSGD": "0.1669", "JPYHKD": "0.0508", "JPYSEK": "0.0614", "NZDSEK": "5.4103", "NZDUSD": "0.5769", "SGDAUD": "1.1764", "SGDCHF": "0.6133", "SGDJPY": "117.9007", "USDAED": "3.6728", "USDARS": "1 430.0000", "USDBRL": "5.3728", "USDCAD": "1.3990", "USDCHF": "0.7952", "USDCLP": "940.1800", "USDCNY": "7.0990", "USDCOP": "3 843.5000", "USDCZK": "20.8790", "USDDKK": "6.4128", "USDEGP": "47.4000", "USDGBP": "0.7499", "USDHKD": "7.7679", "USDHUF": "333.4400", "USDIDR": "16 610.0000", "USDILS": "3.2527", "USDINR": "88.1970", "USDISK": "122.6700", "USDJPY": "152.8700", "USDKRW": "1 429.3500", "USDKWD": "0.3064", "USDKZT": "537.0100", "USDMXN": "18.3900", "USDMYR": "4.2050", "USDNOK": "9.9799", "USDPEN": "3.3840", "USDPHP": "58.8620", "USDPKR": "281.9000", "USDPLN": "3.6310", "USDQAR": "3.6269", "USDRON": "4.3636", "USDRUB": "79.2455", "USDSAR": "3.7500", "USDSEK": "9.3782", "USDSGD": "1.2966", "USDTHB": "32.6400", "USDTRY": "41.8635", "USDTWD": "30.6010", "USDUAH": "42.0907", "USDVND": "26 280.0000", "USDZAR": "17.2170"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.10.2025</th></tr>';

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
