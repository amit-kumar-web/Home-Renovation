import React, { useState, useEffect } from 'react';


const profiles = [
    {
        name: "APARTMENT",
        rating: 4.4,
        location: "Sirsa, Haryana",
        image: "/pic/ap.jpg",
        alt: "Portrait of Donna Yancey"
    },
    {
        name: "HOUSE",
        rating: 5.0,
        location: "Delhi, India",
        image: "/pic/house.jpg",
        alt: "Portrait of James Amen"
    },
    {
        name: "BATHROOM",
        rating: 5.0,
        location: "Sirsa, Haryana",
        image: "/pic/bathroom.jpg",
        alt: "Portrait of Marvin Downey"
    },
    {
        name: "KITCHEN",
        rating: 4.4,
        location: "Hisar, Haryana",
        image: "/pic/kitchen_classic.jpg",
        alt: "Portrait of Betty Hairston"
    },
    {
        name: "BEDROOM",
        rating: 4.4,
        location: "Rohtak, Haryana",
        image: "/pic/bedroom.jpg"
    },
    {
        name: "LIVING ROOM",
        rating: 4.4,
        location: "Bathinda, punjab",
        image: "/pic/living_room.jpg"
    },
    {
        name: "Modular Interiors",
        rating: 4.4,
        location: "Chandigarh, india",
        image: "/pic/modular.avif"
    },
    {
        name: "Full Home Interiors",
        rating: 4.4,
        location: "Mumbai, Maharastra",
        image: "/pic/full-home.avif"
    },
    {
        name: "Luxury Interiors",
        rating: 4.4,
        location: "Gurguram, Haryana",
        image: "/pic/bad.avif"
    },
    {
        name: "Renovations",
       
        rating: 4.4,
        location: "Sirsa, Haryana",
        image: "/pic/reno.avif"
    },
    {
        name: "APARTMENT",
        rating: 4.4,
        location: "Sirsa, Haryana",
        image: "/pic/ap.jpg"
    },
    {
        name: "LIVING ROOM",
        rating: 4.4,
        location: "Delhi, India",
        image: "/pic/living_room.jpg"
    }
];

function ProfileCard({ profile }) {

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden m-4">
            <img className="w-[250px] h-48 object-cover  animate-pulse" src={profile.image} alt={profile.alt} />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{profile.name}</h2>
                <p className="text-gray-600">{profile.title}</p>
                <div className="flex items-center mt-2">
                    <div className="flex text-yellow-500">
                        {[...Array(5)].map((star, index) => (
                            <i key={index} className={`fas fa-star ${index < Math.floor(profile.rating)}` ? '' : 'text-gray-300'}></i>
                        ))}
                    </div>
                    <span className="ml-2 text-gray-600">{profile.rating}</span>
                </div>
                <div className="flex items-center mt-2 text-gray-600">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>{profile.location}</span>
                </div>
            </div>  
        </div>
    );
}

function Slider() {
    const [idx, setIdx] = useState(0);

    let arr = [];
    for(let i=idx; i <= idx+3; i++) {
        arr.push(profiles[i])
    }

    console.log(idx)

    useEffect(() => {
        let id = setInterval(() => {
            setIdx(prev => (prev+4)%profiles.length);
        }, 2000)

        return () => {
            clearInterval(id)
        }
    }, [])
    
    return (
        <div className="flex flex-wrap justify-center">
            {arr.map((profile, index) => (
                <ProfileCard key={index} profile={profile} />
            ))}
        </div>
    );
}

export default Slider