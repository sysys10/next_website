'use client'
import { easeIn, motion } from 'framer-motion'
const about = () => {
    return (
        <div className="w-full flex flex-col h-[150vh]">
            <div className="w-full h-72 bg-orange-200"><h1 className="text-8xl">대충 사진 아니면 글구</h1></div>
            <div className="w-full h-full flex">
                <main className="w-full h-full flex">
                    <aside className="w-60 h-full bg-hanyang-blue"></aside>
                    <div className="flex flex-col items-center flex-1 pt-80">
                        <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, ease: easeIn }} className='text-3xl font-pretendard'>대충 우리학과 소개말이랑 멋진 말들을 적고 싶어용</motion.div>
                        <motion.div initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:0.5, ease:easeIn}} className='text-3xl font-pretendard mt-80'>대충 우리학과 소개말이랑 멋진 말들을 적고 싶어용</motion.div>
                        <motion.div initial={{y:100, opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:0.5, ease:easeIn}} className='text-3xl font-pretendard mt-80'>대충 우리학과 소개말이랑 멋진 말들을 적고 싶어용</motion.div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default about;