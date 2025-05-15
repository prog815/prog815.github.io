
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0166", "AUDJPY": "94.2380", "AUDSEK": "6.2712", "AUDUSD": "0.6428", "CADJPY": "104.9080", "CADSEK": "6.9814", "CHFAUD": "1.8467", "CHFHKD": "9.2691", "CHFJPY": "174.0950", "EURAUD": "1.7375", "EURCAD": "1.5609", "EURCHF": "0.9407", "EURCNY": "8.0761", "EURCZK": "24.9160", "EURGBP": "0.8423", "EURHKD": "8.7218", "EURILS": "3.9619", "EURJPY": "163.8460", "EURNOK": "11.5988", "EURNZD": "1.8932", "EURRUB": "89.8160", "EURSEK": "10.9084", "EURSGD": "1.4547", "EURUSD": "1.1175", "EURZAR": "20.3947", "GBPAUD": "2.0610", "GBPCAD": "1.8520", "GBPCHF": "1.1159", "GBPHKD": "10.3480", "GBPJPY": "194.3670", "GBPNOK": "13.7641", "GBPRUB": "106.5890", "GBPSEK": "12.9412", "GBPSGD": "1.7256", "GBPUSD": "1.3258", "HKDSEK": "1.2493", "HKDSGD": "0.1668", "JPYHKD": "0.0530", "JPYSEK": "0.0661", "NZDSEK": "5.7371", "NZDUSD": "0.5897", "SGDAUD": "1.1945", "SGDCHF": "0.6454", "SGDJPY": "112.3320", "USDAED": "3.6729", "USDARS": "1 131.0000", "USDBRL": "5.6194", "USDCAD": "1.3970", "USDCHF": "0.8415", "USDCLP": "941.5100", "USDCNY": "7.2090", "USDCOP": "4 177.6300", "USDCZK": "22.2830", "USDDKK": "6.6739", "USDEGP": "50.3400", "USDGBP": "0.7540", "USDHKD": "7.8043", "USDHUF": "360.4200", "USDIDR": "16 545.0000", "USDILS": "3.5470", "USDINR": "85.3800", "USDISK": "129.6000", "USDJPY": "146.6300", "USDKRW": "1 407.3000", "USDKWD": "0.3071", "USDKZT": "507.8300", "USDMXN": "19.3750", "USDMYR": "4.2850", "USDNOK": "10.3658", "USDPEN": "3.6727", "USDPHP": "55.8610", "USDPKR": "281.4900", "USDPLN": "3.7816", "USDQAR": "3.6386", "USDRON": "4.5633", "USDRUB": "80.2500", "USDSAR": "3.7507", "USDSEK": "9.7421", "USDSGD": "1.3017", "USDTHB": "33.1590", "USDTRY": "38.7379", "USDTWD": "30.3370", "USDUAH": "41.5004", "USDVND": "25 923.0000", "USDZAR": "18.2467"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 14.05.2025</th></tr>';

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
