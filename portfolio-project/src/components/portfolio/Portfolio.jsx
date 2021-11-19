import { useState, useEffect } from 'react'
import './Portfolio.css'
import PortfolioList from './portfolioList/PortfolioList'
import { featuredPortfolio} from './portfolioData'   

export default function Portfolio() {
    const [selected, setSelected] = useState('featured') 
    const [data, setData] = useState([]) 
    const list = [
        {
            id: 'featured',
            title: 'Featured'
        }
    ]
    useEffect(() => {

        switch(selected){
            case 'featured':
                setData(featuredPortfolio)
                break
            default:
                setData(featuredPortfolio)
        }
    }, [selected])
    return (
        <div className='portfolio' id='portfolio'>
            
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => ((
                    <PortfolioList 
                    title={item.title} 
                    id={item.id} 
                    active={selected === item.id} 
                    setSelected={setSelected}/>
                )))}
            </ul>
            <div className="container">
                {data.map(data => (
                <div className="item">
                    <a href={data.link}>
                    <img src={data.img} alt="" />
                    </a>
                    <h3>{data.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
