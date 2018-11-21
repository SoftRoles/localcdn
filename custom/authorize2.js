function authorize(isRequired, failureRedirect, callback){
  let request = new XMLHttpRequest()
  request.open("GET", "/user", true)
  request.onload = function () {
    user = JSON.parse(request.responseText)
    if (!user.username) {
      if (isRequired) window.location.href = "/login?source="+failureRedirect
      else {
        let request = new XMLHttpRequest()
        request.open("POST", "/login", true)
        request.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
        let json = { username: "guest", password: "guest" }
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