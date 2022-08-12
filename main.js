import { usdPeticion, eurPeticion, cadPeticion, brlPeticion, mxnPeticion, uyuPeticion, linkSelect1, linkeur, linkcad, linkbrl, linkmxn, linkuyu } from "./peticiones.js";


const ctx = document.getElementById('myChart');
let valores = [];

const datasets = [{
    label: 'US DOLLAR EXCHANGE RATES TABLE',
    backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    borderWidth: 1
}]



// DATOS GRAFICAS


// USD-USD

const getMonedaUsa = async() => {
    valores = [];
    const { data: { usd }, } = await usdPeticion();
    valores.push(usd);
    datasets[0].data = valores
    myChart.update();
}



// EUR-USD

const getMonedaEur = async() => {
    valores = [];
    const { data: { eur }, } = await eurPeticion();
    valores.push(eur);
    datasets[0].data = valores
    myChart.update();
}


// USD-CAD

const getMonedaCad = async() => {
    valores = [];
    const { data: { cad }, } = await cadPeticion();
    valores.push(cad);
    datasets[0].data = valores
    myChart.update();
}

// USD-BRL

const getMonedaBrl = async() => {
    valores = [];
    const { data: { brl }, } = await brlPeticion();
    valores.push(brl);
    datasets[0].data = valores
    myChart.update();
}


// USD-MXN

const getMonedaMxn = async() => {
    valores = [];
    const { data: { mxn }, } = await mxnPeticion();
    valores.push(mxn);
    datasets[0].data = valores
    myChart.update();
}

// USD-UYU

const getMonedaUyu = async() => {
    valores = [];
    const { data: { uyu }, } = await uyuPeticion();
    valores.push(uyu);
    datasets[0].data = valores
    myChart.update();
}

getMonedaUsa()
getMonedaEur()
getMonedaCad()
getMonedaBrl()
getMonedaMxn()
getMonedaUyu()

// GRAFICA

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['USD', 'EUR', 'CAD', 'BRL ', 'MNX', 'UYU'],
        datasets
    },

});


// TABLA VALORES COMPARACION APIS


// USD-EURO
const fetchUSDEUR = linkSelect1
let url1 = linkeur
fetchUSDEUR(url1).then(respuesta => respuesta.json()).then((data1) => { document.getElementById("EURO").innerHTML = (`1 USD vale ${+(data1.eur).toFixed(2)} EUR`) })


// USD-CANADA
const fetchUSDcad = linkSelect1
let url2 = linkcad
fetchUSDEUR(url2).then(respuesta => respuesta.json()).then((data2) => { document.getElementById("CAD").innerHTML = (`1 USD vale ${ +(data2.cad).toFixed(2)} CAD`) })

// USD-Brazil

const fetchUSDbrl = linkSelect1
let url3 = linkbrl
fetchUSDbrl(url3).then(respuesta => respuesta.json()).then((data3) => { document.getElementById("BRL").innerHTML = (`1 USD vale ${ +(data3.brl).toFixed(2)} BRL`) })

// USD-MEXICO

const fetchUSDmxn = linkSelect1
let url4 = linkmxn
fetchUSDmxn(url4).then(res => res.json()).then(data4 => { document.getElementById("MXN").innerHTML = (`1 USD vale ${+(data4.mxn).toFixed(2)} MXN`) })

// USD-Uruguayan

const fetchUSDuyu = linkSelect1
let url5 = linkuyu
fetchUSDuyu(url5).then(res => res.json()).then(data5 => { document.getElementById("UYU").innerHTML = (`1 USD vale ${+(data5.uyu).toFixed(2)} UYU`) })


const date = Date()
document.getElementById("fecha").innerHTML = date