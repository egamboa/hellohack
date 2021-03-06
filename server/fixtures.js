if (Locations.find().count() === 0) {
  Locations.insert({
    hoodCase: '1',
    name: 'Curridabat, San Jose'
  });

  Locations.insert({
    hoodCase: '2',
    name: 'Escazú, San Jose'
  });

  Locations.insert({
    hoodCase: '3',
    name: 'Tres Rios, Cartago'
  });

  Locations.insert({
    hoodCase: '4',
    name: 'San Pedro, San Jose'
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
    reviewCount: 71,
    hoodCase: 'caso1',
    img: 'http://www.fotopaises.com/Fotos-Paises/t500/2007/2/18/3310_1171876869.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/happy.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Escazú, San José (Condominio Cerro Alto)',
    description: 'Distrito Cuatro (Starbucks, Maradentro, Matsuri, El Argentino, Auto Mercado, Práctico) Pescatore, La Fabbrica, Crossfit Escazú, Crossfit 506',
    provice: 'San José',
    canton: 'Escazú',
    reviewCount: 69,
    hoodCase: 'caso2',
    img: 'http://agenteencostarica.com/wp-content/uploads/2014/09/IMG_7305.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/happy.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Tres Ríos',
    description: 'Terramall, PriceSmart, Saint Gregory, Más por Menos, Parque de Tres Ríos, Farmacia Tres Ríos, Banco Nacional, Vetnet Veterinaria',
    provice: 'Cartago',
    canton: 'Tres Ríos',
    reviewCount: 13,
    hoodCase: 'caso3',
    img: 'http://static.panoramio.com/photos/large/38314980.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/sad.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'San Pedro',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Montes de Oca',
    reviewCount: 28,
    hoodCase: 'caso4',
    img: 'http://upload.wikimedia.org/wikipedia/commons/c/cf/Parque_JFK.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/neutral.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Calle Blancos',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Goicoechea',
    reviewCount: 51,
    hoodCase: 'none',
    img: 'http://images.quebarato.co.cr/T440x/casa+calle+blancos+1+tibas+san+jose+costa+rica__7209CA_1.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/happy.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'San Rafael Arriba',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Desamparados',
    reviewCount: 10,
    hoodCase: 'none',
    img: 'http://static.panoramio.com/photos/large/18800024.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/neutral.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Carmiol',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Sabanilla',
    reviewCount: 15,
    hoodCase: 'none',
    img: 'http://upload.wikimedia.org/wikipedia/commons/c/cf/Parque_JFK.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/sad.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Barrio Escalante',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'San José',
    reviewCount: 28,
    hoodCase: 'none',
    img: 'http://upload.wikimedia.org/wikipedia/commons/c/cf/Parque_JFK.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/happy.png',
    graphImg: ''
  });

  Hoods.insert({
    title: 'Guadalupe',
    description: 'Outlet Mall, UCR, paradas de bus, Mall San Pedro, Librería Lehmann, Burger King, Auto Mercado, Más por Menos',
    provice: 'San José',
    canton: 'Guadalupe',
    reviewCount: 30,
    hoodCase: 'none',
    img: 'http://www.fotopaises.com/Fotos-Paises/t500/2009/4/13/5874_1239593183.jpg',
    mapLargeImg: '/img/maps/mapLargeAlerts.jpg',
    mapSmallImg: '/img/maps/mapSmallAlerts.jpg',
    smile: '/img/icons/sad.png',
    graphImg: ''
  });
}

if (Meteor.users.find({}).count() === 0 ) {
  Accounts.createUser({
      username: 'test1',
      password: 'testing'
  });
}

if(Reviews.find().count() == 0){
  var case1 = Hoods.find({hoodCase:'caso1'}, {limit: 1}).fetch()[0];
  var case2 = Hoods.find({hoodCase:'caso2'}, {limit: 1}).fetch()[0];
  var case3 = Hoods.find({hoodCase:'caso3'}, {limit: 1}).fetch()[0];
  var case4 = Hoods.find({hoodCase:'caso4'}, {limit: 1}).fetch()[0];

  var theUser = Meteor.users.findOne({username: 'test1'});
  Reviews.insert({
    userId: theUser._id,
    hoodId: case1._id,
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    author: theUser.username,
    submitted: new Date(),
    safety: 1,
    price: 3
  });

  Reviews.insert({
    userId: theUser._id,
    hoodId: case2._id,
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    author: theUser.username,
    submitted: new Date(),
    safety: 3,
    price: 3
  });

  Reviews.insert({
    userId: theUser._id,
    hoodId: case3._id,
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    author: theUser.username,
    submitted: new Date(),
    safety: 3,
    price: 2
  });

  Reviews.insert({
    userId: theUser._id,
    hoodId: case4._id,
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    author: theUser.username,
    submitted: new Date(),
    safety: 2,
    price: 1
  });
}
