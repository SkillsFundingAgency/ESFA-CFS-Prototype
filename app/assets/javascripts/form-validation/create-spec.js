
function getProviderData() {
    let coreProviderData = document.getElementById("coreProviderData");
    console.log(coreProviderData)
    sessionStorage.setItem('provider data changed', coreProviderData.value);
}

document.getElementById('fundingStreamSpecification').onchange = function getfundingStreamSpecficiation() {
    let fundingStreamSpecficiationText = fundingStreamSpecification.options[fundingStreamSpecification.selectedIndex].value;
    let fundingStreamSpecficiation = fundingStreamSpecification.options[fundingStreamSpecification.selectedIndex].text;
    console.log(fundingStreamSpecficiationText)
    console.log(fundingStreamSpecficiation)
    sessionStorage.setItem("funding stream", fundingStreamSpecficiationText)

    let n = fundingStreamSpecficiation.includes("16 to 19")
    let m = fundingStreamSpecficiation.includes("General Annual Grant")
    console.log(n)
    console.log(m)
    if (n == true || m == true ) {
        document.getElementById("providerData-error-group").classList.remove("govuk-visually-hidden")
        document.getElementById("coreProviderData-group").classList.add("govuk-visually-hidden")
    }
    else {
        document.getElementById("providerData-error-group").classList.add("govuk-visually-hidden")
        document.getElementById("coreProviderData-group").classList.remove("govuk-visually-hidden")

    }
}