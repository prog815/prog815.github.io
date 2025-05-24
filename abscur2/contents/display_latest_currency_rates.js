
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0845", "AUDJPY": "92.5890", "AUDSEK": "6.1888", "AUDUSD": "0.6494", "CADJPY": "103.7430", "CADSEK": "6.9363", "CHFAUD": "1.8744", "CHFHKD": "9.5372", "CHFJPY": "173.6020", "EURAUD": "1.7492", "EURCAD": "1.5608", "EURCHF": "0.9327", "EURCNY": "8.1548", "EURCZK": "24.8020", "EURGBP": "0.8392", "EURHKD": "8.9004", "EURILS": "4.0876", "EURJPY": "162.0110", "EURNOK": "11.4817", "EURNZD": "1.8978", "EURRUB": "90.3640", "EURSEK": "10.8350", "EURSGD": "1.4589", "EURUSD": "1.1360", "EURZAR": "20.2943", "GBPAUD": "2.0846", "GBPCAD": "1.8599", "GBPCHF": "1.1114", "GBPHKD": "10.6020", "GBPJPY": "193.0270", "GBPNOK": "13.6817", "GBPRUB": "107.6670", "GBPSEK": "12.9074", "GBPSGD": "1.7373", "GBPUSD": "1.3534", "HKDSEK": "1.2161", "HKDSGD": "0.1639", "JPYHKD": "0.0546", "JPYSEK": "0.0663", "NZDSEK": "5.6826", "NZDUSD": "0.5984", "SGDAUD": "1.1986", "SGDCHF": "0.6390", "SGDJPY": "111.0100", "USDAED": "3.6729", "USDARS": "1 131.0000", "USDBRL": "5.6463", "USDCAD": "1.3737", "USDCHF": "0.8204", "USDCLP": "939.6400", "USDCNY": "7.1793", "USDCOP": "4 146.9000", "USDCZK": "21.8240", "USDDKK": "6.5629", "USDEGP": "49.8500", "USDGBP": "0.7386", "USDHKD": "7.8323", "USDHUF": "355.2600", "USDIDR": "16 214.0000", "USDILS": "3.5932", "USDINR": "85.1510", "USDISK": "128.5000", "USDJPY": "142.5500", "USDKRW": "1 364.6900", "USDKWD": "0.3064", "USDKZT": "511.4800", "USDMXN": "19.1944", "USDMYR": "4.2280", "USDNOK": "10.0968", "USDPEN": "3.6558", "USDPHP": "55.3510", "USDPKR": "281.7400", "USDPLN": "3.7386", "USDQAR": "3.6400", "USDRON": "4.4462", "USDRUB": "79.3750", "USDSAR": "3.7498", "USDSEK": "9.5331", "USDSGD": "1.2837", "USDTHB": "32.4500", "USDTRY": "39.0203", "USDTWD": "29.9450", "USDUAH": "41.4999", "USDVND": "25 945.0000", "USDZAR": "17.8584"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 23.05.2025</th></tr>';

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
