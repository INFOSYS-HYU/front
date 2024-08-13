import React from 'react';

export default function Banner({ text }: { text: string }) {
    return (
        <div className="relative bg-black w-full h-64 flex justify-center items-stretch overflow-hidden">
            <div 
                style={{backgroundImage:"url(/assets/images/bannerL.png)"}} 
                className="absolute left-0 bg-no-repeat h-full w-full bg-contain bg-left"
            ></div>
            <div className="flex-grow flex justify-center items-center z-10">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center px-4">
                    {text}
                </h1>
            </div>
            <div 
                style={{backgroundImage:"url(/assets/images/bannerR.png)"}} 
                className="absolute right-0 bg-no-repeat h-full w-full bg-contain bg-right"
            ></div>
        </div>
    );
}