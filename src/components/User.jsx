import { useState, useEffect } from "react"

export default function UserCard({name, age, location}) {
  const [user, setUser] = useState("")
  const [error, setError] = useState()
  console.log("rendering")

  useEffect(() => {
    console.log("firing our useEffect")
    setError() // Will set our error state back to undefined
    fetch("https://randomuser.me/api")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setUser(data.results[0])
    })
    .catch((reason) => {
      let strReason = String(reason)
      setError(strReason)
    })
  }, [error]) // Will only refire effect if the error state is changed

  return (
    <div>
      {!error ?
        <div>
          {user ?
            <>
              <h2>{user.name.first} {user.name.last}</h2>
              <h3>{user.registered.age}</h3>
              <h4>{user.location.city}</h4>
            </>
            :
            <p>Loading...</p>
          }</div>
        :
        <div>
          <p>An error has occured: {error}</p>
        </div>
      }
    </div>
    )
}