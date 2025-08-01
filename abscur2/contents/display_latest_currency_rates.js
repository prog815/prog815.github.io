
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0442", "AUDJPY": "96.8655", "AUDSEK": "6.2822", "AUDUSD": "0.6426", "CADJPY": "108.8218", "CADSEK": "7.0576", "CHFAUD": "1.9160", "CHFHKD": "9.6647", "CHFJPY": "185.5947", "EURAUD": "1.7758", "EURCAD": "1.5812", "EURCHF": "0.9271", "EURCNY": "8.2190", "EURCZK": "24.5460", "EURGBP": "0.8642", "EURHKD": "8.9604", "EURILS": "3.8711", "EURJPY": "172.0700", "EURNOK": "11.7778", "EURNZD": "1.9377", "EURRUB": "92.5705", "EURSEK": "11.1595", "EURSGD": "1.4817", "EURUSD": "1.1415", "EURZAR": "20.7916", "GBPAUD": "2.0549", "GBPCAD": "1.8301", "GBPCHF": "1.0781", "GBPHKD": "10.3889", "GBPJPY": "197.8632", "GBPNOK": "13.6466", "GBPRUB": "107.2035", "GBPSEK": "12.9577", "GBPSGD": "1.7161", "GBPUSD": "1.3235", "HKDSEK": "1.2473", "HKDSGD": "0.1652", "JPYHKD": "0.0525", "JPYSEK": "0.0655", "NZDSEK": "5.7686", "NZDUSD": "0.5892", "SGDAUD": "1.1991", "SGDCHF": "0.6283", "SGDJPY": "115.3016", "USDAED": "3.6729", "USDARS": "1 315.0000", "USDBRL": "5.5691", "USDCAD": "1.3828", "USDCHF": "0.8146", "USDCLP": "979.8800", "USDCNY": "7.1950", "USDCOP": "4 187.5000", "USDCZK": "21.5490", "USDDKK": "6.5435", "USDEGP": "48.6400", "USDGBP": "0.7556", "USDHKD": "7.8496", "USDHUF": "350.7700", "USDIDR": "16 385.0000", "USDILS": "3.3810", "USDINR": "87.6620", "USDISK": "124.5300", "USDJPY": "149.5000", "USDKRW": "1 392.8500", "USDKWD": "0.3056", "USDKZT": "542.7000", "USDMXN": "18.8706", "USDMYR": "4.2350", "USDNOK": "10.3110", "USDPEN": "3.5686", "USDPHP": "57.8300", "USDPKR": "283.0000", "USDPLN": "3.7456", "USDQAR": "3.6361", "USDRON": "4.4456", "USDRUB": "81.0000", "USDSAR": "3.7511", "USDSEK": "9.7905", "USDSGD": "1.2966", "USDTHB": "32.7100", "USDTRY": "40.5557", "USDTWD": "29.8430", "USDUAH": "41.6500", "USDVND": "26 200.0000", "USDZAR": "17.9936"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 31.07.2025</th></tr>';

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
