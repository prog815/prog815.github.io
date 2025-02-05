
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8939", "AUDJPY": "96.0680", "AUDSEK": "6.8497", "AUDUSD": "0.6284", "CADJPY": "107.0580", "CADSEK": "7.6333", "CHFAUD": "1.7636", "CHFHKD": "8.6363", "CHFJPY": "169.5170", "EURAUD": "1.6576", "EURCAD": "1.4872", "EURCHF": "0.9394", "EURCNY": "7.5748", "EURCZK": "25.1339", "EURGBP": "0.8308", "EURHKD": "8.1141", "EURILS": "3.6953", "EURJPY": "159.2550", "EURNOK": "11.6673", "EURNZD": "1.8321", "EURRUB": "101.5010", "EURSEK": "11.3575", "EURSGD": "1.4051", "EURUSD": "1.0421", "EURZAR": "19.3431", "GBPAUD": "1.9951", "GBPCAD": "1.7901", "GBPCHF": "1.1307", "GBPHKD": "9.7640", "GBPJPY": "191.6670", "GBPNOK": "14.0431", "GBPRUB": "122.1690", "GBPSEK": "13.6683", "GBPSGD": "1.6908", "GBPUSD": "1.2544", "HKDSEK": "1.3983", "HKDSGD": "0.1731", "JPYHKD": "0.0507", "JPYSEK": "0.0708", "NZDSEK": "6.1959", "NZDUSD": "0.5688", "SGDAUD": "1.1795", "SGDCHF": "0.6686", "SGDJPY": "113.3040", "USDAED": "3.6727", "USDARS": "1 053.5000", "USDBRL": "5.7889", "USDCAD": "1.4272", "USDCHF": "0.9015", "USDCLP": "968.2500", "USDCNY": "7.2720", "USDCOP": "4 167.9800", "USDCZK": "24.1137", "USDDKK": "7.1551", "USDEGP": "50.2600", "USDGBP": "0.7973", "USDHKD": "7.7867", "USDHUF": "389.2700", "USDIDR": "16 280.0000", "USDILS": "3.5496", "USDINR": "87.4700", "USDISK": "141.7400", "USDJPY": "152.7550", "USDKRW": "1 445.3000", "USDKWD": "0.3085", "USDKZT": "518.4800", "USDMXN": "20.5980", "USDMYR": "4.4215", "USDNOK": "11.2040", "USDPEN": "3.7108", "USDPHP": "58.0200", "USDPKR": "278.9580", "USDPLN": "4.0318", "USDQAR": "3.6400", "USDRON": "4.7758", "USDRUB": "97.7576", "USDSAR": "3.7475", "USDSEK": "10.9038", "USDSGD": "1.3488", "USDTHB": "33.5590", "USDTRY": "35.9111", "USDTWD": "32.8380", "USDUAH": "41.7908", "USDVND": "25 158.0000", "USDZAR": "18.5745"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.02.2025</th></tr>';

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
