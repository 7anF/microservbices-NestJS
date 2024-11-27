import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full
        bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} bg-primary w-[100%]
            h-[100%] rounded-full flex-col`}>
                <div className={`${styles.flexStart} gap-2`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img
                            src={arrowUp} 
                            alt="arrow Up"
                            className="w-[23px] h-[23px]" 
                    />
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    )
}

export default GetStarted;
