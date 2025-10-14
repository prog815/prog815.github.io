
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0666", "AUDJPY": "99.1582", "AUDSEK": "6.1872", "AUDUSD": "0.6512", "CADJPY": "108.4930", "CADSEK": "6.7697", "CHFAUD": "1.9105", "CHFHKD": "9.6795", "CHFJPY": "189.4377", "EURAUD": "1.7750", "EURCAD": "1.6237", "EURCHF": "0.9298", "EURCNY": "8.2503", "EURCZK": "24.2690", "EURGBP": "0.8676", "EURHKD": "9.0004", "EURILS": "3.7972", "EURJPY": "176.1500", "EURNOK": "11.6602", "EURNZD": "2.0203", "EURRUB": "93.8691", "EURSEK": "10.9916", "EURSGD": "1.5018", "EURUSD": "1.1568", "EURZAR": "20.0232", "GBPAUD": "2.0473", "GBPCAD": "1.8712", "GBPCHF": "1.0716", "GBPHKD": "10.3728", "GBPJPY": "203.0064", "GBPNOK": "13.4339", "GBPRUB": "108.1832", "GBPSEK": "12.6670", "GBPSGD": "1.7308", "GBPUSD": "1.3332", "HKDSEK": "1.2212", "HKDSGD": "0.1669", "JPYHKD": "0.0511", "JPYSEK": "0.0624", "NZDSEK": "5.4394", "NZDUSD": "0.5725", "SGDAUD": "1.1829", "SGDCHF": "0.6192", "SGDJPY": "117.2932", "USDAED": "3.6729", "USDARS": "1 347.0000", "USDBRL": "5.4637", "USDCAD": "1.4035", "USDCHF": "0.8038", "USDCLP": "957.3500", "USDCNY": "7.1360", "USDCOP": "3 921.5300", "USDCZK": "20.9790", "USDDKK": "6.4537", "USDEGP": "47.6500", "USDGBP": "0.7501", "USDHKD": "7.7804", "USDHUF": "338.2800", "USDIDR": "16 555.0000", "USDILS": "3.2804", "USDINR": "88.6360", "USDISK": "122.2600", "USDJPY": "152.2700", "USDKRW": "1 426.2800", "USDKWD": "0.3068", "USDKZT": "537.2400", "USDMXN": "18.4651", "USDMYR": "4.2250", "USDNOK": "10.0764", "USDPEN": "3.4240", "USDPHP": "58.1220", "USDPKR": "282.0500", "USDPLN": "3.6808", "USDQAR": "3.6361", "USDRON": "4.3945", "USDRUB": "81.1455", "USDSAR": "3.7502", "USDSEK": "9.5012", "USDSGD": "1.2982", "USDTHB": "32.5400", "USDTRY": "41.7758", "USDTWD": "30.6860", "USDUAH": "41.6807", "USDVND": "26 325.0000", "USDZAR": "17.3088"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.10.2025</th></tr>';

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
