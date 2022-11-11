/* -------------------------------------------- jquery code ---------------------------------------- */
// nice scroll library : to change the shape of scroll 
// $("document").ready(function(){
// 	/*  <html></html> بتاع صفحة ال scroll هغير شكل ال */
// 	/* ######### Trigger Nice scroll plugin ######### */
// 	$("html").niceScroll({
//         /* scroll بتاع ال cursor هغير لون ال */
//         cursorcolor: "#f7600e"     ,
//         /* scroll بتاع ال cursor هغير العرض بتاع ال */
//         cursorwidth: 10            , 
//         /* scroll بتاع ال border-radius هغير ال */
//         cursorborderradius: 0      ,
//         /* scroll بتاع ال border هغير ال */
//         cursorborder: "1px solid #f7600e " 
//     });
// });
/* -------------------------------------------- javascript code ---------------------------------------- */
/* ######################################## ColorBox  ######################################## */
var parentBox = document.querySelector(".colorBox") ,
    cogsIcon = document.getElementById("cogs-icon"),
    cartIcon = document.getElementById("cart-icon"),
    toolTip1 = document.querySelector(".tooltip1"),
    toolTip2 = document.querySelector(".tooltip2"),
    rightBox = document.querySelector(".demo-panel-content"),
    colorPaletteUl = document.querySelector(".color-palette");
/* +++++++++++++++++ Tooltip 1 +++++++++++++++++ */
cogsIcon.onmouseenter = () => {
    toolTip1.style.display = "block" ;
}
cogsIcon.onmouseleave = () => {
    toolTip1.style.display = "none" ;
}
/* +++++++++++++++++ Tooltip 2 +++++++++++++++++ */
cartIcon.onmouseenter = () => {
    toolTip2.style.display = "block" ;
}
cartIcon.onmouseleave = () => {
    toolTip2.style.display = "none" ;
}
/* ++++++++++++++++++++++++++++ When Click on "CogsIcon" ++++++++++++++++++++++++++++ */
cogsIcon.onclick = ()=>
{
    if( parentBox.classList.contains("hidePanel"))
    {
        // Show "Panel"
        parentBox.classList.remove("hidePanel");
        // Change "close icon" to "cogs icon"
        document.getElementById("cogsIcon").setAttribute("class","fa fa-cogs fa-lg");  
        // Change "cogs icon" to "gray color"
        document.getElementById("cogsIcon").style.color = "#888";    
    }
    else
    {
        // Hide "Panel"
        parentBox.classList.add("hidePanel"); 
        // Change "cogs icon" to "close icon"
        document.getElementById("cogsIcon").setAttribute("class","fa fa-close fa-lg");      
        // Change "close icon" to "red color"
        document.getElementById("cogsIcon").style.color = "#f00";    
    }
}
/* +++++++++++++++++++++ Create "Color Palette" +++++++++++++++++++++ */
var colorBoxesList = colorPaletteUl.children ;
for( colorBox of colorBoxesList )
{
    // get "data-color" attribute value
    var dataColorVal = colorBox.dataset.color ;
    // Give each "colorBox" color according to "data-color" value
    colorBox.style.background = dataColorVal ;
}
/* +++++++++++++++++++++ When Click on "ColorBox" +++++++++++++++++++++ */
var  panelContentBtn =  document.querySelector(".demo-panel-btn") ;
document.querySelector(".color-palette").onclick = function(e)
{
    // assign "data-color" of "colorBox li" to button
    panelContentBtn.style.background = e.target.dataset.color ;
    // change "mainBk variable in root"
    document.documentElement.style.setProperty('--mainBk', `${e.target.dataset.color}`);
	document.querySelector(".scrollerProgress").style.backgroundColor =  `${e.target.dataset.color}` ;
}
/* +++++++++++++++++++++ Create "Panel images" +++++++++++++++++++++ */
var panelImagesUl = document.querySelector(".demo-panel-inner3 ul");
for( var i=1 ; i <= 12 ; i++ )
{
    var liTag = document.createElement("li") ,
        anchorTag = document.createElement("a"),
        imgTag = document.createElement("img") ;
    // Create "<a></a>" tag and give values for "href" and "target" attributes
    anchorTag.href = `images/colorBoxImgs/img${i}.jpeg`;
    anchorTag.target = "_blank";
    // Create "<img/>" tag and give values for  "src" attribute
    imgTag.src = `images/colorBoxImgs/img${i}.jpeg`;
    // Append "<a></a>" as child to "<li></li>"
    liTag.appendChild(anchorTag);
    // Append "<img/>" as child to "<a></a>"
    anchorTag.appendChild(imgTag);
    // Append "<li></li>" as child to "<ul></ul>"
    panelImagesUl.appendChild(liTag);
}
/* ######################################## website  ######################################## */
var bigImgEl=document.getElementById("bigImgId")   ,
 	subImg1El=document.getElementById("subImg1Id") ,
	subImg2El=document.getElementById("subImg2Id") ,
	subImg3El=document.getElementById("subImg3Id") ,
	subImg4El=document.getElementById("subImg4Id") ;

subImg1El.onclick = function()
{
	bigImgName.src="images/gallery-1.jpg";
	// Get "--mainBk" from ":root variable" and assign it to "border"
	subImg1El.style.border = `3px solid ${document.documentElement.style.getPropertyValue('--mainBk')} ` ;	
	subImg2El.style.border = "transparent" ;	
	subImg3El.style.border = "transparent" ;	
	subImg4El.style.border = "transparent" ;	
}
subImg2El.onclick = function()
{
	bigImgName.src="images/gallery-2.jpg";
	// Get "--mainBk" from ":root variable" and assign it to "border"
	subImg2El.style.border = `3px solid ${document.documentElement.style.getPropertyValue('--mainBk')} ` ;
	subImg1El.style.border = "transparent" ;	
	subImg3El.style.border = "transparent" ;	
	subImg4El.style.border = "transparent" ;	
}
subImg3El.onclick = function()
{
	// Get "--mainBk" from ":root variable" and assign it to "border"
	bigImgName.src="images/gallery-3.jpg";
	subImg3El.style.border = `3px solid ${document.documentElement.style.getPropertyValue('--mainBk')} ` ;
	subImg2El.style.border = "transparent" ;	
	subImg1El.style.border = "transparent" ;	
	subImg4El.style.border = "transparent" ;	
}
subImg4El.onclick = function()
{
	bigImgName.src="images/gallery-4.jpg";
	// Get "--mainBk" from ":root variable" and assign it to "border"
	subImg4El.style.border = `3px solid ${document.documentElement.style.getPropertyValue('--mainBk')} ` ;
	subImg2El.style.border = "transparent" ;	
	subImg3El.style.border = "transparent" ;	
	subImg1El.style.border = "transparent" ;	
}
/*  ################################## related Products section #################################  */	
var hiddenProductEl = document.getElementsByClassName("hiddenProduct") ,
	viewMoreBtnEl = document.getElementById("viewMoreBtnId") ;
viewMoreBtnEl.onclick = function()
{
    for( var i=0 ; i <  hiddenProductEl.length ; i++ )
    {
        hiddenProductEl[i].style.display = "block" ;
    }
    
};
// ################################## Scroller Progressbar section ################################# 
var scrollProgressBarEl = document.querySelector(".scrollerProgress") ,
	height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;

/* scrollHeight : Entire Content && padding ( visible or not ) , returns the height of an element including padding, but excluding borders, scrollbars, or margins. */
// clientHeight : visible Content && padding , returns the viewable height of an element in pixels, including padding, but not the border, scrollbar or margin.

// +++++++++++++++++ When Scroll on the page +++++++++++++++ 
window.addEventListener("scroll",function(){
	// note : document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
	// scrollTop is the number of pixels that an scroller is scrolled vertically
	// عدد البكسل اللي البكرة اتحركتها او بعد البكرة عن القمة
	let scrollTopVar = document.documentElement.scrollTop ;
	// width of scrollerProgress = [(scrollTop / height) * 100]%
	scrollProgressBarEl.style.width = `${ (scrollTopVar / height )*100 }%`;
});
/* ################################## smart Band section ################################# */
var brandImgSrcList = ["images/watches/watch1.png" , "images/watches/watch2.png" , "images/watches/watch3.png" , "images/watches/watch4.png" , "images/watches/watch5.png", "images/watches/watch6.png" ] ,
	count = 0 ;
/* اول مالصفحة تحمل يظهر اول صورة */
  var brandImgChange = function()
  {
	// "watchImg" is the name of "<img />"
	document.watchImg.src=brandImgSrcList[count];
	// give "h3" to each "smartBand product"
	document.querySelector(".smartBandInfoH3").innerHTML = `smart band ${count+1}` ; 
	// give "paragraph" to each "smartBand product"
	document.querySelector(".smartBandInfoPara2").innerHTML = `Smart band ${count+1} Lorem Ipsum Sit Amet benefits of sports to the <br>
																benefits of sports to the many Ipsum Sit Amet accelerator ` ; 
	if( count < brandImgSrcList.length-1  )
	{
		count++ ;
	}
	else
	{
		count = 0 ;
	}
	setTimeout( "brandImgChange()" , 2000 ) ;
  }
  brandImgChange()   // هنادي علي الدالة باسم المتغير مرة واحدة وباقي المرات هنادي عليها داخل الدالة