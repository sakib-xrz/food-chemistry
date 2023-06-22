import useTitle from "../../lib/hooks/useTitle";
import Menu from "../../lib/modules/menu/Menu";

const MenuPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    useTitle("Menu");
    return (
        <div>
            <Menu />
        </div>
    );
};

export default MenuPage;
