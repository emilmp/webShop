import React, {useEffect, useState} from "react";
import Container from "./Styles/Container";

const Pagination = ({data, RenderComponent, pageLimit, dataLimit}) => {
    const [pages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const totalPages = Math.ceil(data.length/dataLimit);
        setPages(totalPages);
    }, [currentPage]);

    function goToNextPage(){
        setCurrentPage((page) => page+1);
    }

    function goToPreviousPage(){
        setCurrentPage((page) => page-1);
    }

    function changePage(e){
        const pageNumber = Number(e.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage*dataLimit-dataLimit;
        const endIndex = startIndex+dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage -1)/pageLimit)*pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return(  
        
        <Container>
            {getPaginatedData().map((d, idx) => (
                <RenderComponent key={idx} data={d} />
            ))}
            
            <div className="paginationContainer">
                <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
                    &lt;
                </button>

                {getPaginationGroup().map((item, index) => (
                    <button key={index} onClick={changePage} className={`paginationItem ${currentPage === item ? "active" : null}`}>
                        <span>
                            {item}
                        </span>
                    </button>
                ))}
                <button onClick={goToNextPage} className={`next ${currentPage === pages ? "disabled" : ""}`}>
                    &gt;
                </button>
            </div>
        </Container>
    )
}

export default Pagination;