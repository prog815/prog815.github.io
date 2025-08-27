
const lastCommodityPrices = [{"Ticker":"GC=F","Commodity Name":"\u0417\u043e\u043b\u043e\u0442\u043e","Absolute Price":75132.7303862284,"Dollar Price":3388.6000976562},{"Ticker":"SI=F","Commodity Name":"\u0421\u0435\u0440\u0435\u0431\u0440\u043e","Absolute Price":855.4479653103,"Dollar Price":38.5820007324},{"Ticker":"PL=F","Commodity Name":"\u041f\u043b\u0430\u0442\u0438\u043d\u0430","Absolute Price":29763.9662982149,"Dollar Price":1342.4000244141},{"Ticker":"CL=F","Commodity Name":"\u041d\u0435\u0444\u0442\u044c WTI","Absolute Price":1402.3918609386,"Dollar Price":63.25},{"Ticker":"HG=F","Commodity Name":"\u041c\u0435\u0434\u044c","Absolute Price":98.6773911961,"Dollar Price":4.4505000114},{"Ticker":"ALI=F","Commodity Name":"\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439","Absolute Price":56345.1117250637,"Dollar Price":2541.25},{"Ticker":"ZN=F","Commodity Name":"\u0426\u0438\u043d\u043a","Absolute Price":2487.7905023222,"Dollar Price":112.203125},{"Ticker":"ZW=F","Commodity Name":"\u041f\u0448\u0435\u043d\u0438\u0446\u0430","Absolute Price":11296.7375991815,"Dollar Price":509.5},{"Ticker":"ZC=F","Commodity Name":"\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430","Absolute Price":8591.7287923117,"Dollar Price":387.5},{"Ticker":"ZS=F","Commodity Name":"\u0421\u043e\u044f","Absolute Price":22809.6541808792,"Dollar Price":1028.75},{"Ticker":"KC=F","Commodity Name":"\u041a\u043e\u0444\u0435","Absolute Price":8515.2344201492,"Dollar Price":384.049987793},{"Ticker":"SB=F","Commodity Name":"\u0421\u0430\u0445\u0430\u0440","Absolute Price":363.8458533441,"Dollar Price":16.4099998474},{"Ticker":"NG=F","Commodity Name":"\u041f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0439 \u0433\u0430\u0437","Absolute Price":60.2418766304,"Dollar Price":2.7170000076}];

function createTable() {
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';  // Убираем промежутки между ячейками
    table.border = '1';
    table.style.width = '100%';  // Задаем ширину таблицы

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    
    // Заголовки с жирным шрифтом и отступами
    const headers = ['Тикер', 'Название товара', 'Абсолютная цена (Дата: 2025-08-27)', 'Долларовая цена (Дата: 2025-08-26)'];
    headers.forEach((text, index) => {
        const cell = headerRow.insertCell(index);
        cell.innerText = text;
        cell.style.fontWeight = 'bold';  // Жирный шрифт
        cell.style.padding = '10px';  // Отступы внутри ячеек
        cell.style.textAlign = 'center';  // Выравнивание по центру
    });

    // Заполнение таблицы данными
    const tbody = table.createTBody();
    lastCommodityPrices.forEach(item => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=${item.Ticker}">${item.Ticker}</a>`;
        row.insertCell(1).innerHTML = `<a href="https://www.abscur.ru/p/blog-page_2.html?tovar=${item.Ticker}">${item['Commodity Name']}</a>`;
        row.insertCell(2).innerText = Number(item['Absolute Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        row.insertCell(3).innerText = Number(item['Dollar Price']).toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });  // Форматируем цену до двух знаков с разделением разрядов
        
        // Выравнивание цен по правой стороне и отступы внутри ячеек
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].style.textAlign = (i === 2 || i === 3) ? 'right' : 'left';
            row.cells[i].style.padding = '10px';  // Отступы внутри ячеек
        }
    });

    document.getElementById('table-container').appendChild(table);
}

createTable();
