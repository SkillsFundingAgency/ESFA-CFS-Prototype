const form = document.querySelector('#createSpec');
const specName = document.querySelector('#spec-name');
const fundingStream = document.querySelector('#fundingStreamSpecification');
const fundingPeriod = document.querySelector('#fundingPeriod');


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate forms
    let isSpecNameValid = validateSpecName() 
    isFundingStreamValid = validateFundingStream()
    isFundingPeriodValid = validateFundingPeriod();

    let isFormValid = isSpecNameValid && isFundingStreamValid && isFundingPeriodValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        window.location.href="specifications.html";

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