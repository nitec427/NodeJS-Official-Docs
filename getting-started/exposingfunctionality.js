// Two ways to do so

// However in short require exposes us to use module.exports object. So it is better to assign it like the following

module.exports = {
  brand: "Tesla",
  producer: "Elon",
  year: "2019",
};

// not like this

exports.car = {
  brand: "Hundai",
  country: "Japan",
  year: "2022",
};
