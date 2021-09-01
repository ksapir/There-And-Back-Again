import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import API from "../utils/API"


export default function TrailFinder() {
    const[trails, setTrails] = useState([])

    useEffect(() => {
      API.allTrails().then(res => {
          console.log(res)
          setTrails(res.data)
      })
    }, [])
  
    return (
        <div>
        <div className="container section center">
   
                    <h2 >Find A Trail Near You</h2>
                    <Form>
                    <input name ="search" placeholder = "Search by City, i.e. Seattle"/>
                    </Form>
                    <button type="button">Search</button>
 
        </div>
        <div className="container center">
        {trails.map((trail) => (
        <div className=" section row">
          <section className="col-sm-12 col-md-6 col-lg-6" key={trail._id}>
            <h2>{ trail.name }</h2>
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
