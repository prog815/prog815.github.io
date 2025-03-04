
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8485", "AUDJPY": "92.4250", "AUDSEK": "6.5680", "AUDUSD": "0.6237", "CADJPY": "102.7660", "CADSEK": "7.3035", "CHFAUD": "1.8027", "CHFHKD": "8.7461", "CHFJPY": "166.6960", "EURAUD": "1.6901", "EURCAD": "1.5201", "EURCHF": "0.9369", "EURCNY": "7.6551", "EURCZK": "25.0474", "EURGBP": "0.8274", "EURHKD": "8.1977", "EURILS": "3.8004", "EURJPY": "156.2150", "EURNOK": "11.7852", "EURNZD": "1.8699", "EURRUB": "94.0490", "EURSEK": "11.0975", "EURSGD": "1.4143", "EURUSD": "1.0545", "EURZAR": "19.5365", "GBPAUD": "2.0426", "GBPCAD": "1.8373", "GBPCHF": "1.1325", "GBPHKD": "9.9050", "GBPJPY": "188.8840", "GBPNOK": "14.2427", "GBPRUB": "113.7590", "GBPSEK": "13.4065", "GBPSGD": "1.7089", "GBPUSD": "1.2743", "HKDSEK": "1.3521", "HKDSGD": "0.1725", "JPYHKD": "0.0522", "JPYSEK": "0.0705", "NZDSEK": "5.9293", "NZDUSD": "0.5638", "SGDAUD": "1.1945", "SGDCHF": "0.6624", "SGDJPY": "110.4790", "USDAED": "3.6723", "USDARS": "1 063.6000", "USDBRL": "5.8873", "USDCAD": "1.4418", "USDCHF": "0.8883", "USDCLP": "948.6700", "USDCNY": "7.2730", "USDCOP": "4 106.6400", "USDCZK": "23.7440", "USDDKK": "7.0722", "USDEGP": "50.6000", "USDGBP": "0.7846", "USDHKD": "7.7734", "USDHUF": "377.9500", "USDIDR": "16 440.0000", "USDILS": "3.6091", "USDINR": "87.1180", "USDISK": "138.9300", "USDJPY": "148.2470", "USDKRW": "1 454.5300", "USDKWD": "0.3084", "USDKZT": "499.3200", "USDMXN": "20.7313", "USDMYR": "4.4630", "USDNOK": "11.1713", "USDPEN": "3.6850", "USDPHP": "57.5300", "USDPKR": "279.6344", "USDPLN": "3.9446", "USDQAR": "3.6400", "USDRON": "4.7156", "USDRUB": "89.0230", "USDSAR": "3.7473", "USDSEK": "10.5089", "USDSGD": "1.3406", "USDTHB": "33.6700", "USDTRY": "36.4230", "USDTWD": "32.8090", "USDUAH": "41.4313", "USDVND": "25 570.0000", "USDZAR": "18.5160"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 04.03.2025</th></tr>';

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
