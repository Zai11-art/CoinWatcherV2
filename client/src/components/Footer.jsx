import { Link } from "react-router-dom";

function Footer() {
    let footerLinks = [
        {name:'Home' ,link: '/Home', id: 1},
        {name:'Apps' ,link: '/Apps', id: 2},
        {name:'News' ,link: '/News', id: 3},
        {name:'About' ,link: '/About', id: 4},
    ]

    let iconLinks = [
        {icon: <ion-icon name="logo-github"></ion-icon>, link:'/', id:1},
        {icon: <ion-icon name="logo-twitter"></ion-icon>, link:'/', id:2},
        {icon: <ion-icon name="logo-discord"></ion-icon>, link:'/', id:3},
        {icon: <ion-icon name="logo-instagram"></ion-icon>, link:'/', id:4},
    ]

    const textAnimation = "duration-150 ease-in-out hover:scale-[1.04] hover:text-[#c9f1fe]"
    return ( 
        <div className="">
            <div className="w-full h-[2px] bg-[#9ccddc]"></div>
            <footer className="w-full md:h-[120px] h-[140px] bg-[#041017] flex md:flex-row flex-col 
            items-center justify-center md:justify-between md:py-3 ">
                
                    <div className="md:ml-7 md:pb-1 pb-2">
                        <h1 className="text-white text-2xl font-bold ">
                            <span className="text-glow">CoinWatch</span>
                        <span className="span-material text-3xl">.Io</span> </h1>
                    </div>
                    <div className="md:ml-[50px] md:pb-1 pb-2">
                        <ul className="flex flex-row ">
                        {
                            footerLinks.map(link => 
                            <Link  key={link.id} to={link.link}><li className={`text-white md:text-md font-semibold text-sm mx-4 ${textAnimation}`} key={link.id}>{link.name}</li></Link>
                            )
                        }
                        </ul>
                    </div>
                    <div className="md:mr-7 md:py-1 py-2">
                    <ul className="flex flex-row ">
                        {
                            iconLinks.map(link => 
                            <a href={link.link}  key={link.id}><li className={`text-white px-2 md:text-lg md:mr-5 ${textAnimation}`} key={link.id}>{link.icon}</li></a>
                            )
                        }
                        </ul>
                    </div>
            
        
            </footer>
        </div>
     );
}

export default Footer;
