
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8605", "AUDJPY": "93.8650", "AUDSEK": "6.4123", "AUDUSD": "0.6329", "CADJPY": "103.2430", "CADSEK": "7.0899", "CHFAUD": "1.8008", "CHFHKD": "8.8127", "CHFJPY": "168.2260", "EURAUD": "1.7194", "EURCAD": "1.5634", "EURCHF": "0.9597", "EURCNY": "7.8785", "EURCZK": "25.0125", "EURGBP": "0.8396", "EURHKD": "8.4585", "EURILS": "3.9602", "EURJPY": "161.4870", "EURNOK": "11.5675", "EURNZD": "1.8971", "EURRUB": "94.7080", "EURSEK": "10.9767", "EURSGD": "1.4503", "EURUSD": "1.0884", "EURZAR": "19.9534", "GBPAUD": "2.0475", "GBPCAD": "1.8621", "GBPCHF": "1.1431", "GBPHKD": "10.0660", "GBPJPY": "192.3040", "GBPNOK": "13.7732", "GBPRUB": "112.3080", "GBPSEK": "13.0698", "GBPSGD": "1.7266", "GBPUSD": "1.2963", "HKDSEK": "1.3120", "HKDSGD": "0.1718", "JPYHKD": "0.0522", "JPYSEK": "0.0685", "NZDSEK": "5.8139", "NZDUSD": "0.5738", "SGDAUD": "1.1863", "SGDCHF": "0.6606", "SGDJPY": "111.1930", "USDAED": "3.6726", "USDARS": "1 065.7500", "USDBRL": "5.7989", "USDCAD": "1.4389", "USDCHF": "0.8818", "USDCLP": "936.4600", "USDCNY": "7.2380", "USDCOP": "4 107.4700", "USDCZK": "22.9490", "USDDKK": "6.8479", "USDEGP": "50.6200", "USDGBP": "0.7711", "USDHKD": "7.7689", "USDHUF": "366.1800", "USDIDR": "16 449.0000", "USDILS": "3.6360", "USDINR": "87.1450", "USDISK": "134.3000", "USDJPY": "148.3320", "USDKRW": "1 449.5700", "USDKWD": "0.3081", "USDKZT": "491.8200", "USDMXN": "20.1619", "USDMYR": "4.4300", "USDNOK": "10.6207", "USDPEN": "3.6608", "USDPHP": "57.2800", "USDPKR": "279.8864", "USDPLN": "3.8438", "USDQAR": "3.6400", "USDRON": "4.5861", "USDRUB": "86.7500", "USDSAR": "3.7465", "USDSEK": "10.0771", "USDSGD": "1.3322", "USDTHB": "33.7600", "USDTRY": "36.5692", "USDTWD": "32.8830", "USDUAH": "41.4124", "USDVND": "25 250.0000", "USDZAR": "18.3163"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 13.03.2025</th></tr>';

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
