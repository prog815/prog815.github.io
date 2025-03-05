
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8556", "AUDJPY": "93.9470", "AUDSEK": "6.4768", "AUDUSD": "0.6288", "CADJPY": "104.1300", "CADSEK": "7.1566", "CHFAUD": "1.7964", "CHFHKD": "8.7231", "CHFJPY": "168.4520", "EURAUD": "1.6960", "EURCAD": "1.5301", "EURCHF": "0.9460", "EURCNY": "7.7126", "EURCZK": "25.0724", "EURGBP": "0.8304", "EURHKD": "8.2497", "EURILS": "3.8673", "EURJPY": "159.3480", "EURNOK": "11.7965", "EURNZD": "1.8764", "EURRUB": "95.2460", "EURSEK": "11.0679", "EURSGD": "1.4228", "EURUSD": "1.0624", "EURZAR": "19.6254", "GBPAUD": "2.0420", "GBPCAD": "1.8423", "GBPCHF": "1.1389", "GBPHKD": "9.9330", "GBPJPY": "191.8640", "GBPNOK": "14.2222", "GBPRUB": "114.9340", "GBPSEK": "13.3341", "GBPSGD": "1.7129", "GBPUSD": "1.2791", "HKDSEK": "1.3237", "HKDSGD": "0.1719", "JPYHKD": "0.0516", "JPYSEK": "0.0685", "NZDSEK": "5.8537", "NZDUSD": "0.5660", "SGDAUD": "1.1933", "SGDCHF": "0.6642", "SGDJPY": "112.0070", "USDAED": "3.6724", "USDARS": "1 063.7000", "USDBRL": "5.8852", "USDCAD": "1.4393", "USDCHF": "0.8902", "USDCLP": "943.8000", "USDCNY": "7.2600", "USDCOP": "4 139.4700", "USDCZK": "23.6260", "USDDKK": "7.0284", "USDEGP": "50.5800", "USDGBP": "0.7826", "USDHKD": "7.7725", "USDHUF": "375.9000", "USDIDR": "16 419.0000", "USDILS": "3.6285", "USDINR": "87.2420", "USDISK": "138.2800", "USDJPY": "150.0080", "USDKRW": "1 455.4800", "USDKWD": "0.3083", "USDKZT": "499.1200", "USDMXN": "20.5690", "USDMYR": "4.4520", "USDNOK": "11.1147", "USDPEN": "3.6680", "USDPHP": "57.5660", "USDPKR": "279.7348", "USDPLN": "3.8727", "USDQAR": "3.6400", "USDRON": "4.6884", "USDRUB": "89.6260", "USDSAR": "3.7473", "USDSEK": "10.4168", "USDSGD": "1.3397", "USDTHB": "33.7000", "USDTRY": "36.4400", "USDTWD": "32.8470", "USDUAH": "41.5911", "USDVND": "25 540.0000", "USDZAR": "18.4915"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 05.03.2025</th></tr>';

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
