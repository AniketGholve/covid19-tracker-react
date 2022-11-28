import React, { useEffect ,useState} from 'react'
import './covid.css'
const Covid=()=>{
    const [data,setData]=useState([]);
    const getCovidData=async()=>{
        try
        {
            const res=await fetch('https://data.covid19india.org/data.json');
            console.log("actualData is");
            const actualData=await res.json();
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData()
    })
    return (
        <div>
        <div class="center">
            <h1 class="live">&#x1F534;Live</h1>
            <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        </div>
            <ul class="cards">
                <li class="background-card1 card-size">
                    <h3><span class="small-font">OUR </span>COUNTRY</h3>
                    <p class="data">INDIA</p>
                </li>
                <li class="background-card2 card-size">
                    <h3><span class="small-font">TOTAL </span>RECOVERED</h3>
                    <p class="data">{data.recovered}</p>
                </li>
                <li class="background-card3 card-size">
                    <h3><span class="small-font">TOTAL </span>CONFIRMED</h3>
                    <p class="data">{data.confirmed}</p>
                </li>
                <li class="break"></li>
                <li class="background-card4 card-size">
                    <h3><span class="small-font">TOTAL </span>DEATHS</h3>
                    <p class="data">{data.deaths}</p>
                </li>
                <li class="background-card5 card-size">
                    <h3><span class="small-font">TOTAL </span>ACTIVE</h3>
                    <p class="data">{data.active}</p>
                </li>
                <li class="background-card6 card-size">
                    <h3><span class="small-font">LAST </span>UPDATED</h3>
                    <p class="data">{data.lastupdatedtime}</p>
                </li>
            </ul>
        </div>
    )
}
export default Covid;