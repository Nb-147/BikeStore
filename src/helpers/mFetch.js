const products = [
    {id: '1', name: 'MTB', category: 'BicicletasMTB', price: 'U$S 4300', stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam voluptas, quia dolorem laudantium rem aperiam nihil obcaecati minima quam, dolore dolorum incidunt voluptatibus perspiciatis sunt dolores repellat ad porro laborum', imageUrl: 'https://f.fcdn.app/imgs/1ab3ab/albanes.com.uy/albauy/280c/webp/catalogo/98674_98674_1/800x800/bicicleta-scott-mtb-doble-suspencion-spark-900-rc-world-cup-axs-unica.jpg'},
    {id: '2', name: 'Ruta', category: 'BicicletasRuta', price: 'U$S 5250', stock: 150, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam voluptas, quia dolorem laudantium rem aperiam nihil obcaecati minima quam, dolore dolorum incidunt voluptatibus perspiciatis sunt dolores repellat ad porro laborum', imageUrl: 'https://sparta.cl/media/catalog/product/m/a/madonesl6_22_35177_a_primary.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=550&width=600&canvas=600:550'},
    {id: '3', name: 'Herramientas', category: 'Herramientas', price: 'U$S 50', stock: 500, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam voluptas, quia dolorem laudantium rem aperiam nihil obcaecati minima quam, dolore dolorum incidunt voluptatibus perspiciatis sunt dolores repellat ad porro laborum', imageUrl: 'https://f.fcdn.app/imgs/246184/albanes.com.uy/albauy/4e30/webp/catalogo/923658_923658_1/800x800/kit-de-herramientas-serfas-unica.jpg'},
    {id: '4', name: 'Equipos', category: 'Equipos', price: 'U$S 225', stock: 100, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Aliquam voluptas, quia dolorem laudantium rem aperiam nihil obcaecati minima quam, dolore dolorum incidunt voluptatibus perspiciatis sunt dolores repellat ad porro laborum', imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_651257-MLU71040611974_082023-O.webp'}
]

export const mFetch = (id) => new Promise ((res, rej)=>{
    setTimeout (()=> {
        res(id? products.find(product => product.id === id) : products)
    }, 2000)
})
