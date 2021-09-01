import React, {useState, useEffect} from 'react';
import TrailList from '../components/TrailList'
import { Form } from 'react-bootstrap';


export default function TrailFinder() {
    const[trails, setTrails] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/api/trails')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setTrails(data)
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
            <TrailList trails={trails} title="All Trails!"/>}
        </div>
    </div>

    )
}
