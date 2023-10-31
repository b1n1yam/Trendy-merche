import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useLoginModal } from "../../store/useStore"
import { useRegisterModal } from "../../store/useStore";
import useCartStore from "../../store/useStore";
import Button from "../Button";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
const RegisterModal = () => {
    // const router = useRouter();
    const { cart } = useCartStore();
    const { isOpen, onOpen, onClose } = useLoginModal();
    const { isRegisterOpen, onRegisterOpen, onRegisterClose } = useRegisterModal();
    const [isCategoriyopen, setIsCategoryOpen] = useState(false);
    const [isCustomerCoreopen, setIsCustomerCoreOpen] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isPageopen, setIsPageOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [email, setemail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [middleName, setmiddleName] = useState('');
    const [lastName, setlastName] = useState('');
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    // const [value, setValue] = useState('');

    const handleSignUp = () => {
        setIsLoading(true)

        const data = {
            "firstName": firstName,
            "lastName": lastName,
            "age": 23,
            "email": value,
            "username": username,
            "password": password,
            "name": middleName,
            "roleIds": [
                1, 2, 3
            ]
        }
        axios.post('https://gray-average-barnacle.cyclic.cloud/auth/signup', data).
            then((response) => { console.log('Login Response', response?.data), setIsLoading(false) }).catch((err) => console.log('Error', err))
    }
    const handleClose = () => {
        onClose()
        onRegisterClose()

    }
    const footer = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />


            <div className="
          text-neutral-500 text-center mt-4 font-light">
                <p>Already have an account?
                    <span
                        onClick={() => { onRegisterClose(), onOpen() }}
                        className="
                  text-red-700
                  font-bold
                  cursor-pointer 
                  hover:underline
                "
                    > Login</span>
                </p>
            </div>
        </div>
    )
    return (
        <div>
            <div
                className="
justify-center 
items-center 
flex 
overflow-x-hidden 
overflow-y-auto 
fixed 
inset-0 
z-50
outline-none 
focus:outline-none
bg-neutral-800/70
"
            >
                <div className="relative 
                         w-full
                         md:w-4/6
                         lg:w-3/6
                         xl:w-2/5
                         my-6
                         mx-auto 
                         h-full 
                         lg:h-auto
                         md:h-auto
                         "
                >
                    <div className={`
            translate
            duration-300
            h-full
            ${true ? 'translate-y-0' : 'translate-y-full'}
            ${true ? 'opacity-100' : 'opacity-0'}
          `}>
                        <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
                        >
                            {/*header*/}
                            <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
                            >
                                <button
                                    className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                                    onClick={handleClose}
                                >
                                    <IoMdClose size={18} color="black" />
                                </button>
                                <div className="text-lg font-semibold">
                                    {/* {title} */}
                                    <p className="text-black">Register</p>
                                </div>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                {/* {body} */}
                                <p className="text-black">Welcome back</p>
                                <p className="text-black">Create your account Here!</p>
                                <input
                                    id={'Email'}
                                    disabled={false}
                                    onChange={e => { setemail(e.currentTarget.value); }}
                                    // {...register(id, { required })}
                                    placeholder="someone@gmail.com"
                                    type="email"
                                    className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          my-5
          ${true ? 'pl-9' : 'pl-4'}
          ${true ? 'border-rose-500' : 'border-neutral-300'}
          ${true ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
                                />
                                <input
                                    id={'firstName'}
                                    disabled={false}
                                    onChange={e => { setfirstName(e.currentTarget.value); }}
                                    // {...register(id, { required })}
                                    placeholder="John"
                                    type=""
                                    className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          my-5
          ${true ? 'pl-9' : 'pl-4'}
          ${true ? 'border-rose-500' : 'border-neutral-300'}
          ${true ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
                                />
                                <input
                                    id={'middleName'}
                                    disabled={false}
                                    // {...register(id, { required })}
                                    placeholder="Middle Name"
                                    onChange={e => { setmiddleName(e.currentTarget.value); }}
                                    className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          my-5
          ${true ? 'pl-9' : 'pl-4'}
          ${true ? 'border-rose-500' : 'border-neutral-300'}
          ${true ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
                                />
                                <input
                                    id={'lastName'}
                                    disabled={false}
                                    // {...register(id, { required })}
                                    placeholder="Last Name"
                                    onChange={e => { setlastName(e.currentTarget.value); }}
                                    className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          my-5
          ${true ? 'pl-9' : 'pl-4'}
          ${true ? 'border-rose-500' : 'border-neutral-300'}
          ${true ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
                                />
                                <input
                                    id={'username'}
                                    disabled={false}
                                    // {...register(id, { required })}
                                    placeholder="username"
                                    onChange={e => { setusername(e.currentTarget.value); }}
                                    className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          my-5
          ${true ? 'pl-9' : 'pl-4'}
          ${true ? 'border-rose-500' : 'border-neutral-300'}
          ${true ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
                                />
                                <input
                                    id={'Password'}
                                    disabled={false}
                                    // {...register(id, { required })}
                                    onChange={e => { setPassword(e.currentTarget.value); }}
                                    placeholder="password"
                                    type="password"
                                    className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          my-5
          ${true ? 'pl-9' : 'pl-4'}
          ${true ? 'border-rose-500' : 'border-neutral-300'}
          ${true ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
                                />

                            </div>
                            {/* {footer} */}
                            <div className="flex flex-col gap-2 p-6">
                                <div
                                    className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                                >

                                    <Button
                                        disabled={false}
                                        label={'Next'}
                                        loading={isLoading}
                                        onClick={handleSignUp}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
}
export default RegisterModal;