
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1715", "AUDJPY": "98.1496", "AUDSEK": "6.1796", "AUDUSD": "0.6647", "CADJPY": "106.6985", "CADSEK": "6.7179", "CHFAUD": "1.8893", "CHFHKD": "9.7704", "CHFJPY": "185.4326", "EURAUD": "1.7636", "EURCAD": "1.6237", "EURCHF": "0.9343", "EURCNY": "8.3588", "EURCZK": "24.3080", "EURGBP": "0.8653", "EURHKD": "9.1285", "EURILS": "3.9079", "EURJPY": "173.2500", "EURNOK": "11.5387", "EURNZD": "1.9699", "EURRUB": "98.5519", "EURSEK": "10.9081", "EURSGD": "1.5043", "EURUSD": "1.1733", "EURZAR": "20.4023", "GBPAUD": "2.0394", "GBPCAD": "1.8760", "GBPCHF": "1.0795", "GBPHKD": "10.5468", "GBPJPY": "200.1679", "GBPNOK": "13.3319", "GBPRUB": "113.8643", "GBPSEK": "12.6029", "GBPSGD": "1.7380", "GBPUSD": "1.3556", "HKDSEK": "1.1949", "HKDSGD": "0.1648", "JPYHKD": "0.0527", "JPYSEK": "0.0630", "NZDSEK": "5.5363", "NZDUSD": "0.5955", "SGDAUD": "1.1734", "SGDCHF": "0.6230", "SGDJPY": "115.1704", "USDAED": "3.6727", "USDARS": "1 453.0000", "USDBRL": "5.3545", "USDCAD": "1.3839", "USDCHF": "0.7963", "USDCLP": "953.4500", "USDCNY": "7.1240", "USDCOP": "3 898.5000", "USDCZK": "20.7180", "USDDKK": "6.3605", "USDEGP": "48.1100", "USDGBP": "0.7377", "USDHKD": "7.7802", "USDHUF": "332.8800", "USDIDR": "16 375.0000", "USDILS": "3.3307", "USDINR": "88.2720", "USDISK": "121.9100", "USDJPY": "147.6600", "USDKRW": "1 392.7000", "USDKWD": "0.3051", "USDKZT": "540.3600", "USDMXN": "18.4060", "USDMYR": "4.2000", "USDNOK": "9.8347", "USDPEN": "3.4909", "USDPHP": "57.0820", "USDPKR": "283.3300", "USDPLN": "3.6233", "USDQAR": "3.6274", "USDRON": "4.3115", "USDRUB": "83.9955", "USDSAR": "3.7514", "USDSEK": "9.2969", "USDSGD": "1.2821", "USDTHB": "31.6400", "USDTRY": "41.3345", "USDTWD": "30.2850", "USDUAH": "41.2000", "USDVND": "26 355.0000", "USDZAR": "17.3888"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 12.09.2025</th></tr>';

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
