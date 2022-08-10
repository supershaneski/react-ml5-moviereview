
export const getDateYear = (sDate) => {
    return sDate.split("-")[0]
}

export const getRate = (sRate) => {
    return sRate.toFixed(1)
}

export const formatReview = (data) => {
    let items = data.split("\r\n")
    let items_fixed = items.map(item => {
        return item.length === 0 ? "<br />" : item.trim()
    })
    return items_fixed.join(' ').split("<br />")
}

const formatNumber = (n) => {
    return n < 10 ? "0" + n : n
}

export const formatDate = (strDate) => {
    const oDate = new Date(strDate)
    const syear = oDate.getFullYear()
    let smonth = oDate.getMonth() + 1
    let sdate = oDate.getDate()
    smonth = formatNumber(smonth)
    sdate = formatNumber(sdate)
    return [syear, smonth, sdate].join("-")
}
