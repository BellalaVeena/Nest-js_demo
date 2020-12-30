import { Injectable } from  "@nestjs/common";
import { Product } from "./interfaces/product.interface";
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose';
import { title } from "process";


@Injectable()
export class ProductService{
  private products:Product[]=[];

  constructor(
    @InjectModel('Product') private readonly productModel: Model< Product >){}

  async insertProduct(name:string,title:string,price:number){
     
      const newProduct=new this.productModel({name:name,title:title,price:price});
      const result=await newProduct.save();
      console.log(result)
      return result;
        

  }
  async showProduct(){
      const allprod=  await this.productModel.find({},{title:0});
      const totalProducts= await this.productModel.count();
      return  {total_products:totalProducts,product_list:allprod};
}
    
  async getSingleProduct(id){
      
      const product= await  this.productModel.findById(id);
    
      return product;
  }

 async updateProduct(id,productModel){
    const updatedProduct= await  this.productModel.findByIdAndUpdate(id,productModel);
    return updatedProduct;
  
  }
  deleteProduct(id){
    const deletedProduct=this.productModel.findByIdAndDelete(id);
    return deletedProduct;
  }



}