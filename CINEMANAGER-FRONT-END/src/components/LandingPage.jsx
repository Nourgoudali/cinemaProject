import background1 from '../assets/avatar.png';
import background2 from '../assets/background2.jpeg';
import background3 from '../assets/background3.jpeg';
import NavBar from "./NavBar.jsx";
import { useState, useEffect } from "react";

const cards = [
    {
        id: 1,
        background: background1,
        title: "Avatar: The Way of Water",
        duration: "180 mins",
    },
    {
        id: 2,
        background: background2,
        title: "Dark Knight",
        duration: "200 mins",
    },
    {
        id: 3,
        background: background3,
        title: "Fast & Furious",
        duration: "140 mins",
    },
];

function LandingPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === cards.length - 1 ? 0 : prevIndex + 1
                );
                setIsVisible(true);
            }, 200);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentCard = cards[currentIndex];

    return (
        <div
            className={`relative h-screen bg-cover bg-center transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${currentCard.background})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent w-full h-full">
                <NavBar className="relative z-40" />
                <div
                    className={`text-white w-[38%] px-32 py-48 transition-opacity duration-500 ${
                        isVisible ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <h1 className="text-7xl font-serif font-bold">
                        {currentCard.title}
                    </h1>
                    <p className="font-serif py-5 text-md">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium aperiam culpa distinctio dolorem doloremque, ea eos et
                        exercitationem expedita facere facilis illum ipsum minima natus
                        neque nesciunt non odio omnis optio pariatur, praesentium quidem
                        recusandae rem saepe unde ut voluptas...
                        <span className="text-amber-300 hover:underline cursor-pointer">
              {" "}
                            See More
            </span>
                    </p>
                    <div className="flex gap-4">
                        <button className="px-10 py-2 rounded-md bg-transparent text-white font-medium font-serif border hover:bg-white hover:text-black duration-500">
                            Watch Trailer
                        </button>
                        <button className="px-10 py-2 rounded-md bg-amber-300 text-black font-medium font-serif hover:bg-white duration-500">
                            Détails
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
