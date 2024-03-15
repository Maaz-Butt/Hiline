import { useState } from 'react';

function RenovationProcess() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanded2, setIsExpanded2] = useState(false);
    const [isExpanded3, setIsExpanded3] = useState(false);
    const [isExpanded4, setIsExpanded4] = useState(false);
    const [isExpanded5, setIsExpanded5] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };
    const toggleText2 = () => {
        setIsExpanded2(!isExpanded2);
    };
    const toggleText3 = () => {
        setIsExpanded3(!isExpanded3);
    };
    const toggleText4 = () => {
        setIsExpanded4(!isExpanded4);
    };
    const toggleText5 = () => {
        setIsExpanded5(!isExpanded5);
    };

    return (

        <div className='max-w-7xl m-auto mt-10 p-10 bg-gray-100 rounded-xl text-center' >
            <h1 className='text-4xl my-5 font-bold tracking-wide'>Our Renovation Process</h1>
            <p className='text-xl' >At <span className='text-orange-500'>Hiline</span>, we believe in a systematic and transparent approach to renovation. Our process ensures clear communication,
                efficient project management, and outstanding results. Here's an overview of how <span className='text-orange-500'>Hiline</span> works for you:</p>

            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div className="text-start mt-10 px-4">
                    <h2 className="text-xl font-bold mb-2">Initial Consultation</h2>
                    <p className="text-gray-700 mb-5">
                        {isExpanded ? (
                            <span>We begin by understanding your renovation goals, budget, and timeline. Our team will visit your space, assess its
                                current condition, and discuss design possibilities with you.</span>
                        ) : (
                            <span>
                                We begin by understanding your renovation goals<span>...</span>
                            </span>
                        )}
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleText}
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div className="text-start mt-10 px-4">
                    <h2 className="text-xl font-bold mb-2">Conceptualization and Design</h2>
                    <p className="text-gray-700 mb-5">
                        {isExpanded2 ? (
                            <span>We begin by understanding your renovation goals, budget, and timeline. Our team will visit your space, assess its
                                current condition, and discuss design possibilities with you.</span>
                        ) : (
                            <span>
                                We begin by understanding your renovation goals<span>...</span>
                            </span>
                        )}
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleText2}
                    >
                        {isExpanded2 ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div className="text-start mt-10 px-4">
                    <h2 className="text-xl font-bold mb-2">Construction and Execution</h2>
                    <p className="text-gray-700 mb-5">
                        {isExpanded3 ? (
                            <span>We begin by understanding your renovation goals, budget, and timeline. Our team will visit your space, assess its
                                current condition, and discuss design possibilities with you.</span>
                        ) : (
                            <span>
                                We begin by understanding your renovation goals<span>...</span>
                            </span>
                        )}
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleText3}
                    >
                        {isExpanded3 ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div className="text-start mt-10 px-4">
                    <h2 className="text-xl font-bold mb-2">Planning and Approval</h2>
                    <p className="text-gray-700 mb-5">
                        {isExpanded4 ? (
                            <span>We begin by understanding your renovation goals, budget, and timeline. Our team will visit your space, assess its
                                current condition, and discuss design possibilities with you.</span>
                        ) : (
                            <span>
                                We begin by understanding your renovation goals<span>...</span>
                            </span>
                        )}
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleText4}
                    >
                        {isExpanded4 ? 'Read Less' : 'Read More'}
                    </button>
                </div>
                <div className="text-start mt-10 px-4">
                    <h2 className="text-xl font-bold mb-2">Final Touches and Completion</h2>
                    <p className="text-gray-700 mb-5">
                        {isExpanded5 ? (
                            <span>We begin by understanding your renovation goals, budget, and timeline. Our team will visit your space, assess its
                                current condition, and discuss design possibilities with you.</span>
                        ) : (
                            <span>
                                We begin by understanding your renovation goals<span>...</span>
                            </span>
                        )}
                    </p>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={toggleText5}
                    >
                        {isExpanded5 ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>

    );
}

export default RenovationProcess;
