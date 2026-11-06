
const lastStockPrices = [{"Ticker":"AFKS","Stock Name":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u043e","Absolute Price":2.3341143478,"Ruble Price":8.533},{"Ticker":"AFLT","Stock Name":"\u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442","Absolute Price":10.5476912285,"Ruble Price":38.56},{"Ticker":"ALRS","Stock Name":"\u0410\u041b\u0420\u041e\u0421\u0410 \u0430\u043e","Absolute Price":6.4965681192,"Ruble Price":23.75},{"Ticker":"AQUA","Stock Name":"\u0418\u041d\u0410\u0420\u041a\u0422\u0418\u041a\u0410","Absolute Price":89.0645296679,"Ruble Price":325.6},{"Ticker":"BSPB","Stock Name":"\u0411\u0421\u041f \u0430\u043e","Absolute Price":69.7498907248,"Ruble Price":254.99},{"Ticker":"CBOM","Stock Name":"\u041c\u041a\u0411 \u0430\u043e","Absolute Price":2.9640763006,"Ruble Price":10.836},{"Ticker":"CHMF","Stock Name":"\u0421\u0435\u0432\u0421\u0442-\u0430\u043e","Absolute Price":189.8365589358,"Ruble Price":694.0},{"Ticker":"FEES","Stock Name":"\u0420\u043e\u0441\u0441\u0435\u0442\u0438","Absolute Price":0.0177691396,"Ruble Price":0.06496},{"Ticker":"GAZP","Stock Name":"\u0413\u0410\u0417\u041f\u0420\u041e\u041c \u0430\u043e","Absolute Price":30.8279253488,"Ruble Price":112.7},{"Ticker":"GMKN","Stock Name":"\u0413\u041c\u041a\u041d\u043e\u0440\u041d\u0438\u043a","Absolute Price":31.6485444796,"Ruble Price":115.7},{"Ticker":"HYDR","Stock Name":"\u0420\u0443\u0441\u0413\u0438\u0434\u0440\u043e","Absolute Price":0.1367425012,"Ruble Price":0.4999},{"Ticker":"IRAO","Stock Name":"\u0418\u043d\u0442\u0435\u0440\u0420\u0410\u041e\u0430\u043e","Absolute Price":0.7425235436,"Ruble Price":2.7145},{"Ticker":"LKOH","Stock Name":"\u041b\u0423\u041a\u041e\u0419\u041b","Absolute Price":1645.204587492,"Ruble Price":6014.5},{"Ticker":"LSRG","Stock Name":"\u041b\u0421\u0420 \u0430\u043e","Absolute Price":241.426148295,"Ruble Price":882.6},{"Ticker":"MAGN","Stock Name":"\u041c\u041c\u041a","Absolute Price":6.1382310987,"Ruble Price":22.44},{"Ticker":"MOEX","Stock Name":"\u041c\u043e\u0441\u0411\u0438\u0440\u0436\u0430","Absolute Price":44.3161684628,"Ruble Price":162.01},{"Ticker":"MSNG","Stock Name":"+\u041c\u043e\u0441\u042d\u043d\u0435\u0440\u0433\u043e","Absolute Price":0.3636710448,"Ruble Price":1.3295},{"Ticker":"MTLR","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043e","Absolute Price":12.4405860236,"Ruble Price":45.48},{"Ticker":"MTLRP","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043f","Absolute Price":11.680145629,"Ruble Price":42.7},{"Ticker":"MTSS","Stock Name":"\u041c\u0422\u0421-\u0430\u043e","Absolute Price":48.4575596765,"Ruble Price":177.15},{"Ticker":"MVID","Stock Name":"\u041c.\u0432\u0438\u0434\u0435\u043e","Absolute Price":15.5507325295,"Ruble Price":56.85},{"Ticker":"NLMK","Stock Name":"\u041d\u041b\u041c\u041a \u0430\u043e","Absolute Price":20.750722422,"Ruble Price":75.86},{"Ticker":"NVTK","Stock Name":"\u041d\u043e\u0432\u0430\u0442\u044d\u043a \u0430\u043e","Absolute Price":305.379732559,"Ruble Price":1116.4},{"Ticker":"PHOR","Stock Name":"\u0424\u043e\u0441\u0410\u0433\u0440\u043e \u0430\u043e","Absolute Price":1424.8683508597,"Ruble Price":5209.0},{"Ticker":"PIKK","Stock Name":"\u041f\u0418\u041a \u0430\u043e","Absolute Price":148.8056023935,"Ruble Price":544.0},{"Ticker":"PLZL","Stock Name":"\u041f\u043e\u043b\u044e\u0441","Absolute Price":293.0157376542,"Ruble Price":1071.2},{"Ticker":"RNFT","Stock Name":"\u0420\u0443\u0441\u0441\u041d\u0444\u0442 \u0430\u043e","Absolute Price":23.8800167076,"Ruble Price":87.3},{"Ticker":"ROSN","Stock Name":"\u0420\u043e\u0441\u043d\u0435\u0444\u0442\u044c","Absolute Price":98.8709282815,"Ruble Price":361.45},{"Ticker":"RTKM","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043e","Absolute Price":12.1287507539,"Ruble Price":44.34},{"Ticker":"RTKMP","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043f","Absolute Price":12.4050258613,"Ruble Price":45.35},{"Ticker":"RUAL","Stock Name":"\u0420\u0423\u0421\u0410\u041b \u0430\u043e","Absolute Price":6.5444375685,"Ruble Price":23.925},{"Ticker":"SBER","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a","Absolute Price":80.0896917735,"Ruble Price":292.79},{"Ticker":"SBERP","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a-\u043f","Absolute Price":80.2756987765,"Ruble Price":293.47},{"Ticker":"SELG","Stock Name":"\u0421\u0435\u043b\u0438\u0433\u0434\u0430\u0440","Absolute Price":10.6023991705,"Ruble Price":38.76},{"Ticker":"TATN","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043e","Absolute Price":166.3394978226,"Ruble Price":608.1},{"Ticker":"TATNP","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043f","Absolute Price":160.923411559,"Ruble Price":588.3},{"Ticker":"TGKA","Stock Name":"\u0422\u0413\u041a-1","Absolute Price":0.0013053315,"Ruble Price":0.004772},{"Ticker":"TRNFP","Stock Name":"\u0422\u0440\u0430\u043d\u0441\u043d\u0444 \u0430\u043f","Absolute Price":282.8947683738,"Ruble Price":1034.2},{"Ticker":"UPRO","Stock Name":"\u042e\u043d\u0438\u043f\u0440\u043e \u0430\u043e","Absolute Price":0.3069115549,"Ruble Price":1.122},{"Ticker":"VTBR","Stock Name":"\u0412\u0422\u0411 \u0430\u043e","Absolute Price":15.509701573,"Ruble Price":56.7}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячеек
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название акции', 'Абсолютная цена (Дата: 2026-11-05)', 'Рублевая цена (Дата: 2026-11-05)'];
    headers.forEach((text, index) => {
        const cell = headerRow.insertCell(index);
        cell.innerText = text;
        cell.style.fontWeight = 'bold';  // Жирный шрифт
        cell.style.padding = '10px';  // Отступы внутри ячеек
        cell.style.textAlign = 'center';  // Выравнивание по центру
    });

    // Заполнение таблицы данными
    const tbody = table.createTBody();
    lastStockPrices.forEach(item => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=${item.Ticker}">${item.Ticker}</a>`;
        row.insertCell(1).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_68.html?akcia=${item.Ticker}">${item['Stock Name']}</a>`;
        row.insertCell(2).innerText = Number(item['Absolute Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        row.insertCell(3).innerText = Number(item['Ruble Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        
        // Выравнивание цен по правой стороне и отступы внутри ячеек
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].style.textAlign = (i === 2 || i === 3) ? 'right' : 'left';
            row.cells[i].style.padding = '10px';  // Отступы внутри ячеек
        }
    });

    document.getElementById('table-container').appendChild(table);
}

createTable();
