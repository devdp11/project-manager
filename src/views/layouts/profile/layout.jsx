import { Link, useLocation } from 'react-router-dom';
import { FaUser, FaClipboardList, FaMap, FaMoneyCheck } from 'react-icons/fa';

import ProfileRoutesIndex from './routes';

function ProfileLayout() {
    const location = useLocation();

    return (
        <div className='px-10 py-5 max-w-[1800px] mx-auto'>
            <div className="flex flex-col lg:flex-row gap-y-8 gap-x-12">
                <div className="lg:w-96 lg:flex-shrink-0">
                    <span className="font-bold text-2xl">
                        Bem vindo Diogo
                    </span>
                    <br />
                    <div className="relative inline-block group">
                        <button className="text-sm font-semibold text-black cursor-pointer hover:text-blue-600">
                            Terminar sessão
                        </button>
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
                    </div>

                    <div className="bg-white mt-6 py-8">
                        <p className="uppercase font-extrabold text-lg mb-7 px-8">Painel de conta</p>
                        <ul>
                            <li className={`px-8 mb-5 flex items-center gap-x-4 text-sm relative text-black ${location.pathname === '/profile' ? 'text-blue-600' : ''}`}>
                                <div className={`${location.pathname === '/profile' ? 'block' : 'hidden'} absolute left-0 h-full w-1 bg-blue-600`}></div>
                                <div className="contents group">
                                    <FaUser className="text-xl group-hover:text-blue-600 duration-150" />
                                    <Link to="/profile" className="font-bold group-hover:text-blue-600 duration-150">
                                        Dados pessoais
                                    </Link>
                                </div>
                            </li>
                            <li className={`px-8 mb-5 flex items-center gap-x-4 text-sm relative text-black ${location.pathname === '/profile/orders' ? 'text-blue-600' : ''}`}>
                                <div className={`${location.pathname === '/profile/orders' ? 'block' : 'hidden'} absolute left-0 h-full w-1 bg-blue-600`}></div>
                                <div className="contents group">
                                    <FaClipboardList className="text-xl group-hover:text-blue-600 duration-150" />
                                    <Link to="/profile/orders" className="font-bold group-hover:text-blue-600 duration-150">
                                        Encomendas e faturas
                                    </Link>
                                </div>
                            </li>
                            <li className={`px-8 mb-5 flex items-center gap-x-4 text-sm relative text-black ${location.pathname === '/profile/adress' ? 'text-blue-600' : ''}`}>
                                <div className={`${location.pathname === '/profile/adress' ? 'block' : 'hidden'} absolute left-0 h-full w-1 bg-blue-600`}></div>
                                <div className="contents group">
                                    <FaMap className="text-xl group-hover:text-blue-600 duration-150" />
                                    <Link to="/profile/adress" className="font-bold group-hover:text-blue-600 duration-150">
                                        Morada de faturação
                                    </Link>
                                </div>
                            </li>
                            <li className={`px-8 mb-5 flex items-center gap-x-4 text-sm relative text-black ${location.pathname === '/profile/payment' ? 'text-blue-600' : ''}`}>
                                <div className={`${location.pathname === '/profile/payment' ? 'block' : 'hidden'} absolute left-0 h-full w-1 bg-blue-600`}></div>
                                <div className="contents group">
                                    <FaMoneyCheck className="text-xl group-hover:text-blue-600 duration-150" />
                                    <Link to="/profile/payment" className="font-bold group-hover:text-blue-600 duration-150">
                                        Métodos de pagamento
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="h-screen w-full">
                    <ProfileRoutesIndex />
                </div>
            </div>
        </div>
    );
}

export default ProfileLayout;