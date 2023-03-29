import React from 'react'
import Student_all from "./All_student/index";
import { useContext } from 'react';
import context_user from '../context_data/context_user';
function Daugiai() {
    const uid = useContext(context_user)
    if (uid === null || uid === undefined) return <>
        {/*<p>Tài khoản chưa được duyệt</p>*/}
        <Student_all />

    </>
    if (uid !== null && uid !== undefined) return <>

        <Student_all  />

    </>
}

export default Daugiai