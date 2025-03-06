
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9168", "AUDJPY": "94.4950", "AUDSEK": "6.3940", "AUDUSD": "0.6335", "CADJPY": "104.0080", "CADSEK": "7.0275", "CHFAUD": "1.7692", "CHFHKD": "8.7801", "CHFJPY": "167.4020", "EURAUD": "1.7044", "EURCAD": "1.5483", "EURCHF": "0.9619", "EURCNY": "7.8184", "EURCZK": "24.9820", "EURGBP": "0.8375", "EURHKD": "8.4006", "EURILS": "3.8983", "EURJPY": "161.0660", "EURNOK": "11.7706", "EURNZD": "1.8840", "EURRUB": "97.5340", "EURSEK": "10.9901", "EURSGD": "1.4398", "EURUSD": "1.0799", "EURZAR": "19.7450", "GBPAUD": "2.0347", "GBPCAD": "1.8486", "GBPCHF": "1.1486", "GBPHKD": "10.0230", "GBPJPY": "192.2580", "GBPNOK": "14.0441", "GBPRUB": "115.0940", "GBPSEK": "13.1119", "GBPSGD": "1.7159", "GBPUSD": "1.2893", "HKDSEK": "1.2977", "HKDSGD": "0.1714", "JPYHKD": "0.0519", "JPYSEK": "0.0678", "NZDSEK": "5.7944", "NZDUSD": "0.5729", "SGDAUD": "1.1834", "SGDCHF": "0.6687", "SGDJPY": "112.0210", "USDAED": "3.6726", "USDARS": "1 063.5000", "USDBRL": "5.7715", "USDCAD": "1.4338", "USDCHF": "0.8908", "USDCLP": "927.8800", "USDCNY": "7.2340", "USDCOP": "4 113.4700", "USDCZK": "23.1110", "USDDKK": "6.8963", "USDEGP": "50.6200", "USDGBP": "0.7748", "USDHKD": "7.7697", "USDHUF": "368.4900", "USDIDR": "16 259.0000", "USDILS": "3.6087", "USDINR": "86.8700", "USDISK": "135.9000", "USDJPY": "149.1360", "USDKRW": "1 438.3800", "USDKWD": "0.3081", "USDKZT": "496.6200", "USDMXN": "20.4021", "USDMYR": "4.4180", "USDNOK": "10.8827", "USDPEN": "3.6500", "USDPHP": "57.2940", "USDPKR": "279.7594", "USDPLN": "3.8470", "USDQAR": "3.6400", "USDRON": "4.6034", "USDRUB": "90.1500", "USDSAR": "3.7476", "USDSEK": "10.1624", "USDSGD": "1.3300", "USDTHB": "33.5300", "USDTRY": "36.4462", "USDTWD": "32.7870", "USDUAH": "41.5782", "USDVND": "25 488.0000", "USDZAR": "18.2820"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 06.03.2025</th></tr>';

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
