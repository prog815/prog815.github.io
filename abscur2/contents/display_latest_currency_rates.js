
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0583", "AUDJPY": "98.1619", "AUDSEK": "6.1318", "AUDUSD": "0.6512", "CADJPY": "107.3953", "CADSEK": "6.7086", "CHFAUD": "1.9384", "CHFHKD": "9.8052", "CHFJPY": "190.2802", "EURAUD": "1.7869", "EURCAD": "1.6338", "EURCHF": "0.9221", "EURCNY": "8.2872", "EURCZK": "24.2740", "EURGBP": "0.8683", "EURHKD": "9.0416", "EURILS": "3.8233", "EURJPY": "175.4600", "EURNOK": "11.6892", "EURNZD": "2.0258", "EURRUB": "94.1042", "EURSEK": "10.9605", "EURSGD": "1.5058", "EURUSD": "1.1640", "EURZAR": "20.0400", "GBPAUD": "2.0583", "GBPCAD": "1.8814", "GBPCHF": "1.0619", "GBPHKD": "10.4118", "GBPJPY": "202.0519", "GBPNOK": "13.4607", "GBPRUB": "108.3653", "GBPSEK": "12.6215", "GBPSGD": "1.7339", "GBPUSD": "1.3404", "HKDSEK": "1.2122", "HKDSGD": "0.1665", "JPYHKD": "0.0515", "JPYSEK": "0.0625", "NZDSEK": "5.4087", "NZDUSD": "0.5744", "SGDAUD": "1.1871", "SGDCHF": "0.6124", "SGDJPY": "116.5275", "USDAED": "3.6729", "USDARS": "1 475.0000", "USDBRL": "5.3743", "USDCAD": "1.4036", "USDCHF": "0.7922", "USDCLP": "950.7400", "USDCNY": "7.1180", "USDCOP": "3 889.0000", "USDCZK": "20.8540", "USDDKK": "6.4143", "USDEGP": "47.4500", "USDGBP": "0.7460", "USDHKD": "7.7677", "USDHUF": "333.8500", "USDIDR": "16 570.0000", "USDILS": "3.2846", "USDINR": "87.8600", "USDISK": "121.5000", "USDJPY": "150.7400", "USDKRW": "1 421.0300", "USDKWD": "0.3057", "USDKZT": "537.8100", "USDMXN": "18.3800", "USDMYR": "4.2240", "USDNOK": "10.0423", "USDPEN": "3.3715", "USDPHP": "58.1500", "USDPKR": "281.4000", "USDPLN": "3.6377", "USDQAR": "3.6271", "USDRON": "4.3682", "USDRUB": "80.8455", "USDSAR": "3.7503", "USDSEK": "9.4162", "USDSGD": "1.2936", "USDTHB": "32.5400", "USDTRY": "41.6700", "USDTWD": "30.5790", "USDUAH": "41.7001", "USDVND": "26 330.0000", "USDZAR": "17.2165"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.10.2025</th></tr>';

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
