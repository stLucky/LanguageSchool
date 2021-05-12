import L from 'leaflet';

const map = L.map('map')
  .setView({
    lat: 60.939607,
    lng: 76.597853,
  }, 15);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const icon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [50, 70],
  iconAnchor: [25, 70],
});

const markers = [
  {
    lat: 60.939607,
    lng: 76.597853,
    content: '<h2>Главный офис</h1><p>Г. Нижневартовск. МФК Европа-сити, 6 этаж, офис 627</p>',
  },
  {
    lat: 60.938637,
    lng: 76.612603,
    content: '<h2>Дополнительный офис</h1><p>Г. Нижневартовск, Ул. Ханты-Мансийская 41а, на территории Гимназии 1</p>',
  },
  {
    lat: 60.942854,
    lng: 76.597754,
    content: '<h2>Углубленное изучение</h1><p>Г. Нижневартовск, ул. Чапаева 30</p>',
  }
];

markers.forEach((marker) => {
  const pin = L.marker(
    {
      lat: marker.lat,
      lng: marker.lng,
    },
    {
      icon,
    },
  );

  pin
    .addTo(map)
    .bindPopup(marker.content);
});
