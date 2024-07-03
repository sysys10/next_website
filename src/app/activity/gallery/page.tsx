import Card from '@/components/card'
const galleryData = [{ id: 0, title: "~~행사 진행!", date: "2024.03.16", imgurl: "/images/1.jpg", path: "/gallery:id" },
{ id: 1, title: "~~행사 진행!", date: "2024.03.16", imgurl: "/", path: "/gallery:id" },
{ id: 2, title: "~~행사 진행!", date: "2024.03.16", imgurl: "/", path: "/gallery:id" },
{ id: 3, title: "~~행사 진행!", date: "2024.03.16", imgurl: "/", path: "/gallery:id" },
{ id: 4, title: "~~행사 진행!", date: "2024.03.16", imgurl: "/", path: "/gallery:id" },
{ id: 5, title: "~~행사 진행!", date: "2024.03.16", imgurl: "/", path: "/gallery:id" }]

const gallery = () => {
    return (
        <div className="bg-white w-full min-h-[150vh]">
            <div className="flex flex-col m-auto mt-80 bg-orange-300 h-[1000px] w-[1280px] ">
                <h1 className="m-auto  text-4xl font-pretendard my-20 ">정시템 갤러리</h1>
                <div className='w-full px-3'>
                    {galleryData.map((gallery, index) => {
                    return (<Card key={gallery.id} gallery={gallery}></Card>);
                })}
                </div>
            </div>
        </div>
    )
}
export default gallery;