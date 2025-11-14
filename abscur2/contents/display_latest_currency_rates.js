
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0721", "AUDJPY": "100.8748", "AUDSEK": "6.1353", "AUDUSD": "0.6527", "CADJPY": "110.1411", "CADSEK": "6.6988", "CHFAUD": "1.9325", "CHFHKD": "9.8020", "CHFJPY": "194.9420", "EURAUD": "1.7812", "EURCAD": "1.6321", "EURCHF": "0.9221", "EURCNY": "8.2523", "EURCZK": "24.1300", "EURGBP": "0.8815", "EURHKD": "9.0385", "EURILS": "3.7500", "EURJPY": "179.7600", "EURNOK": "11.6496", "EURNZD": "2.0568", "EURRUB": "93.8569", "EURSEK": "10.9329", "EURSGD": "1.5124", "EURUSD": "1.1631", "EURZAR": "19.8103", "GBPAUD": "2.0207", "GBPCAD": "1.8507", "GBPCHF": "1.0456", "GBPHKD": "10.2492", "GBPJPY": "203.8360", "GBPNOK": "13.2101", "GBPRUB": "106.4293", "GBPSEK": "12.3974", "GBPSGD": "1.7150", "GBPUSD": "1.3189", "HKDSEK": "1.2096", "HKDSGD": "0.1673", "JPYHKD": "0.0503", "JPYSEK": "0.0608", "NZDSEK": "5.3137", "NZDUSD": "0.5653", "SGDAUD": "1.1783", "SGDCHF": "0.6097", "SGDJPY": "118.8572", "USDAED": "3.6729", "USDARS": "1 407.0000", "USDBRL": "5.2978", "USDCAD": "1.4032", "USDCHF": "0.7928", "USDCLP": "928.2700", "USDCNY": "7.0930", "USDCOP": "3 751.5000", "USDCZK": "20.7460", "USDDKK": "6.4182", "USDEGP": "47.1400", "USDGBP": "0.7582", "USDHKD": "7.7710", "USDHUF": "330.2300", "USDIDR": "16 720.0000", "USDILS": "3.2241", "USDINR": "88.7870", "USDISK": "126.2100", "USDJPY": "154.5500", "USDKRW": "1 470.6300", "USDKWD": "0.3066", "USDKZT": "523.9400", "USDMXN": "18.3040", "USDMYR": "4.1260", "USDNOK": "10.0160", "USDPEN": "3.3730", "USDPHP": "58.8850", "USDPKR": "280.7000", "USDPLN": "3.6340", "USDQAR": "3.6420", "USDRON": "4.3668", "USDRUB": "80.6955", "USDSAR": "3.7499", "USDSEK": "9.3998", "USDSGD": "1.3003", "USDTHB": "32.3600", "USDTRY": "42.2200", "USDTWD": "31.1210", "USDUAH": "41.9447", "USDVND": "26 350.0000", "USDZAR": "17.0323"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.11.2025</th></tr>';

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
