
var studentItem = $('.student-item');
var pagination ='<div class="pagination"><ul></ul></div>';
var studentList = NrPages(studentItem);


// Generate an array of students for each number of pages. max limit of students for each page is 10
function NrPages(list) {
	var oldList = list.slice();
	var pagesArray = [];
	while (oldList.length) {
		pagesArray.push(oldList.splice(0,10));
	}
	return pagesArray;
}

// After generating the NrPages array of  all the students, show page nr 1 and hide the rest
function showPage(pageNr, pageLi) {
  $(".student-list li").hide();
  $.each(pageLi, function(index, page){
      if (pageNr === index) {
        $.each(page, function(i, itemLi){
          $(itemLi).fadeIn('fast');
        });
      }
  });
}


// This function creates all the page links based on a list of students buttons. It will determine how many pages we need based on the list's length pageLi.length also adds and removes the active class on click, when the page loads assigns active class to first button

function appendPageLinks(pageLi) {
	$('.page').append(pagination);
	var NrPages = pageLi.length;
	for (var i = 1; i <= NrPages; i++) {
		var buttons = '<li><a href="#">' + i + '</a></li>';
		$('.pagination ul').append(buttons);
	}
	$('.pagination ul li a').first().addClass('active');
      
	 //create click listeners
	  $('.pagination ul li a').on('click', function(e) {
	    var SelectPage = parseInt($(this)[0].text) - 1;
	    showPage(SelectPage, pageLi);
	    $('.pagination ul li a').removeClass();
	    $(this).addClass('active');
	    e.preventDefault();
	  });
}



// run the functions with the correct values
appendPageLinks(studentList);
showPage(0,studentList);

