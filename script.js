async function showLink() {
    /*const response = fetch("api.kt-24.pro/api/logs/sort", 
     {headers : {
         'Content-type': "application/json",
         'Access-Control-Allow-Origin': '*'
     }
 
     }
     );
     */
    let nrPage = document.getElementById("pageNumber").value;
    let pageSize = document.getElementById("pageSize").value;
    let url = 'https://api.kt-24.pro/api/logs/sort?page=' + nrPage + '&pageSize=' + pageSize;
    url.href = 'https://api.kt-24.pro/api/logs/sort?page=' + nrPage + '&pageSize=' + pageSize;
    console.log(url)
    document.getElementById('linK').innerHTML = url;
}

let currentPage = 0;
const pageSize = 12;

async function showData(page) {
    let url = `https://api.kt-24.pro/api/logs/sort?page=${page}&pageSize=${pageSize}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(url)
    
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    const table = document.createElement('table');
    const td = ['account', 'accountCountry', 'baselinkerStatus', 'createdAt', 'deliveryCountry', 'deliveryMethod', 'id', 'invoiceCountry', 'isStock', 'isValid', 'marketplace', 'nip', 'orderId', 'paymentMethod', 'viesUid', 'warehouse'];

    const tr = document.createElement('tr');
    td.forEach(thText => {
        const th = document.createElement('th');
        th.textContent = thText;
        tr.appendChild(th);
    });
    table.appendChild(tr);

    data.logs.forEach((el) => {
        const row = document.createElement('tr');
        td.forEach(th => {
            const text = document.createElement('td');
            text.textContent = el[th];
            row.appendChild(text);
        });
        table.appendChild(row);
    });

    resultElement.appendChild(table);
}
function getFirstPage() {
    currentPage = 0;
    showData(currentPage);
}

function getNextPage() {
    currentPage++;
    showData(currentPage);
}

function getPreviousPage() {
    if (currentPage > 0) {
        currentPage--;
        showData(currentPage);
    }
}

showData(currentPage);












// const grid = new Grid({
//     columns: ['account', 'accountCountry', 'baselinkerStatus', 'createdAt', 'deliveryCountry', 'deliveryMethod', 'id', 'invoiceCountry', 'isStock', 'isValid', 'marketplace', 'nip', 'orderId', 'paymentMethod', 'viesUid', 'warehouse'],
//     data: [
//         [data.logs[0].account, data.logs[0].accountCountry, data.logs[0].baselinkerStatus, data.logs[0].createdAt, data.logs[0].deliveryCountry, data.logs[0].deliveryMethod, data.logs[0].id, data.logs[0].invoiceCountry, data.logs[0].isStock, data.log[0].isValid, data.log[0].marketplace, data.log[0].nip, data.log[0].orderId, data.log[0].paymentMethod, data.log[0].viesUid, data.log[0].warehouse],
//         [data.logs[1].account, data.logs[1].accountCountry, data.logs[1].baselinkerStatus, data.logs[1].createdAt, data.logs[1].deliveryCountry, data.logs[1].deliveryMethod, data.logs[1].id, data.logs[1].invoiceCountry, data.logs[1].isStock, data.log[1].isValid, data.log[1].marketplace, data.log[1].nip, data.log[1].orderId, data.log[1].paymentMethod, data.log[1].viesUid, data.log[1].warehouse]
//     ]
// }).render(document.getElementById('result'));


// data.logs.map((el) => {
//     document.getElementById("result").innerHTML =+ '<table><tr><th>account</th><th>accountCountry</th><th>baselinkerStatus</th><th>createdAt</th><th>deliveryCountry</th><th>deliveryMethod</th><th>id</th><th>invoiceCountry</th><th>isStock</th><th>isValid</th><th>marketplace</th><th>nip</th><th>orderId</th><th>paymentMethod</th><th>viesUid</th><th>warehouse</th></tr>'
//     + '<tr><td>' + el.account + '</td><td>' + el.accountCountry + '</td><td>' + el.baselinkerStatus +'</td><td>' + el.createdAt + '</td><td>' + el.deliveryCountry + '</td><td>' + el.deliveryMethod + '</td><td>' + el.id + '</td><td>' + el.invoiceCountry + '</td><td>' + el.isStock + '</td><td>' + el.isValid + '</td><td>' + el.marketplace + '</td><td>' + el.nip + '</td><td>' + el.orderId + '</td><td>' + el.paymentMethod + '</td><td>' + el.viesUid + '</td><td>'+ el.warehouse + '</td></table>'
// })
