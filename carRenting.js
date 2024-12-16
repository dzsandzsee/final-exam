function carRenting(cars, distance) {
  const goodCars = cars.filter(car => {
    const maxDistance = (car.fuelAmount / car.avgConsumption) * 100
    return maxDistance >= distance
  })
  if (goodCars.length > 0) { 
    return goodCars.map(car => car.type)
  } else {
    return null
  }
      
    
  
}

module.exports = carRenting