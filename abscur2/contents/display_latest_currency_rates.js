
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9084", "AUDJPY": "94.2160", "AUDSEK": "6.3884", "AUDUSD": "0.6357", "CADJPY": "103.5340", "CADSEK": "7.0705", "CHFAUD": "1.7990", "CHFHKD": "8.8614", "CHFJPY": "169.3460", "EURAUD": "1.7161", "EURCAD": "1.5628", "EURCHF": "0.9561", "EURCNY": "7.8902", "EURCZK": "24.9810", "EURGBP": "0.8387", "EURHKD": "8.4657", "EURILS": "3.9753", "EURJPY": "161.9990", "EURNOK": "11.5260", "EURNZD": "1.8801", "EURRUB": "91.5350", "EURSEK": "11.0149", "EURSGD": "1.4507", "EURUSD": "1.0911", "EURZAR": "19.7521", "GBPAUD": "2.0461", "GBPCAD": "1.8630", "GBPCHF": "1.1400", "GBPHKD": "10.0940", "GBPJPY": "193.0700", "GBPNOK": "13.7413", "GBPRUB": "109.6960", "GBPSEK": "13.1278", "GBPSGD": "1.7303", "GBPUSD": "1.3009", "HKDSEK": "1.3063", "HKDSGD": "0.1717", "JPYHKD": "0.0521", "JPYSEK": "0.0679", "NZDSEK": "5.8297", "NZDUSD": "0.5813", "SGDAUD": "1.1858", "SGDCHF": "0.6582", "SGDJPY": "111.4940", "USDAED": "3.6727", "USDARS": "1 068.7500", "USDBRL": "5.6361", "USDCAD": "1.4319", "USDCHF": "0.8763", "USDCLP": "914.8000", "USDCNY": "7.2437", "USDCOP": "4 150.2800", "USDCZK": "22.8960", "USDDKK": "6.8356", "USDEGP": "50.6000", "USDGBP": "0.7690", "USDHKD": "7.7705", "USDHUF": "364.9300", "USDIDR": "16 470.0000", "USDILS": "3.6614", "USDINR": "86.3070", "USDISK": "133.3500", "USDJPY": "148.4140", "USDKRW": "1 459.0800", "USDKWD": "0.3079", "USDKZT": "501.5300", "USDMXN": "20.0280", "USDMYR": "4.4165", "USDNOK": "10.5506", "USDPEN": "3.6146", "USDPHP": "57.1460", "USDPKR": "280.1287", "USDPLN": "3.8329", "USDQAR": "3.6400", "USDRON": "4.5849", "USDRUB": "83.9000", "USDSAR": "3.7477", "USDSEK": "10.0895", "USDSGD": "1.3307", "USDTHB": "33.7500", "USDTRY": "37.6016", "USDTWD": "33.0290", "USDUAH": "41.5658", "USDVND": "25 340.0000", "USDZAR": "18.1175"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 20.03.2025</th></tr>';

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
