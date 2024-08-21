import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">HYU InfoSys</h3>
                        <p className="text-gray-400 mb-2">&copy; 2024 hyuinfosys All Rights Reserved.</p>
                        <p className="text-gray-400">Made by 신윤수 이송희 홍현욱 김하윤 이지환</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400 mb-2">서울특별시 성동구 왕십리로 222</p>
                        <p className="text-gray-400 mb-2">한양대학교 ITBT관 705호</p>
                        <p className="text-gray-400">hyuinfosys24@gmail.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link>
                            </li>
                            <li>
                                <Link to="/notice" className="text-gray-400 hover:text-white transition duration-300">Notice</Link>
                            </li>
                            <li>
                                <Link to="/activity" className="text-gray-400 hover:text-white transition duration-300">Activity</Link>
                            </li>
                            <li>
                                <Link to="/wiki" className="text-gray-400 hover:text-white transition duration-300">Wiki</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                    <p className="text-gray-400">© 2024 HYU InfoSys. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}