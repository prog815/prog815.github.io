
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8742", "AUDJPY": "90.3000", "AUDSEK": "6.1424", "AUDUSD": "0.6319", "CADJPY": "102.9630", "CADSEK": "7.0445", "CHFAUD": "1.9420", "CHFHKD": "9.5081", "CHFJPY": "175.6300", "EURAUD": "1.7950", "EURCAD": "1.5756", "EURCHF": "0.9248", "EURCNY": "8.3079", "EURCZK": "25.0750", "EURGBP": "0.8609", "EURHKD": "8.8024", "EURILS": "4.1808", "EURJPY": "162.3220", "EURNOK": "11.9869", "EURNZD": "1.9338", "EURRUB": "93.3880", "EURSEK": "11.1016", "EURSGD": "1.4927", "EURUSD": "1.1352", "EURZAR": "21.4382", "GBPAUD": "2.0841", "GBPCAD": "1.8293", "GBPCHF": "1.0732", "GBPHKD": "10.2270", "GBPJPY": "188.4500", "GBPNOK": "13.9257", "GBPRUB": "109.2600", "GBPSEK": "12.8935", "GBPSGD": "1.7336", "GBPUSD": "1.3182", "HKDSEK": "1.2460", "HKDSGD": "0.1720", "JPYHKD": "0.0537", "JPYSEK": "0.0676", "NZDSEK": "5.6524", "NZDUSD": "0.5867", "SGDAUD": "1.2050", "SGDCHF": "0.6184", "SGDJPY": "108.4680", "USDAED": "3.6729", "USDARS": "1 194.5000", "USDBRL": "5.8546", "USDCAD": "1.3874", "USDCHF": "0.8137", "USDCLP": "966.2600", "USDCNY": "7.3090", "USDCOP": "4 286.9700", "USDCZK": "22.0690", "USDDKK": "6.5724", "USDEGP": "50.9500", "USDGBP": "0.7584", "USDHKD": "7.7551", "USDHUF": "360.9100", "USDIDR": "16 769.0000", "USDILS": "3.7136", "USDINR": "86.0030", "USDISK": "127.5000", "USDJPY": "142.9630", "USDKRW": "1 419.2900", "USDKWD": "0.3060", "USDKZT": "517.6300", "USDMXN": "20.0820", "USDMYR": "4.4100", "USDNOK": "10.5366", "USDPEN": "3.7267", "USDPHP": "57.0580", "USDPKR": "280.2000", "USDPLN": "3.7678", "USDQAR": "3.6385", "USDRON": "4.3812", "USDRUB": "82.2300", "USDSAR": "3.7526", "USDSEK": "9.7559", "USDSGD": "1.3151", "USDTHB": "33.4000", "USDTRY": "38.0069", "USDTWD": "32.3540", "USDUAH": "41.3879", "USDVND": "25 824.0000", "USDZAR": "18.8860"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.04.2025</th></tr>';

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
