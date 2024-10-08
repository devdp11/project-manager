import { useState } from 'react';

import { TextField, InputAdornment, IconButton } from '@mui/material';
import { FaEye, FaEyeSlash } from "react-icons/fa";

function DetailsLayout() {
    const title = "Dados pessoais";

    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const HandleOldPassword = () => setShowOldPassword(!showOldPassword);
    const HandleNewPassword = () => setShowNewPassword(!showNewPassword);
    const HandleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
    
    return (
        <>
            <div className="flex items-center">
                <div className="w-[3px] h-8 bg-blue-600 mr-3"></div>
                <h1 className="page_title font-semibold relative text-2xl">{title}</h1>
            </div>

            <div className='bg-white mt-12 p-4'>
                <h2 className="font-black text-base sm:text-lg">Dados da Minha Conta</h2>
                <form className="mt-8 grid gap-x-6 gap-y-8 grid-cols-1 md:grid-cols-2">
                    <TextField
                        id="firstname" label="Primeiro Nome"
                        variant="outlined" required fullWidth />
                    
                    <TextField
                        id="lastname" label="Último Nome"
                        variant="outlined" required fullWidth />
                    
                    <TextField
                        id="email" label="E-mail" type="email"
                        variant="outlined" required fullWidth />
                    
                    <TextField
                        id="birthdate" label="Data de Nascimento" type="date"
                        variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
                    
                    <div className="col-span-1 md:col-span-2">
                        <button className="p-5 bg-blue-600 hover:bg-blue-700 duration-200 text-white border border-blue-600 text-sm md:text-base font-semibold h-12 flex items-center justify-center rounded-md" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>

            <div className='bg-white mt-12 p-4'>
                <h2 className="font-black text-base sm:text-lg">Segurança e Privacidade</h2>
                <form className="mt-8 grid gap-x-6 gap-y-8 grid-cols-1">
                    <input type="text" name="username" autoComplete="off" className="hidden" />
                    
                    <TextField id="oldpassword" label="Password Antiga" type={showOldPassword ? "text" : "password"}
                        variant="outlined" required fullWidth
                        autoComplete='oldpassword'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="view password" onClick={HandleOldPassword} edge="end" >
                                        {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                                    </IconButton>
                                </InputAdornment> 
                            )
                        }} 
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField id="newpassword" label="Password Nova" type={showNewPassword ? "text" : "password"}
                            variant="outlined" required fullWidth
                            autoComplete='new-password' 
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="view password" onClick={HandleNewPassword} edge="end" >
                                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                                        </IconButton>
                                    </InputAdornment> 
                                )
                            }} 
                        />

                        <TextField id="confirmnewpassword" label="Confirmar Password" type={showConfirmPassword ? "text" : "password"}
                            variant="outlined" required fullWidth
                            autoComplete='new-password'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton aria-label="view password" onClick={HandleConfirmPassword} edge="end" >
                                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                        </IconButton>
                                    </InputAdornment> 
                                )
                            }}
                        />
                    </div>
                    
                    <div className="col-span-1">
                        <button className="p-5 bg-blue-600 hover:bg-blue-700 duration-200 text-white border border-blue-600 text-sm md:text-base font-semibold h-12 flex items-center justify-center rounded-md" type="submit">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default DetailsLayout;