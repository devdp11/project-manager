import { Route, Routes } from 'react-router-dom';

import DetailsForm from '../sections/details';
import PaymentsForm from '../sections/payments';
import ExceptionForm from '../sections/exceptions';

function ProfileRoutesLogic() {

    return (
        <>
            <Routes>
                <Route path="" element={<DetailsForm />} />
                <Route path="/payment" element={<PaymentsForm />} />
                <Route path="/*" element={<ExceptionForm />} />
            </Routes>
        </>
    );
}
  
export default ProfileRoutesLogic