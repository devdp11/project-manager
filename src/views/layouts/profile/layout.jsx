import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaMoneyCheck } from 'react-icons/fa';

import { UseAppContext } from '../../../utils/hooks/UseAppContext';
import ProfileRoutesIndex from './routes';

function ProfileLayout() {
    const location = useLocation();
    const { logout } = UseAppContext();

    return (
        <div className='px-10 py-5 max-w-[1800px] mx-auto'>
            <div className="flex flex-col lg:flex-row gap-y-8 gap-x-12">
                <div className="lg:w-80 lg:flex-shrink-0">
                    <span className="font-bold text-xl sm:text-2xl">
                        Welcome Diogo
                    </span>
                    <br />
                    <div className="relative inline-block group">
                        <button className="text:xs sm:text-base font-normal text-black cursor-pointer hover:text-blue-600" onClick={logout}>
                            Sign out
                        </button>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                    </div>

                    <div className="bg-gray-100 mt-6 py-8">
                        <p className="uppercase font-extrabold text-base sm:text-lg mb-7 px-8">Dashboard</p>
                        <ul>
                            <li className={`px-8 mb-5 flex items-center gap-x-4 text-sm relative text-black ${location.pathname === '/profile' ? 'text-blue-600' : ''}`}>
                                <div className={`${location.pathname === '/profile' ? 'block' : 'hidden'} absolute left-0 h-full w-1 bg-blue-600`}></div>
                                <div className="contents group">
                                    <FaUser className="text-sm sm:text-xl group-hover:text-blue-600 duration-150" />
                                    <Link to="/profile" className="font-bold group-hover:text-blue-600 duration-150">
                                        Account Data
                                    </Link>
                                </div>
                            </li>
                            <li className={`px-8 mb-5 flex items-center gap-x-4 text-sm relative text-black ${location.pathname === '/profile/payment' ? 'text-blue-600' : ''}`}>
                                <div className={`${location.pathname === '/profile/payment' ? 'block' : 'hidden'} absolute left-0 h-full w-1 bg-blue-600`}></div>
                                <div className="contents group">
                                    <FaMoneyCheck className="text-sm sm:text-xl group-hover:text-blue-600 duration-150" />
                                    <Link to="/profile/payment" className="font-bold group-hover:text-blue-600 duration-150">
                                        Payment Methods
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden lg:block flex-col bg-gray-100 mt-6 py-8">
                        <p className="uppercase font-extrabold text-base sm:text-lg mb-2 px-8">Need Help?</p>
                        <p className="text-sm text-gray-800 px-8">
                            Ask our support team for help!
                            <Link to="#" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                Open a ticket here.
                            </Link>
                        </p>
                    </div>
                </div>
                

                <div className="w-full">
                    <ProfileRoutesIndex />

                    <div className="block lg:hidden flex-col bg-gray-100 mt-6 py-8">
                        <p className="uppercase font-extrabold text-base sm:text-lg mb-2 px-8">Necessita ajuda?</p>
                        <p className="text-sm text-gray-800 px-8">
                            Peça ajuda à equipa de suporte!
                            <Link to="#" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                                Abra um ticket aqui.
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;