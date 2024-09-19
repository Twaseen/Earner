 import { useQuery } from "@tanstack/react-query";
 import React from "react";
 import newRequest from "../../utils/newRequest";
 import "./Review.scss";
 const Review = ({ review }) => {
   const { isLoading, error, data } = useQuery({
     queryKey: [review.userId],
     queryFn: () =>
       newRequest.get(`/users/${review.userId}`).then((res) => {
         return res.data;
       }),
   });

   return (
     <div className="review">
       {isLoading ? (
         "loading"
       ) : error ? (
         "error"
       ) : (
         <div className="user">
           <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" />
           <div className="info">
             <span>{data.username}</span>
             <div className="country">
               <span>{data.country}</span>
             </div>
           </div>
         </div>
       )}
       <div className="stars">
         {Array(review.star)
           .fill()
           .map((item, i) => (
             <img src="/img/star.png" alt="" key={i} />
           ))}
         <span>{review.star}</span>
       </div>
       <p>{review.desc}</p>
     </div>
   );
 };

 export default Review;


/*import React from "react";
import "./Review.scss";

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="user">
        <img src={review.user.img || "/img/noavatar.jpg"} alt="user avatar" />
        <div className="info">
          <span>{review.user.username}</span>
          {!isNaN(review.rating) && (
            <div className="stars">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <img src="/img/star.png" alt="" key={i} />
                ))}
            </div>
          )}
        </div>
      </div>
      <p>{review.desc}</p>
    </div>
  );
};

export default Review;*/
