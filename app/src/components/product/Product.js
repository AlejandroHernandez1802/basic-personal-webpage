import './Product.css';

const Product = ({ title, img, url }) => {
    return (
        <div className='p'>
            {/* <div className='p-title-container'>
                <h1 className='p-title'>{title}</h1>
            </div> */}
            <div className='p-browser'>
                <div className='p-circle' style={{ backgroundColor: "yellow" }}></div>
                <div className='p-circle' style={{ backgroundColor: "blue" }}></div>
                <div className='p-circle' style={{ backgroundColor: "red" }}></div>
            </div>
            <a href={url}>
                <img className='p-img' src={img} alt="..." />
            </a>
        </div>
    )
}

export default Product;