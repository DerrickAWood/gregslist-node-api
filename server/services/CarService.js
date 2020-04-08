import {dbContext} from "../db/DbContext"


class CarService{

  async create(body){
    let car = await dbContext.Cars.create(body)
    return car
  }
  async getAll(){
    let cars = dbContext.Cars.find()
      return cars

  }
}

export const carService = new CarService()