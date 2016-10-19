
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

                                        function change(elem){
                                          var color = window.getComputedStyle(elem, null).getPropertyValue("background-color");
                                            var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(color);
                                                var r = 255-rgb[1],
                                                        g = 255-rgb[2],
                                                                b = 255-rgb[3];
                                                                  var col = "rgb(" + r + "," + g + "," + b + ")";
                                                                    document.body.style.color = col;
                                                                      document.body.style.backgroundColor = color;
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
                                                                                                    var currID = elem.id;
                                                                                                      
                                                                                                        var color = window.getComputedStyle(elem, null).getPropertyValue("background-color");
                                                                                                          var rgb = /rgb\((\d+), (\d+), (\d+)\)/.exec(color);
                                                                                                            var r = parseInt(rgb[1]);
                                                                                                              var g = parseInt(rgb[2]);
                                                                                                                var b = parseInt(rgb[3]);
                                                                                                                  var countR = 0;
                                                                                                                    var countG = 0;
                                                                                                                      var countB = 0;
                                                                                                                        
                                                                                                                          if(currID == "r"){countR = r+1;}
                                                                                                                            if(currID == "g"){countG = g+1;}
                                                                                                                              if(currID == "b"){countB = b+1;}

                                                                                                                                
                                                                                                                                  if(delta < 0){
                                                                                                                                    if(r != 0){r = r - 1;}
                                                                                                                                      if(g != 0){g = g - 1;}
                                                                                                                                        if(b != 0){b = b - 1;}
                                                                                                                                          }
                                                                                                                                            
                                                                                                                                              
                                                                                                                                                
                                                                                                                                                    if(delta > 0){
                                                                                                                                                      if((r>0 && r<255)||(countR == 1)){r = r + 1;}
                                                                                                                                                        if((g>0 && g<255)||(countG == 1)){g = g + 1;}
                                                                                                                                                          if((b>0 && b<255)||(countB == 1)){b = b + 1;}
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
                                                                                                                                                                                                                        
