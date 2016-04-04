var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://jimu.com/User/Login')
  .type('#username', 'songmouxia')
  .type('#password','15115272687')
  .click('#act_login')
  .wait()
  .evaluate(function () {
    return document.querySelector('form').action
  })
  .end()
 .then(function(result){
  console.log(result);
 })