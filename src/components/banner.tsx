
export default function Banner() {
    return (<div className="w-full h-80 flex justify-center items-center bg-hanyang-blue"><h1 className="text-6xl text-white">배너입니다</h1></div>)
}

type Player = {
    name: string,
    age?:number
}

const nico: Player = {
    name:"nico"
}
function Pmaker(name: string):Player {
    return {
        name: name,
    }
}

const nicoa = Pmaker("nico");
nicoa.age = 12;