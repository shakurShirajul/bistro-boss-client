import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            });
    }, [])
    return (
        <div className="mb-12">
            <SectionTitle heading="From Our Menu"
                subheading="Popular Items"
            />
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item=>
                        <MenuItem key={item._id}
                            item={item}/>
                    )
                }
            </div>
        </div>
    );
};

export default PopularMenu;