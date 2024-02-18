"use client";
import { More, SearchIcon } from "@/common/icons/Icons";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import BTC from "/public/images/BTCImg.svg";
import ETH from "/public/images/ETH.svg";
import USDT from "/public/images/USDT.svg";
import DOGE from "/public/images/DOGE.svg";
import GOOGL from "/public/images/GOOGL.svg";
import TESLA from "/public/images/TESLA.svg";
import GraphGreen from "/public/images/GraphGreen.svg";
import GraphGreen2 from "/public/images/GraphGreen2.svg";
import GraphRed from "/public/images/GraphRed.svg";
import GraphRed2 from "/public/images/GraphRed2.svg";
const cryptocurrencies = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    icone: BTC,
    graph: GraphRed,
    price: 30.15,
    percent: -0.25,
  },
  {
    id: "Etherium",
    symbol: "ETH",
    name: "Etherium",
    icone: ETH,
    graph: GraphGreen,
    price: 1.15,
    percent: 0.89,
  },
  {
    id: "Tether",
    symbol: "USDT",
    name: "Tether",
    icone: USDT,
    graph: GraphGreen2,
    price: 0.999,
    percent: 0.09,
  },
  {
    id: "Dogecoin",
    symbol: "DOGE",
    name: "Dogecoin",
    icone: DOGE,
    graph: GraphRed2,
    price: 0.1,
    percent: -0.15,
  },
  {
    id: "GOOGL",
    symbol: "GOOGL",
    name: "Alphabet",
    icone: GOOGL,
    graph: GraphRed,
    price: 200.84,
    percent: -0.45,
  },
  {
    id: "TESLA",
    symbol: "TESLA",
    name: "Tesal",
    icone: TESLA,
    graph: GraphGreen,
    price: 244.4,
    percent: 4.06,
  },
];

export default function Market() {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-start justify-start gap-y-4 mt-2 w-full md:w-2/4 2xl:w-2/5">
      <Input
        className="w-3/4 md:w-3/4"
        placeholder="جست و جو برای ..."
        size="sm"
        startContent={<SearchIcon width={25} height={25} />}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-col w-full items-start justify-start mt-3 gap-y-3">
        {cryptocurrencies.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between w-full"
          >
            <div className="flex flex-col items-start justify-start gap-x-2 order-last">
              <p dir="ltr" className="font-normal text-[1rem] text-default-900">
                $ {item.price}
              </p>
              <p
                dir="ltr"
                className={`font-normal text-[.9rem] flex items-center justify-normal ${
                  item.percent > 0 ? "text-green-500" : " text-red-500"
                }`}
              >
                %{item.percent}
              </p>
            </div>{" "}
            <div className="flex items-center gap-x-2 order-last">
              <Image
                width="100"
                height="42"
                src={item.graph}
                alt={item.graph}
              />
            </div>
            <div className="flex items-center justify-end gap-x-2 order-last w-2/6">
              <Image
                className="order-last"
                width="38"
                height="38"
                src={item.icone}
                alt={item.id}
              />
              <div className="order-1 flex flex-col items-end justify-start gap-x-2 ">
                <p className="font-normal text-[1rem] text-default-900">
                  {item.symbol}
                </p>
                <p
                  dir="ltr"
                  className="font-normal text-[.88rem] text-default-400"
                >
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-2">
          <More width={40} height={40} />
      </div>
    </div>
  );
}
