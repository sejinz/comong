// main.js
$(document).ready(function(){
    //윈도우 시작하면 화면 맨 위로 이동
    // $("body,html").stop().animate({"scrollTop":0},1500,"swing");

    //브라우저의 높이값을 div의 높이값으로
    var ht =$(window).height();
    $("#container > div").height(ht);

    $(window).resize(function(){
        var ht =$(window).height();
        $("#container > div").height(ht);    
    });
    //스크롤 한페이지 끝

    //움직임 시작
    var start = setTimeout(function(){
        $("#mainvisual > section").addClass("on");
    },500)

    $(window).scroll(function(){
        var scroll = $(this).scrollTop(); //현재 스크롤 위치 값 
        var ht = $(window).height();

        //mainvisual
        if(scroll >=0*ht && scroll < 1*ht){
            //내용물 움직임 시작
            $("#mainvisual > section").addClass("on");
        }else{ //움직임 취소
            $("#mainvisual > section").removeClass("on");
        }
        // content1
        if(scroll >=1*ht && scroll < 2*ht){
            $("#content1 > section").addClass("on");
        }else{ //움직임 취소
            $("#content1 > section").removeClass("on");
        }
          // content2
        if(scroll >=2*ht && scroll < 3*ht){
            $("#content2 > section").addClass("on");
        }else{ //움직임 취소
            $("#content2 > section").removeClass("on");
        }
          // content3
        if(scroll >=3*ht && scroll < 4*ht){
            $("#content3 > section").addClass("on");
        }else{ //움직임 취소
            $("#content3 > section").removeClass("on");
        }
               // content4
        if(scroll >=4*ht && scroll < 5*ht){
                $("#content4 > section").addClass("on");
        }else{ //움직임 취소
                $("#content4 > section").removeClass("on");
        }
                       // content5
        if(scroll >=5*ht && scroll < 6*ht){
                $("#content5 > section").addClass("on");
        }else{ //움직임 취소
                $("#content5 > section").removeClass("on");
        }
                       // content6
        if(scroll >=6*ht && scroll < 7*ht){
                $("#content6 > section").addClass("on");
        }else{ //움직임 취소
                $("#content6 > section").removeClass("on");
        }
                       // content7
        if(scroll >=7*ht && scroll < 8*ht){
                $("#content7 > section").addClass("on");
        }else{ //움직임 취소
                $("#content7 > section").removeClass("on");
        }
                       // content8
        if(scroll >=8*ht && scroll < 9*ht){
                $("#content8 > section").addClass("on");
        }else{ //움직임 취소
                $("#content8 > section").removeClass("on");
        }
                               // content9
        if(scroll >=9*ht && scroll < 10*ht){
                $("#content9 > section").addClass("on");
        }else{ //움직임 취소
                $("#content9 > section").removeClass("on");
        }
                               // content10
        if(scroll >=10*ht && scroll < 11*ht){
                $("#content10 > section").addClass("on");
        }else{ //움직임 취소
                $("#content10 > section").removeClass("on");
        }
        





        //한페이지씩 이동
        $("#container > div").mousewheel(function(event,delta){
            if(delta > 0){
                var prev = $(this).prev().offset().top;
                $("html,body").stop().animate({"scrollTop":prev},800,"linear");
            }else if (delta < 0){
                var next = $(this).next().offset().top;
                $("html,body").stop().animate({"scrollTop":next},800,"linear");
            }
        }); // 마우스 휠
    }); // scroll
});