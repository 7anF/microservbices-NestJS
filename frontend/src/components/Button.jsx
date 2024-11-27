import React from 'react'

const Button = ({ content }) => {
    return (
        <button
            type='button'
            className={`py-4 px-6 bg-blue-gradient font-poppins
            font-medium text-[24px] text-primary outline-none mt-10 rounded-xl`}
        >
            {content}
        </button>
    )
}

export default Button;
