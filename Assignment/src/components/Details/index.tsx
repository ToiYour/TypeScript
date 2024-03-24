import React from "react";
import Header from "../Headers";
import Footer from "../Footers";
import { SVGTabs } from "../Banners/Tabs";
import Search from "../Banners/Search";
import ItemTab from "../Banners/Item-tab";
import Filter from "../Filter";
import ItemTicket from "./Item-ticket";

const DetailPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F2F2F2] pb-4">
        <div className="container max-w-screen-lg mx-auto ">
          <div className="search py-5">
            <div className="wrapper-search-banner bg-white rounded-lg">
              <div className="tabs-nav border-b-2 border-gray-200">
                <ul className="flex justify-center items-center">
                  <ItemTab
                    hiddenItem={false}
                    active
                    title="80K"
                    svg={SVGTabs.bus}
                    badge=""
                  />
                  <ItemTab
                    hiddenItem={false}
                    active={false}
                    title="Máy bay"
                    svg={SVGTabs.plane}
                    badge="-20K"
                  />
                  <ItemTab
                    hiddenItem={false}
                    active={false}
                    title="93K"
                    svg={SVGTabs.train}
                    badge="Mới"
                  />
                </ul>
                <span className="line-tabs"></span>
              </div>
              <Search />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-start">
            <Filter />
            <div className="grow grid  gap-y-4 ">
              <ItemTicket />
              <ItemTicket />
              <ItemTicket />
              <ItemTicket />
              <ItemTicket />
              <ItemTicket />
              <ItemTicket />
              <ItemTicket />
              <ItemTicket />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailPage;
