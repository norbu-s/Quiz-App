var q = ["Inside which HTML element do we put the JavaScript?<br /><br />", "What is the correct JavaScript syntax to change the content of the HTML element below?<br /><br />", "What does JS stand for?<br /><br />", "Where is the correct place to insert a JavaScript?<br /><br />", "What is the correct syntax for referring to an external script called 'xxx.js'?<br /><br />"];
        var a1 = ["<button class=buttons002 onclick=q1c()>javascript</button>",
                  "<button class=buttons002 onclick=q2c()>document.getElement('p').innerHTML ='Hello World!'</button>",
                  "<button class=buttons002 onclick=q3c()>6</button>",
                  "<button class=buttons002 onclick=q4i()>13</button>",
                  "<button class=buttons002 onclick=q5i()>6</button>"];

        var a2 = ["<button class=buttons002 onclick=q1i()>script</button>",
                  "<button class=buttons002 onclick=q2i()>7</button>",
                  "<button class=buttons002 onclick=q3i()>2</button>",
                  "<button class=buttons002 onclick=q4c()>8</button>",
                  "<button class=buttons002 onclick=q5c()>10</button>"];

        var a3 = ["<button class=buttons002 onclick=q1i()>js</button>",
                  "<button class=buttons002 onclick=q2i()>6</button>",
                  "<button class=buttons002 onclick=q3i()>9</button>",
                  "<button class=buttons002 onclick=q4i()>9</button>",
                  "<button class=buttons002 onclick=q5i()>7</button>"];

        var a4 = ["<button class=buttons002 onclick=q1i()>scripting</button>",
                  "<button class=buttons002 onclick=q2i()>2</button>",
                  "<button class=buttons002 onclick=q3i()>14</button>",
                  "<button class=buttons002 onclick=q4i()>1</button>",
                  "<button class=buttons002 onclick=q5i()>2</button>"];

        var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
        var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

        var n = 0;
        n++;
        var s = 0;
        s++;

        function begin001() {
            disappear001.innerHTML = "";
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
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
            score001.innerHTML = s++;
        }

        function q4i() {
            answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
        }

        function new005() {
            question001.innerHTML = q[4];
            option001.innerHTML = a1[4];
            option002.innerHTML = a2[4];
            option003.innerHTML = a3[4];
            option004.innerHTML = a4[4];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q5c() {
            answer001.innerHTML = "<div id=green001>" + c[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
            score001.innerHTML = s++;
        }

        function q5i() {
            answer001.innerHTML = "<div id=red001>" + i[4] + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
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