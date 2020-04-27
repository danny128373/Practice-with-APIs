fetch("https://reqres.in/api/users?page=2")
  .then(users => users.json())
  .then(users => {
    debugger;
    for (let i = 0; i < users.data.length; i++) {
      console.log(users.data[i].first_name)
    }

  })
