import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import axios from 'axios'
import Review from './Review'

const DestinationDetails = (props) => {
  const [details, setDetails] = useState('')
  const [destinationReviews, setDestinationReviews] = useState([]) 
  
  let { id } = useParams()

  const getAllReviews = async () => {
    const response = await axios.get(
      `${BASE_URL}/reviewRouter/reviews`
    )
    
    let filterReviews = response.data.reviews.filter(review => review.destination === id)
    setDestinationReviews(filterReviews)
  }
  useEffect(() => {
    const getDetails = props.destinations.find(destination => destination._id === id)
    setDetails(getDetails)
    getAllReviews()

  }, [])
  
  console.log(destinationReviews)
  
  return details ? (
    <div className='details'>
      
      <div>
        <img src={details.imageOne} alt='' />
        <h2>Name: {details.name}</h2><h3>Location: {details.location}
        </h3>
        <ul><li>Languages: {details.languages}</li> 
        <li>Currency: {details.currency}</li>
        <li>Travel Warning: {details.travelWarning}</li>
        <li></li></ul>
      </div>
     <div>
      {destinationReviews.map((review) => (
        <Review review={review} />
      ))}
     </div>
    </div>
  ) : null
}



export default DestinationDetails