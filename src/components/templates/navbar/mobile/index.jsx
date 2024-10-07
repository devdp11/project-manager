import MobileNavBarLayout from "./layout";

function MobileNavBarIndex( isAuthenticated ) {
    return (
        <div>
            <MobileNavBarLayout isAuthenticated={isAuthenticated} />
        </div>
    );
}
  
export default MobileNavBarIndex