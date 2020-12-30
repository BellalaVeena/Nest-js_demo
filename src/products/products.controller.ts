import {Controller,Post,Body,Get,Param,Put, Delete,Res, HttpStatus} from "@nestjs/common";
import { ProductModule } from "./products.module";

import { ProductService } from "./products.service";

@Controller("products")
export class ProductsController{
        constructor( private readonly productService:ProductService){}

    @Post()
    addProducts(@Res() res,@Body("title") productTitle:string,
                @Body("name") productName:string,
                @Body("price") productPrice:number
    ): any {
          const addedproduct=this.productService.insertProduct(productTitle,productName,productPrice);
          return res.status(HttpStatus.OK).json({
          status:HttpStatus.OK,
          message:"product added succesfully"
         })
        
    }
    @Get()
    getAllProducts():any{
         const allproducts=this.productService.showProduct();
         console.log(allproducts)
         return allproducts;


    }

    @Get(':id')
    getProduct(@Param('id') id:string):any{
        return this.productService.getSingleProduct(id);

    }
    @Put(':id')
    updateProduct(@Res() res,@Param('id') id:string,
                    @Body() ProductModule:ProductModule)
                    {
         this.productService.updateProduct(id,ProductModule);
         return res.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
             message:'product updated sucessfully'
         })

    }
    @Delete(':id')
    deleteProduct(@Res() res,@Param('id') id:string){
         this.productService.deleteProduct(id);

        return res.status(HttpStatus.OK).json({
            status:HttpStatus.OK,
            message:'product deleted sucessfully'
        })
    }

    
}