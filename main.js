    const ctx = document.getElementById('myChart');


    // USD-EURO
    const fetchUSDEUR = async(links, obj) => {
        let response1;
        for (let link of links) {
            try {
                response1 = await fetch(link, obj)
                if (response1.ok)
                    return response1
            } catch (e) {}
        }
        return response1
    }

    let url1 = [
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.min.json",
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/eur.min.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/eur.json"
    ]

    fetchUSDEUR(url1).then(respuesta => respuesta.json()).then((data1) => { console.log(data1) })
    fetchUSDEUR(url1).then(respuesta => respuesta.json()).then((data1) => { document.getElementById("EURO").innerHTML = (`1 USD vale ${+(data1.eur).toFixed(2)} EUR`) })



    // USD-CANADA
    const fetchUSDcad = async(links, obj) => {
        let response;
        for (let link of links) {
            try {
                response = await fetch(link, obj)
                if (response.ok)
                    return response
            } catch (e) {}
        }
        return response
    }


    let url2 = [
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.min.json",
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/cad.min.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/cad.json"
    ]
    fetchUSDcad(url2).then(res => res.json()).then((data2) => { console.log(data2) })
    fetchUSDEUR(url2).then(respuesta => respuesta.json()).then((data2) => { document.getElementById("CAD").innerHTML = (`1 USD vale ${ +(data2.cad).toFixed(2)} CAD`) })

    // USD-Brazil
    const fetchUSDbrl = async(links, obj) => {
        let response;
        for (let link of links) {
            try {
                response = await fetch(link, obj)
                if (response.ok)
                    return response
            } catch (e) {}
        }
        return response
    }


    let url3 = [
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.min.json",
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/brl.min.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/brl.json"
    ]

    fetchUSDbrl(url3).then(res => res.json()).then((data3) => console.log(data3))
    fetchUSDbrl(url3).then(res => res.json()).then((data3) => { document.getElementById("BRL").innerHTML = (`1 USD vale ${ +(data3.brl).toFixed(2)} BRL`) })

    // USD-MEXICO

    const fetchUSDmxn = async(links, obj) => {
        let response;
        for (let link of links) {
            try {
                response = await fetch(link, obj)
                if (response.ok)
                    return response
            } catch (e) {}
        }
        return response
    }

    let url4 = [
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/mxn.min.json",
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/mxn.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/mxn.min.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/mxn.json"
    ]

    fetchUSDmxn(url4).then(res => res.json()).then(data4 => { console.log(data4) })
    fetchUSDmxn(url4).then(res => res.json()).then(data4 => { document.getElementById("MXN").innerHTML = (`1 USD vale ${+(data4.mxn).toFixed(2)} MXN`) })

    // USD-Uruguayan

    const fetchUSDuyu = async(links, obj) => {
        let response;
        for (let link of links) {
            try {
                response = await fetch(link, obj)
                if (response.ok)
                    return response
            } catch (e) {}
        }
        return response
    }


    let url5 = [
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uyu.min.json",
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uyu.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/uyu.min.json",
        "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/uyu.json"
    ]

    fetchUSDuyu(url5).then(res => res.json()).then(data5 => console.log(data5))
    fetchUSDmxn(url5).then(res => res.json()).then(data5 => { document.getElementById("UYU").innerHTML = (`1 USD vale ${+(data5.uyu).toFixed(2)} UYU`) })

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['USD', 'EUR', 'CAD', 'BRL ', 'MNX', 'UYU'],
            datasets: [{
                label: '# of Votes',
                data: [, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },

    });