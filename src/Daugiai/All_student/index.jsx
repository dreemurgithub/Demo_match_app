/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from 'react'
import Student_state from './Student'
import context_data from '../../context_data'
import context_match from '../../context_data/match'
import blinking from './d5bd8ce4d450554d73cd94e438d5f0f4.gif'
import {url_one} from "../../server";

function Student_all() {
    const [all_student, set_all] = useState([])
    const [all_student_details, set_all_detail] = useState(null)
    const [match, set_match] = useState([0, ['block', 'none', 'none', 'none', 'none']])
    function pairing_2(e) {
        //if (match[0] === 0) return
        const arr_all_keys = Object.keys(all_student_details)
        const arr_nodes = arr_all_keys.map(el => document.querySelector(`#text${el}`))
        console.log(arr_nodes)
        if (arr_nodes.includes(null) || arr_nodes.includes(undefined)) {
            alert('Đợi load hết đã nhé')
            return
        }
        const arr_all_result_now = arr_all_keys.map(el => all_student_details[el].result[match[0] - 1])
        const game = parseInt(e.target.textContent)
        if (arr_all_result_now.includes(0) && match[0] > 0 && match[0] < game) {
            alert('Hiện tại vẫn còn bàn đấu chưa xong, Click vào Sync để update rồi check lại')
            return
        }
        if (game === 1) {
            set_match([game, ['block', 'none', 'none', 'none', 'none']])
        }
        if (game === 2) {
            set_match([game, ['none', 'block', 'none', 'none', 'none']])
        }
        if (game === 3) {
            set_match([game, ['none', 'none', 'block', 'none', 'none']])
        }
        if (game === 4) {
            set_match([game, ['none', 'none', 'none', 'block', 'none']])
        }
        if (game === 5) {
            set_match([game, ['none', 'none', 'none', 'none', 'block']])
        }
        //pairing(e)
        //pairing(e)
        //bắt buộc chạy 2 lần mới xếp được order??? đéo biết vì sao
        document.querySelectorAll('.tick').forEach(el => { if (el.checked === true) el.click() })
    }
    function pairing() {
        console.log('pairing')
        if (match[0] === 0) return
        const node_result = Array.from(document.querySelectorAll('.result_check'))
        const arr_node_result = node_result.map(el => el.value)
        const leng_part = arr_node_result.length / 5
        const check_arr = []; for (let i = leng_part * (match - 2); i < leng_part * (match - 1); i++) check_arr.push(arr_node_result[i])
        const array = []


        for (const props_name in all_student_details) {
            let a = all_student_details[props_name].sum_diem
            for (let i = match[0] - 1; i < 5; i++) a -= all_student_details[props_name].result[i]
            array.push({ sum_diem: a, id: all_student_details[props_name].id, all_sum_diem: all_student_details[props_name].sum_diem })
        }
        array.sort((a, b) => b.sum_diem - a.sum_diem)
        let order_item = 0;
        for (let i = 0; i < array.length; i++) {
            console.log(array[i])
            if (array[i].all_sum_diem >= 0) {
                array[i]['order'] = order_item.toString()
                order_item += 1
            } //tăng tiến order chỉ khi order trước là số <1000
            if (array[i].all_sum_diem < 0) array[i]['order'] = '1000'
            localStorage.setItem(array[i]['id'], array[i]['order'])
            document.querySelectorAll('.player>.order_player')[i].click()
        }
        //document.querySelectorAll('.player>.order_player').forEach(el => el.click())


        for (let k = 0; k < array.length; k++) {
            //sort theo sum_diem tới ván 1-2-3-4-5
            // all_student_details chưa update sau khi put request
            const result_nodes_0 = document.querySelectorAll(`.text${array[k].id}r_n`)[match[0] - 1]
            for (let x = 0; x < result_nodes_0.children.length; x++) {
                if (result_nodes_0.children[x].value === all_student_details[array[k].id].win_lose[match[0] - 1])
                    result_nodes_0.children[x].selected = 'selected'
            }

            const o_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}o-`)[match[0] - 1]
            for (let x = 0; x < o_note_nodes_0.children.length; x++) {
                if (o_note_nodes_0.children[x].value === all_student_details[array[k].id].o_b[match[0] - 1])
                    o_note_nodes_0.children[x].selected = 'selected'
            }

            const m_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}m-`)[match[0] - 1]
            for (let x = 0; x < m_note_nodes_0.children.length; x++) {
                if (m_note_nodes_0.children[x].value === all_student_details[array[k].id].m_b[match[0] - 1])
                    m_note_nodes_0.children[x].selected = 'selected'
            }

            const e_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}e-`)[match[0] - 1]
            for (let x = 0; x < e_note_nodes_0.children.length; x++) {
                if (e_note_nodes_0.children[x].value === all_student_details[array[k].id].e_b[match[0] - 1])
                    e_note_nodes_0.children[x].selected = 'selected'
            }
            const miss_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}miss-`)[match[0] - 1]
            for (let x = 0; x < miss_note_nodes_0.children.length; x++) {
                if (miss_note_nodes_0.children[x].value === all_student_details[array[k].id].miss[match[0] - 1])
                    miss_note_nodes_0.children[x].selected = 'selected'
            }
            const o_miss_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}o_miss-`)[match[0] - 1]
            for (let x = 0; x < o_miss_note_nodes_0.children.length; x++) {
                if (o_miss_note_nodes_0.children[x].value === all_student_details[array[k].id].other_miss[match[0] - 1])
                    o_miss_note_nodes_0.children[x].selected = 'selected'
            }

            const o_g_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}o_g`)[match[0] - 1]
            for (let x = 0; x < o_g_note_nodes_0.children.length; x++) {
                if (o_g_note_nodes_0.children[x].value === all_student_details[array[k].id].o_g[match[0] - 1])
                    o_g_note_nodes_0.children[x].selected = 'selected'
            }

            const m_g_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}m_g`)[match[0] - 1]
            for (let x = 0; x < m_g_note_nodes_0.children.length; x++) {
                if (m_g_note_nodes_0.children[x].value === all_student_details[array[k].id].m_g[match[0] - 1])
                    m_g_note_nodes_0.children[x].selected = 'selected'
            }

            const e_g_note_nodes_0 = document.querySelectorAll(`.text${array[k].id}e_g`)[match[0] - 1]
            for (let x = 0; x < e_g_note_nodes_0.children.length; x++) {
                if (e_g_note_nodes_0.children[x].value === all_student_details[array[k].id].e_g[match[0] - 1])
                    e_g_note_nodes_0.children[x].selected = 'selected'
            }

            const oppo_nodes_0 = document.querySelectorAll(`.input_${array[k].id}`)[match[0] - 1]
            for (let x = 0; x < oppo_nodes_0.children.length; x++) {
                if (oppo_nodes_0.children[x].value === all_student_details[array[k].id].oppo[match[0] - 1])
                    oppo_nodes_0.children[x].selected = 'selected'
            }
        }

    }
    function sync_all() {
        fetch(`${url_one}/write_json`, {
            method: 'GET',  mode: 'cors',
                credentials:'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(res => res.json()).then(data => {
            const arr = Object.keys(data)
            const arr_num = arr.map(el => parseInt(el))
            const con_ = []
            for (let i = 0; i < arr.length; i++) con_[i] = { id: arr[i], order: arr_num[i] }
            set_all(con_)
            set_all_detail(data)
            document.querySelectorAll('.getdata').forEach(el => el.click())
            alert('Đã lấy dữ liệu về khả năng thi đấu của bé từ Server xong, Click 1/2/3/4/5 để update đọc thông tin')
        })
    }
    useEffect(pairing)

    useEffect(() => {
        // const url = 'https://tdchess.ducminh27.repl.co/write_json'
        fetch(`${url_one}/write_json`, {
            method: 'GET',  mode: 'cors',credentials:'include',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin':'*',
            }
        }
        ).then(res => res.json()).then(data => {
            const arr = Object.keys(data)
            const arr_num = arr.map(el => parseInt(el))
            const con_ = []
            for (let i = 0; i < arr.length; i++) con_[i] = { id: arr[i], order: arr_num[i] }
            set_all(con_)
            set_all_detail(data)
        })
    }, [])
   
    if (all_student === null || all_student === undefined) return <>
        <p>Tài khoản chưa được thêm vào hệ thống</p>
    </>
    if (all_student !== null && all_student !== undefined) return <>
        <br />



        <div >
            <div>
                <button style={{
                    backgroundImage:`url(${blinking})`,fontSize:'2em'
                }} onClick={sync_all} >Sync</button>
                {/* Sync sẽ dùng với useEffect để sync toàn bộ dữ liệu của từng vòng 1 2 3 4 5, ví dụ ở vòng 2 thì sync xong click vào 2 sẽ load hết,
            lock pairing trước khi toàn bộ xong, khỏi click linh tinh */}
                <button className='pairing' onClick={pairing_2} >1</button>
                <button className='pairing' onClick={pairing_2} >2</button>
                <button className='pairing' onClick={pairing_2} >3</button>
                <button className='pairing' onClick={pairing_2} >4</button>
                <button className='pairing' onClick={pairing_2} >5</button>

            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '360px' }} >

                {all_student.map(el =>
                    <context_match.Provider value={match}>
                        <context_data.Provider value={[all_student_details, set_all_detail]}>
                            {/* <Student_state id={el} uid={uid} dis_arr={dis_arr} set_all_detail={set_all_detail} all_student_details={all_student_details} /> */}
                            <Student_state match={match} order={el.order}
                                id={el.id}  />
                        </context_data.Provider>
                    </context_match.Provider>
                )}


            </div>
        </div>

    </>
}



export default Student_all
