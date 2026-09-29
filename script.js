const hacks = {
    games: [
        {
            name: "Kahoot Auto-Answer",
            desc: "Script que autofill respuestas correctas",
            link: "https://github.com/example/kahoot-hack"
        },
        {
            name: "Quizizz Bypass",
            desc: "Salta preguntas sin contestar",
            link: "https://github.com/example/quizizz-hack"
        },
        {
            name: "Blooket Exploit",
            desc: "Genera puntos infinitos",
            link: "https://github.com/example/blooket-hack"
        }
    ],
    ias: [
        {
            name: "ChatGPT Free",
            desc: "Acceso a ChatGPT sin pagar",
            link: "https://chat.openai.com"
        },
        {
            name: "Claude",
            desc: "IA poderosa, sin limite mensual gratis",
            link: "https://claude.ai"
        },
        {
            name: "Gemini",
            desc: "IA de Google, totalmente gratis",
            link: "https://gemini.google.com"
        }
    ],
    calculators: [
        {
            name: "Desmos Graphing",
            desc: "Calculadora gráfica sin límites",
            link: "https://desmos.com"
        },
        {
            name: "Wolfram Alpha",
            desc: "Resuelve cualquier ecuación",
            link: "https://www.wolframalpha.com"
        },
        {
            name: "GeoGebra",
            desc: "Geometría y cálculo interactivo",
            link: "https://www.geogebra.org"
        }
    ],
    general: [
        {
            name: "Browser Extensions",
            desc: "Extensiones para navegador que ayudan",
            link: "https://github.com"
        },
        {
            name: "Métodos Clásicos",
            desc: "Trucos que siempre funcionan",
            link: "https://github.com"
        }
    ]
};

function showCategory(category) {
    const content = document.getElementById('content');
    const items = hacks[category];
    
    if (!items) {
        content.innerHTML = '<p class="loading">Categoría no encontrada</p>';
        return;
    }
    
    content.innerHTML = '';
    items.forEach(hack => {
        const div = document.createElement('div');
        div.className = 'hack-item';
        div.innerHTML = `
            <h4>${hack.name}</h4>
            <p>${hack.desc}</p>
            <a href="${hack.link}" target="_blank">Ver</a>
        `;
        content.appendChild(div);
    });
}
