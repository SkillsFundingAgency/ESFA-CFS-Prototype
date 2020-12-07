const form = document.querySelector('#createSpec');
const specName = document.querySelector('#spec-name');
const fundingStream = document.querySelector('#fundingStreamSpecification');
const fundingPeriod = document.querySelector('#fundingPeriod');
const providerDataYes = document.querySelector('#provider-data-yes')
const providerDataNo = document.querySelector('#provider-data-no')
const templateVersion = document.querySelector('#templateVersion')


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isSpecNameValid = validateSpecName()
    isFundingStreamValid = validateFundingStream()
    isFundingPeriodValid = validateFundingPeriod()
    isProviderDataValid = validateProviderData()
    isTemplateVersion = validateTemplateVersion()
    isLatest = trackLatest();

    let isFormValid = isSpecNameValid && isFundingStreamValid && isFundingPeriodValid && isProviderDataValid && isTemplateVersion && isLatest;

    // submit to the server if the form is valid
    if (isFormValid) {
    }
});

function validateSpecName() {
    let valid = false;
    if (specName.value == "") {
        document.getElementById('error-summary').classList.remove("govuk-visually-hidden")
        document.getElementById('specificationName').classList.add("govuk-form-group--error")
        document.getElementById('specification-name-errorSummary').classList.remove("govuk-visually-hidden")
        document.getElementById('specification-name-error').classList.remove("govuk-visually-hidden")
    } else {
        valid = true;
        document.getElementById('error-summary').classList.add("govuk-visually-hidden")
        document.getElementById('specificationName').classList.remove("govuk-form-group--error")
        document.getElementById('specification-name-errorSummary').classList.add("govuk-visually-hidden")
        document.getElementById('specification-name-error').classList.add("govuk-visually-hidden")

    }
    return valid
}

function validateFundingStream() {
    let valid = false;
    if (fundingStream.value == "") {
        document.getElementById('error-summary').classList.remove("govuk-visually-hidden")
        document.getElementById('fundingStreamSpecification-error').classList.add("govuk-form-group--error")
        document.getElementById('funding-stream-errorSummary').classList.remove("govuk-visually-hidden")
        document.getElementById('funding-stream-error').classList.remove("govuk-visually-hidden")
    } else {
        valid = true;
        document.getElementById('error-summary').classList.add("govuk-visually-hidden")
        document.getElementById('fundingStreamSpecification-error').classList.remove("govuk-form-group--error")
        document.getElementById('funding-stream-errorSummary').classList.add("govuk-visually-hidden")
        document.getElementById('funding-stream-error').classList.add("govuk-visually-hidden")
    }
    return valid
}

function validateFundingPeriod() {
    let valid = false;
    if (fundingPeriod.value == "") {
        document.getElementById('error-summary').classList.remove("govuk-visually-hidden")
        document.getElementById('fundingPeriod-error-group').classList.add("govuk-form-group--error")
        document.getElementById('funding-period-errorSummary').classList.remove("govuk-visually-hidden")
        document.getElementById('funding-period-error').classList.remove("govuk-visually-hidden")
    } else {
        valid = true;
        document.getElementById('error-summary').classList.add("govuk-visually-hidden")
        document.getElementById('fundingPeriod-error-group').classList.remove("govuk-form-group--error")
        document.getElementById('funding-period-errorSummary').classList.add("govuk-visually-hidden")
        document.getElementById('funding-period-error').classList.add("govuk-visually-hidden")

    }
    return valid
}

function validateProviderData() {
    let valid = false;
    if (providerDataYes.checked == false || providerDataNo.checked == false) {
        document.getElementById('error-summary').classList.remove("govuk-visually-hidden")
        document.getElementById('providerData-error-group').classList.add("govuk-form-group--error")
        document.getElementById('providerData-errorSummary').classList.remove("govuk-visually-hidden")
        document.getElementById('providerData-error').classList.remove("govuk-visually-hidden")
    }
    else {
        valid = true;
        document.getElementById('error-summary').classList.add("govuk-visually-hidden")
        document.getElementById('providerData-error-group').classList.remove("govuk-form-group--error")
        document.getElementById('providerData-errorSummary').classList.add("govuk-visually-hidden")
        document.getElementById('providerData-error').classList.add("govuk-visually-hidden")
    }
    return valid
}

function validateTemplateVersion() {
    let valid = false;
    if (templateVersion.value == "") {
        document.getElementById('error-summary').classList.remove("govuk-visually-hidden")
        document.getElementById('template-version-error-group').classList.add("govuk-form-group--error")
        document.getElementById('template-version-errorSummary').classList.remove("govuk-visually-hidden")
        document.getElementById('template-version-error').classList.remove("govuk-visually-hidden")
    } else {
        valid = true;
        document.getElementById('error-summary').classList.add("govuk-visually-hidden")
        document.getElementById('template-version-error-group').classList.remove("govuk-form-group--error")
        document.getElementById('template-version-errorSummary').classList.add("govuk-visually-hidden")
        document.getElementById('template-version-error').classList.add("govuk-visually-hidden")

    }
    return valid
}


function getProviderData() {
    let coreProviderData = document.getElementById("coreProviderData");
    console.log(coreProviderData)
    sessionStorage.setItem('provider data changed', coreProviderData.value);
}

document.getElementById('fundingStreamSpecification').onchange = function getfundingStreamSpecficiation() {
    let fundingStreamSpecficiation = document.getElementById("fundingStreamSpecification");
    let fundingStreamSpecficiationText = fundingStreamSpecification.options[fundingStreamSpecification.selectedIndex].value;
    console.log(fundingStreamSpecficiationText)
    sessionStorage.setItem("funding stream", fundingStreamSpecficiationText)
}

function trackLatest() {
    let valid = false;
    console.log("hello")
    var str = document.getElementById("fundingStreamSpecification").value;
    var n = str.includes("FDZ");
    console.log(n)
    if (n) {
        document.getElementById("providerData-error-group").classList.remove("govuk-visually-hidden")
    }
    else {
        document.getElementById("providerData-error-group").classList.add("govuk-visually-hidden")
    }
}