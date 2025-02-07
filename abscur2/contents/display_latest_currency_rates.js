
// Список последних парных валютных курсов
const currencyRates = {"AUDHKD": "4.8900", "AUDJPY": "95.4570", "AUDSEK": "6.8296", "AUDUSD": "0.6278", "CADJPY": "105.9810", "CADSEK": "7.5795", "CHFAUD": "1.7534", "CHFHKD": "8.5822", "CHFJPY": "167.4990", "EURAUD": "1.6523", "EURCAD": "1.4880", "EURCHF": "0.9416", "EURCNY": "7.5612", "EURCZK": "25.1030", "EURGBP": "0.8334", "EURHKD": "8.0824", "EURILS": "3.6816", "EURJPY": "157.7320", "EURNOK": "11.6230", "EURNZD": "1.8285", "EURRUB": "100.9110", "EURSEK": "11.2856", "EURSGD": "1.4017", "EURUSD": "1.0376", "EURZAR": "19.1189", "GBPAUD": "1.9822", "GBPCAD": "1.7852", "GBPCHF": "1.1298", "GBPHKD": "9.6930", "GBPJPY": "189.2640", "GBPNOK": "13.9450", "GBPRUB": "121.0660", "GBPSEK": "13.5390", "GBPSGD": "1.6817", "GBPUSD": "1.2449", "HKDSEK": "1.3951", "HKDSGD": "0.1734", "JPYHKD": "0.0509", "JPYSEK": "0.0710", "NZDSEK": "6.1701", "NZDUSD": "0.5675", "SGDAUD": "1.1783", "SGDCHF": "0.6717", "SGDJPY": "112.5140", "USDAED": "3.6726", "USDARS": "1 053.7500", "USDBRL": "5.7675", "USDCAD": "1.4340", "USDCHF": "0.9075", "USDCLP": "959.1500", "USDCNY": "7.2892", "USDCOP": "4 129.9200", "USDCZK": "24.1820", "USDDKK": "7.1879", "USDEGP": "50.2500", "USDGBP": "0.8032", "USDHKD": "7.7888", "USDHUF": "390.7300", "USDIDR": "16 270.0000", "USDILS": "3.5520", "USDINR": "87.4670", "USDISK": "141.2000", "USDJPY": "152.0710", "USDKRW": "1 447.0601", "USDKWD": "0.3084", "USDKZT": "510.2800", "USDMXN": "20.5120", "USDMYR": "4.4375", "USDNOK": "11.2019", "USDPEN": "3.7137", "USDPHP": "57.9960", "USDPKR": "279.1256", "USDPLN": "4.0450", "USDQAR": "3.6400", "USDRON": "4.7937", "USDRUB": "96.9250", "USDSAR": "3.7475", "USDSEK": "10.8795", "USDSGD": "1.3509", "USDTHB": "33.6440", "USDTRY": "35.9729", "USDTWD": "32.7470", "USDUAH": "41.6584", "USDVND": "25 260.0000", "USDZAR": "18.4235"};

// Создание HTML-кода для таблицы
let tableHTML = '<table style="border-collapse: collapse; border: 1px solid black;">';
tableHTML += '<tr><th style="border: 1px solid black; text-align: center;">Тикер пары</th>';
tableHTML += '<th style="border: 1px solid black; text-align: right;">Курс на 07.02.2025</th></tr>';

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
