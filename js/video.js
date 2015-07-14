
//播放列表，替换动态数据即可
var playlist=[
   //title：视频标题，src：视频路径，cover：视频封面图片;
		{title:"王力宏-裂心",src:"http://dd.yinyuetai.com/uploads/videos/common/1F8B014AA6920F1FF6F6FE742E8322CF.mp4?sc=a455d01ed118ecb3",cover:"images/2.jpg"},
		{title:"戚薇-冬天的树",src:"http://dd.yinyuetai.com/uploads/videos/common/56CE014A9DBB3B2FC750BD75B2247B31.mp4?sc=f666fb1859acdb38",cover:"images/1.jpg"},
		{title:"Jake Bugg Cut (BBC Introducing stage at Reading 2014) 现场版",src:"http://dd.yinyuetai.com/uploads/videos/common/9FE2014ABDD07798CEBA71A1989A2C12.mp4?sc=fc0567effc8093e8",cover:"images/3.jpg"}
	]

var CURRENT=0,player = document.getElementById("player"),playersource=$("#playersource"),tit=$("#tit"),cover=$("#cover"),listTotal=playlist.length,previndex,nextindex;
	function setplaylist(){
        player.src=playlist[CURRENT].src;
        playersource.attr("src",playlist[CURRENT].src);
        tit.html(playlist[CURRENT].title);
	    cover.attr("src",playlist[CURRENT].cover);
        
        previndex =CURRENT<=0 ? 0 : CURRENT-1;
        nextindex=CURRENT==listTotal-1 ? listTotal-1 : CURRENT+1;
	    $(".prev img").attr("src",playlist[previndex].cover);
	    $(".next img").attr("src",playlist[nextindex].cover);
}
function play(){
	 $("#video-cover").hide();
	 player.play();
}
setplaylist();

//每次视频播放完毕触发
//player.onended = function() {
	
//	$("#operation").show();

//}
function changeSize()
{	
        $("#player").css("height","");
		setVideoSize();
	}
function setVideoSize(){
	var h = $("#player").height();
	$("#player,#cover,#video-cover,#operation").css("height",h);
	}
	
	changeSize();



//	侦听浏览器窗口大小变化
window.onresize = changeSize;

$(function(){
	$(".prev,.next").click(function() {
		$("#operation").hide();
		if($(this).hasClass('prev'))
			CURRENT=previndex;
		else CURRENT=nextindex; 
			setplaylist();
            play();
	});
     $("#player").on('ended', function(e){

    $("#operation").show();
 })
})
//图片滑动
 images_carousel();