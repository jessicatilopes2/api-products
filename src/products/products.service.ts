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

  /*update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  

  remove(id: number) {
   return `This action removes a #${id} product`;
  }

*/
}
