import Image from "next/image";

const Bot = ({message}) => {
  return (
    <div className="flex my-3  justify-start gap-2 mr-10">
      <Image
        loader={({ src }) => src}
        src={`https://ik.imagekit.io/bintangtopup/webGPT/ultrameng.jpg?updatedAt=1685023622427`}
        className="rounded-full"
        width={30}
        height={30}
        alt="bot_image"
        style={{ maxWidth: "30px", maxHeight: "30px" }}
      />
      <p className="bg-grayy  text-sm text-white p-2 rounded-md">
        {message}
      </p>
    </div>
  );
};

export default Bot
