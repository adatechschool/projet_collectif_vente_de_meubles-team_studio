export default function Navbar() {
    const showCart = () => {
        console.log('show cart')
    };
    const userConnect = () => {
        console.log('show connection')
    }

    return (
    <div className="bg-[#151515] relative h-10 items-center justify-center flex">
        {/* [] pour couleur hexadécimale */}
        <div className="flex items-center absolute">
            <img src="./img/logo.svg" width={90}/>
        </div>

        <div className="flex ml-auto space-x-2">
            <button type="button" onClick={showCart}>
                <img src="./img/cart.svg" className="h-5 w-5 " alt="Access cart"/>
            </button>
            <button type="button" onClick={userConnect}>
                <img src="./img/user.svg" className="h-5 w-5 mr-4" alt="Access count"/>
            </button>
        </div>
    </div>)
}