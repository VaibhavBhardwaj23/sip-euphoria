import { Link } from "react-router-dom";
import DrinksCard from "../components/DrinksCard";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ReactPaginate from "react-paginate";
const CollectionPage = ({ database }) => {
  const collection_box = useRef();
  const dataSets = database;
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;
  const dataSet = dataSets
    .slice(pagesVisited, pagesVisited + dataPerPage)
    .map((data) => {
      return (
        <Link
          className="Link collection_link"
          key={data.id}
          to={`/drinks/${data.id}`}
        >
          <DrinksCard drink={data} />
        </Link>
      );
    });

  const pageCount = Math.ceil(dataSets.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    gsap.to(collection_box.current, {
      autoAlpha: 1,
      duration: 2,
    });
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <>
      <div ref={collection_box} className="collection_box">
        {dataSet}
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        containerClassName={"pagination"}
      />
    </>
  );
};

export default CollectionPage;
