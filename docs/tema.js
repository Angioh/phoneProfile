const colorSwitch = document.querySelector('#tema input[type="checkbox"]');
            function cambiaTema(ev){
                if(ev.target.checked){
                    document.documentElement.setAttribute('tema', 'dark');
                } else {
                    document.documentElement.setAttribute('tema', 'light');
                }
            }
            colorSwitch.addEventListener('change', cambiaTema);