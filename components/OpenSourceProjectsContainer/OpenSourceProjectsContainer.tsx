import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { OpenSourceProjectsGrid } from "@components/index";
import { useRouter } from "next/router";
import { en } from "i18n/en";
import { es } from "../../i18n/es";
import { fr } from "../../i18n/fr";
import { openSourceProjectsData } from "banners-data";

export const OpenSourceProjectsContainer = () => {
  const { locale } = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 1024 }); 
  const itemsPerPage = isMobile ? 2 : 6; 
  const pagesCount = Math.ceil(openSourceProjectsData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pagesCount - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, openSourceProjectsData.length);

  return (
    <section className="md:my-20" id="portfolio">
      <div className="grid grid-cols-1">
        {openSourceProjectsData.slice(startIndex, endIndex).map((item, index) => (
          <OpenSourceProjectsGrid
            title={item.title}
            image={item.image}
            link={item.productionLink}
            // androidLink={item.androidLink}
            // iosLink={item.iosLink}
            key={startIndex + index}
            description={item.description}
            tecs={item.tecnologies}
          />
        ))}
      </div>
      {pagesCount > 1 && (
        <div className="flex justify-center mt-4 gap-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="px-4 py-2 bg-white text-black rounded-md hover:scale-150 hover:bg-black hover:text-white border-2 transition duration-700 ease-in-out"
          >
            Prev
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === pagesCount - 1}
            className="px-4 py-2 bg-white text-black rounded-md hover:scale-150 hover:bg-black hover:text-white border-2 transition duration-700 ease-in-out"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};
