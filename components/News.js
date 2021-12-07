import Image from "next/image";

function News({ src, date, name, description }) {
  return (
    <div
      class="bg-white shadow-xl  
    border-gray-200 rounded-xl max-w-sm
     dark:bg-gray-800 dark:border-gray-700 hover:scale-105
     transition duration-700 ease-in-out"
    >
      <div className="relative h-52 w-90 ">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div class="p-5">
        <p class=" text-red-500 tracking-tight mb-2 dark:text-white">{date}</p>
        <a href="#">
          <h5 class="text-gray-900 text tracking-tight mb-2 dark:text-white">
            {name}
          </h5>
        </a>
      </div>
    </div>
  );
}

export default News;
