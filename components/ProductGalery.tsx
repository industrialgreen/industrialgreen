import { IProduct } from '@/pages/products'
import Link from 'next/link'
import Image from 'next/image'

type IProps = {
    products: IProduct[]
}

const ProductGalery = ({products} : IProps) => {
  return (
    <div className='product-galery-container'>
        {products.map(product => (
            <Link href={`/products/${product.id}`} key={product.id}>
                <Image width={150} height={150} src={product.img} alt={product.title} />
                <p>{product.title}</p>
            </Link>
        ))}
    </div>
  )
}

export default ProductGalery