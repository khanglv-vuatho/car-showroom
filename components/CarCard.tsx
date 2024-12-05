"use client"

import { useState } from "react"
import Image from "next/image"

import CustomButton from "./CustomButton"
type CarCardProps = {
  title: string
  auto: string
  type: string
  oil: string
  price: string
}
const CarCard = ({ title, auto, type, oil, price }: CarCardProps) => {
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{title}</h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        {/* <span className="self-start text-[14px] leading-[17px] font-semibold">$</span> */}
        {price}
        <span className="self-end text-[14px] leading-[17px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/test.jpeg" alt="car model" fill priority className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
            <p className="text-[14px] leading-[17px]">{auto}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{type}</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{oil}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            // handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} /> */}
    </div>
  )
}

export default CarCard
