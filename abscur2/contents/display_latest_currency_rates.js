
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0757", "AUDJPY": "95.9759", "AUDSEK": "6.2026", "AUDUSD": "0.6491", "CADJPY": "107.1294", "CADSEK": "6.9234", "CHFAUD": "1.9083", "CHFHKD": "9.6861", "CHFJPY": "183.1537", "EURAUD": "1.7959", "EURCAD": "1.6092", "EURCHF": "0.9412", "EURCNY": "8.3765", "EURCZK": "24.4330", "EURGBP": "0.8633", "EURHKD": "9.1170", "EURILS": "3.9375", "EURJPY": "172.4000", "EURNOK": "11.8825", "EURNZD": "1.9688", "EURRUB": "93.5635", "EURSEK": "11.1444", "EURSGD": "1.4975", "EURUSD": "1.1660", "EURZAR": "20.5421", "GBPAUD": "2.0801", "GBPCAD": "1.8636", "GBPCHF": "1.0900", "GBPHKD": "10.5580", "GBPJPY": "199.6406", "GBPNOK": "13.7548", "GBPRUB": "108.3535", "GBPSEK": "12.9021", "GBPSGD": "1.7341", "GBPUSD": "1.3502", "HKDSEK": "1.2220", "HKDSGD": "0.1642", "JPYHKD": "0.0529", "JPYSEK": "0.0646", "NZDSEK": "5.6589", "NZDUSD": "0.5922", "SGDAUD": "1.1996", "SGDCHF": "0.6286", "SGDJPY": "115.1289", "USDAED": "3.6729", "USDARS": "1 292.5000", "USDBRL": "5.4363", "USDCAD": "1.3802", "USDCHF": "0.8073", "USDCLP": "963.9200", "USDCNY": "7.1854", "USDCOP": "4 014.4500", "USDCZK": "20.9560", "USDDKK": "6.4004", "USDEGP": "48.3300", "USDGBP": "0.7406", "USDHKD": "7.8196", "USDHUF": "338.4700", "USDIDR": "16 155.0000", "USDILS": "3.3772", "USDINR": "87.2910", "USDISK": "122.8200", "USDJPY": "147.8600", "USDKRW": "1 388.7600", "USDKWD": "0.3056", "USDKZT": "538.4200", "USDMXN": "18.7750", "USDMYR": "4.2200", "USDNOK": "10.1872", "USDPEN": "3.5425", "USDPHP": "56.9610", "USDPKR": "283.0000", "USDPLN": "3.6417", "USDQAR": "3.6266", "USDRON": "4.3342", "USDRUB": "80.2500", "USDSAR": "3.7522", "USDSEK": "9.5557", "USDSGD": "1.2843", "USDTHB": "32.5100", "USDTRY": "40.8658", "USDTWD": "30.0320", "USDUAH": "41.2500", "USDVND": "26 275.0000", "USDZAR": "17.6185"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.08.2025</th></tr>';

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
