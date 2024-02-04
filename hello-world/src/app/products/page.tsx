import Link from "next/link"

export default function Product() {
	const productId = 100
	return (
		<>
			<Link href='/'>Home</Link>
			<h1>Product</h1>
			<Link href='products/1'>Product 1</Link>
			<Link href='products/2'>Product 2</Link>
			<Link
				href='products/3'
				replace>
				Product 3
			</Link>
			<Link href={`products/${productId}`}>Product {productId}</Link>
		</>
	)
}
