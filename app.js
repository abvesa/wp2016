function invert(elem) {
  var color = window.getComputedStyle(elem, null).getPropertyValue("background-color");
    var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(color);
        var r = 255-rgb[1],
                g = 255-rgb[2],
                        b = 255-rgb[3];
                            var col = "rgb(" + r + "," + g + "," + b + ")";
                                elem.style.backgroundColor = col; 
                                  
                                    var show = col.toString();
                                      document.getElementById("write").innerHTML = show;
                                        
                                        }


                                        function random(elem){
                                          var r = Math.floor(Math.random() * 256);
                                              var g = Math.floor(Math.random() * 256);
                                                  var b = Math.floor(Math.random() * 256);
                                                    var col = "rgb(" + r + "," + g + "," + b + ")";
                                                        elem.style.backgroundColor = col; 
                                                          
                                                            var show = col.toString();
                                                              document.getElementById("write").innerHTML = show;
                                                              }



                                                              function adjust(elem){
                                                                var evt=window.event || elem ;//equalize event object
                                                                    var delta=evt.detail? evt.detail*(-120) : evt.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta
                                                                      document.getElementById("wheelvalue").innerHTML=delta; //delta returns +120 when wheel is scrolled up, -120 when down
                                                                        
                                                                          var color = window.getComputedStyle(elem, null).getPropertyValue("background-color");
                                                                            var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(color);
                                                                              var r = 0;
                                                                                var g = 0;
                                                                                  var b = 0;
                                                                                    
                                                                                      if(delta < 0){
                                                                                        if(rgb[1] != 0){r = rgb[1] - 1;}
                                                                                          if(rgb[2] != 0){g = rgb[2] - 1;}
                                                                                            if(rgb[3] != 0){b = rgb[3] - 1;}
                                                                                              }
                                                                                                
                                                                                                    if(delta > 0){
                                                                                                      if(rgb[1] != 0){r = rgb[1] + 1;}
                                                                                                        if(rgb[2] != 0){g = rgb[2] + 1;}
                                                                                                          if(rgb[3] != 0){b = rgb[3] + 1;}
                                                                                                            }
                                                                                                              
                                                                                                                
                                                                                                                  var col = "rgb(" + r + "," + g + "," + b + ")"; 
                                                                                                                    elem.style.backgroundColor = col; 
                                                                                                                      var show = col.toString();
                                                                                                                        
                                                                                                                          if(rgb[1] != 0){document.getElementById("writeR").innerHTML = show;}
                                                                                                                            if(rgb[2] != 0){document.getElementById("writeG").innerHTML = show;}
                                                                                                                              if(rgb[3] != 0){document.getElementById("writeB").innerHTML = show;}  
                                                                                                                                
                                                                                                                                  combine();
                                                                                                                                  }

                                                                                                                                  function combine(){
                                                                                                                                      var getr = document.getElementById("r");
                                                                                                                                        var rcolor = window.getComputedStyle(getr, null).getPropertyValue("background-color");
                                                                                                                                          var r = /rgb\((\d+), (\d+), (\d+)\)/.exec(rcolor);
                                                                                                                                            
                                                                                                                                              var getg = document.getElementById("g");
                                                                                                                                                var gcolor = window.getComputedStyle(getg, null).getPropertyValue("background-color");
                                                                                                                                                  var g = /rgb\((\d+), (\d+), (\d+)\)/.exec(gcolor);
                                                                                                                                                    
                                                                                                                                                      var getb = document.getElementById("b");
                                                                                                                                                        var bcolor = window.getComputedStyle(getb, null).getPropertyValue("background-color");
                                                                                                                                                          var b = /rgb\((\d+), (\d+), (\d+)\)/.exec(bcolor);

                                                                                                                                                            var col = "rgb(" + r[1] + "," +  g[2] + "," + b[3] + ")"; 
                                                                                                                                                              document.getElementById("rgb").style.backgroundColor = col; 
                                                                                                                                                              }



                                                                                                                                                              var mousewheelevt=(/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
                                                                                                                                                               
                                                                                                                                                               if (document.attachEvent) //if IE (and Opera depending on user setting)
                                                                                                                                                                   document.attachEvent("on"+mousewheelevt, adjustR)
                                                                                                                                                                   else if (document.addEventListener) //WC3 browsers
                                                                                                                                                                       document.addEventListener(mousewheelevt, adjustR, false)



