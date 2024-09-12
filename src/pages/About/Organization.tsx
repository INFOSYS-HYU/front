import Banner from "@/components/ui/banner";
import { useState } from "react";
import { motion } from "framer-motion";

const departments = ["회장단", "재무국", "홍보개발국", "사무국", "감사국"];

const members = [
    [
        { name: "정희경", photo: "/assets/images/president1.jpg" },
        { name: "홍현욱", photo: "/assets/images/vicepresident1.jpg" },
    ],
    [
        { name: "윤진", photo: "/assets/images/finance1.jpg" },
        { name: "이지환", photo: "/assets/images/finance2.jpg" },
        { name: "조예나", photo: "/assets/images/finance3.jpg" },
        { name: "이상훈", photo: "/assets/images/finance4.jpg" },
    ],
    [
        { name: "김승희", photo: "/assets/images/pr1.jpg" },
        { name: "김하윤", photo: "/assets/images/dev1.jpg" },
        { name: "손동진", photo: "/assets/images/design1.jpg" },
        { name: "조승준", photo: "/assets/images/design2.jpg" },
    ],
    [
        { name: "장시현", photo: "/assets/images/admin1.jpg" },
        { name: "이다인", photo: "/assets/images/admin2.jpg" },
        { name: "장효진", photo: "/assets/images/admin3.jpg" },
        { name: "강서윤", photo: "/assets/images/admin4.jpg" },
    ],
    [
        { name: "조감사", photo: "/assets/images/audit1.jpg" },
        { name: "권평가", photo: "/assets/images/audit2.jpg" },
        { name: "차검토", photo: "/assets/images/audit3.jpg" },
    ],
];

export default function Organization() {
    const [selectedDept, setSelectedDept] = useState(0);

    return (
        <div className="bg-white min-h-screen">
            <Banner text="조직도" />
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {departments.map((dept, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedDept(index)}
                            className={`px-6 py-3 rounded-full text-lg font-semibold transition-all ${
                                selectedDept === index
                                    ? "bg-black text-white"
                                    : "bg-gray-100 text-black hover:bg-gray-200"
                            }`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>
                
                <motion.div
                    key={selectedDept}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <h2 className="text-4xl font-bold text-center mb-12 text-black">
                        {departments[selectedDept]}
                    </h2>
                    <div className="flex flex-col justify-center md:flex-row gap-12">
                        {members[selectedDept].map((member, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative overflow-hidden h-80 w-80 rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-full h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-xl font-semibold">{member.name}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}