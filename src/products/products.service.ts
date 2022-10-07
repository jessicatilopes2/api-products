import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class ProductsService {
  axios: any;

  async findAll() {
    try {
      const response = await axios.get(`${process.env.DUMMY_CONFIG}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async findOne(id: number) {
    try {
      const response = await axios.get(`${process.env.DUMMY_CONFIG}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number) {
    try {
      const response = await axios.put(`${process.env.DUMMY_CONFIG}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      const response = await axios.delete(`${process.env.DUMMY_CONFIG}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
