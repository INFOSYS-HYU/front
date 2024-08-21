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
                    <p className="mb-6">KUCC 는 "컴퓨터" 라는 공통된 관심사를 통해 다른 이들과 소통하고 도전하고자 하는 열망을 가진 사람들이 모인 고려대학교 중앙 컴퓨터 동아리입니다. KUCC의 전신은 1973년 전산고우회로, 현재까지 컴퓨터에 대해 더 학습하고 싶고, 각자의 지식을 나누고 싶은 분들과 함께 그 역사를 이어가고 있습니다.</p>
                    <p className="text-2xl font-semibold font-serif text-center text-blue-600 my-8">『 Code, Communicate, Challenge! 』</p>
                    <p>KUCC 는 컴퓨터 분야의 넓이와 깊이 모두를 체험할 수 있는 유일무이한 플랫폼 입니다. 부원들은 매 학기 KUCC에서 자체 운영하는 스터디와 세션을 통해 서로 가르치고 배우며 컴퓨터 분야에 대한 지식을 넓힐 수 있습니다. 더 나아가서, 팀을 꾸려 대회에 나가거나 프로젝트를 진행하여 깊이 있는 결과물을 만들어내는 활동 또한 활발하게 이루어지고 있습니다.</p>
                </motion.div>

                <motion.div 
                    initial={{opacity:0, scale:0.9}} 
                    animate={{opacity:1, scale:1}} 
                    transition={{duration:0.8, delay:0.4, ease:easeInOut}}
                    className="mb-16"
                >
                    <img src="/assets/images/1.jpg" alt="KUCC 창립 50주년 홈커밍데이" className="rounded-lg shadow-xl max-w-full h-auto" style={{width: '600px'}} />
                    <p className="mt-4 text-sm text-gray-500">- KUCC 창립 50주년 홈커밍데이 -</p>
                </motion.div>

                {["도전하고자 하는 분께 날개를", "시작하고자 하는 분께 발판을"].map((title, index) => (
                    <motion.div 
                        key={index}
                        initial={{opacity:0, y:40}} 
                        whileInView={{opacity:1, y:0}} 
                        viewport={{once:true}} 
                        transition={{duration:0.8, delay:0.2 * index, ease:easeInOut}}
                        className="mb-12 bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full"
                    >
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">"{title}"</h2>
                        <p className="text-left text-gray-600">
                            {index === 0 
                                ? "프로그래밍 언어를 다룰 줄 아신다면 KUCC에서 도약하십시오. KUCC는 자체 프로젝트 및 해커톤, 게임잼 운영을 통해 보다 심도 있는 학습 / 함께하는 개발 경험을 제공합니다."
                                : "KUCC는 초심자분들이 프로그래밍에 진입하는 문턱을 낮추기 위해 노력합니다. 개발 경험이 없더라도 초심자분들이 다양한 스터디와 세션을 통해 원하는 컴퓨터 분야에 쉽게 입문할 수 있는 환경을 제공합니다."
                            }
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}