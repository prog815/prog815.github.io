
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0459", "AUDJPY": "101.7861", "AUDSEK": "6.1776", "AUDUSD": "0.6477", "CADJPY": "111.8505", "CADSEK": "6.7884", "CHFAUD": "1.9172", "CHFHKD": "9.6740", "CHFJPY": "195.1447", "EURAUD": "1.7800", "EURCAD": "1.6208", "EURCHF": "0.9290", "EURCNY": "8.2028", "EURCZK": "24.1520", "EURGBP": "0.8831", "EURHKD": "8.9871", "EURILS": "3.7602", "EURJPY": "181.2900", "EURNOK": "11.7242", "EURNZD": "2.0585", "EURRUB": "92.9173", "EURSEK": "11.0027", "EURSGD": "1.5074", "EURUSD": "1.1536", "EURZAR": "19.8229", "GBPAUD": "2.0158", "GBPCAD": "1.8344", "GBPCHF": "1.0514", "GBPHKD": "10.1713", "GBPJPY": "205.1750", "GBPNOK": "13.2689", "GBPRUB": "105.1602", "GBPSEK": "12.4524", "GBPSGD": "1.7060", "GBPUSD": "1.3056", "HKDSEK": "1.2243", "HKDSGD": "0.1677", "JPYHKD": "0.0496", "JPYSEK": "0.0607", "NZDSEK": "5.3440", "NZDUSD": "0.5603", "SGDAUD": "1.1816", "SGDCHF": "0.6163", "SGDJPY": "120.2648", "USDAED": "3.6720", "USDARS": "1 406.0000", "USDBRL": "5.3304", "USDCAD": "1.4050", "USDCHF": "0.8053", "USDCLP": "932.7200", "USDCNY": "7.1130", "USDCOP": "3 717.4900", "USDCZK": "20.9360", "USDDKK": "6.4726", "USDEGP": "47.3400", "USDGBP": "0.7659", "USDHKD": "7.7905", "USDHUF": "330.6900", "USDIDR": "16 690.0000", "USDILS": "3.2595", "USDINR": "88.4630", "USDISK": "127.0800", "USDJPY": "157.1500", "USDKRW": "1 467.0300", "USDKWD": "0.3073", "USDKZT": "518.1600", "USDMXN": "18.3343", "USDMYR": "4.1480", "USDNOK": "10.1631", "USDPEN": "3.3775", "USDPHP": "58.9610", "USDPKR": "280.6500", "USDPLN": "3.6639", "USDQAR": "3.6447", "USDRON": "4.4073", "USDRUB": "80.5455", "USDSAR": "3.7502", "USDSEK": "9.5377", "USDSGD": "1.3067", "USDTHB": "32.4300", "USDTRY": "42.3010", "USDTWD": "31.1890", "USDUAH": "42.0884", "USDVND": "26 376.0000", "USDZAR": "17.1835"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 19.11.2025</th></tr>';

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
