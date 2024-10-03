<script>
        const output = document.getElementById('output');
        const textVariations = [
            "Hello World",                             // 1
            "hello world",                             // 2
            "HELLO WORLD",                             // 3
            "Hello " + "World",                       // 4
            "Hello".concat(" ", "World"),            // 5
            "Hello World!".repeat(2),                 // 6
            "H" + "e" + "l" + "l" + "o" + " " + "W" + "o" + "r" + "l" + "d", // 7
            "Hello World".split('').reverse().join(''), // 8
            "<u>Hello World</u>",                     // 9 - HTML (underline)
            "Hello World".toUpperCase()               // 10
        ];

        // Variando a forma de exibir
        textVariations.forEach((text, index) => {
            const div = document.createElement('div');
            div.className = 'hello-world';

            switch (index) {
                case 0:
                    div.textContent = text; // Normal
                    break;
                case 1:
                    div.classList.add('lowercase');
                    div.textContent = text; // Lowercase
                    break;
                case 2:
                    div.classList.add('uppercase');
                    div.textContent = text; // Uppercase
                    break;
                case 3:
                    div.classList.add('italic');
                    div.textContent = text; // Concatenated
                    break;
                case 4:
                    div.classList.add('bold');
                    div.textContent = text; // Concat with space
                    break;
                case 5:
                    div.classList.add('highlight');
                    div.textContent = text; // Repeat
                    break;
                case 6:
                    div.classList.add('red');
                    div.textContent = text; // Reverse
                    break;
                case 7:
                    div.classList.add('green');
                    div.innerHTML = text; // HTML underline
                    break;
                case 8:
                    div.classList.add('blue');
                    div.textContent = text; // Uppercase
                    break;
                case 9:
                    div.classList.add('underline');
                    div.innerHTML = text; // HTML underline
                    break;
                default:
                    break;
            }

            output.appendChild(div);
        });
    </script>