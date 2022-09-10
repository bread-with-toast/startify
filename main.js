var identifier = document.getElementById("identifier")
var minute = document.getElementById("ideas-min")
var fixed = document.getElementById("ideas-fix")
var goals = document.getElementById("goals")
var detail = document.getElementById("details")

function save() {
    localStorage.setItem("finder" + identifier.value, identifier.value)
    localStorage.setItem(identifier.value + "Minute", minute.value)
    localStorage.setItem(identifier.value + "Fixed", fixed.value)
    localStorage.setItem(identifier.value + "Goals", goals.value)
    localStorage.setItem(identifier.value + "Detail", detail.value)
}

function get() {
    document.getElementById("name").innerText = localStorage.getItem("finder" + identifier.value)
    document.getElementById("mins").innerText = localStorage.getItem(identifier.value + "Minute")
    document.getElementById("fixs").innerText = localStorage.getItem(identifier.value + "Fixed")
    document.getElementById("goalss").innerText = localStorage.getItem(identifier.value + "Goals")
    document.getElementById("detailss").innerText = localStorage.getItem(identifier.value + "Detail")
}

function del() {
    localStorage.removeItem("finder" + identifier.value)
    localStorage.removeItem(identifier.value + "Minute")
    localStorage.removeItem(identifier.value + "Fixed")
    localStorage.removeItem(identifier.value + "Goals")
    localStorage.removeItem(identifier.value + "Detail")

    document.getElementById("name").innerText = ""
    document.getElementById("mins").innerText = ""
    document.getElementById("fixs").innerText = ""
    document.getElementById("goalss").innerText = ""
    document.getElementById("detailss").innerText = ""
}