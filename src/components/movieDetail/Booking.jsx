import React, { useState } from 'react'
import {Country,State} from "country-state-city"
import {useNavigate} from "react-router-dom"

const Booking = () => {
    const navigate=useNavigate();
    const [values,setValues]=useState({
        name:"",
        seatCount:"",
        date:"",
        show:"",
        country:"",
        state:"",
        city:"",
        phone:""
    });

    const handleOnChange=(event)=>{
        setValues({
            ...values,[event.target.name]:event.target.value
        });
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("values",JSON.stringify(values))
        console.log(values)
        navigate("/")

    }

  return (
    <section className="shipping">
        <main>
            <h1>Book Your Ticket</h1>
            <form onSubmit={handleSubmit} >
                <div>
                    <label >Name</label>
                    <input onChange={handleOnChange} value={values.name}  type="text" name="name" placeholder="enter house no." />
                </div>
                <div>
                    <label >No. of seats</label>
                    <input onChange={handleOnChange} value={values.seatCount}  name="seatCount" type="number" placeholder="0" />
                </div>
                <div>
                    <label >date</label>
                    <input value={values.date} onChange={handleOnChange}   type="date"  name='date' />
                </div>

                <div>
                    <label >Show</label>
                    <select name='show' value={values.show} onChange={handleOnChange}  >
                        <option value="">show</option>
                        <option value="1">9:00-10:10</option>
                        <option value="2">11:00-12:10</option>
                        <option value="3">13:00-14:10</option>
                        <option value="4">18:00-19:10</option>
                        <option value="5">20:00-21:10</option>
                        <option value="6">22:00-23:10</option>
                        
                    </select>
                </div>
               

                <div>
                    <label >Country</label>
                    <select name='country' value={values.country} onChange={handleOnChange}  >
                        <option value="">Country</option>
                        {
                            Country && Country.getAllCountries().map(i=>(
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <label >State</label>
                    <select name='state' value={values.state} onChange={handleOnChange}  >
                        <option value="">State</option>
                        {
                            State && State.getStatesOfCountry("IN").map(i=>(
                                <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <label>City</label>
                    <input onChange={handleOnChange} value={values.city}  type="text" name='city' placeholder="enter city" />
                </div>
                <div>
                    <label >Phone Number</label>
                    <input onChange={handleOnChange} value={values.phone}  type="text" name='phone' placeholder="enter mobile" />
                </div>
                <button type='submit'>Book Ticket</button>
            </form>
        </main>
    </section>
  )
}

export default Booking