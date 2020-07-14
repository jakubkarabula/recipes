import React from 'react'
import Container from '../components/container'
import PreviewCard from '../components/PreviewCard'

const recipes = [
  { name: 'Sweet Chili Pork Bowls', headline: 'with Bell Pepper & Peanuts', image: 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_300/hellofresh_s3/image/5efb358e43975d50ea6927d2-03092082.jpg', calories: '10 kCal', time: '2h', rating: 2 },
]

const Overview = (props) => (
  <Container>
    {recipes.map(recipe => (
      <PreviewCard 
        name={recipe.name}
        headline={recipe.headline}
        image={recipe.image}
        calories={recipe.calories}
        time={recipe.time}
        rating={recipe.rating}
      /> 
    ))}  
  </Container>
)

export default Overview
