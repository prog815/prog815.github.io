
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0639", "AUDJPY": "95.8625", "AUDSEK": "6.1966", "AUDUSD": "0.6504", "CADJPY": "106.8895", "CADSEK": "6.9093", "CHFAUD": "1.9171", "CHFHKD": "9.7080", "CHFJPY": "183.7781", "EURAUD": "1.7881", "EURCAD": "1.6046", "EURCHF": "0.9333", "EURCNY": "8.3246", "EURCZK": "24.4810", "EURGBP": "0.8621", "EURHKD": "9.0603", "EURILS": "3.8728", "EURJPY": "171.5200", "EURNOK": "11.7233", "EURNZD": "1.9862", "EURRUB": "93.4981", "EURSEK": "11.0869", "EURSGD": "1.4963", "EURUSD": "1.1637", "EURZAR": "20.5721", "GBPAUD": "2.0752", "GBPCAD": "1.8611", "GBPCHF": "1.0825", "GBPHKD": "10.5085", "GBPJPY": "198.9323", "GBPNOK": "13.5971", "GBPRUB": "108.4423", "GBPSEK": "12.8590", "GBPSGD": "1.7354", "GBPUSD": "1.3497", "HKDSEK": "1.2237", "HKDSGD": "0.1651", "JPYHKD": "0.0528", "JPYSEK": "0.0646", "NZDSEK": "5.5811", "NZDUSD": "0.5858", "SGDAUD": "1.1958", "SGDCHF": "0.6237", "SGDJPY": "114.6290", "USDAED": "3.6728", "USDARS": "1 348.0000", "USDBRL": "5.4173", "USDCAD": "1.3789", "USDCHF": "0.8020", "USDCLP": "967.9800", "USDCNY": "7.1310", "USDCOP": "4 030.5000", "USDCZK": "21.0370", "USDDKK": "6.4137", "USDEGP": "48.5900", "USDGBP": "0.7409", "USDHKD": "7.7858", "USDHUF": "340.0000", "USDIDR": "16 355.0000", "USDILS": "3.3280", "USDINR": "87.6400", "USDISK": "122.7200", "USDJPY": "147.3900", "USDKRW": "1 393.0000", "USDKWD": "0.3052", "USDKZT": "538.0400", "USDMXN": "18.6570", "USDMYR": "4.2320", "USDNOK": "10.0742", "USDPEN": "3.5490", "USDPHP": "57.1190", "USDPKR": "282.9000", "USDPLN": "3.6637", "USDQAR": "3.6274", "USDRON": "4.3512", "USDRUB": "80.3455", "USDSAR": "3.7523", "USDSEK": "9.5273", "USDSGD": "1.2858", "USDTHB": "32.4300", "USDTRY": "41.0224", "USDTWD": "30.5410", "USDUAH": "41.3400", "USDVND": "26 374.0000", "USDZAR": "17.6782"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 28.08.2025</th></tr>';

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
