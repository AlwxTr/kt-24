
async function showLink(){
   /* const response = fetch("api.kt-24.pro/api/logs/sort", 
    {headers : {
        'Content-type': "application/json",
        'Access-Control-Allow-Origin': '*'
    }

    }
    );*/
    let nrPage = document.getElementById("pageNumber").value;
    let pageSize = document.getElementById("pageSize").value;
    let url = ('https://api.kt-24.pro/api/logs/sort?page=' + nrPage + '&pageSize='+ pageSize);
    url.href = 'https://api.kt-24.pro/api/logs/sort?page=' + nrPage + '&pageSize='+ pageSize;
    console.log(url)
    document.getElementById('linK').innerHTML = url;
}

async function showData() {
    const response = await fetch("https://api.kt-24.pro/api/logs/sort?page=0&pageSize=2");
    const data = await response.json();
console.log(data);
document.getElementById('result').innerHTML = data.logs[0].account;
}

