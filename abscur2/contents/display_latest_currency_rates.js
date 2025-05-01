
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9581", "AUDJPY": "91.4810", "AUDSEK": "6.1598", "AUDUSD": "0.6400", "CADJPY": "103.6610", "CADSEK": "6.9650", "CHFAUD": "1.8904", "CHFHKD": "9.4049", "CHFJPY": "173.0610", "EURAUD": "1.7692", "EURCAD": "1.5618", "EURCHF": "0.9353", "EURCNY": "8.2351", "EURCZK": "24.8930", "EURGBP": "0.8499", "EURHKD": "8.7823", "EURILS": "4.1115", "EURJPY": "161.9440", "EURNOK": "11.7841", "EURNZD": "1.9076", "EURRUB": "92.8910", "EURSEK": "10.9392", "EURSGD": "1.4840", "EURUSD": "1.1325", "EURZAR": "21.0582", "GBPAUD": "2.0812", "GBPCAD": "1.8373", "GBPCHF": "1.0998", "GBPHKD": "10.3320", "GBPJPY": "190.4940", "GBPNOK": "13.8672", "GBPRUB": "108.5530", "GBPSEK": "12.8694", "GBPSGD": "1.7391", "GBPUSD": "1.3323", "HKDSEK": "1.2440", "HKDSGD": "0.1684", "JPYHKD": "0.0540", "JPYSEK": "0.0669", "NZDSEK": "5.7123", "NZDUSD": "0.5934", "SGDAUD": "1.1956", "SGDCHF": "0.6308", "SGDJPY": "109.2220", "USDAED": "3.6729", "USDARS": "1 170.5000", "USDBRL": "5.6632", "USDCAD": "1.3792", "USDCHF": "0.8252", "USDCLP": "945.7800", "USDCNY": "7.2633", "USDCOP": "4 252.4700", "USDCZK": "21.9740", "USDDKK": "6.5862", "USDEGP": "50.7800", "USDGBP": "0.7506", "USDHKD": "7.7552", "USDHUF": "356.8600", "USDIDR": "16 594.0000", "USDILS": "3.6287", "USDINR": "84.5490", "USDISK": "128.2000", "USDJPY": "142.9500", "USDKRW": "1 423.7200", "USDKWD": "0.3062", "USDKZT": "514.1300", "USDMXN": "19.5933", "USDMYR": "4.3120", "USDNOK": "10.3962", "USDPEN": "3.6570", "USDPHP": "55.7710", "USDPKR": "280.6000", "USDPLN": "3.7717", "USDQAR": "3.6390", "USDRON": "4.3915", "USDRUB": "81.8750", "USDSAR": "3.7505", "USDSEK": "9.6580", "USDSGD": "1.3058", "USDTHB": "33.3490", "USDTRY": "38.4814", "USDTWD": "32.0290", "USDUAH": "41.5647", "USDVND": "25 980.0000", "USDZAR": "18.5735"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 30.04.2025</th></tr>';

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
