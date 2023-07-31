"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const Tokens = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) return null;

  return (
    <div className="pt-15 flex flex-col items-center justify-center">
        <div className="text-white tracking-wider flex flex-col items-center">
          <h2>Explore top Cryptos Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFTs</p>
          <button className="button-neon flex items-center justify-center mt-2">See More Coins</button>
        </div>
          <div className="flex gap-4 pt-4">

            <div className="flex flex-col justify-center items-center p-3 w-[120px] h-[120px] rounded-lg shadow-neon">
          <div className="flex items-center justify-center">
            <Image
              width={30}
              height={30}
              src={data[0].image}
              alt="Bitcoin Image"
            />
          </div>
          <div className="text-white flex flex-col items-center">
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
          </div>

          {data[0].price_change_percentage_24h < 0 ? (
            <span className="text-red-500 flex items-center justify-center">
              <ArrowDownLeft size={20} />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-500 flex items-center justify-center">
              <ArrowUpRight size={20} />
              {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
            </div>

            <div className="flex flex-col justify-center items-center p3 w-[120px] h-[120px] rounded-lg shadow-neon">
          <div className="flex items-center justify-center">
            <Image
              width={30}
              height={30}
              src={data[1].image}
              alt="Bitcoin Image"
            />
          </div>
          <div className="text-white flex flex-col items-center">
            <h5>{data[1].name}</h5>
            <p>${data[1].current_price.toLocaleString()}</p>
          </div>

          {data[0].price_change_percentage_24h < 0 ? (
            <span className="text-red-500 items-center justify-center">
              <ArrowDownLeft size={20} />
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-500 flex items-center justify-center">
              <ArrowUpRight size={20} />
              {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
            </div>

            <div className="flex flex-col justify-center items-center p3 w-[120px] h-[120px] rounded-lg shadow-neon">
          <div className="flex items-center justify-center">
            <Image
              width={30}
              height={30}
              src={data[2].image}
              alt="Bitcoin Image"
            />
          </div>
          <div className="text-white flex flex-col items-center">
            <h5>{data[2].name}</h5>
            <p>${data[2].current_price.toLocaleString()}</p>
          </div>

          {data[2].price_change_percentage_24h < 0 ? (
            <span className="text-red-500 items-center justify-center">
              <ArrowDownLeft size={20} />
              {data[2].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-500 flex items-center justify-center">
              <ArrowUpRight size={20} />
              {data[2].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
            </div>

            <div className="flex flex-col justify-center items-center p3 w-[120px] h-[120px] rounded-lg shadow-neon">
          <div className="flex items-center justify-center">
            <Image
              width={30}
              height={30}
              src={data[3].image}
              alt="Bitcoin Image"
            />
          </div>
          <div className="text-white flex flex-col items-center">
            <h5>{data[3].name}</h5>
            <p>${data[3].current_price.toLocaleString()}</p>
          </div>

          {data[3].price_change_percentage_24h < 0 ? (
            <span className="text-red-500 items-center justify-center">
              <ArrowDownLeft size={20} />
              {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
          ) : (
            <span className="text-green-500 flex items-center justify-center">
              <ArrowUpRight size={20} />
              {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
          )}
            </div>

          </div>
    </div>
  );
};

export default Tokens;
