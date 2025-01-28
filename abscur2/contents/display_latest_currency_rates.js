
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8618", "AUDJPY": "96.9750", "AUDSEK": "6.8678", "AUDUSD": "0.6243", "CADJPY": "107.9110", "CADSEK": "7.6423", "CHFAUD": "1.7676", "CHFHKD": "8.6039", "CHFJPY": "171.5340", "EURAUD": "1.6703", "EURCAD": "1.5010", "EURCHF": "0.9441", "EURCNY": "7.5566", "EURCZK": "25.0682", "EURGBP": "0.8390", "EURHKD": "8.1244", "EURILS": "3.7694", "EURJPY": "161.9810", "EURNOK": "11.7766", "EURNZD": "1.8451", "EURRUB": "102.6980", "EURSEK": "11.4754", "EURSGD": "1.4092", "EURUSD": "1.0425", "EURZAR": "19.4693", "GBPAUD": "1.9902", "GBPCAD": "1.7885", "GBPCHF": "1.1250", "GBPHKD": "9.6750", "GBPJPY": "193.0290", "GBPNOK": "14.0298", "GBPRUB": "122.3950", "GBPSEK": "13.6721", "GBPSGD": "1.6787", "GBPUSD": "1.2422", "HKDSEK": "1.4107", "HKDSGD": "0.1734", "JPYHKD": "0.0499", "JPYSEK": "0.0703", "NZDSEK": "6.2178", "NZDUSD": "0.5650", "SGDAUD": "1.1852", "SGDCHF": "0.6696", "SGDJPY": "114.8820", "USDAED": "3.6726", "USDARS": "1 050.0000", "USDBRL": "5.9067", "USDCAD": "1.4398", "USDCHF": "0.9056", "USDCLP": "991.4400", "USDCNY": "7.2440", "USDCOP": "4 212.9502", "USDCZK": "24.0340", "USDDKK": "7.1550", "USDEGP": "50.1500", "USDGBP": "0.8046", "USDHKD": "7.7913", "USDHUF": "390.9400", "USDIDR": "16 170.0000", "USDILS": "3.6177", "USDINR": "86.4920", "USDISK": "139.3000", "USDJPY": "155.3870", "USDKRW": "1 445.1800", "USDKWD": "0.3076", "USDKZT": "516.3300", "USDMXN": "20.6362", "USDMYR": "4.3905", "USDNOK": "11.2889", "USDPEN": "3.7387", "USDPHP": "58.4620", "USDPKR": "278.8162", "USDPLN": "4.0320", "USDQAR": "3.6400", "USDRON": "4.7686", "USDRUB": "98.5760", "USDSAR": "3.7465", "USDSEK": "11.0039", "USDSGD": "1.3516", "USDTHB": "33.8400", "USDTRY": "35.7608", "USDTWD": "32.9130", "USDUAH": "41.9253", "USDVND": "25 060.0000", "USDZAR": "18.6776"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.01.2025</th></tr>';

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
