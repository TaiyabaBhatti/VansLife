import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/ui/Wrapper";
import {
  Link,
  Outlet,
  useLoaderData,
  useLocation,
  useParams,
} from "react-router-dom";
import Button from "../../../components/ui/Button";
// import vanImage from "./../../assets/images/van.png";
import Axios from "axios";
import PageTabs from "../../../components/ui/PageTabs";
import ImageComponent from "../ImageComponent";
import { getVans } from "../../../ApiFunc";

export function loaderLoad({ params }) {
  return getVans(params.id);
}

export default function VanDetailedPage() {
  const location = useLocation();
  const params = useParams();
  const vanData = useLoaderData();

  const getSearchFilter = () => {
    return location.state == null ? "" : location.state.searchFilter;
  };

  const getBackText = () => {
    if (location.state !== null) {
      if (location.state.filter !== null) {
        return `${location.state.filter}`;
      } else {
        return "All";
      }
    } else {
      return "All";
    }
  };

  return (
    <Wrapper className="mb-10 mt-14 min-h-screen">
      <Link
        to={`../vans/${getSearchFilter()}`}
        className="underline text-black font-base "
      >
        Back to {getBackText()} Vans
      </Link>

      {/* <Link to=".." className="underline text-black font-base ">
        Back to all vans
      </Link> */}

      <div className=" mt-10 space-y-16">
        <div className="flex flex-row  gap-x-5 items-center ">
          <ImageComponent
            src={vanData.imageUrl}
            alt={`${vanData.name} with price of ${vanData.price} `}
            properties="rounded-md object-cover h-64"
          />

          <div className="space-y-2">
            <Button text={vanData.type} bgColor="bg-orange-500" />
            <h1 className="font-bold text-3xl ">{vanData.name}</h1>
            <p>
              <span className="text-[20px] font-semibold">
                ${vanData.price}
              </span>
              <span className="text-[14px] font-normal">/day</span>
            </p>
          </div>
        </div>

        {/* navigation tabs for switching details, pricing */}
        <nav className="flex flex-row gap-x-5 w-fit mb-7">
          <PageTabs text="Details" path={`.`} attribute={true} />
          <PageTabs text="Pricing" path={`/vans/${params.id}/pricing`} />
          <PageTabs text="Photos" path={`/vans/${params.id}/photos`} />
        </nav>

        <Outlet context={{ vanData }} />
      </div>
    </Wrapper>
  );
}
