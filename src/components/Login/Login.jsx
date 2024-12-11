import {Link} from "react-router-dom";
const Login = () => {
    return (
        <div className='text-white h-[100vh] flex items-center justify-center bg-cover'>
            <div className={'bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-blur-lg bg-opacity-30 relative '}>
                <h1 className={'text-20xl font-bold text-center mb-6'}>ورود</h1>
                <form action={''}>
                    <div className={'relative my-4'}>
                        <input type="text" className={'block w-72 py-2.5 px-0 text-sm text-white bg-transparent' +
                            ' border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 ' +
                            'focus:outline-none focus:ring-0 focus:text-white ' +
                            'focus:border-blue-600 peer'} />
                        <label htmlFor="" className={'absolute text-sm duration-300 transform -translate scale-75 top-3' +
                            ' -z-10 origin-[0] peer-focus:left-0 peer:focus:text-blue-600 ' +
                            'peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 ' +
                            'peer-focus:scale-75 peer-focus:-translate-y-6'}>نام کاربری</label>
                    </div>
                    <div className={'relative my-4'}>
                        <input type="password" className={'block w-72 py-2.5 px-0 text-sm text-white bg-transparent' +
                            ' border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 ' +
                            'focus:outline-none focus:ring-0 focus:text-white ' +
                            'focus:border-blue-600 peer'} />
                        <label htmlFor="" className={'absolute text-sm duration-300 transform -translate scale-75 top-3' +
                            ' -z-10 origin-[0] peer-focus:left-0 peer:focus:text-blue-600 ' +
                            'peer-focus:dark:text-blue-300 peer-placeholder-shown:scale-100 ' +
                            'peer-focus:scale-75 peer-focus:-translate-y-6'}>پسوورد</label>
                    </div>
                    <div>
                        <Link to={'/submit'} type={'submit'}> <button className={
                            'w-full mb-4 text-[18px]' +
                            'mt-6 rounded bg-blue-600 py-2 hover:bg-blue-500' +
                            'transition-colors duration-300'}>
                            Login
                        </button> </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;