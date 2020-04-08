import express from 'express'
import BaseController from "../utils/BaseController"
import {carService } from "../services/CarService"
export class CarsController extends BaseController {
  
  constructor(){
    super('/api/cars')
    this.router
      .get('', this.getAll)
      .post('', this.create)
  }

  async getAll(req,res,next) {
    try{
      let cars = await carService.getAll()
      res.send({data: cars, message: "got cars"})
    } catch(error){
      next(error)
    }
  }

  async create(req,res,next){
    try {
      let car = await carService.create(req.body)
      res.send({data: car, message: "car created"})
    } catch (error) {
      next(error)
    }
  }
}