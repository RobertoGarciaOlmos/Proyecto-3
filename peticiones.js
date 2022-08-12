const monedaUsd = ["usd"];
const monedaEur = ["eur"];
const monedaCad = ["cad"];
const monedaBrl = ["brl"];
const monedaMxn = ["mxn"];
const monedaUyu = ["uyu"];


export const usdPeticion = async() => {
    return await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${monedaUsd[0]}.min.json`);

}

export const eurPeticion = async() => {
    return await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${monedaEur[0]}.min.json`)

}

export const cadPeticion = async() => {
    return await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${monedaCad[0]}.min.json`)

}

export const brlPeticion = async() => {
    return await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${monedaBrl[0]}.min.json`)

}
export const mxnPeticion = async() => {
    return await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${monedaMxn[0]}.min.json`)

}


export const uyuPeticion = async() => {
    return await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${monedaUyu[0]}.min.json`)

}

// links


export const linkSelect1 = async(links, obj) => {
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

export const linkeur = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.min.json",
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/eur.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/eur.min.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/eur.json"
]

export const linkcad = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.min.json",
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/cad.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/cad.min.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/cad.json"
]

export const linkbrl = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.min.json",
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/brl.min.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/brl.json"
]

export const linkmxn = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/mxn.min.json",
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/mxn.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/mxn.min.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/mxn.json"
]

export const linkuyu = [
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uyu.min.json",
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/uyu.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/uyu.min.json",
    "https://raw.githubusercontent.com/fawazahmed0/currency-api/1/latest/currencies/usd/uyu.json"
]