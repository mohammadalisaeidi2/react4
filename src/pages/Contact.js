import { useLocation } from "react-router-dom"


export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")


  return (
    <div>
        <h2>Hi {name} welcome to Contact page</h2>
        <p>Officia quis proident magna adipisicing esse do adipisicing exercitation magna culpa aliqua.</p>
    </div>
  )
}
