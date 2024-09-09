import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("search");

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs", { searchQuery, sort }],
    queryFn: () =>
      newRequest
        .get(
          `/gigs?min=${minRef.current?.value || 0}&max=${
            maxRef.current?.value || 999999
          }&sort=${sort}&search=${encodeURIComponent(searchQuery || "")}`
        )
        .then((res) => res.data)
        .catch((err) => {
          console.error("Error fetching data:", err);
          throw err;
        }),
  });

  console.log({ isLoading, error, data });

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort, searchQuery]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          Earner {">"}Graphics & Design {}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Earner AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales"
                ? "Best Selling"
                : sort === "createdAt"
                ? "Newest"
                : "Popular"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort !== "createdAt" && (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                )}
                {sort !== "sales" && (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                {sort !== "popular" && (
                  <span onClick={() => reSort("popular")}>Popular</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {isLoading
            ? "Loading.."
            : error
            ? "Something went wrong."
            : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
}

export default Gigs;








// import React, { useEffect, useRef, useState } from "react";
// import "./Gigs.scss";
// import GigCard from "../../components/gigCard/GigCard";
// import { useQuery } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";
// import { useLocation } from "react-router-dom";

// function Gigs() {
//   const [sort, setSort] = useState("sales");
//   const [open, setOpen] = useState(false);
//   const minRef = useRef();
//   const maxRef = useRef();

//   const { search } = useLocation();

//   const queryParams = new URLSearchParams(search);
//   const searchQuery = queryParams.get("search");

//   const { isLoading, error, data, refetch } = useQuery({
//     queryKey: ["gigs", { searchQuery, sort }],
//     queryFn: () =>
//       newRequest
//         .get(
//           `/gigs?min=${minRef.current?.value || 0}&max=${
//             maxRef.current?.value || 999999
//           }&sort=${sort}&search=${encodeURIComponent(searchQuery || "")}`
//         )
//         .then((res) => res.data),
//   });

//   const reSort = (type) => {
//     setSort(type);
//     setOpen(false);
//   };

//   useEffect(() => {
//     refetch();
//   }, [sort, searchQuery]);

//   const apply = () => {
//     refetch();
//   };

//   return (
//     <div className="gigs">
//       <div className="container">
//         <span className="breadcrumbs">Earner {">"} Graphics & Design</span>
//         <h1>AI Artists</h1>
//         <p>
//           Explore the boundaries of art and technology with Earner AI artists
//         </p>
//         <div className="menu">
//           <div className="left">
//             <span>Budget</span>
//             <input ref={minRef} type="number" placeholder="min" />
//             <input ref={maxRef} type="number" placeholder="max" />
//             <button onClick={apply}>Apply</button>
//           </div>
//           <div className="right">
//             <span className="sortBy">Sort by</span>
//             <span className="sortType">
//               {sort === "sales"
//                 ? "Best Selling"
//                 : sort === "createdAt"
//                 ? "Newest"
//                 : "Popular"}
//             </span>
//             <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
//             {open && (
//               <div className="rightMenu">
//                 {sort !== "createdAt" && (
//                   <span onClick={() => reSort("createdAt")}>Newest</span>
//                 )}
//                 {sort !== "sales" && (
//                   <span onClick={() => reSort("sales")}>Best Selling</span>
//                 )}
//                 {sort !== "popular" && (
//                   <span onClick={() => reSort("popular")}>Popular</span>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="cards">
//           {isLoading
//             ? "Loading.."
//             : error
//             ? "Something went wrong."
//             : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gigs;
