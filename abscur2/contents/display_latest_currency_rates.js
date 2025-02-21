
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9650", "AUDJPY": "96.0680", "AUDSEK": "6.7949", "AUDUSD": "0.6389", "CADJPY": "105.9550", "CADSEK": "7.4896", "CHFAUD": "1.7398", "CHFHKD": "8.6397", "CHFJPY": "167.2200", "EURAUD": "1.6384", "EURCAD": "1.4857", "EURCHF": "0.9414", "EURCNY": "7.5933", "EURCZK": "25.0290", "EURGBP": "0.8278", "EURHKD": "8.1338", "EURILS": "3.7217", "EURJPY": "157.4170", "EURNOK": "11.6238", "EURNZD": "1.8177", "EURRUB": "93.4820", "EURSEK": "11.1346", "EURSGD": "1.3990", "EURUSD": "1.0468", "EURZAR": "19.2242", "GBPAUD": "1.9790", "GBPCAD": "1.7944", "GBPCHF": "1.1370", "GBPHKD": "9.8230", "GBPJPY": "190.1370", "GBPNOK": "14.0404", "GBPRUB": "112.9020", "GBPSEK": "13.4496", "GBPSGD": "1.6900", "GBPUSD": "1.2644", "HKDSEK": "1.3674", "HKDSGD": "0.1719", "JPYHKD": "0.0514", "JPYSEK": "0.0702", "NZDSEK": "6.1254", "NZDUSD": "0.5757", "SGDAUD": "1.1705", "SGDCHF": "0.6727", "SGDJPY": "112.4750", "USDAED": "3.6727", "USDARS": "1 058.7500", "USDBRL": "5.7043", "USDCAD": "1.4192", "USDCHF": "0.8993", "USDCLP": "941.6200", "USDCNY": "7.2550", "USDCOP": "4 074.0000", "USDCZK": "23.9480", "USDDKK": "7.1268", "USDEGP": "50.5300", "USDGBP": "0.7909", "USDHKD": "7.7713", "USDHUF": "386.3700", "USDIDR": "16 300.0000", "USDILS": "3.5555", "USDINR": "86.5670", "USDISK": "138.8500", "USDJPY": "150.3880", "USDKRW": "1 433.5100", "USDKWD": "0.3083", "USDKZT": "505.5300", "USDMXN": "20.3243", "USDMYR": "4.4155", "USDNOK": "11.1055", "USDPEN": "3.6830", "USDPHP": "57.9240", "USDPKR": "279.5650", "USDPLN": "3.9798", "USDQAR": "3.6400", "USDRON": "4.7535", "USDRUB": "89.2800", "USDSAR": "3.7470", "USDSEK": "10.6389", "USDSGD": "1.3369", "USDTHB": "33.5600", "USDTRY": "36.4036", "USDTWD": "32.7600", "USDUAH": "41.6814", "USDVND": "25 500.0000", "USDZAR": "18.3710"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.02.2025</th></tr>';

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
