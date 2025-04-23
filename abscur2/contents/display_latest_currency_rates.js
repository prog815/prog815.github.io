
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9387", "AUDJPY": "90.6980", "AUDSEK": "6.1255", "AUDUSD": "0.6369", "CADJPY": "103.0560", "CADSEK": "6.9528", "CHFAUD": "1.9047", "CHFHKD": "9.4176", "CHFJPY": "172.9990", "EURAUD": "1.7835", "EURCAD": "1.5713", "EURCHF": "0.9361", "EURCNY": "8.3488", "EURCZK": "25.0570", "EURGBP": "0.8547", "EURHKD": "8.8148", "EURILS": "4.2554", "EURJPY": "161.9800", "EURNOK": "11.8680", "EURNZD": "1.9059", "EURRUB": "92.7180", "EURSEK": "10.9344", "EURSGD": "1.4898", "EURUSD": "1.1362", "EURZAR": "21.1108", "GBPAUD": "2.0856", "GBPCAD": "1.8375", "GBPCHF": "1.0944", "GBPHKD": "10.3130", "GBPJPY": "189.4280", "GBPNOK": "13.8860", "GBPRUB": "108.4280", "GBPSEK": "12.7900", "GBPSGD": "1.7423", "GBPUSD": "1.3290", "HKDSEK": "1.2389", "HKDSGD": "0.1689", "JPYHKD": "0.0542", "JPYSEK": "0.0671", "NZDSEK": "5.7198", "NZDUSD": "0.5959", "SGDAUD": "1.1973", "SGDCHF": "0.6273", "SGDJPY": "108.5090", "USDAED": "3.6729", "USDARS": "1 101.0000", "USDBRL": "5.7210", "USDCAD": "1.3828", "USDCHF": "0.8235", "USDCLP": "941.5300", "USDCNY": "7.3060", "USDCOP": "4 291.4700", "USDCZK": "22.0300", "USDDKK": "6.5693", "USDEGP": "50.9900", "USDGBP": "0.7523", "USDHKD": "7.7580", "USDHUF": "359.0800", "USDIDR": "16 849.0000", "USDILS": "3.6886", "USDINR": "85.1400", "USDISK": "126.6000", "USDJPY": "142.5510", "USDKRW": "1 429.1900", "USDKWD": "0.3056", "USDKZT": "517.5300", "USDMXN": "19.6030", "USDMYR": "4.3880", "USDNOK": "10.4344", "USDPEN": "3.6967", "USDPHP": "56.6180", "USDPKR": "280.6600", "USDPLN": "3.7688", "USDQAR": "3.6400", "USDRON": "4.3776", "USDRUB": "81.4000", "USDSAR": "3.7509", "USDSEK": "9.6121", "USDSGD": "1.3113", "USDTHB": "33.3440", "USDTRY": "38.2573", "USDTWD": "32.5540", "USDUAH": "41.3785", "USDVND": "25 972.0000", "USDZAR": "18.5767"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 22.04.2025</th></tr>';

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
