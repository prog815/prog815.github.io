
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8913", "AUDJPY": "94.1830", "AUDSEK": "6.3637", "AUDUSD": "0.6292", "CADJPY": "104.4330", "CADSEK": "7.0575", "CHFAUD": "1.8008", "CHFHKD": "8.8202", "CHFJPY": "169.4190", "EURAUD": "1.7222", "EURCAD": "1.5530", "EURCHF": "0.9570", "EURCNY": "7.8557", "EURCZK": "24.9430", "EURGBP": "0.8381", "EURHKD": "8.4181", "EURILS": "4.0047", "EURJPY": "162.1940", "EURNOK": "11.4046", "EURNZD": "1.8853", "EURRUB": "91.4540", "EURSEK": "10.9516", "EURSGD": "1.4497", "EURUSD": "1.0839", "EURZAR": "19.6172", "GBPAUD": "2.0545", "GBPCAD": "1.8528", "GBPCHF": "1.1417", "GBPHKD": "10.0430", "GBPJPY": "193.3880", "GBPNOK": "13.5948", "GBPRUB": "109.2510", "GBPSEK": "13.0700", "GBPSGD": "1.7266", "GBPUSD": "1.2930", "HKDSEK": "1.3002", "HKDSGD": "0.1719", "JPYHKD": "0.0517", "JPYSEK": "0.0670", "NZDSEK": "5.7992", "NZDUSD": "0.5734", "SGDAUD": "1.1900", "SGDCHF": "0.6598", "SGDJPY": "111.9980", "USDAED": "3.6726", "USDARS": "1 068.3700", "USDBRL": "5.7341", "USDCAD": "1.4327", "USDCHF": "0.8828", "USDCLP": "928.4600", "USDCNY": "7.2500", "USDCOP": "4 141.9000", "USDCZK": "23.0560", "USDDKK": "6.8839", "USDEGP": "50.5900", "USDGBP": "0.7737", "USDHKD": "7.7724", "USDHUF": "366.9300", "USDIDR": "16 495.0000", "USDILS": "3.7156", "USDINR": "85.9970", "USDISK": "133.0000", "USDJPY": "149.5300", "USDKRW": "1 467.8200", "USDKWD": "0.3079", "USDKZT": "502.8200", "USDMXN": "20.2070", "USDMYR": "4.4200", "USDNOK": "10.5241", "USDPEN": "3.6330", "USDPHP": "57.3270", "USDPKR": "280.1000", "USDPLN": "3.8730", "USDQAR": "3.6380", "USDRON": "4.5938", "USDRUB": "84.2500", "USDSAR": "3.7479", "USDSEK": "10.1190", "USDSGD": "1.3357", "USDTHB": "33.9420", "USDTRY": "37.9803", "USDTWD": "32.9740", "USDUAH": "41.5410", "USDVND": "25 420.0000", "USDZAR": "18.2125"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 24.03.2025</th></tr>';

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
