
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9372", "AUDJPY": "96.3920", "AUDSEK": "6.8073", "AUDUSD": "0.6352", "CADJPY": "106.9000", "CADSEK": "7.5495", "CHFAUD": "1.7453", "CHFHKD": "8.6230", "CHFJPY": "168.3390", "EURAUD": "1.6469", "EURCAD": "1.4850", "EURCHF": "0.9429", "EURCNY": "7.6120", "EURCZK": "25.0907", "EURGBP": "0.8306", "EURHKD": "8.1317", "EURILS": "3.7167", "EURJPY": "158.7470", "EURNOK": "11.6625", "EURNZD": "1.8338", "EURRUB": "95.6390", "EURSEK": "11.2126", "EURSGD": "1.4040", "EURUSD": "1.0460", "EURZAR": "19.2584", "GBPAUD": "1.9824", "GBPCAD": "1.7874", "GBPCHF": "1.1347", "GBPHKD": "9.7890", "GBPJPY": "191.0440", "GBPNOK": "14.0408", "GBPRUB": "115.1420", "GBPSEK": "13.4964", "GBPSGD": "1.6899", "GBPUSD": "1.2587", "HKDSEK": "1.3774", "HKDSGD": "0.1726", "JPYHKD": "0.0510", "JPYSEK": "0.0701", "NZDSEK": "6.1116", "NZDUSD": "0.5704", "SGDAUD": "1.1726", "SGDCHF": "0.6713", "SGDJPY": "113.0280", "USDAED": "3.6728", "USDARS": "1 059.2500", "USDBRL": "5.7052", "USDCAD": "1.4204", "USDCHF": "0.9016", "USDCLP": "951.1500", "USDCNY": "7.2787", "USDCOP": "4 133.4702", "USDCZK": "23.9790", "USDDKK": "7.1310", "USDEGP": "50.5900", "USDGBP": "0.7944", "USDHKD": "7.7757", "USDHUF": "383.8000", "USDIDR": "16 270.0000", "USDILS": "3.5553", "USDINR": "86.8990", "USDISK": "139.9700", "USDJPY": "151.7630", "USDKRW": "1 441.0601", "USDKWD": "0.3082", "USDKZT": "499.6300", "USDMXN": "20.2652", "USDMYR": "4.4425", "USDNOK": "11.1509", "USDPEN": "3.6260", "USDPHP": "58.2190", "USDPKR": "279.2079", "USDPLN": "3.9832", "USDQAR": "3.6400", "USDRON": "4.7567", "USDRUB": "91.4300", "USDSAR": "3.7474", "USDSEK": "10.7213", "USDSGD": "1.3428", "USDTHB": "33.6300", "USDTRY": "36.2706", "USDTWD": "32.7310", "USDUAH": "41.6299", "USDVND": "25 330.0000", "USDZAR": "18.4180"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 18.02.2025</th></tr>';

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
