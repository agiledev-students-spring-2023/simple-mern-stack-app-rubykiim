import './AboutUs.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const AboutUs = props => {
    const [images, setImages] = useState([])
    const [texts, setTexts] = useState([])
    const [error, setError] = useState('')
    const [loaded, setLoaded] = useState(false)

    const fetchContent = () => {
        axios
            .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
            .then(response => {
                // axios bundles up all response data in response.data property
                const myText = response.data.text
                const myImg = response.data.img
                setTexts(myText)
                setImages(myImg)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                // the response has been received, so remove the loading icon
                setLoaded(true)
            })

    }
    
    useEffect(() => {
        fetchContent()

        const intervalHandle = setInterval(() => {
          fetchContent()
        }, 5000)
    
        return e => {
          clearInterval(intervalHandle)
        }
      }, []) 
      
      return (
        <>
        {/* <div className='me'> */}
              <p className='me'><br></br>{texts}<br></br><br></br></p>
              
            <img src={images} width="20%" alt="loading"/>
        {/* </div> */}
        </>
    )
}

export default AboutUs