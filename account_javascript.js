/* -------------------------------------------- jquery code ---------------------------------------- */
// nice scroll library : to change the shape of scroll 
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
        cursorborder: "1px solid #f7600e" 
    });
});
// ------------------------------------------- form ----------------------------------
var    formContainerEl = document.getElementById("formContainerId");
// ++++++++++++++++++++ registeration form ++++++++++++++++++++
$(".registerHeadSpan").click(function(){
    /* form header */
    $(".loginHeadSpan").removeClass("active");
    $(".registerHeadSpan").addClass("active");
    /* login and registeration form */
    /*javascript code : when click on registeration , form container will translate on x-axis with 50% to go to registe form */
    formContainerEl.style.transform = "translateX(-50%)" ;
});
// ++++++++++++++++++++ login form ++++++++++++++++++++
$(".loginHeadSpan").click(function(){
    /* form header */
    $(".registerHeadSpan").removeClass("active");
    $(".loginHeadSpan").addClass("active");
    /* login and registeration form */
   /*javascript code : when click on registeration , form container will translate on x-axis with 0% to return to login form */
    formContainerEl.style.transform = "translateX(0%)" ;
});







//<!-- /////////////// right part : account form /////////////// -->
//                <div class="accountForm">
//                    <!-- ========== form header ========== -->
//                    <div class="accountHeader">
//                        <span class="loginHeadSpan  active">login</span>
//                        <span class="registerHeadSpan">register</span>
//                    </div>
//                    <!-- ++++++++++++ login form +++++++++++++ -->
//                    <div class="loginForm"  id="loginFormId">
//                        <form>
//                            <input type="text"     name="usernameName" id="usernameId" placeholder="Username">
//                            <input type="password" name="passwordName" id="passwordId" placeholder="Password">
//                            <input type="button"   name="loginName"    id="loginId"    value="login">
//                            <a href="#" class="forgetPass"> Forget password ? </a>
//                        </form>
//                    </div>
//                    <!-- ++++++++++ regiseration form +++++++++ -->
//                    <div class="regiserForm   hidden"   id="regiserFormId">
//                        <form>
//                            <input type="text"     name="username2Name" id="username2Id" placeholder="Username">
//                            <input type="email"    name="emailName"     id="emaild"      placeholder="Password">
//                            <input type="password" name="password2Name" id="password2Id" placeholder="Password">
//                            <input type="button"   name="registerName"  id="registerId"  value="register">
//                        </form>
//                    </div>
//                    