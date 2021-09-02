import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import API from "../utils/API"


export default function TrailFinder() {
    const[trails, setTrails] = useState([])

    const[location, setLocation] = useState({
      location: ""
    })
    // console.log(location)

    const handleChange = (e) => {
      setLocation({...location, [e.target.name]: e.target.value})
    }

    useEffect(() => {
      API.allTrails().then(res => {
          console.log(res)
          setTrails(res.data)
      })
    }, [])

    const handleSubmit = (e) => {
      e.preventDefault()
      API.trailLocation(location.location).then(res => {
        setTrails(res.data)
      
        console.log(res.data)
       
      })
    }
  
    return (
        <div>
        <div className="container section center">
   
                    <h2 >Find A Trail Near You</h2>
                    <Form onSubmit={handleSubmit}>
                    <input name ="location" placeholder = "Search by City or National Park i.e. Seattle " 
                    value={location.location} onChange={handleChange}/>
                     <button type="button">Search</button>
                    </Form>
                   
 
        </div>
        <div className="container center">
        {trails.map((trail) => (
        <div className=" section row" key={trail._id}>
          <section className="col-sm-12 col-md-6 col-lg-6">
            <h2>{ trail.name }</h2>
            <hr/>
            <p >Park: { trail.parkName }</p>
            <p >Distance: { trail.distance }</p>
            <p >City, State: { trail.location}, { trail.state}</p>
            <p >Description: { trail.description }</p>
          </section>
        </div>
        ))}
        </div>
    </div>

    )
}
