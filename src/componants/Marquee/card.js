export default function Reviewcard({ stars, title, Review, Name }) {
  return (
    <div className="w-full max-w-sm mx-10 px-6 py-5  mx-auto bg-blue-600  rounded-xl shadow-md ">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-white opacity-50 dark:text-gray-400">
          Our reviews
        </span>
        <div className="  text-xs font-bold text-black uppercase  rounded-full dark:bg-blue-300 dark:text-blue-900">
          <div className="  text-xl font-semibold rounded-xl bg-gray-900  leading-none flex items-center p-2 justify-center">
            {[...Array(stars)].map((e, i) => (
              <span className="text-yellow-300  " key={i}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-bold mx-auto text-white dark:text-white">
          {title}
        </h1>
      </div>
      <div>
        <p className="mt-2 text-xl text-white dark:text-gray-300">{Review}</p>
      </div>

      <div>
        <div className="flex items-center mt-2 " />
        <span className="text-white font-bold">{Name}</span>
      </div>
    </div>
  );
}
