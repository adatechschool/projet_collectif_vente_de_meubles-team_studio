export default function DisplayCards({ photo, name, type, price, id }) {
  // const addCart = () => {
  //   console.log('add cart')
  // };

  return (
    <div className="p-8 ">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-8 px-4 lg:max-w-7xl lg:px-8 transition delay-150 duration-300 ease-in-out">


          <div className="group">
            <a href={`http://localhost:3000/informations/${id}`}>
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={`http://localhost:9000/images/${photo}.jpg`} alt={`${type}`} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
            </a>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={`http://localhost:3000/informations/${id}`}>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{type}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{price}€</p>
            </div>
            <button type="submit" className="scale-100 mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-stone-200 py-3 px-8 text-sm text-gray-700 text-black hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2">Add to bag</button>
          </div>
        </div>
      </div>
    </div>
  );
};


