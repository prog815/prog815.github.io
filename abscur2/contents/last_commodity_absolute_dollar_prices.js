
const lastCommodityPrices = [{"Ticker":"GC=F","Commodity Name":"\u0417\u043e\u043b\u043e\u0442\u043e","Absolute Price":60578.0376413974,"Dollar Price":2606.1000976562},{"Ticker":"SI=F","Commodity Name":"\u0421\u0435\u0440\u0435\u0431\u0440\u043e","Absolute Price":676.5605126652,"Dollar Price":29.1060009003},{"Ticker":"PL=F","Commodity Name":"\u041f\u043b\u0430\u0442\u0438\u043d\u0430","Absolute Price":20976.0257081896,"Dollar Price":902.4000244141},{"Ticker":"CL=F","Commodity Name":"\u041d\u0435\u0444\u0442\u044c WTI","Absolute Price":1650.1418217288,"Dollar Price":70.9899978638},{"Ticker":"HG=F","Commodity Name":"\u041c\u0435\u0434\u044c","Absolute Price":94.0364644789,"Dollar Price":4.0454998016},{"Ticker":"ALI=F","Commodity Name":"\u0410\u043b\u044e\u043c\u0438\u043d\u0438\u0439","Absolute Price":59163.5948463497,"Dollar Price":2545.25},{"Ticker":"ZN=F","Commodity Name":"\u0426\u0438\u043d\u043a","Absolute Price":2532.946852338,"Dollar Price":108.96875},{"Ticker":"ZW=F","Commodity Name":"\u041f\u0448\u0435\u043d\u0438\u0446\u0430","Absolute Price":12743.9115507362,"Dollar Price":548.25},{"Ticker":"ZC=F","Commodity Name":"\u041a\u0443\u043a\u0443\u0440\u0443\u0437\u0430","Absolute Price":10512.4195144924,"Dollar Price":452.25},{"Ticker":"ZS=F","Commodity Name":"\u0421\u043e\u044f","Absolute Price":22826.3039540774,"Dollar Price":982.0},{"Ticker":"KC=F","Commodity Name":"\u041a\u043e\u0444\u0435","Absolute Price":7461.5514961903,"Dollar Price":321.0},{"Ticker":"SB=F","Commodity Name":"\u0421\u0430\u0445\u0430\u0440","Absolute Price":444.6712581313,"Dollar Price":19.1299991608},{"Ticker":"NG=F","Commodity Name":"\u041f\u0440\u0438\u0440\u043e\u0434\u043d\u044b\u0439 \u0433\u0430\u0437","Absolute Price":91.4911760131,"Dollar Price":3.9360001087}];

function createTable() {
    const table = document.createElement('table');
    table.border = '1';

    // Заголовок таблицы
    const header = table.createTHead();
    const headerRow = header.insertRow(0);
    headerRow.insertCell(0).innerText = 'Ticker';
    headerRow.insertCell(1).innerText = 'Commodity Name';
    headerRow.insertCell(2).innerText = 'Absolute Price';
    headerRow.insertCell(3).innerText = 'Dollar Price';

    // Заполнение таблицы данными
    const tbody = table.createTBody();
    lastCommodityPrices.forEach(item => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = item.Ticker;
        row.insertCell(1).innerText = item['Commodity Name'];
        row.insertCell(2).innerText = item['Absolute Price'];
        row.insertCell(3).innerText = item['Dollar Price'];
    });

    document.getElementById('table-container').appendChild(table);
}

createTable();
