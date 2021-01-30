const intro = introJs();

intro.setOptions({
    steps:[
        {
            intro: 'Bienvenido a nuestra pagina. Hagamos un tour!'
        },
        {
            element: '#divnt',
            intro: 'Esta es la seccion de noticias, aqui te mantendremos informados de nuevos productos y ofertas.'
        },
        {
            element: '#divpr',
            intro: 'En la seccion de productos podras ver todos los productos que tenemos y puedes comprar.'
        },
        {
            element: '#finder',
            intro: 'Con esta barra de busqueda puedes encontrar productos de acuerdo al nombre.'
        },
        {
            element: '#divcn',
            intro: 'Te compartimos nuestra historia, en esta seccion nos puedes conocer un poco mas.'
        },
        {
            element: '#diven',
            intro: 'Encuentranos! Aqui encontraras un mapa en el que podras ubicar nuestros locales.'
        },
        {
            element: '#divcct',
            intro: 'Si deseas contactarnos, aqui podras hacerlo, envianos un mensaje!'
        },
        {
            element: '#rdsociales',
            intro: "Te dejamos nuestras redes sociales para que estes pendiente de lo que podemos ofrecerte!"
        }
    ]
})

document.getElementById('bt-prin').addEventListener('click',function() {
    intro.start();
})