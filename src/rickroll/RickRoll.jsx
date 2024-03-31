import React, { useEffect, useState } from 'react';
import ReactPlayer from "react-player";

const RickrollPage = () => {
    const [firstLoad, setFirstLoad] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setFirstLoad(true)
        }, 1500);
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-700 to-pink-500 flex justify-center items-center">
            <div className="w-3/4  p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl text-gray-500 font-bold text-center mb-8">Happy April Fool 🐂 🚀</h1>
                <div className="flex justify-center flex-col aspect-w-16 aspect-h-9">
                    {
                        firstLoad &&
                        <>
                            <div>

                                <iframe className='mx-auto' allow="fullscreen" frameBorder="0" height="400" src="https://giphy.com/embed/OwPmWT3wcdov9C6udf/video" width="480"></iframe>
                            </div>
                            <h1 className="my-4 text-3xl text-purple-400 font-bold text-center mb-8">Không thể tự phát nhạc do browser bảo vệ đôi tai của bạn (khỏi ngày này)</h1>
                        </>}
                </div>

            </div>
        </div>
    );
};

export default RickrollPage;
