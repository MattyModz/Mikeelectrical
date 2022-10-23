// import { Reviews } from "../../../typings";

// import { urlFor } from "../../../sanity";
function Reviews({ stars, title, review, name, img }) {
  return (
    <div className="w-full max-w-sm mx-10 px-6  mb-8  mx-auto bg-white  rounded-xl shadow-md ">
      <div>
        <div className="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
          <div className="rounded-full mr-3 w-12 h-12 "> </div>

          <div className="relative">
            <p className="font-semibold text-gray-600 leading-none my-1">
              {name}
            </p>
            <p className="font-medium text-sm text-gray-400">
              <div className="  text-xl font-semibold rounded-xl   leading-none flex items-center p-2 ">
                {[...Array(stars)].map((e, i) => (
                  <span className="text-blue-500  " key={i}>
                    ★
                  </span>
                ))}
              </div>
            </p>
          </div>
        </div>
        <div className="font-bold pb-4 text-xl">{title}</div>
        {review}
        <br />
      </div>

      <div>
        <div className="flex items-center mt-2 " />
        <span className="text-white font-bold">{name}</span>
      </div>
    </div>
  );
}
export default Reviews;
