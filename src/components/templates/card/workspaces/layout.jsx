import React from 'react';
import { Link } from 'react-router-dom';

const CardLayout = ({ contents }) => {
    return (
        <>
            {Array.isArray(contents) && contents.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {contents.map((content, index) => {
                        const createdDate = new Date(content.createdAt || content.created_at);
                        const formattedDate = createdDate.toString() !== "Invalid Date" ? createdDate.toLocaleDateString() : "Invalid Date";
    
                        return (
                            <div key={content.uuid || index} className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 h-full min-h-[120px]">
                                <Link to={`/workspace/${content.uuid}/projects`}>
                                    <div className="p-4 cursor-pointer flex flex-col justify-between h-full">
                                        <div className='grid grid-cols-1 sm:grid-cols-2 items-center min-h-[40px]'>
                                            <h2 className="text-base sm:text-lg font-bold text-gray-800">{content.name}</h2>
                                            <p className="text-gray-600 text-xs sm:text-right">{formattedDate}</p>
                                        </div>
        
                                        <div className='mt-auto flex justify-between'>
                                            <div />
                                            <div className='z-50'>
                                                <p className="text-xs text-gray-600 hover:font-bold hover:text-blue-600">{content.totalOfMembers} Users</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="flex justify-center items-center h-full">
                    <p className="text-red-600 font-bold text-lg">No content available.</p>
                </div>
            )}
        </>
    );
}

export default CardLayout;