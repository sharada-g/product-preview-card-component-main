import React from "react";

function Card() {
  return (
    <div className=" w-[345px] h-[612px] bg-White rounded-lg flex flex-col  Mobile:flex-row Mobile:w-[600px] Mobile:h-[450px]">
      <picture>
        <source
          media="(min-width: 375px)"
          srcset="images/image-product-desktop.jpg"
          alt="perfume bottle"
        />
        <img
          src="images/image-product-mobile.jpg"
          className="w-full min-w-[306px] h-[240px] Mobile:h-full object-cover rounded-t-lg  Mobile:rounded-tr-none Mobile:rounded-bl-lg"
          alt="perfume bottle"
        />
      </picture>

      <div className="h-full flex flex-col m-6 justify-between Mobile:h-auto Mobile:m-8">
        <span className="font-Montserrat font-medium text-[12px] leading-[15px] tracking-[5px] text-Dark-grayish-blue">
          PERFUME
        </span>
        <h1 className="font-Fraunces font-bold text-[32px] leading-8 text-Very-dark-blue">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="font-Montserrat font-medium text-[14px] leading-[23px] text-Dark-grayish-blue">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="flex justify-start gap-4 items-center">
          <span className="font-Fraunces font-bold text-[32px] leading-[32px] text-Dark-cyan">
            $149.99
          </span>
          <span className="font-Montserrat font-medium text-[12px] leading-[23px] text-Dark-grayish-blue line-through">
            $169.99
          </span>
        </div>

        <button className="flex justify-center gap-2 items-center bg-Dark-cyan rounded-lg h-12 hover:bg-Very-dark-blue">
          <img src="images/icon-cart.svg" alt="cart icon" />
          <span className="font-Montserrat font-semibold text-[14px] leading-[17px] text-White">
            Add to Cart
          </span>
        </button>
      </div>
    </div>
  );
}

export default Card;
