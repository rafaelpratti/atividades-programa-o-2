    <script>
        let hprimeiro = document.querySelector('h1')
        if (hprimeiro == null) {
            hprimeiro = document.querySelector('h2','h3','h4','h5','h6')
            console.log(hprimeiro)
        }
        let botaodiminui = document.createElement('button')
        let botaoaumenta = document.createElement('button')

        botaodiminui.id = 'btn-Diminui'
        botaoaumenta.id = 'btn-Aumenta'

        botaodiminui.classList = 'btn-Diminui'
        botaoaumenta.classList = 'btn-Aumenta'

        botaodiminui.innerHTML = '-'
        botaoaumenta.innerHTML = '+'
        hprimeiro.appendChild(botaoaumenta)
        hprimeiro.insertBefore(botaodiminui,botaoaumenta)

        
    </script>

    <script>
        let aumenta = 70;
        const btnaumenta = document.querySelector('#btn-Aumenta')
        btnaumenta.addEventListener('click', a)

        function a() {
            if (aumenta < 200) {
            aumenta += 10
            hprimeiro.style.fontSize = `${aumenta}px`
            console.log(aumenta)
            }
        }
        
        const btndiminui = document.querySelector('#btn-Diminui')
        btndiminui.addEventListener('click', d)
        
        function d() {
            if (aumenta > 10) {
            aumenta -= 10
            hprimeiro.style.fontSize = `${aumenta}px`
            console.log(aumenta)
        }
        }
    </script>
