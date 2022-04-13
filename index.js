console.log("Your index.js file is loaded correctly!");

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})