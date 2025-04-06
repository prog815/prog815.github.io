
const lastStockPrices = [{"Ticker":"AFKS","Stock Name":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u043e","Absolute Price":4.203838133,"Ruble Price":15.703},{"Ticker":"AFLT","Stock Name":"\u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442","Absolute Price":17.7476739003,"Ruble Price":66.07},{"Ticker":"ALRS","Stock Name":"\u0410\u041b\u0420\u041e\u0421\u0410 \u0430\u043e","Absolute Price":13.2024718749,"Ruble Price":49.22},{"Ticker":"BSPB","Stock Name":"\u0411\u0421\u041f \u0430\u043e","Absolute Price":103.2619006905,"Ruble Price":385.43},{"Ticker":"CHMF","Stock Name":"\u0421\u0435\u0432\u0421\u0442-\u0430\u043e","Absolute Price":293.5025631895,"Ruble Price":1095.0},{"Ticker":"FEES","Stock Name":"\u0420\u043e\u0441\u0441\u0435\u0442\u0438","Absolute Price":0.0189117221,"Ruble Price":0.07058},{"Ticker":"GAZP","Stock Name":"\u0413\u0410\u0417\u041f\u0420\u041e\u041c \u0430\u043e","Absolute Price":34.1851168415,"Ruble Price":127.7},{"Ticker":"GMKN","Stock Name":"\u0413\u041c\u041a\u041d\u043e\u0440\u041d\u0438\u043a","Absolute Price":29.9674725559,"Ruble Price":111.14},{"Ticker":"HYDR","Stock Name":"\u0420\u0443\u0441\u0413\u0438\u0434\u0440\u043e","Absolute Price":0.1253923513,"Ruble Price":0.469},{"Ticker":"IRAO","Stock Name":"\u0418\u043d\u0442\u0435\u0440\u0420\u0410\u041e\u0430\u043e","Absolute Price":0.9545194962,"Ruble Price":3.554},{"Ticker":"LKOH","Stock Name":"\u041b\u0423\u041a\u041e\u0419\u041b","Absolute Price":1755.8177687206,"Ruble Price":6573.0},{"Ticker":"LSRG","Stock Name":"\u041b\u0421\u0420 \u0430\u043e","Absolute Price":228.207582336,"Ruble Price":843.0},{"Ticker":"MAGN","Stock Name":"\u041c\u041c\u041a","Absolute Price":8.9117361928,"Ruble Price":33.145},{"Ticker":"MOEX","Stock Name":"\u041c\u043e\u0441\u0411\u0438\u0440\u0436\u0430","Absolute Price":52.4552588722,"Ruble Price":195.0},{"Ticker":"MSNG","Stock Name":"+\u041c\u043e\u0441\u042d\u043d\u0435\u0440\u0433\u043e","Absolute Price":0.5760684878,"Ruble Price":2.1735},{"Ticker":"MTLR","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043e","Absolute Price":26.5998541404,"Ruble Price":99.07},{"Ticker":"MTLRP","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043f","Absolute Price":27.1656356909,"Ruble Price":101.7},{"Ticker":"MTSS","Stock Name":"\u041c\u0422\u0421-\u0430\u043e","Absolute Price":56.1720917375,"Ruble Price":210.2},{"Ticker":"MVID","Stock Name":"\u041c.\u0432\u0438\u0434\u0435\u043e","Absolute Price":29.9404016683,"Ruble Price":111.6},{"Ticker":"NLMK","Stock Name":"\u041d\u041b\u041c\u041a \u0430\u043e","Absolute Price":34.8131614335,"Ruble Price":129.72},{"Ticker":"NVTK","Stock Name":"\u041d\u043e\u0432\u0430\u0442\u044d\u043a \u0430\u043e","Absolute Price":313.2101693509,"Ruble Price":1172.2},{"Ticker":"PHOR","Stock Name":"\u0424\u043e\u0441\u0410\u0433\u0440\u043e \u0430\u043e","Absolute Price":1605.8450515033,"Ruble Price":5936.0},{"Ticker":"PIKK","Stock Name":"\u041f\u0418\u041a \u0430\u043e","Absolute Price":135.6251467976,"Ruble Price":502.6},{"Ticker":"PLZL","Stock Name":"\u041f\u043e\u043b\u044e\u0441","Absolute Price":466.9728108299,"Ruble Price":1735.6},{"Ticker":"ROSN","Stock Name":"\u0420\u043e\u0441\u043d\u0435\u0444\u0442\u044c","Absolute Price":119.1119053711,"Ruble Price":446.05},{"Ticker":"RTKM","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043e","Absolute Price":15.8581259469,"Ruble Price":59.06},{"Ticker":"RTKMP","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043f","Absolute Price":14.45585397,"Ruble Price":54.1},{"Ticker":"RUAL","Stock Name":"\u0420\u0423\u0421\u0410\u041b \u0430\u043e","Absolute Price":9.3083246959,"Ruble Price":34.485},{"Ticker":"SBER","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a","Absolute Price":77.1466154379,"Ruble Price":287.12},{"Ticker":"SBERP","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a-\u043f","Absolute Price":77.1330799941,"Ruble Price":286.93},{"Ticker":"SELG","Stock Name":"\u0421\u0435\u043b\u0438\u0433\u0434\u0430\u0440","Absolute Price":12.9236417328,"Ruble Price":48.25},{"Ticker":"TATN","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043e","Absolute Price":164.6180674004,"Ruble Price":620.9},{"Ticker":"TATNP","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043f","Absolute Price":160.8552140262,"Ruble Price":600.0},{"Ticker":"TGKA","Stock Name":"\u0422\u0413\u041a-1","Absolute Price":0.0018088767,"Ruble Price":0.006748},{"Ticker":"TRNFP","Stock Name":"\u0422\u0440\u0430\u043d\u0441\u043d\u0444 \u0430\u043f","Absolute Price":326.8538966934,"Ruble Price":1216.6},{"Ticker":"VTBR","Stock Name":"\u0412\u0422\u0411 \u0430\u043e","Absolute Price":19.577665901,"Ruble Price":73.02}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячеек
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название акции', 'Абсолютная цена (Дата: 2025-04-05)', 'Рублевая цена (Дата: 2025-04-06)'];
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
