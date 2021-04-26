const { regions, provinces, cities, barangays } = require('select-philippines-address');

regions().then((region) => console.log(region));
