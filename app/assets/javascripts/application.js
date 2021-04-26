/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production');
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
});

// remove row 
$('table').on('click', 'a[id="deleteRow"]', function(e){
  $(this).closest('tr').remove();
  e.preventDefault();
});

// add row profiling
$('table').on('click','a[id="addRow"]', function(e){
  $(this).closest('tr').after('<tr class="govuk-table__row"> <th scope="row" class="govuk-table__header"> <div class="govuk-form-group"> <select class="govuk-select" id="sort" name="profileTable"> <option></option> <option value="september" >September 2020</option> <option value="october">October 2020</option> <option value="november">November 2020</option> <option value="december">December 2020</option> <option value="january">January 2021</option> <option value="february">February 2021</option> <option value="march">March 2021</option> <option value="april">April 2021</option> <option value="may">May 2021</option> <option value="june">June 2021</option> <option value="july">July 2021</option> <option value="august">August 2021</option> </select> </div></th> <th scope="row" class="govuk-table__header"> <div class="govuk-form-group"> <select class="govuk-select" id="sort" name="sort"> <option value="empty" selected></option> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> </select> </div></th> <td class="govuk-table__cell"> <div class="govuk-form-group"> <div class="govuk-input__wrapper"> <input aria-label="Enter the total percetage for January. Enter 0 if this does not apply" class="input-suffix govuk-input govuk-input--width-5" id="input-4" onblur=" sumPercentage()" name="installmentPercentage" type="text" value="" aria-describedby="percent"> <div class="govuk-input__suffix" aria-hidden="true">%</div></div></div></td><td class="govuk-table__cell"> <a id="addRow" href="#">Add row</a> </br> <a href="#" id="deleteRow">Remove row</a> </td></tr>')
  e.preventDefault();
});

//Filter and search 
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Main content search
$(document).ready(function () {
  $("#mainContentSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mainContentResults tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

//Profiling search
$(document).ready(function () {
  $("#profilingSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#accordion-default div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Accordion search
$(document).ready(function () {
  $("#mainContentSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mainContentResults div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// Collapsible filters
$('.filter-expand').click(function () {
  if ($("[id^=filter-content]").hasClass('filter-content')) {
    $("[id^=filter-content]").removeClass('filter-content');
    $("[id^=arrowRotate]").addClass('arrowChange');
  } else {
    $("[id^=arrowRotate]").removeClass('arrowChange');
    $("[id^=filter-content]").addClass('filter-content');
  }
});

//Multi autocomplete
$(function () {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];

  function split(val) {
    return val.split(/,\s*/);
  }

  function extractLast(term) {
    return split(term).pop();
  }

  $("#tags")
    // don't navigate away from the field on tab when selecting an item
    .on("keydown", function (event) {
      if (event.keyCode === $.ui.keyCode.TAB &&
        $(this).autocomplete("instance").menu.active) {
        event.preventDefault();
      }
    })

    .autocomplete ({
      minLength: 0,
      source: function (request, response) {
        // delegate back to autocomplete, but extract the last term
        response($.ui.autocomplete.filter(
          availableTags, extractLast(request.term)));
      },
      focus: function () {
        // prevent value inserted on focus
        return false;
      },
      select: function (event, ui) {
        var terms = split(this.value);
        // remove the current input
        terms.pop();
        // add the selected item
        terms.push(ui.item.value);
        // add placeholder to get the comma-and-space at the end
        terms.push("");
        this.value = terms.join(", ");
        return false;
      }
    });
});

//  // Back to top

//  backToTop = document.getElementById("backToTop");

//  // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
//     backToTop.style.display = "block";
//   } else {
//     backToTop.style.display = "none";
//   }
// }


// Select all checkboxes
$('#select-all').click(function () {
  if (this.checked) {
    // Iterate each checkbox
    $('.govuk-table .govuk-table__cell .govuk-checkboxes .govuk-checkboxes__item :checkbox').each(function () {
      this.checked = true;
    });
  } else {
    $(':checkbox').each(function () {
      this.checked = false;
    });
  }
});

// Repayment hide/show
$('#gag-repayment').change(function () {
  if ($(this).val() == 'yes') {
    $('#repayment-details').show();
  }
});

$('#gag-repayment-no').change(function () {
  if ($(this).val() == 'no') {
    $('#repayment-details').hide();
  }
});


// specification select

$(function () {
  $('#specification').on('change', function () {
    $('#specification-link').attr('href', $(this).val());
  });
});


// Checkbox count 
$(document).ready(function () {

  var count = 0;
  var checked = 0;

  count = $("input[id='provider-approval']").length;
  document.getElementById("checkbox-count").innerHTML = count;

  $(".provider-checked").click(function () {
    checked = $('.provider-checked:checked').length;
    console.log(checked);
    document.getElementById("checkbox-checked").innerHTML = checked;
    $("#select-all").prop('checked', false);
  });

  $("#select-all").click(function () {
    if (this.checked) {
      $('.provider-checked:checkbox').not(this).prop('checked', this.checked);
      document.getElementById("checkbox-checked").innerHTML = count;
    }
  });

  $('.provider-checked').change(function () {
    var total = 0;
    $('.provider-checked:checked').each(function () {
      total += $(this).closest('.provider-value').text();
      console.log(total);
    });
    $('#total').text(total);
    console.log(total);
  });

});


// Attach a click handler
$('.provider-checked').click(tallyValues);

// The function that tallies the checked values
function tallyValues() {

  // Set the amount to start at 0
  var fundingTotal = 0;

  // Loop through each dom element
  $('table .provider-value').each(function () {

    // Find the previous sibling (td) and then find the input inside and see if it's checked
    var checkbox_cell_is_checked = $(this).prev().find('input').is(':checked');

    // Is it checked?
    if (checkbox_cell_is_checked) {
      fundingTotal += parseInt($(this).text());
    }
  });

  // Output the amount
  document.getElementById("total").innerHTML = fundingTotal;
}

// show and hide template edit controls 

function hideEdit() {
  document.getElementById('viewEdit').style.display = 'none';
}

function showEdit() {
  document.getElementById('viewEdit').style.display = 'block';
}

// Go back (onclick="goBack()")

function goBack() {
  window.history.back();
}

// Go back 2 pages (onclick="goBack()")

function goBack2() {
  window.history.go(-2);
}

// Show success message on fundingLineStructure-gag#variation-management page when user clicks save button
$(".gag-variation-management-save-button-js").on( "click", function(e) {
  // Prevent default button action 
  e.preventDefault();

  // Show sucess banner by removing the class that is hiding it
  $('.notification-banner-success').removeClass("govuk-!-display-none");

  // Scroll page to the success banner so it is visible to the user
  $([document.documentElement, document.body]).animate({
    scrollTop: $(".govuk-breadcrumbs").offset().top
}, 500);
});
// END Show success message on fundingLineStructure-gag#variation-management page when user clicks save button

// ON fundingLineStructure-gag#variation-management PAGE, ENABLE SAVE BUTTON WHEN A USER MAKES A SELECTION FROM A FUTURE INSTALMENT DROPDOWN
$('.funding-line-dropdown-js').on('change', function() {
  $('.gag-variation-management-save-button-js').prop("disabled", false); // Element(s) are now enabled.
});
// END ON fundingLineStructure-gag#variation-management PAGE, ENABLE SAVE BUTTON WHEN A USER MAKES A SELECTION FROM A FUTURE INSTALMENT DROPDOWN

