'use client'
import * as React from 'react';
import { useState } from 'react';
import Card from '@/components/card';
import Modal from 'react-modal'
import Image from 'next/image';
import { TfiClose } from "react-icons/tfi";

interface GalleryItem {
  id: number;
  title: string;
  date: string;
  desc: string;
  imgurl: string;
}

const galleryData: GalleryItem[] = [
  { id: 0, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/images/1.jpg" },
  { id: 1, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/images/2.jpg" },
  { id: 2, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/images/bg_1.jpg", },
  { id: 3, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", },
  { id: 4, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", },
  { id: 5, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", }, { id: 3, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", },
  { id: 6, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", },
  { id: 7, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", }, { id: 3, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", },
  { id: 8, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", },
  { id: 9, title: "~~행사 진행!", date: "2024.03.16", desc: "글 내용 입니다.", imgurl: "/", }
];

const Gallery: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [gallerySelect, setGallerySelect] = useState({});
  const handleClick = (gallery: GalleryItem) => {
    setModalOpen(true);
    setGallerySelect(gallery);
  }
  return (
    <div className="bg-white w-full min-h-[150vh]">
      <div className="m-auto mt-40 h-fit py-10 w-full mobile:w-[1000px] flex flex-col justify-center">
        <h1 className="m-auto font-extrabold text-4xl font-pretendard my-20 ">정시템 갤러리</h1>
        <div className='w-full grid grid-cols-1 mobile:grid-cols-3 contents-center gap-5'>
          {galleryData.map((gallery, index) => {
            return (
              <div key={`gallery-${index}`} onClick={() => { handleClick(gallery) }}>
                <Card gallery={gallery} />
              </div>);
          })}
        </div>
      </div>
      {
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => { setModalOpen(false) }}
          ariaHideApp={false}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              maxWidth: "55.5rem",
              maxHeight:"45.5rem",
              transform: "translate(-50%, -45%)",
              width: "96%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: 20,
              overflow: "hidden",
            
            },
          }}
        >
          <div className='relative overflow-y-auto h-full mobile:p-6 p-1'>
            <div className='border-b border-b-gray-400 h-24 font-pretendard'>
             <div className='flex justify-between w-full items-center'> <h1 className='font-semibold text-3xl'>{gallerySelect.title}</h1> <TfiClose onClick={() => { setModalOpen(false) }} className='text-xl'/></div>
              <p className='text-[#747474] mt-4 font-light text-base'>{gallerySelect.date}</p>
            </div>
            <div className=''>
              <p className='h-20 w-full mt-4'>{gallerySelect.desc}</p>
              <Image className='rounded-2xl' src={`${gallerySelect.imgurl}`} alt='image' width={1000} height={400} />
            </div>
          </div>
        </Modal>
      }
    </div>
  );
}
export default Gallery;