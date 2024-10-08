import ComputerNavBarLayout from "./layout";

function ComputerNavBarIndex({ isAuthenticated, isLandindPage }) {
    return (
        <ComputerNavBarLayout isAuthenticated={isAuthenticated} isLandindPage={isLandindPage} />
    );
}
  
export default ComputerNavBarIndex