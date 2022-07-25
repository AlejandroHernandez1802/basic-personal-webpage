import './ProductList.css';
import Product from '../product/Product';
import { products } from '../../data';

const ProductList = () => {
    return(
        <div className='pl'>
            <div className='pl-texts'>
                <h1 className='pl-title'>Products made by me</h1>
                <p className='pl-description'>Along my study years, I've worked in different projects. 
                These are some of them:</p>
            </div>
            <div className='pl-list'>
                {products.map(product => (
                    <Product key={product.id} title={product.title} img={product.img} url={product.url}/> 
                ))}
            </div>
        </div>
    )
}

export default ProductList;