
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "5.1115", "AUDJPY": "94.1850", "AUDSEK": "6.2474", "AUDUSD": "0.6515", "CADJPY": "105.5030", "CADSEK": "7.0024", "CHFAUD": "1.8667", "CHFHKD": "9.5488", "CHFJPY": "175.8970", "EURAUD": "1.7524", "EURCAD": "1.5642", "EURCHF": "0.9383", "EURCNY": "8.2009", "EURCZK": "24.7615", "EURGBP": "0.8425", "EURHKD": "8.9617", "EURILS": "3.9860", "EURJPY": "165.0780", "EURNOK": "11.4919", "EURNZD": "1.8894", "EURRUB": "90.2130", "EURSEK": "10.9587", "EURSGD": "1.4685", "EURUSD": "1.1421", "EURZAR": "20.2205", "GBPAUD": "2.0789", "GBPCAD": "1.8559", "GBPCHF": "1.1121", "GBPHKD": "10.6320", "GBPJPY": "195.8360", "GBPNOK": "13.6358", "GBPRUB": "107.0440", "GBPSEK": "13.0022", "GBPSGD": "1.7416", "GBPUSD": "1.3549", "HKDSEK": "1.2214", "HKDSGD": "0.1638", "JPYHKD": "0.0540", "JPYSEK": "0.0659", "NZDSEK": "5.7784", "NZDUSD": "0.6042", "SGDAUD": "1.1928", "SGDCHF": "0.6383", "SGDJPY": "112.1740", "USDAED": "3.6723", "USDARS": "1 184.5000", "USDBRL": "5.5584", "USDCAD": "1.3698", "USDCHF": "0.8213", "USDCLP": "936.2300", "USDCNY": "7.1785", "USDCOP": "4 137.4800", "USDCZK": "21.6760", "USDDKK": "6.5301", "USDEGP": "49.5900", "USDGBP": "0.7380", "USDHKD": "7.8474", "USDHUF": "351.3900", "USDIDR": "16 272.0000", "USDILS": "3.4859", "USDINR": "85.6400", "USDISK": "125.8000", "USDJPY": "144.5250", "USDKRW": "1 351.6500", "USDKWD": "0.3061", "USDKZT": "509.1300", "USDMXN": "19.0170", "USDMYR": "4.2290", "USDNOK": "10.0541", "USDPEN": "3.6328", "USDPHP": "55.7400", "USDPKR": "281.9500", "USDPLN": "3.7327", "USDQAR": "3.6400", "USDRON": "4.4144", "USDRUB": "78.8750", "USDSAR": "3.7504", "USDSEK": "9.5917", "USDSGD": "1.2856", "USDTHB": "32.6200", "USDTRY": "39.2775", "USDTWD": "29.9110", "USDUAH": "41.4018", "USDVND": "26 025.0000", "USDZAR": "17.7029"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 09.06.2025</th></tr>';

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
