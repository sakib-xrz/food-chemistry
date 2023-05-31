import Menu from "../../lib/modules/menu/Menu";

const MenuPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    return (
        <div>
            <Menu />
        </div>
    );
};

export default MenuPage;