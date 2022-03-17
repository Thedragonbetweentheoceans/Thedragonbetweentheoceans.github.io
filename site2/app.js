$(function(){
    $().timelinr({
        orientation: 	'vertical',
        issuesSpeed: 	300,
        datesSpeed: 	100,
        arrowKeys: 		'true',
        startAt:		1
    })
});

function openMenu(){
    document.getElementById("top").style.height="50vh";
    document.getElementById("bottom").style.height="50vh";
    document.getElementById("menu").style.display = "none";
    document.getElementById("exit").style.display = "block";
    document.getElementById("menuContent").style.display = "block";
}


function closeMenu(){
    document.getElementById("top").style.height="0vh";
    document.getElementById("bottom").style.height="0vh"
    document.getElementById("menu").style.display = "block";
    document.getElementById("exit").style.display = "none";
    document.getElementById("menuContent").style.display = "none";
}