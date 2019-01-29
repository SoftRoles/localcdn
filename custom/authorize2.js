function authorize(isRequired, failureRedirect, callback){
  var request = new XMLHttpRequest()
  request.open("GET", "/authorization/api/v1/user", true)
  request.onload = function (e) {
    user = JSON.parse(e.target.responseText)
    if (!user.username) {
      if (isRequired) window.location.href = "/login?source="+failureRedirect
      else {
        var request = new XMLHttpRequest()
        request.open("POST", "/authorization/api/v1/login", true)
        request.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
        var json = { username: "guest", password: "guest" }
        request.send(JSON.stringify(json))
        callback({username:"guest", name:"Guest"})
      }
    }
    else callback(user)
  }
  request.onerror = function() {
    console.log(request.status)
  }
  request.send()
}
