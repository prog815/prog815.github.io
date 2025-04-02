
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8838", "AUDJPY": "94.0300", "AUDSEK": "6.2647", "AUDUSD": "0.6281", "CADJPY": "104.7440", "CADSEK": "6.9761", "CHFAUD": "1.8117", "CHFHKD": "8.8010", "CHFJPY": "169.5140", "EURAUD": "1.7186", "EURCAD": "1.5436", "EURCHF": "0.9536", "EURCNY": "7.8505", "EURCZK": "24.9130", "EURGBP": "0.8356", "EURHKD": "8.4140", "EURILS": "4.0239", "EURJPY": "161.6860", "EURNOK": "11.2951", "EURNZD": "1.8910", "EURRUB": "91.2070", "EURSEK": "10.8014", "EURSGD": "1.4505", "EURUSD": "1.0795", "EURZAR": "19.9432", "GBPAUD": "2.0569", "GBPCAD": "1.8471", "GBPCHF": "1.1412", "GBPHKD": "10.0510", "GBPJPY": "193.4560", "GBPNOK": "13.5098", "GBPRUB": "107.2267", "GBPSEK": "12.9317", "GBPSGD": "1.7354", "GBPUSD": "1.2914", "HKDSEK": "1.2905", "HKDSGD": "0.1727", "JPYHKD": "0.0517", "JPYSEK": "0.0668", "NZDSEK": "5.6915", "NZDUSD": "0.5709", "SGDAUD": "1.1846", "SGDCHF": "0.6579", "SGDJPY": "111.4510", "USDAED": "3.6720", "USDARS": "1 072.6000", "USDBRL": "5.6811", "USDCAD": "1.4304", "USDCHF": "0.8836", "USDCLP": "944.7100", "USDCNY": "7.2692", "USDCOP": "4 143.4702", "USDCZK": "23.0850", "USDDKK": "6.9158", "USDEGP": "50.5200", "USDGBP": "0.7740", "USDHKD": "7.7809", "USDHUF": "371.9100", "USDIDR": "16 554.0000", "USDILS": "3.7265", "USDINR": "85.5330", "USDISK": "133.0000", "USDJPY": "149.8380", "USDKRW": "1 472.0800", "USDKWD": "0.3083", "USDKZT": "500.8872", "USDMXN": "20.3519", "USDMYR": "4.4450", "USDNOK": "10.4673", "USDPEN": "3.6691", "USDPHP": "57.1450", "USDPKR": "278.8276", "USDPLN": "3.8758", "USDQAR": "3.6400", "USDRON": "4.5961", "USDRUB": "84.2500", "USDSAR": "3.7467", "USDSEK": "10.0094", "USDSGD": "1.3441", "USDTHB": "34.1500", "USDTRY": "37.8400", "USDTWD": "33.2120", "USDUAH": "41.4228", "USDVND": "25 430.0000", "USDZAR": "18.4964"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 01.04.2025</th></tr>';

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
