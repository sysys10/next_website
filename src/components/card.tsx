import Image from "next/image"
const Card = ({ gallery }) => {
    return (<div className="w-72 h-72 bg-[#6B7280]">
        <div className="bg-cover w-full" style={{ backgroundImage: `${gallery.imgurl}` }}></div>
        <div className="h-20 w-full rounded-2xl bg-white flex flex-col p-4"><p>{gallery.title}</p><p>{gallery.date}</p></div>

    </div>)
}

export default Card;