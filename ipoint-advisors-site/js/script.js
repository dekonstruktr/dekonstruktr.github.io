const menuList = document.getElementById("menu-list");
        const menuBtn = document.getElementById("menu").addEventListener("click", () => menuList.classList.toggle("navToggle"));


        var text = ["COLLABORATION", "RELIABILITY", "EXPERIENCE","TEAMWORK", "COOPERATION"];
        var counter = 0;
        var elem = document.getElementById("changeText");
        setInterval(change, 3000);
        
        function change() {
            elem.classList.add('hide');
            setTimeout(function () {
                elem.innerHTML = text[counter];
                elem.classList.remove('hide');
                counter++;
                if (counter >= text.length) {
                    counter = 0;
                }
            }, 500);
        }