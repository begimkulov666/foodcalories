import React, {useState} from 'react'
import Alert from "./alert";

const Search = ({getNutrition, message}) => {
    const [products, setProducts] = useState('')
    const handleClick = ()=>{
        getNutrition(products)
        setProducts('')
    }
    return (
        <div className='container text-center'>
            <div className='row'>
                <div className="col-md-4 offset-md-4 form m-auto text-center">
                    <input className='form-control p-3'
                               onKeyDown={e => e.key === 'Enter' ? handleClick() : null}
                               type="text" placeholder='Search...'
                               onChange={el => setProducts(el.target.value)}
                               value={products}
                    />
                    {message && <Alert text={message}/>}
                    <button className='btn btn-primary mt-3'
                            onClick={handleClick}>GET NUTRITION
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Search;