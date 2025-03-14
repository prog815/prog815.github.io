
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9067", "AUDJPY": "93.0500", "AUDSEK": "6.3912", "AUDUSD": "0.6285", "CADJPY": "102.5600", "CADSEK": "7.0201", "CHFAUD": "1.7967", "CHFHKD": "8.7834", "CHFJPY": "167.6580", "EURAUD": "1.7277", "EURCAD": "1.5656", "EURCHF": "0.9582", "EURCNY": "7.8484", "EURCZK": "25.0280", "EURGBP": "0.8378", "EURHKD": "8.4330", "EURILS": "4.0082", "EURJPY": "160.6780", "EURNOK": "11.5928", "EURNZD": "1.9038", "EURRUB": "93.0180", "EURSEK": "11.0579", "EURSGD": "1.4489", "EURUSD": "1.0857", "EURZAR": "19.8448", "GBPAUD": "2.0612", "GBPCAD": "1.8694", "GBPCHF": "1.1437", "GBPHKD": "10.0620", "GBPJPY": "191.8080", "GBPNOK": "13.8380", "GBPRUB": "110.4410", "GBPSEK": "13.2076", "GBPSGD": "1.7300", "GBPUSD": "1.2946", "HKDSEK": "1.3012", "HKDSGD": "0.1716", "JPYHKD": "0.0522", "JPYSEK": "0.0676", "NZDSEK": "5.8065", "NZDUSD": "0.5699", "SGDAUD": "1.1903", "SGDCHF": "0.6614", "SGDJPY": "110.7870", "USDAED": "3.6724", "USDARS": "1 066.2500", "USDBRL": "5.7991", "USDCAD": "1.4430", "USDCHF": "0.8830", "USDCLP": "933.8800", "USDCNY": "7.2440", "USDCOP": "4 127.4700", "USDCZK": "23.0830", "USDDKK": "6.8769", "USDEGP": "50.6000", "USDGBP": "0.7726", "USDHKD": "7.7719", "USDHUF": "368.7500", "USDIDR": "16 409.0000", "USDILS": "3.6574", "USDINR": "86.9190", "USDISK": "134.6000", "USDJPY": "147.9760", "USDKRW": "1 452.6700", "USDKWD": "0.3079", "USDKZT": "504.6800", "USDMXN": "20.0798", "USDMYR": "4.4430", "USDNOK": "10.6896", "USDPEN": "3.6677", "USDPHP": "57.1970", "USDPKR": "279.8500", "USDPLN": "3.8560", "USDQAR": "3.6400", "USDRON": "4.5591", "USDRUB": "86.1010", "USDSAR": "3.7465", "USDSEK": "10.1979", "USDSGD": "1.3363", "USDTHB": "33.6200", "USDTRY": "36.6769", "USDTWD": "32.9700", "USDUAH": "41.5270", "USDVND": "25 490.0000", "USDZAR": "18.2881"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.03.2025</th></tr>';

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
