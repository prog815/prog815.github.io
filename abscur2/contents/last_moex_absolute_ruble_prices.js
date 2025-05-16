
const lastStockPrices = [{"Ticker":"AFKS","Stock Name":"\u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0430\u043e","Absolute Price":4.2343781358,"Ruble Price":14.851},{"Ticker":"AFLT","Stock Name":"\u0410\u044d\u0440\u043e\u0444\u043b\u043e\u0442","Absolute Price":19.6244342233,"Ruble Price":69.25},{"Ticker":"ALRS","Stock Name":"\u0410\u041b\u0420\u041e\u0421\u0410 \u0430\u043e","Absolute Price":13.5045657438,"Ruble Price":47.82},{"Ticker":"BSPB","Stock Name":"\u0411\u0421\u041f \u0430\u043e","Absolute Price":103.967806806,"Ruble Price":376.01},{"Ticker":"CHMF","Stock Name":"\u0421\u0435\u0432\u0421\u0442-\u0430\u043e","Absolute Price":288.5600537718,"Ruble Price":1016.4},{"Ticker":"FEES","Stock Name":"\u0420\u043e\u0441\u0441\u0435\u0442\u0438","Absolute Price":0.0191739089,"Ruble Price":0.06782},{"Ticker":"GAZP","Stock Name":"\u0413\u0410\u0417\u041f\u0420\u041e\u041c \u0430\u043e","Absolute Price":39.0194083572,"Ruble Price":137.76},{"Ticker":"GMKN","Stock Name":"\u0413\u041c\u041a\u041d\u043e\u0440\u041d\u0438\u043a","Absolute Price":30.9267427685,"Ruble Price":109.58},{"Ticker":"HYDR","Stock Name":"\u0420\u0443\u0441\u0413\u0438\u0434\u0440\u043e","Absolute Price":0.1301766263,"Ruble Price":0.4669},{"Ticker":"IRAO","Stock Name":"\u0418\u043d\u0442\u0435\u0440\u0420\u0410\u041e\u0430\u043e","Absolute Price":0.9831805168,"Ruble Price":3.506},{"Ticker":"LKOH","Stock Name":"\u041b\u0423\u041a\u041e\u0419\u041b","Absolute Price":1850.2318420669,"Ruble Price":6569.5},{"Ticker":"LSRG","Stock Name":"\u041b\u0421\u0420 \u0430\u043e","Absolute Price":207.9132272619,"Ruble Price":740.8},{"Ticker":"MAGN","Stock Name":"\u041c\u041c\u041a","Absolute Price":8.8076296475,"Ruble Price":31.31},{"Ticker":"MOEX","Stock Name":"\u041c\u043e\u0441\u0411\u0438\u0440\u0436\u0430","Absolute Price":55.6524665382,"Ruble Price":197.8},{"Ticker":"MSNG","Stock Name":"+\u041c\u043e\u0441\u042d\u043d\u0435\u0440\u0433\u043e","Absolute Price":0.616464118,"Ruble Price":2.1825},{"Ticker":"MTLR","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043e","Absolute Price":24.8348572268,"Ruble Price":88.06},{"Ticker":"MTLRP","Stock Name":"\u041c\u0435\u0447\u0435\u043b \u0430\u043f","Absolute Price":24.9327975088,"Ruble Price":88.3},{"Ticker":"MTSS","Stock Name":"\u041c\u0422\u0421-\u0430\u043e","Absolute Price":61.226667732,"Ruble Price":217.1},{"Ticker":"MVID","Stock Name":"\u041c.\u0432\u0438\u0434\u0435\u043e","Absolute Price":28.3327244418,"Ruble Price":101.15},{"Ticker":"NLMK","Stock Name":"\u041d\u041b\u041c\u041a \u0430\u043e","Absolute Price":35.376029866,"Ruble Price":125.52},{"Ticker":"NVTK","Stock Name":"\u041d\u043e\u0432\u0430\u0442\u044d\u043a \u0430\u043e","Absolute Price":321.35605678,"Ruble Price":1146.0},{"Ticker":"PHOR","Stock Name":"\u0424\u043e\u0441\u0410\u0433\u0440\u043e \u0430\u043e","Absolute Price":1775.2375689765,"Ruble Price":6510.0},{"Ticker":"PIKK","Stock Name":"\u041f\u0418\u041a \u0430\u043e","Absolute Price":139.1311663454,"Ruble Price":476.2},{"Ticker":"PLZL","Stock Name":"\u041f\u043e\u043b\u044e\u0441","Absolute Price":471.4005688363,"Ruble Price":1679.2},{"Ticker":"ROSN","Stock Name":"\u0420\u043e\u0441\u043d\u0435\u0444\u0442\u044c","Absolute Price":123.7265591304,"Ruble Price":440.4},{"Ticker":"RTKM","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043e","Absolute Price":15.7264109988,"Ruble Price":55.64},{"Ticker":"RTKMP","Stock Name":"\u0420\u043e\u0441\u0442\u0435\u043b -\u0430\u043f","Absolute Price":15.3906157462,"Ruble Price":54.1},{"Ticker":"RUAL","Stock Name":"\u0420\u0423\u0421\u0410\u041b \u0430\u043e","Absolute Price":9.3253139953,"Ruble Price":32.83},{"Ticker":"SBER","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a","Absolute Price":85.2696078213,"Ruble Price":303.36},{"Ticker":"SBERP","Stock Name":"\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a-\u043f","Absolute Price":84.7407302984,"Ruble Price":301.37},{"Ticker":"SELG","Stock Name":"\u0421\u0435\u043b\u0438\u0433\u0434\u0430\u0440","Absolute Price":13.0876199718,"Ruble Price":46.28},{"Ticker":"TATN","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043e","Absolute Price":194.6772977202,"Ruble Price":696.5},{"Ticker":"TATNP","Stock Name":"\u0422\u0430\u0442\u043d\u0444\u0442 3\u0430\u043f","Absolute Price":184.6314230786,"Ruble Price":661.7},{"Ticker":"TGKA","Stock Name":"\u0422\u0413\u041a-1","Absolute Price":0.001838479,"Ruble Price":0.006528},{"Ticker":"TRNFP","Stock Name":"\u0422\u0440\u0430\u043d\u0441\u043d\u0444 \u0430\u043f","Absolute Price":339.7128639246,"Ruble Price":1207.2},{"Ticker":"VTBR","Stock Name":"\u0412\u0422\u0411 \u0430\u043e","Absolute Price":27.213406933,"Ruble Price":96.96}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячеек
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название акции', 'Абсолютная цена (Дата: 2025-05-15)', 'Рублевая цена (Дата: 2025-05-16)'];
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
