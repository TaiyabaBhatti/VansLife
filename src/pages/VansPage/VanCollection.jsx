import React, { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ImageComponent from "./ImageComponent";
import { useSearchParams } from "react-router-dom";

export default function VanCard() {
  const navigate = useNavigate();
  const [vansData, setVansData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const handleClick = (id) => {
    navigate(`/vans/${id}`);
  };
  useEffect(() => {
    const fetchedData = Axios.get("/api/vans").then((res) => {
      setVansData(res.data.vans);
    });
  }, []);

  return (
    vansData &&
    vansData
      .filter((van, index) => {
        if (typeFilter != null) {
          return (
            van.type.toLowerCase() === typeFilter

            // van.price === parseInt(typeFilter)
          );
        }

        return true;
      })
      .map((van, index) => {
        return (
          <div
            key={index}
            className="space-y-3 w-64 cursor-pointer"
            onClick={() => handleClick(van.id)}
          >
            <ImageComponent
              src={van.imageUrl}
              alt={`${van.name} of price ${van.price}`}
              properties="rounded-md size-64 object-cover"
            />
            <div className=" text-salete flex flex-row gap-5 justify-between items-center">
              <h1 className="font-semibold text-[20px] ">{van.name}</h1>
              <p>
                <span className="text-[20px] font-semibold">${van.price}</span>
                <span className="text-[14px] font-normal">/day</span>
              </p>
            </div>

            <Button text={van.type} bgColor="bg-orange-500" />
          </div>
        );
      })
  );
}
