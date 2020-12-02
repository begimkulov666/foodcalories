import React, {useState} from 'react'
import Search from "./search";
import Calories from "./calories";
import axios from 'axios'
import './index.css'

const API_URL = 'https://api.calorieninjas.com/v1/nutrition?query='
const headers = {headers: {'X-Api-Key': 'SUDsfgqcBvJi0xM/au83yA==T8nulwvUA6YoMWbN'}}

function App() {
    const [nutrition, setNutrition] = useState({})
    const [message, setMessage] = useState('')
    const getNutrition = (products) => {
        axios(`${API_URL}${products}`, headers)
            .then(({data}) => {
                if (data.items.length === 0) {
                    setMessage('Такого продукта нет!')
                } else {
                    setNutrition(data)
                    setMessage('')
                }
            })

    }

    return (
        <div>
            <div className="main">
                <h1 className='title text-center'>Get Nutrition Facts Now</h1>
                <h3 className='sub-title text-center'><span>Free </span>nutrition data for <span>100,000+</span> foods
                    and beverages</h3>

                <Search setNutrition={setNutrition} getNutrition={getNutrition} message={message}/>
                <Calories nutrition={nutrition}/>
            </div>
        </div>
    )
}

export default App;
