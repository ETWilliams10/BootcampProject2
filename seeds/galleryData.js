const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Anime',
    starting_date: 'April 20, 2021 07:00:00',
    ending_date: 'June 21, 2021 17:00:00',
  },
  {
    name: 'Landscapes',
    starting_date: 'June 22, 2021 09:00:00',
    ending_date: 'September 22, 2021 22:00:00',
  },
  {
    name: 'Photography',
    starting_date: 'September 23, 2021 08:30:00',
    ending_date: 'December 21, 2021 20:30:00',
  },
  {
    name: 'Potraits',
    starting_date: 'December 22, 2020 11:00:00',
    ending_date: 'March 19, 2021 19:00:00',
  },
];

const seedGallery = async () => await Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;