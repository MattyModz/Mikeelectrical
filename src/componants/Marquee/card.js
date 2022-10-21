export default function Reviewcard({ stars, title, review, name }) {
  return (
    <div className="w-full max-w-sm mx-10 px-6 py-8 mb-8  mx-auto bg-white  rounded-xl shadow-md ">
      <div>
        <div class="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
          <img
            src="https://cdn.devdojo.com/images/january2022/07-nick-thompson.jpeg"
            class="rounded-full mr-3 w-12 h-12"
          />
          <div class="relative">
            <p class="font-semibold text-gray-600 leading-none my-1">{name}</p>
            <p class="font-medium text-sm text-gray-400">
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
        <svg
          class="h-auto absolute z-0 top-0 right-0 w-12 opacity-30 mt-6 mr-7 text-gray-200"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
        </svg>
      </div>

      <div>
        <div className="flex items-center mt-2 " />
        <span className="text-white font-bold">{name}</span>
      </div>
    </div>
  );
}
