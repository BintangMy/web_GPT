import Image from "next/image";

const User = ({message}) => {
    return (
        <>
            <div className="flex my-3 justify-end gap-2 ml-9">
                <p className="bg-grayy  text-sm text-white p-2 rounded-md">
                    {message}
                </p>
                <Image
                    loader={({ src }) => src}
                    src={`https://ik.imagekit.io/bintangtopup/webGPT/user.png?updatedAt=1685095629190`}
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="bot_image"
                    style={{ maxWidth: "30px", maxHeight: "30px" }}
                />
            </div>
        </>
    )
}

export default User