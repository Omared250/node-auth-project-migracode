module.exports = {
    onSignUp : onSignUp,
    onSingIn : onSingIn
}

async function onSignUp(body) {
    const url = "http://localhost:4000/user/sign-up";
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    };
  
    const result = await fetch(url, requestOptions);
    const data = await result.json();
    console.log(data);
    return data;
  }

async function onSingIn(body) {
  const url = "http://localhost:4000/user/sign-in";
  const requestOptions = {
    method : "POST",
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify(body)
  }

  const result = await fetch(url, requestOptions);
  const data = await result.json();
  console.log(data);
  return data
}
