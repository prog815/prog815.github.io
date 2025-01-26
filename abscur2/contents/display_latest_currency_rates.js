
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.9129", "AUDJPY": "98.4540", "AUDSEK": "6.8936", "AUDUSD": "0.6313", "CADJPY": "108.6970", "CADSEK": "7.6001", "CHFAUD": "1.7454", "CHFHKD": "8.5981", "CHFJPY": "172.1500", "EURAUD": "1.6618", "EURCAD": "1.5053", "EURCHF": "0.9507", "EURCNY": "7.5997", "EURCZK": "25.0840", "EURGBP": "0.8406", "EURHKD": "8.1699", "EURILS": "3.7579", "EURJPY": "163.6650", "EURNOK": "11.7470", "EURNZD": "1.8371", "EURRUB": "102.6070", "EURSEK": "11.4603", "EURSGD": "1.4112", "EURUSD": "1.0495", "EURZAR": "19.2875", "GBPAUD": "1.9776", "GBPCAD": "1.7902", "GBPCHF": "1.1298", "GBPHKD": "9.7180", "GBPJPY": "194.6660", "GBPNOK": "13.9771", "GBPRUB": "122.0720", "GBPSEK": "13.5953", "GBPSGD": "1.6792", "GBPUSD": "1.2483", "HKDSEK": "1.4019", "HKDSGD": "0.1728", "JPYHKD": "0.0496", "JPYSEK": "0.0695", "NZDSEK": "6.2208", "NZDUSD": "0.5711", "SGDAUD": "1.1767", "SGDCHF": "0.6724", "SGDJPY": "115.8550", "USDAED": "3.6727", "USDARS": "1 046.0000", "USDBRL": "5.9109", "USDCAD": "1.4342", "USDCHF": "0.9045", "USDCLP": "980.3500", "USDCNY": "7.2380", "USDCOP": "4 171.5000", "USDCZK": "23.8960", "USDDKK": "7.1098", "USDEGP": "50.2400", "USDGBP": "0.8013", "USDHKD": "7.7869", "USDHUF": "388.4200", "USDIDR": "16 169.0000", "USDILS": "3.5731", "USDINR": "86.1410", "USDISK": "139.3200", "USDJPY": "155.9310", "USDKRW": "1 427.5000", "USDKWD": "0.3079", "USDKZT": "517.6300", "USDMXN": "20.2590", "USDMYR": "4.3750", "USDNOK": "11.1905", "USDPEN": "3.7178", "USDPHP": "58.3000", "USDPKR": "278.5700", "USDPLN": "4.0446", "USDQAR": "3.6400", "USDRON": "4.7373", "USDRUB": "97.7750", "USDSAR": "3.7469", "USDSEK": "10.9239", "USDSGD": "1.3458", "USDTHB": "33.5300", "USDTRY": "35.6517", "USDTWD": "32.7300", "USDUAH": "41.9751", "USDVND": "25 060.0000", "USDZAR": "18.3785"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 26.01.2025</th></tr>';

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
