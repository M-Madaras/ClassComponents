import React, {useState,useEffect} from "react"

export default function
FunctionalComponents ({passCount}){
   const [count,setCount] = useState(passCount)
   const [coffee,setCoffee] = useState([])


   useEffect(() => {

    let url = "https://api.sampleapis.com/coffee/hot";
    fetch(url)
        .then(res => res.json())
        .then(data => {
         // do something with the data
         setCoffee(data)
        })

   },[])


   return (
    <>
        <h1>This is a Functional Component {count}</h1>
        <button onClick={() => {
            setCount(count+1)
        }}>Add One</button>
        {/* map through coffee */}
        {coffee.map(
            coffee =>
                <h1 key={coffee.id}>{coffee.title}</h1>
        )}
    </>
)
}

// export default FunctionalComponents