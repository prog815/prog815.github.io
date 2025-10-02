
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1453", "AUDJPY": "97.2295", "AUDSEK": "6.1930", "AUDUSD": "0.6612", "CADJPY": "105.5332", "CADSEK": "6.7219", "CHFAUD": "1.8979", "CHFHKD": "9.7651", "CHFJPY": "184.5275", "EURAUD": "1.7734", "EURCAD": "1.6343", "EURCHF": "0.9347", "EURCNY": "8.3499", "EURCZK": "24.2310", "EURGBP": "0.8702", "EURHKD": "9.1273", "EURILS": "3.8884", "EURJPY": "172.4700", "EURNOK": "11.6204", "EURNZD": "2.0156", "EURRUB": "96.7590", "EURSEK": "10.9857", "EURSGD": "1.5102", "EURUSD": "1.1729", "EURZAR": "20.2026", "GBPAUD": "2.0383", "GBPCAD": "1.8779", "GBPCHF": "1.0740", "GBPHKD": "10.4875", "GBPJPY": "198.1793", "GBPNOK": "13.3522", "GBPRUB": "111.1792", "GBPSEK": "12.6230", "GBPSGD": "1.7353", "GBPUSD": "1.3477", "HKDSEK": "1.2036", "HKDSGD": "0.1655", "JPYHKD": "0.0529", "JPYSEK": "0.0637", "NZDSEK": "5.4465", "NZDUSD": "0.5815", "SGDAUD": "1.1746", "SGDCHF": "0.6189", "SGDJPY": "114.2047", "USDAED": "3.6729", "USDARS": "1 422.0000", "USDBRL": "5.3286", "USDCAD": "1.3934", "USDCHF": "0.7969", "USDCLP": "959.1200", "USDCNY": "7.1190", "USDCOP": "3 877.5000", "USDCZK": "20.6590", "USDDKK": "6.3613", "USDEGP": "47.8000", "USDGBP": "0.7420", "USDHKD": "7.7818", "USDHUF": "331.5200", "USDIDR": "16 600.0000", "USDILS": "3.3152", "USDINR": "88.6540", "USDISK": "121.2200", "USDJPY": "147.0500", "USDKRW": "1 402.6900", "USDKWD": "0.3055", "USDKZT": "546.7300", "USDMXN": "18.3698", "USDMYR": "4.2050", "USDNOK": "9.9074", "USDPEN": "3.4750", "USDPHP": "58.1220", "USDPKR": "282.2500", "USDPLN": "3.6308", "USDQAR": "3.6268", "USDRON": "4.3311", "USDRUB": "82.4955", "USDSAR": "3.7502", "USDSEK": "9.3663", "USDSGD": "1.2876", "USDTHB": "32.4200", "USDTRY": "41.5252", "USDTWD": "30.4020", "USDUAH": "41.2224", "USDVND": "26 405.0000", "USDZAR": "17.2245"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 01.10.2025</th></tr>';

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
