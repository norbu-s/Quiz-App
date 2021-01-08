var q = ["Q1. Inside which HTML element do we put the JavaScript?<br /><br />", 
        "Q2. JavaScript is a ___ -side programming language.<br /><br />", 
        "Q3. Which of the following will write the message “Hello DataFlair!” in an alert box?<br /><br />", 
        "Q4. How do you find the minimum of x and y using JavaScript?<br /><br />"];
        
        var a1 = ["<button class=buttons002 onclick=q1c()>script</button>",
                  "<button class=buttons002 onclick=q2c()>Both</button>",
                  "<button class=buttons002 onclick=q3c()>alert(“Hello DataFlair!”);</button>",
                  "<button class=buttons002 onclick=q4i()>min(x,y);</button>"];

        var a2 = ["<button class=buttons002 onclick=q1i()>javascript</button>",
                  "<button class=buttons002 onclick=q2i()>Client</button>",
                  "<button class=buttons002 onclick=q3i()>alertBox(“Hello DataFlair!”)</button>",
                  "<button class=buttons002 onclick=q4c()>Math.min(x,y)</button>"];

        var a3 = ["<button class=buttons002 onclick=q1i()>js</button>",
                  "<button class=buttons002 onclick=q2i()>Server</button>",
                  "<button class=buttons002 onclick=q3i()>alertBox(“Hello DataFlair!”)<;</button>",
                  "<button class=buttons002 onclick=q4i()>Math.min(xy)</button>"];

        var a4 = ["<button class=buttons002 onclick=q1i()>scripting</button>",
                  "<button class=buttons002 onclick=q2i()>None</button>",
                  "<button class=buttons002 onclick=q3i()>msgAlert(“Hello DataFlair!”);</button>",
                  "<button class=buttons002 onclick=q4i()>min(xy);</button>"];

        var c = ["Correct", "Correct", "Correct", "Correct", "Correct"];
        var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

        var n = 0;
        n + 1000;
        var s = 0;
        s++;

        function begin001() {
            disappear001.innerHTML = "";
            disappear002.innerHTML = "";
            message001.innerHTML = "";
            question001.innerHTML = q[0];
            option001.innerHTML = a1[0];
            option002.innerHTML = a2[0];
            option003.innerHTML = a3[0];
            option004.innerHTML = a4[0];
            number001.innerHTML = n++;
        }

        function q1c() {
            answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
            score001.innerHTML = s++;
        }

        function q1i() {
            answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
        }

        function new002() {
            question001.innerHTML = q[1];
            option001.innerHTML = a1[1];
            option002.innerHTML = a2[1];
            option003.innerHTML = a3[1];
            option004.innerHTML = a4[1];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q2c() {
            answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
            score001.innerHTML = s++;
        }

        function q2i() {
            answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
        }

        function new003() {
            question001.innerHTML = q[2];
            option001.innerHTML = a1[2];
            option002.innerHTML = a2[2];
            option003.innerHTML = a3[2];
            option004.innerHTML = a4[2];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q3c() {
            answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
            score001.innerHTML = s++;
        }

        function q3i() {
            answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
        }

        function new004() {
            question001.innerHTML = q[3];
            option001.innerHTML = a1[3];
            option002.innerHTML = a2[3];
            option003.innerHTML = a3[3];
            option004.innerHTML = a4[3];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q4c() {
            answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            score001.innerHTML = s++;
        }

        function q4i() {
            answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
            score001.innerHTML = s++;
        }

        function end001() {
            message001.innerHTML = "End of Quiz.";
            question001.innerHTML = "";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
            answer001.innerHTML = "";
        }

        function repeat001() {
            location.reload();
        }
        