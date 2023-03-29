import React, {useEffect, useState} from 'react'
import {url_one} from "../server";

function Home({sign_up_sign_in, signout, signin_cre, user}) {

    return (<>
            <h1>Đăng nhập qua Google để sử dụng</h1>
            <h3>IOS(trên Safari) phải tắt chức năng chặn Cookie và tắt chức năng chặn bật Popup để hoạt động</h3>
            <p>App load từ server miễn phí, có cold start,tải dữ liệu hơi nhiều nên lúc mới bật qua mục GIẢI sẽ hơi chậm lúc đầu</p>
            <ul > <h4>Thứ tự</h4>
                <li>Sign in qua Google, thành công => popup thông báo(cold start sẽ đợi hơi lâu)</li>
                <li>Không Sign in không thể sử dụng App được</li>
                <li>Nếu cần làm mới danh sách, copy excel trong mục Guide: on và paste vào data</li>
                <li>Giải: Dùng App với một Client khác, Client 1 nhập thông tin, Client 2 có thể dùng nút Sync để lấy dữ liệu vòng đấu, App thi đấu 5 vòng tối đa, có thể thuyết trình cụ thể hơn trong khi phỏng vấn</li>
                <li>Mục Data, Click vào Load để hiển thị kết quả thi đấu hiện tại</li>
            </ul>
            <div>
                <button className="pairing" onClick={sign_up_sign_in}>Sign in</button>
                <button className="pairing" onClick={signout}>Sign out</button>
                <Guide/>
            </div>

        </>
    )
}

function Guide() {
    const [display, setdis] = useState(false)

    function on_off() {
        setdis(!display)
    }

    if (display === true) return <>
        <button className="pairing" onClick={on_off}>Guide: Off</button>
        <br/>
        <iframe style={{height: '48em'}}
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQjhVS5q4Q1YRVbregBstIcCKPjsar_dqyG1cFJuSxcM0uvaUyV145xu3xTNrBdiZuWlsq-Om-J_l00/pubhtml?widget=true&amp;headers=false">
        </iframe>
        <br/>
        <img src={require("./guide1.png")}/>
        <br/>
        <img src={require("./guide2.PNG")}/>
    </>
    if (display === false) return <>
        <button className="pairing" onClick={on_off}>Guide: On</button>

    </>
}


export default Home