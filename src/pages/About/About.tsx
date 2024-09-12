import Banner from "@/components/ui/banner";
import { easeInOut, motion } from "framer-motion";

export default function About() {
    return (
        <div className="bg-gray-50">
            <Banner text={"소개"} />
            <div className="text-center flex flex-col items-center text-lg min-h-screen font-pretendard max-w-4xl px-4 mx-auto">        
                <motion.div 
                    initial={{opacity:0, y:40}} 
                    animate={{opacity:1, y:0}} 
                    transition={{duration:0.8, delay:0.2, ease:easeInOut}}
                    className="text-left mb-12 text-gray-700 leading-relaxed"
                >
                    <p className="text-3xl font-bold text-center text-black my-8 drop-shadow-md">『 제14대 학생회 "정원" 』</p>

                    <p className="mb-6 text-wrap font-semibold">정보시스템학과 학생회는 정보시스템학과 학우들을 대표하여 그 의견을 대변하는 기구입니다. 학생회는 학생회장, 부회장으로 구성된 회장단과 1, 2, 3학년 대표, 재무국, 사무국, 홍보개발국의 3개의 국으로 이루어져 있습니다.</p>

                    <p className="mb-6 text-wrap font-semibold">제14대 학생회 "정원"은 꽃을 가꾸는 것처럼, 우리 정보시스템학과의 다양한 가능성과 잠재력을 가꾸고 키워 나가겠다는 포부를 갖고 임하고 있습니다. 저희는 학과 내의 소통과 화합을 강화하고, 학습과 생활 환경을 개선하여 모든 학우가 학업과 취업, 창업 등 자신의 꿈을 향해 나아갈 수 있도록 지원하는 것을 목표로 하고 있습니다. 2024학년도에는 학생회실 시설개선, 학과 물품 대여사업, 학생회 웹사이트 개설, 감사준비위원회 등의 신규 사업을 펼치는 데에 집중하고 있습니다.</p>

                    <p className="mb-6 text-wrap font-semibold">"정원"은 학우 여러분의 소중한 의견을 듣고, 함께 문제를 해결해 나가며, 여러분의 대학 생활이 더욱 풍요롭고 의미 있는 시간이 될 수 있도록 최선을 다할 것입니다.</p>
                    <p className="mb-6 text-wrap font-semibold">학우 여러분과 함께 성장하고, 함께 꽃을 피우는 정보시스템학과를 만들어 가겠습니다.</p>
                    <p className="mb-6 text-wrap font-semibold">감사합니다.</p>
                    <p className="mt-6 font-semibold">제14대 정보시스템학과 학생회장 정희경</p>
                    <p className="font-semibold">제14대 정보시스템학과 부학생회장 홍현욱</p>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, scale:0.9}} 
                    animate={{opacity:1, scale:1}} 
                    transition={{duration:0.8, delay:0.4, ease:easeInOut}}
                    className="mb-16"
                >
                    <img src="/assets/images/1.jpg" alt="제14대 학생회 정원" className="rounded-lg shadow-xl max-w-full h-auto" style={{width: '600px'}} />
                    <p className="mt-4 text-sm text-gray-500">- 제14대 학생회 "정원" -</p>
                </motion.div>
            </div>
        </div>
    )
}