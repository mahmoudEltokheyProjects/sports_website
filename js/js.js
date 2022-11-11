$("document").ready(function(){
	/*  <html></html> بتاع صفحة ال scroll هغير شكل ال */
	/* ######### Trigger Nice scroll plugin ######### */
	$("html").niceScroll({
        /* scroll بتاع ال cursor هغير لون ال */
        cursorcolor: "#f7600e"     ,
        /* scroll بتاع ال cursor هغير العرض بتاع ال */
        cursorwidth: 10            , 
        /* scroll بتاع ال border-radius هغير ال */
        cursorborderradius: 0      ,
        /* scroll بتاع ال border هغير ال */
        cursorborder: "1px solid #f7600e " 
    });
	/*  window بتاع ال height ياخذ نفس ال header section هخلي ال   */
	/* ######### change the window height ######### */
	$(".header").height( $(window).height() );
	// when click on "down arrow" of header section , go to features section
	$('.header	.arrow	 i').click(function(){
		$("html , body").animate({
			//   top من ناحية ال document  وال .features هخلي قيمتها بتساوي المسافة بين العنصر اللي واخد كلاس top هي المسافة بين البكرة وال scrollTop ال
			//   top من ناحية ال document و ال .features يخلي البكرة تنزل مسافة تساوي المسافة بين العنصر اللي واخد كلاس  arrow عشان لما اضغط علي ال
			scrollTop : $(".features").offset().top 
		} , 1000 );
	});
	/* ########################################## header ##################################### */
    //  our team section هيوديني لل headerHireBtn وواخد كلاس header section لما اضغط علي الزرار اللي موجود في ال
    $(".headerHireBtn").click(function(){
        $("html,body").animate({
            scrollTop : $(".our-team ").offset().top 
        },1000);
    });
    //  our work section هيوديني لل headerOurWorksBtn وواخد كلاس header section لما اضغط علي الزرار اللي موجود في ال
    $(".headerOurWorksBtn").click(function(){
        $("html,body").animate({
            scrollTop : $(".our-work ").offset().top 
        },1000);
    });
	/* ########################################## our work ##################################### */
    // show hidden items 
	$(".showMoreBtn").click(function(){
		$(".our-work  .hidden").fadeIn(2000);
	});
    
    /* ##########################################  subscribe ################################### */
    var subscribeEL = document.getElementById("subscribeId") ;
        // -------------- email inputField  --------------
        subscribeEL.onfocus = function(){
            if( subscribeEL.getAttribute("placeholder") !== " " )
            {
                subscribeEL.setAttribute("placeholder"," ") ;
            }
        }
        subscribeEL.onblur = function(){           
            if( subscribeEL.getAttribute("placeholder") === " " )
            {
                 subscribeEL.setAttribute("placeholder","Enter Your Email address for newsletter") ;       
            }
        }
	// ----------------------------------- testimonials section ----------------------------------- 
	var  leftArrow  = $(".testim	.fa-chevron-left")	,
		 rightArrow = $(".testim	.fa-chevron-right")	;
	// ******************************* check first and last testimonials *******************************
	/* first client علي ال check هعمل دالة بتعمل */
	function checkClients()
	{
		/*  المختصرة if مكنش كده هيظهره هنستخدم دالة left arrow فهخفي ال active كان واخد كلاس client لو اول */
		 $(".clients:first").hasClass("active") ? leftArrow.fadeOut() : leftArrow.fadeIn() ;
		/*  المختصرة if مكنش كده هيظهره هنستخدم دالة right arrow فهخفي ال active كان واخد كلاس client لو اخر */
		 $(".clients:last").hasClass("active") ? rightArrow.fadeOut() : rightArrow.fadeIn() ;
	}
	// call the checkClients function
	checkClients() ;
	// ******************************* when click on left or right arrow *******************************
	$(".testim	i").click(function(){
		//  right arrow او ال left arrow اللي هضغط عليها اما تكون ال icon يوجد احتمالين لل
        if( $(this).hasClass("fa-chevron-right") )
       {
            /* 	=============== if you click on "right arrow" : 	==================
                1- hide the current person and show previous person 
                2- remove the "active" class from the current "client" 
                3- add the "active" class to the previous "client" and appear this "client"
          */
            $(".testim .active").fadeOut(100, function(){
                $(this).removeClass("active").next(".clients").addClass("active").fadeIn();
                // right arrow هيحذف السهم client عشان لما يصل لاخر arrow علي ال check عشان يعمل checkClients() في كل مرة هنادي علي الدالة 
                checkClients();
            });
       }
        else
        {
            /* 	=============== if you click on "left arrow" : 	==================
                    1- hide the current person and show next person 
                    2- remove the "active" class from the current "client" 
                    3- add the "active" class to the next "client" and appear this "client"
              */
            $(".testim .active").fadeOut(100, function(){
                $(this).removeClass("active").prev(".clients").addClass("active").fadeIn();
                // left arrow هيحذف السهم client عشان لما يصل اول arrow علي ال check عشان يعمل checkClients() في كل مرة هنادي علي الدالة 
                checkClients();
            });       
        }
	});
    /* ##################################### start contact form #################################### */
    var emailEl   = document.getElementById("emailId")   ,
        subjectEl = document.getElementById("subjectId") ,
        messageEl = document.getElementById("messageId") ;
    // -------------- email inputField  --------------
        emailEl.onfocus = function(){
            if( emailEl.getAttribute("placeholder") !== " " )
            {
                emailEl.setAttribute("placeholder"," ") ;
            }
        }
        emailEl.onblur = function(){           
            if( emailEl.getAttribute("placeholder") === " " )
            {
                 emailEl.setAttribute("placeholder","Your Email") ;       
            }
        }
        // -------------- subject inputField  --------------
        subjectEl.onfocus = function(){
            if( subjectEl.getAttribute("placeholder") !== " " )
            {
                subjectEl.setAttribute("placeholder"," ") ;
            }
        }
        subjectEl.onblur = function(){           
            if( subjectEl.getAttribute("placeholder") === " " )
            {
                 subjectEl.setAttribute("placeholder","Subject") ;       
            }
        }
     // -------------- message textarea  --------------
        messageEl.onfocus = function(){
            if( messageEl.getAttribute("placeholder") !== " " )
            {
                messageEl.setAttribute("placeholder"," ") ;
            }
        }
        messageEl.onblur = function(){           
            if( messageEl.getAttribute("placeholder") === " " )
            {
                 messageEl.setAttribute("placeholder","Message") ;       
            }
        }

});