import { products } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../public/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../public/assets/svg/ClipPath";

const Products = () => {
  return (
    <Section id="shop">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Stop pixel-pushing and start impressing - get designs that do the work for you."
          text=""
          tag="Shop"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {products.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="font-light text-[0.875rem] leading-6 md:text-base mb-6 text-gray-400">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <a href="/shop" className="ml-auto flex items-center justify-center gap-1">
                  <p className=" font-code text-xs font-bold text-gray-200 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                  </a>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Products;