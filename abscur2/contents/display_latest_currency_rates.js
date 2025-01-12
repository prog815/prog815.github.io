
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.7806", "AUDJPY": "96.9030", "AUDSEK": "6.8866", "AUDUSD": "0.6150", "CADJPY": "109.3590", "CADSEK": "7.7627", "CHFAUD": "1.7750", "CHFHKD": "8.4974", "CHFJPY": "172.1120", "EURAUD": "1.6675", "EURCAD": "1.4775", "EURCHF": "0.9388", "EURCNY": "7.5081", "EURCZK": "25.0690", "EURGBP": "0.8392", "EURHKD": "7.9720", "EURILS": "3.7784", "EURJPY": "161.6110", "EURNOK": "11.7521", "EURNZD": "1.8418", "EURRUB": "104.7030", "EURSEK": "11.4873", "EURSGD": "1.4040", "EURUSD": "1.0244", "EURZAR": "19.5560", "GBPAUD": "1.9857", "GBPCAD": "1.7605", "GBPCHF": "1.1186", "GBPHKD": "9.5060", "GBPJPY": "192.5520", "GBPNOK": "14.0007", "GBPRUB": "124.4220", "GBPSEK": "13.6863", "GBPSGD": "1.6738", "GBPUSD": "1.2207", "HKDSEK": "1.4388", "HKDSGD": "0.1760", "JPYHKD": "0.0491", "JPYSEK": "0.0706", "NZDSEK": "6.2057", "NZDUSD": "0.5558", "SGDAUD": "1.1863", "SGDCHF": "0.6676", "SGDJPY": "114.7900", "USDAED": "3.6723", "USDARS": "1 036.5000", "USDBRL": "6.0998", "USDCAD": "1.4422", "USDCHF": "0.9157", "USDCLP": "1 010.2500", "USDCNY": "7.3320", "USDCOP": "4 338.5000", "USDCZK": "24.4670", "USDDKK": "7.2800", "USDEGP": "50.5100", "USDGBP": "0.8190", "USDHKD": "7.7873", "USDHUF": "403.2300", "USDIDR": "16 179.0000", "USDILS": "3.6807", "USDINR": "86.1000", "USDISK": "140.7100", "USDJPY": "157.7400", "USDKRW": "1 473.4900", "USDKWD": "0.3084", "USDKZT": "527.1300", "USDMXN": "20.7010", "USDMYR": "4.4930", "USDNOK": "11.4655", "USDPEN": "3.7664", "USDPHP": "58.6420", "USDPKR": "278.5048", "USDPLN": "4.1587", "USDQAR": "3.6400", "USDRON": "4.8543", "USDRUB": "102.2260", "USDSAR": "3.7508", "USDSEK": "11.2108", "USDSGD": "1.3715", "USDTHB": "34.6300", "USDTRY": "35.3852", "USDTWD": "33.0880", "USDUAH": "42.2825", "USDVND": "25 360.0000", "USDZAR": "19.0960"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 12.01.2025</th></tr>';

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
