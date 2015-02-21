// Fixture data 
if (Hoods.find().count() === 0) {
  var now = new Date().getTime();
  
  Hoods.insert({
    title: 'Barrio',
    coordinates: {
      lat: 9.929715,
      long: -84.038039,
    },
    description: 'Description',
    provice: 'San José',
    canton: 'Curridabat',
    reviewCount: 0
  });
}

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