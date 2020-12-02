import React from 'react';

const Calories = ({nutrition, message}) => {
    const getTotal = (consist) => {
        return nutrition.items.reduce((acc, rec) => acc + rec[consist], 0).toFixed(1)
    }
    return (
        <div className='container'>
            {nutrition.items && (
                <div className='row'>
                    <div className="col-md-8 offset-md-2 overflow-scroll">
                        <table className="table bg-light">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Serving Size</th>
                                <th scope="col">Calories</th>
                                <th scope="col">Total Fat</th>
                                <th scope="col">Sugar</th>
                                <th scope="col">Protein</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <th scope="row">total</th>
                                <td>{getTotal('serving_size_g')}</td>
                                <td>{getTotal('calories')}</td>
                                <td>{getTotal('fat_total_g')}</td>
                                <td>{getTotal('sugar_g')}</td>
                                <td>{getTotal('protein_g')}</td>
                            </tr>
                            {
                                nutrition.items.map(el => (
                                        <tr>
                                            <th scope="row">{el.name}</th>
                                            <td>{el.serving_size_g}</td>
                                            <td>{el.calories}</td>
                                            <td>{el.fat_total_g}</td>
                                            <td>{el.sugar_g}</td>
                                            <td>{el.protein_g}</td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>

                        </table>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Calories;