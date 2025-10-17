
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.0384", "AUDJPY": "97.5323", "AUDSEK": "6.1112", "AUDUSD": "0.6484", "CADJPY": "107.0529", "CADSEK": "6.7077", "CHFAUD": "1.9451", "CHFHKD": "9.8001", "CHFJPY": "189.7087", "EURAUD": "1.8022", "EURCAD": "1.6425", "EURCHF": "0.9267", "EURCNY": "8.3247", "EURCZK": "24.2750", "EURGBP": "0.8698", "EURHKD": "9.0814", "EURILS": "3.8643", "EURJPY": "175.8000", "EURNOK": "11.7674", "EURNZD": "2.0414", "EURRUB": "93.4960", "EURSEK": "11.0150", "EURSGD": "1.5117", "EURUSD": "1.1687", "EURZAR": "20.2489", "GBPAUD": "2.0713", "GBPCAD": "1.8870", "GBPCHF": "1.0649", "GBPHKD": "10.4358", "GBPJPY": "202.0141", "GBPNOK": "13.5224", "GBPRUB": "107.4400", "GBPSEK": "12.6578", "GBPSGD": "1.7372", "GBPUSD": "1.3430", "HKDSEK": "1.2129", "HKDSGD": "0.1665", "JPYHKD": "0.0517", "JPYSEK": "0.0627", "NZDSEK": "5.3939", "NZDUSD": "0.5723", "SGDAUD": "1.1923", "SGDCHF": "0.6130", "SGDJPY": "116.2891", "USDAED": "3.6729", "USDARS": "1 401.0000", "USDBRL": "5.4452", "USDCAD": "1.4051", "USDCHF": "0.7929", "USDCLP": "955.8000", "USDCNY": "7.1220", "USDCOP": "3 838.5000", "USDCZK": "20.7710", "USDDKK": "6.3900", "USDEGP": "47.5500", "USDGBP": "0.7446", "USDHKD": "7.7705", "USDHUF": "333.4300", "USDIDR": "16 565.0000", "USDILS": "3.3065", "USDINR": "87.9610", "USDISK": "121.0100", "USDJPY": "150.4200", "USDKRW": "1 416.6400", "USDKWD": "0.3056", "USDKZT": "535.6700", "USDMXN": "18.4360", "USDMYR": "4.2250", "USDNOK": "10.0688", "USDPEN": "3.3856", "USDPHP": "57.9480", "USDPKR": "282.0500", "USDPLN": "3.6327", "USDQAR": "3.6364", "USDRON": "4.3493", "USDRUB": "80.0000", "USDSAR": "3.7504", "USDSEK": "9.4250", "USDSGD": "1.2935", "USDTHB": "32.4700", "USDTRY": "41.8242", "USDTWD": "30.6150", "USDUAH": "41.6500", "USDVND": "26 310.0000", "USDZAR": "17.3260"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 17.10.2025</th></tr>';

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
