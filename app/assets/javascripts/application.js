/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


//Filter and search 
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Main content search
$(document).ready(function () {
  $("#mainContentSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mainContentResults tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Profiling search
$(document).ready(function () {
  $("#profilingSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#accordion-default div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Accordion search
$(document).ready(function () {
  $("#mainContentSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#mainContentResults div").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

// Collapsible filters
$('.filter-expand').click(function () {
  if ($("[id^=filter-content]").hasClass('filter-content')) {
    $("[id^=filter-content]").removeClass('filter-content');
    $("[id^=arrowRotate]").addClass('arrowChange');
  }
  else {
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
    .autocomplete({
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


// Select all checkboxesç
$('#select-all').click(function (event) {
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
  })
});


// Checkbox count 

var count
var checked = 0

count = $("input[id='provider-approval']").length;
document.getElementById("checkbox-count").innerHTML = count;

$(".provider-checked").click(function () {
  checked = $('.provider-checked:checked').length;
  console.log(checked);
  document.getElementById("checkbox-checked").innerHTML = checked;
  $("#select-all").prop('checked', false)
});

$("#select-all").click(function () {
  if (this.checked) {
    $('.provider-checked:checkbox').not(this).prop('checked', this.checked);
    document.getElementById("checkbox-checked").innerHTML = count;
  } else {
    document.getElementById("checkbox-checked").innerHTML = 0;
  }
});

$('.provider-checked').change(function () {
  var total = 0;
  $('.provider-checked:checked').each(function () {
    total += $(this).closest('.provider-value').text();
    console.log(total)
  });
  $('#total').text(total);
  console.log(total)
});


// Attach a click handler
$('.provider-checked').click(tallyValues);

// The function that tallies the checked values
function tallyValues() {

  // Set the amount to start at 0
  var fundingTotal = 0;

  // Loop through each dom element
  $('table .provider-value').each(function (i, val) {

    // Find the previous sibling (td) and then find the input inside and see if it's checked
    var checkbox_cell_is_checked = $(this).prev().find('input').is(':checked');

    // Is it checked?
    if (checkbox_cell_is_checked) {
      fundingTotal += parseInt($(this).text())
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


