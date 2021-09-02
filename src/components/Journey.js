import React, { useState, useEffect } from "react";

import API from "../utils/API";

export default function LotrBreakpoints() {
  const [journey, setJourney] = useState([]);

  useEffect(() => {
    API.allLotr().then((res) => {
      console.log(res);
      setJourney(res.data);
    });
  }, []);

  return (
    <div className="container center">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4 center">
     
            <button  id="lotrBtn" value="journey">
              {" "}
              <img
                src={`https://i.postimg.cc/2Smk0q6L/51h5k-RXyip-L-AC-SX466.jpg`}
                alt="LOTR Journey Card"
              />{" "}
            </button>
            <h3>Lord of the Rings</h3>

            <div>
              <button>
                {" "}
                <img
                  src={`https://i.postimg.cc/sfqCNMnD/91-T5b-Tv-HRc-L-AC.jpg`}
                  alt="Journey Card"
                />{" "}
              </button>
              <h3>The Hobbit (coming soon)</h3>
            </div>

            <div>
              <button>
                {" "}
                <img
                  src={`https://i.postimg.cc/hPZsrmMp/68004cf9767ee6787c2e7dad7cb1f43e.jpg`}
                  alt="Journey Card"
                />{" "}
              </button>
              <h3>
                Game of Thrones - Winterfell to Kings Landing (coming soon)
              </h3>
            </div>

            <div>
              <button>
                {" "}
                <img
                  src={`https://i.postimg.cc/T17Vt8jp/d566854c23033e5614aa2be7831e127a.png`}
                  alt="Journey Card"
                />{" "}
              </button>
              <h3>Game of Thrones - Winterfell to the Wall (coming soon)</h3>
            </div>
        
        </div>
      </div>

      <div className="container center">
        {journey.map((journey) => (
          <div className=" section row">
            <section className="col-sm-12 col-md-6 col-lg-6" key={journey._id}>
              <h2>{journey.name}</h2>
              <p>Distance: {journey.distance}</p>
              <p> {journey.description}, </p>
              {/* <div>{journey.url} </div> */}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
