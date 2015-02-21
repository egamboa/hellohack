if (Locations.find().count() === 0) {
  Locations.insert({
    hoodCase: '1',
    name: 'Curridabat, San José'
  });

  Locations.insert({
    hoodCase: '2',
    name: 'Escazú, San José'
  });
}
// Fixture data 
if (Hoods.find().count() === 0) {
  var now = new Date().getTime();
  
  Hoods.insert({
    title: 'Curridabat, San José',
    description: 'Parque para Perros, U Fidélitas, U Latina, EPA, Plaza del sol, Colegio Internacional SEK, Mc Donald\'s, Plaza Cristal, Plaza Freses, Puro MTB',
    provice: 'San José',
    canton: 'Curridabat',
    reviewCount: 0,
    case: 'caso1',
    img: 'http://www.fotopaises.com/Fotos-Paises/t500/2007/2/18/3310_1171876869.jpg',
    mapImg: '',
    graphImg: ''
  });

  var case1 = Hoods.insert({
    title: 'Escazú, San José (Condominio Cerro Alto)',
    description: 'Distrito Cuatro (Starbucks, Maradentro, Matsuri, El Argentino, Auto Mercado, Práctico) Pescatore, La Fabbrica, Crossfit Escazú, Crossfit 506',
    provice: 'San José',
    canton: 'Escazú',
    reviewCount: 0,
    case: 'caso2',
    img: 'http://agenteencostarica.com/wp-content/uploads/2014/09/IMG_7305.jpg',
    mapImg: '',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Tres Ríos',
    description: 'Terramall, PriceSmart, Saint Gregory, Más por Menos, Parque de Tres Ríos, Farmacia Tres Ríos, Banco Nacional, Vetnet Veterinaria',
    provice: 'Cartago',
    canton: 'Tres Ríos',
    reviewCount: 0,
    case: 'caso3',
    img: 'http://static.panoramio.com/photos/large/38314980.jpg',
    mapImg: '',
    graphImg: ''
  });

  Hoods.insert({
    title: 'San Pedro',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Montes de Oca',
    reviewCount: 0,
    case: 'caso4',
    img: 'http://upload.wikimedia.org/wikipedia/commons/c/cf/Parque_JFK.jpg',
    mapImg: '',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Calle Blancos',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Goicoechea',
    reviewCount: 0,
    case: 'none',
    img: 'http://images.quebarato.co.cr/T440x/casa+calle+blancos+1+tibas+san+jose+costa+rica__7209CA_1.jpg',
    mapImg: '',
    graphImg: ''
  });

  Hoods.insert({
    title: 'San Rafael Arriba',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Desamparados',
    reviewCount: 0,
    case: 'none',
    img: 'http://static.panoramio.com/photos/large/18800024.jpg',
    mapImg: '',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Carmiol',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Sabanilla',
    reviewCount: 0,
    case: 'none',
    img: 'http://upload.wikimedia.org/wikipedia/commons/c/cf/Parque_JFK.jpg',
    mapImg: '',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Barrio Escalante',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'San José',
    reviewCount: 0,
    case: 'none',
    img: 'http://upload.wikimedia.org/wikipedia/commons/c/cf/Parque_JFK.jpg',
    mapImg: '',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Guadalupe',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Guadalupe',
    reviewCount: 0,
    case: 'none',
    img: 'http://www.fotopaises.com/Fotos-Paises/t500/2009/4/13/5874_1239593183.jpg',
    mapImg: '',
    graphImg: ''
  });

}