import React from 'react'
import data from '/data'
import Card from './Components/Card'
import Footer from './Components/Footer'

const App = () => {
    return(
        <div>
        <div className='card'> 
            <Card
            img={data.img}
            name={data.name} 
            title={data.title}
            website={data.website}
            about={data.about}
            interest={data.interest}
            />
            <Footer />
        </div>
        </div>
    )
}

export default App