
// Данные о последних парных валютных курсах
const currencyRates = [["AUDHKD", "4,7806"], ["AUDJPY", "96,9030"], ["AUDSEK", "6,8866"], ["AUDUSD", "0,6143"], ["CADJPY", "109,3590"], ["CADSEK", "7,7627"], ["CHFAUD", "1,7750"], ["CHFHKD", "8,4974"], ["CHFJPY", "172,1120"], ["EURAUD", "1,6675"], ["EURCAD", "1,4775"], ["EURCHF", "0,9385"], ["EURCNY", "7,5081"], ["EURCZK", "25,0690"], ["EURGBP", "0,8392"], ["EURHKD", "7,9720"], ["EURILS", "3,7784"], ["EURJPY", "161,6110"], ["EURNOK", "11,7492"], ["EURNZD", "1,8441"], ["EURRUB", "104,3950"], ["EURSEK", "11,4873"], ["EURSGD", "1,4040"], ["EURUSD", "1,0244"], ["EURZAR", "19,5560"], ["GBPAUD", "1,9868"], ["GBPCAD", "1,7605"], ["GBPCHF", "1,1186"], ["GBPHKD", "9,5060"], ["GBPJPY", "192,5520"], ["GBPNOK", "14,0007"], ["GBPRUB", "124,4220"], ["GBPSEK", "13,6863"], ["GBPSGD", "1,6738"], ["GBPUSD", "1,2207"], ["HKDSEK", "1,4388"], ["HKDSGD", "0,1760"], ["JPYHKD", "0,0491"], ["JPYSEK", "0,0706"], ["NZDSEK", "6,2057"], ["NZDUSD", "0,5554"], ["SGDAUD", "1,1863"], ["SGDCHF", "0,6676"], ["SGDJPY", "114,7900"], ["USDAED", "3,6723"], ["USDARS", "1 036,5000"], ["USDBRL", "6,1053"], ["USDCAD", "1,4422"], ["USDCHF", "0,9164"], ["USDCLP", "1 010,2500"], ["USDCNY", "7,3320"], ["USDCOP", "4 338,5000"], ["USDCZK", "24,4670"], ["USDDKK", "7,2810"], ["USDEGP", "50,5100"], ["USDGBP", "0,8191"], ["USDHKD", "7,7873"], ["USDHUF", "403,3100"], ["USDIDR", "16 179,0000"], ["USDILS", "3,6841"], ["USDINR", "86,1450"], ["USDISK", "140,7100"], ["USDJPY", "157,7400"], ["USDKRW", "1 473,0500"], ["USDKWD", "0,3084"], ["USDKZT", "527,1300"], ["USDMXN", "20,7010"], ["USDMYR", "4,4930"], ["USDNOK", "11,4662"], ["USDPEN", "3,7664"], ["USDPHP", "58,6420"], ["USDPKR", "278,3600"], ["USDPLN", "4,1609"], ["USDQAR", "3,6400"], ["USDRON", "4,8543"], ["USDRUB", "102,2260"], ["USDSAR", "3,7508"], ["USDSEK", "11,2108"], ["USDSGD", "1,3714"], ["USDTHB", "34,6000"], ["USDTRY", "35,3852"], ["USDTWD", "33,0880"], ["USDUAH", "42,2825"], ["USDVND", "25 360,0000"], ["USDZAR", "19,0960"]];

// Функция для создания таблицы с валютными курсами
function createCurrencyTable() {
    const tableContainer = document.getElementById('currency-rates-table');
    let tableHTML = '<table style="border-collapse: collapse; width: 100%;">';
    tableHTML += '<tr><th>Тикер валютной пары</th><th>2025-01-11</th></tr>';  // Заголовок второго столбца с датой

    currencyRates.forEach(([ticker, rate]) => {
        tableHTML += `<tr>
            <td style="border: 1px solid black;"><a href="https://www.abscur.ru/p/blog-page_54.html?pair=${ticker}">${ticker}</a></td>
            <td style="border: 1px solid black; text-align: right;">${rate}</td>
        </tr>`;
    });

    tableHTML += '</table>';
    tableContainer.innerHTML = tableHTML;
}

// Вызов функции для создания таблицы при загрузке страницы
createCurrencyTable();
