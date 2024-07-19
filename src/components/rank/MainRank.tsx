import { useState } from "react";
import BarRank from "../BarRank";
interface dataType { boj_id: string, name: string, cnt: number };
const RankData: dataType[] = [{ boj_id: 'user3', name: '사용자3', cnt: 15 },
{ boj_id: 'user7', name: '사용자7', cnt: 10 },
{ boj_id: 'ys_10', name: '신윤수', cnt: 8 },
{ boj_id: 'user9', name: '사용자9', cnt: 5 },
{ boj_id: 'user5', name: '사용자5', cnt: 4 },
{ boj_id: 'user6', name: '사용자6', cnt: 3 },
{ boj_id: 'user2', name: '사용자2', cnt: 2 },
{ boj_id: 'user8', name: '사용자8', cnt: 2 },
{ boj_id: 'user4', name: '사용자4', cnt: 2 },
];

export default function MainRank() {
    const [rankSelect, setRankSelect] = useState([true, false, false]);
    return (
        <div className="max-w-[1280px] mx-auto font-pretendard lg:px-4">
            <div className="flex items-center">
                <p className="text-2xl lg:text-4xl pl-4 font-semibold">Ranking</p><img src="/assets/images/solvedlogo.svg" width={60} className="ml-4 mt-2" />
            </div>

            <div className="flex gap-4 justify-center text-sm lg:text-base">
                <div className="cursor-pointer" style={{ color: `${rankSelect[0] ? "rgb(156 163 175" : "black"}` }} onClick={() => setRankSelect([true, false, false])}>일별 랭킹</div>
                <div className="cursor-pointer" style={{ color: `${rankSelect[1] ? "rgb(156 163 175" : "black"}` }} onClick={() => setRankSelect([false, true, false])}>분기별 랭킹</div>
                <div className="cursor-pointer" style={{ color: `${rankSelect[2] ? "rgb(156 163 175" : "black"}` }} onClick={() => setRankSelect([false, false, true])}>누적 랭킹</div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <BarRank RankData={RankData} />
                {/* <div className="relative lg:w-1/3 w-11/12 h-[600px]">
                    <div className="absolute bg-gradient-to-br inset-0 from-cyan-400 to-light-blue-500 skew-y-0 sm:-skew-y-6 sm:-rotate-6 shadow-lg sm:rounded-3xl"></div>
                    <div className="relative font-pretendard gap-2 text-xl flex flex-col w-full h-full bg-white shadow-lg rounded-3xl p-4">
                        <div className="w-full h-16 flex items-center ml-2 gap-2">
                            <img src="/assets/images/25.svg" alt="d1" className="h-12"/>
                        asd</div>
                        <div className="w-full h-16 flex items-center ml-2 gap-2">
                            <img src="/assets/images/p2.svg" alt="p2" className="h-12"/>
                        asd</div>
                        <div className="w-full h-16 flex items-center ml-2 gap-2">
                            <img src="/assets/images/13.svg" alt="g3" className="h-12"/>
                        asd</div>

                    </div>
                </div> */}

                <table className="lg:max-w-[33%] w-[90%] h-[600px] mx-auto">
                    <thead>
                        <tr className="bg-gray-300 h-12">
                            <th className="">No</th>
                            <th>id</th>
                            <th>이름</th>
                            <th>푼 문제수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RankData.map((v, i) => (
                            <tr key={`rank-${i}`} className="text-center" style={{ backgroundColor: `${i % 2 === 1 ? 'rgb(243 244 246)' : 'white'}` }}>
                                <td className="text-base lg:text-xl">#{i+1}</td>
                                <td className="flex items-center justify-center h-full gap-1">{v.boj_id}<img src="/assets/images/gold2.svg" width={16}/></td>
                                <td>{v.name}</td>
                                <td>{v.cnt}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}