
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8723", "AUDJPY": "93.6340", "AUDSEK": "6.3573", "AUDUSD": "0.6269", "CADJPY": "104.0340", "CADSEK": "7.0654", "CHFAUD": "1.8056", "CHFHKD": "8.8041", "CHFJPY": "169.1210", "EURAUD": "1.7241", "EURCAD": "1.5514", "EURCHF": "0.9543", "EURCNY": "7.8411", "EURCZK": "24.9750", "EURGBP": "0.8373", "EURHKD": "8.4066", "EURILS": "4.0214", "EURJPY": "161.4870", "EURNOK": "11.4011", "EURNZD": "1.8859", "EURRUB": "91.3900", "EURSEK": "10.9699", "EURSGD": "1.4437", "EURUSD": "1.0812", "EURZAR": "19.6837", "GBPAUD": "2.0595", "GBPCAD": "1.8531", "GBPCHF": "1.1398", "GBPHKD": "10.0380", "GBPJPY": "192.8540", "GBPNOK": "13.6176", "GBPRUB": "109.1460", "GBPSEK": "13.0989", "GBPSGD": "1.7242", "GBPUSD": "1.2911", "HKDSEK": "1.3036", "HKDSGD": "0.1718", "JPYHKD": "0.0518", "JPYSEK": "0.0674", "NZDSEK": "5.7980", "NZDUSD": "0.5731", "SGDAUD": "1.1932", "SGDCHF": "0.6564", "SGDJPY": "111.7570", "USDAED": "3.6726", "USDARS": "1 068.3700", "USDBRL": "5.7341", "USDCAD": "1.4349", "USDCHF": "0.8825", "USDCLP": "928.4600", "USDCNY": "7.2500", "USDCOP": "4 141.9000", "USDCZK": "23.0920", "USDDKK": "6.8971", "USDEGP": "50.5100", "USDGBP": "0.7744", "USDHKD": "7.7731", "USDHUF": "367.2000", "USDIDR": "16 495.0000", "USDILS": "3.7145", "USDINR": "85.9690", "USDISK": "133.0000", "USDJPY": "149.2750", "USDKRW": "1 463.0000", "USDKWD": "0.3079", "USDKZT": "502.8200", "USDMXN": "20.2230", "USDMYR": "4.4190", "USDNOK": "10.5318", "USDPEN": "3.6330", "USDPHP": "57.3240", "USDPKR": "280.1000", "USDPLN": "3.8718", "USDQAR": "3.6380", "USDRON": "4.5900", "USDRUB": "84.5000", "USDSAR": "3.7510", "USDSEK": "10.1281", "USDSGD": "1.3356", "USDTHB": "33.7400", "USDTRY": "37.7800", "USDTWD": "32.9800", "USDUAH": "41.5410", "USDVND": "25 585.0000", "USDZAR": "18.2000"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 21.03.2025</th></tr>';

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
