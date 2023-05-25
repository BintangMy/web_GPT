import { HiOutlinePaperAirplane } from "react-icons/hi";
import Image from "next/image";
const Summary = () => {
  return (
    <>
      <div className="pt-16 md:pt-11 lg:pt-12  h-screen px-1 bg-gray-700">
        <div className="border-2 lg:ml-72 h-full p-2 flex flex-col border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* chats */}
          <div className="p-4 overflow-y-scroll rounded bg-gray-800">
            <div className="flex my-2  justify-start gap-2 mr-10">
              <Image
                loader={({ src }) => src}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Yv5sOm0jsGeipgA7ohuoihsnhUSsWZ1GrVImQ6w7IltAp_H68yMcz0qJRsa0Bp_utnE&usqp=CAU`}
                className="rounded-full"
                width={30}
                height={30}
                alt="bot_image"
                style={{ maxWidth: '30px', maxHeight: '30px' }}
              />
              <p className="bg-gray-700  text-sm text-white p-2 rounded-md">Ada yang bisa saya bantu ?</p>
            </div>

            <div className="flex my-2 justify-end gap-2 ml-10">
              <p className="bg-gray-700  text-sm text-white p-2 rounded-md">Buatkan Paragraph tentang Indonesia ?</p>
              <Image
                loader={({ src }) => src}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Yv5sOm0jsGeipgA7ohuoihsnhUSsWZ1GrVImQ6w7IltAp_H68yMcz0qJRsa0Bp_utnE&usqp=CAU`}
                className="rounded-full"
                width={30}
                height={30}
                alt="bot_image"
                style={{ maxWidth: '30px', maxHeight: '30px' }}
              />

            </div>

            <div className="flex my-2 justify-start gap-2 mr-10">
              <Image
                loader={({ src }) => src}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Yv5sOm0jsGeipgA7ohuoihsnhUSsWZ1GrVImQ6w7IltAp_H68yMcz0qJRsa0Bp_utnE&usqp=CAU`}
                className="rounded-full"
                width={30}
                height={30}
                alt="bot_image"
                style={{ maxWidth: '30px', maxHeight: '30px' }}
              />
              <p className="bg-gray-700  text-sm text-white p-2 rounded-md">Indonesia adalah negara kepulauan yang terletak di Asia Tenggara dan merupakan salah satu negara terbesar di dunia dalam hal populasi. Dikenal sebagai "negeri seribu pulau," Indonesia memiliki kekayaan alam yang melimpah, keindahan alam yang menakjubkan, dan keragaman budaya yang kaya.
                <br />
                <br />

                Dari ujung barat hingga timur, Indonesia menawarkan panorama yang memukau. Pegunungan yang menjulang tinggi, seperti Gunung Bromo dan Gunung Rinjani, menawarkan pengalaman mendaki yang menakjubkan. Selain itu, keindahan alam Indonesia terlihat dalam keberagaman pulau-pulau tropisnya, seperti Bali dengan pantai-pantai yang indah, Lombok dengan keindahan Gili yang mempesona, dan Raja Ampat dengan kekayaan bawah laut yang luar biasa.
                <br />
                <br />

                Indonesia juga memiliki warisan budaya yang kaya dan beragam. Setiap daerah di Indonesia memiliki keunikan budayanya sendiri, mulai dari tarian tradisional yang anggun, seperti Tari Kecak di Bali, hingga upacara adat yang kaya makna, seperti Upacara Kasada di Gunung Bromo. Makanan tradisional Indonesia juga terkenal di dunia, dengan hidangan seperti nasi goreng, rendang, dan sate yang memikat lidah.
                <br/>
                <br/>
                ....
                </p> 
            </div>
            <div className="flex my-2 justify-start gap-2 mr-10">
              <Image
                loader={({ src }) => src}
                src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Yv5sOm0jsGeipgA7ohuoihsnhUSsWZ1GrVImQ6w7IltAp_H68yMcz0qJRsa0Bp_utnE&usqp=CAU`}
                className="rounded-full"
                width={30}
                height={30}
                alt="bot_image"
                style={{ maxWidth: '30px', maxHeight: '30px' }}
              />
              <p className="bg-gray-700  text-sm text-white p-2 rounded-md">Indonesia adalah negara kepulauan yang terletak di Asia Tenggara dan merupakan salah satu negara terbesar di dunia dalam hal populasi. Dikenal sebagai "negeri seribu pulau," Indonesia memiliki kekayaan alam yang melimpah, keindahan alam yang menakjubkan, dan keragaman budaya yang kaya.
                <br />
                <br />

                Dari ujung barat hingga timur, Indonesia menawarkan panorama yang memukau. Pegunungan yang menjulang tinggi, seperti Gunung Bromo dan Gunung Rinjani, menawarkan pengalaman mendaki yang menakjubkan. Selain itu, keindahan alam Indonesia terlihat dalam keberagaman pulau-pulau tropisnya, seperti Bali dengan pantai-pantai yang indah, Lombok dengan keindahan Gili yang mempesona, dan Raja Ampat dengan kekayaan bawah laut yang luar biasa.
                <br />
                <br />

                Indonesia juga memiliki warisan budaya yang kaya dan beragam. Setiap daerah di Indonesia memiliki keunikan budayanya sendiri, mulai dari tarian tradisional yang anggun, seperti Tari Kecak di Bali, hingga upacara adat yang kaya makna, seperti Upacara Kasada di Gunung Bromo. Makanan tradisional Indonesia juga terkenal di dunia, dengan hidangan seperti nasi goreng, rendang, dan sate yang memikat lidah.
                <br/>
                <br/>
                ....
                </p>

               
                
                
            </div>

           
          </div>


          {/* Input */}
          <div className="flex mt-2 items-center">
            <div className="relative w-full">
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Masukan Pesan"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-black rounded-lg "
            >
              <HiOutlinePaperAirplane className="rotate-45" />
            </button>
          </div>

          <div className="text-xs mt-2 text-center text-white">
            Free Research Preview, Made with ❤️ by{" "}
            <a
              className="underline"
              href="https://bintangmy.netlify.app/"
              target="_blank"
            >
              BintangMy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
