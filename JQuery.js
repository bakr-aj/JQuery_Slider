function slider(img){
   
                    var slider = $(img);
                    var arr=[$("#imgr1"),$("#imgr2")];
                    var width =slider.width(),height = slider.height();
                    var info = $("#book_info_right");
                    var info_height =info.height();
                    
                    slider.animate({width:'0',height:'0',opacity:'0'});
                    slider.delay(1000).queue(function (){
                        if (arr[0].attr("style")!=="display: none")
                        {
                            height = arr[1].height()+info_height + 30;
                            arr[0].attr("style","display: none");
                            arr[1].attr("style","");
                          
                        }else{
                            height = arr[0].height()+info_height + 30;
                            arr[1].attr("style","display: none");
                            arr[0].attr("style","");
                            
                        }
                        
                            slider.animate({width:width,height:height,opacity:'100'}).dequeue();
               });
    
}
function slide_interval(){
    interval_r=setInterval("slider('#Slider')",5000);
}