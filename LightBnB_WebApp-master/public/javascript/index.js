/* eslint-disable camelcase */
/* eslint-disable no-undef */
$(() => {
  getAllListings().then(function (json) {
    propertyListings.addProperties(json.properties);
    views_manager.show('listings');
  });
});