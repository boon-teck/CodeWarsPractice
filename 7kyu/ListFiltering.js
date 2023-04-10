function filter_list(l) {
    return l.filter(item => item.length === undefined)
}

//Number.isInteger
function filter_list(l) {
    return l.filter(item => Number.isInteger(item))
}

//typeOf
function filter_list(l) {
    return l.filter(item => typeof item == "number")
}

