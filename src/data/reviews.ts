export type Review={id:string;productId:number;rating:number;title:string;body:string;date:string;verified:boolean;helpful:number;unhelpful:number;buyerType:string;location:string;sample:boolean;hasPhotos:boolean};
const templates=[
['Clear case information','The case configuration and product specifications were easy to review before building the order.','Independent retailer','New York'],
['Professional product presentation','Images, ordering details and commercial information were organized clearly for our buying workflow.','Multi-location buyer','Texas'],
['Useful for assortment planning','The MOQ, unit count and comparison tools helped our team evaluate the product alongside similar options.','Ecommerce retailer','California'],
['Good documentation workflow','We were able to identify which commercial documents should be requested before confirming the purchase.','Specialty retailer','Florida'],
['Straightforward replenishment','Saved-product and reorder tools make it easier to return to products our team is monitoring.','Operations buyer','Illinois'],
['Helpful account support structure','The product question and supplier-contact options create a clear path for commercial follow-up.','Wholesale buyer','New Jersey']
] as const;
export const getMockReviews=(productId:number):Review[]=>(templates.map((t,i)=>({id:`demo-${productId}-${i}`,productId,rating:i===4?4:5,title:t[0],body:t[1],date:new Date(2026,6-i,12+i).toISOString(),verified:i!==3,helpful:12+i*9+(productId%7),unhelpful:i%2,buyerType:t[2],location:t[3],sample:true,hasPhotos:i===1||i===4})));
export const ratingBreakdown=(total:number)=>{const values=[.78,.15,.045,.015,.01];let used=0;return values.map((v,i)=>{const count=i===4?total-used:Math.round(total*v);used+=count;return{stars:5-i,count,percent:Math.round(v*100)}})};
