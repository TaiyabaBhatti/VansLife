import React, { useEffect, useState } from "react";
import Wrapper from "../../../components/ui/Wrapper";
import { Link, Outlet, useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";
// import vanImage from "./../../assets/images/van.png";
import Axios from "axios";
import PageTabs from "../../../components/ui/PageTabs";
import ImageComponent from "../ImageComponent";

export default function VanDetailedPage() {
  const [vanData, setVanData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchedData = Axios.get(`/api/vans/${params.id}`).then((res) => {
      console.log(params);
      setVanData(res.data.van);
    });
  }, []);

  return (
    <Wrapper className="mb-10 mt-14 min-h-screen">
      <Link to="/vans" className="underline text-black font-base ">
        Back to all vans
      </Link>

      {vanData ? (
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
      ) : (
        <div className={`size-40  items-center justify-center`}>
          <div className="loading size-10  rounded-full p-1">
            <div className=" rounded-full w-full h-full bg-white"></div>
          </div>
        </div>
      )}
    </Wrapper>
  );
}
