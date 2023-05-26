import Image from "next/image"

const Profile = ({data}) => {
    return(
        <>
            <div className="profile lg:ml-60 flex gap-3 items-center">
          <Image
            loader={({ src }) => src}
            src={data[0]}
            className="rounded-full ml-16 mt-1"
            width={40}
            height={40}
            alt="bot_image"
          style={{ maxWidth: "40px", maxHeight: "40px" }}
          />
          <div className=" text-white flex flex-col">
            <h1 className="name text-xl">{data[1]}</h1>
            <h2 className="status text-sm">online</h2>
          </div>
        </div>
        </>
    )
}

export default Profile