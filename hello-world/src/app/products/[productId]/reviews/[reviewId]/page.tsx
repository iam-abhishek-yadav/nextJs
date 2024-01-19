import { notFound } from "next/navigation";
export default function Reviews ({params} : {
    params: {
        productId : string;
        reviewId: string;
    }
}) {
    console.log(params.reviewId);
    
    if(parseInt(params.reviewId) > 100) {
        notFound()
    }
    return <h1>Review {params.reviewId} for product {params.productId}</h1>
}