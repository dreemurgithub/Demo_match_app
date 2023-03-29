import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {url_one} from "../server";

function Xuat_excel() {
    const [state, setstate] = useState('none')
    const [student_all, set_student_all] = useState([])
    const [student_state,set_student_state] = useState()
    function Load() {
        fetch(`${url_one}/write_json`, {
            method: 'GET',
            credentials:'include',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json()).then(data => {
                if (Object.keys(data).length === 0) return
                const arr = Object.keys(data)
                const arr_state = []
                arr.forEach(el => arr_state.push(data[el]))
                arr_state.sort((a, b) => b.sum_diem - a.sum_diem)
                set_student_all(arr_state)
                set_student_state(data)
            }
            )
    }
    useEffect(() => {

    }, [])
    function get_json() {
        let export_id = document.querySelector('#quanli_input').value
        if (export_id.length < 180) {
            alert('Click linh tinh à?')
            return
        }
        const array_all = export_id.split("\n")
        const all_student = {}
        function parse_arr(text) {
            if (text === '') return
            const temp = text.split("\t")
            all_student[parseInt(temp[0]).toString()] = {
                id: parseInt(temp[0]).toString(),
                name: temp[1],
                level: temp[2],
                pick: ['', '', '', '', ''],
                result: [0, 0, 0, 0, 0],
                win_lose: ['', '', '', '', ''],
                o_b: ['', '', '', '', ''],
                m_b: ['', '', '', '', ''],
                e_b: ['', '', '', '', ''],
                miss: ['', '', '', '', ''],
                other_miss: ['', '', '', '', ''],
                o_g: ['', '', '', '', ''],
                m_g: ['', '', '', '', ''],
                e_g: ['', '', '', '', ''],
                sum_diem: parseInt(temp[0]) / 10000,
                oppo: ["", "", "", "", ""]
            }
        }
        array_all.forEach(el => parse_arr(el))
        if (all_student['0'] === null || all_student['0'] === undefined) {
            alert('Nhập ID từ 0')
            return
        }

        const arr_check = Object.keys(all_student)
        const arr_num_check =arr_check.map(el => parseInt(el))
        arr_num_check.sort((a, b) => a - b);
        console.log(arr_num_check)
        if ((arr_num_check[arr_num_check.length-1] + 1 )=== arr_num_check.length) {
            for (let i = 0; i < arr_num_check.length; i++) {
                if (i > arr_num_check[i] || i < arr_num_check[i]) {
                    alert('Không nhập ID trùng nhau')
                    return
                }
            }
            document.querySelector('#dev_input').value = JSON.stringify(all_student)
            document.querySelector('#write').click()
            return
        }
        alert('Nhập ID Trùng/Không liên tục')
    }
    function fetch_to_data() {
        //if (document.querySelector('#dev_input').value === '' || document.querySelector('#dev_input').value === null) return
        fetch(`${url_one}/write_json/excel`, {
            method: 'PUT',credentials:'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: document.querySelector('#dev_input').value
        })
            .then(res => res.json()).then(data => {
                alert('Load xong')
                console.log(data)
            })
    }
    return (
        <>
            <div style={{ display: state }}>
                <textarea name="" id="quanli_input" cols="30" rows="10" placeholder="Copy Excel vào từ đây"></textarea>
                <br />
                <button onClick={get_json}>Nhập danh sách</button>
                <ul>Nhớ:
                    <li>Tất cả ID phải từ 0 tới tối đá</li>
                    <li>Không để ID trống, ví dụ sau 2 là 3, nếu 2 rồi 4 là không được!</li>
                    <li>Các ID gần nhau ván đầu sẽ gặp nhau</li>
                    <li>ID không được trùng nhau</li>
                </ul>
                <textarea style={{ display: 'none' }} name="" id="dev_input" cols="30" rows="10" placeholder="Json của All học sinh đấu giải"></textarea>
                <button style={{ display: 'none' }} id='write' onClick={fetch_to_data}>fetch Danh Sách HS</button>

            </div>
            <input type="checkbox" onChange={(e) => {
                if (e.target.checked === true) setstate('inline')
                if (e.target.checked === false) setstate('none')
            }} /> <span>Tắt/Bật form Excel</span>
            <button onClick={Load}>Load</button>
            {student_all.map(el => Student(el, student_state))}
        </>
    )

}

function Student(el, student_state) {
    if (el === null || el === undefined) return
    if (el !== null && el !== undefined) return <>
        <div style={{ backgroundColor: '#0d6efd', color: 'white', padding: '0.5em', marginBottom: '0.5em', width: '360px' }}>
            <p>ID: {el.id} {el.name} Level:{el.level} ${el.sum_diem.toFixed(4)} KQ:[1,{el.result[0].toFixed(2)}] [2,{el.result[1].toFixed(2)}] [3,{el.result[2].toFixed(2)}] [4,{el.result[3].toFixed(2)}] [5,{el.result[4].toFixed(2)}]</p>
            <div>
                <p>Gặp: 
                    {Check(el.result[0], el.oppo[0], student_state)}-{el.win_lose[0]}-{el.pick[0]},
                    {Check(el.result[1], el.oppo[1], student_state)}-{el.win_lose[1]}-{el.pick[1]},
                    {Check(el.result[2], el.oppo[2], student_state)}-{el.win_lose[2]}-{el.pick[2]},
                    {Check(el.result[3], el.oppo[3], student_state)}-{el.win_lose[3]}-{el.pick[3]},
                    {Check(el.result[4], el.oppo[4], student_state)}-{el.win_lose[4]}-{el.pick[4]}</p>

                <p>Game 1: {el.o_b[0]}, {el.m_b[0]}, {el.e_b[0]}, {el.miss[0]}, {el.other_miss[0]}</p>
                <p>Game 2: {el.o_b[1]}, {el.m_b[1]}, {el.e_b[1]}, {el.miss[1]}, {el.other_miss[1]}</p>
                <p>Game 3: {el.o_b[2]}, {el.m_b[2]}, {el.e_b[2]}, {el.miss[2]}, {el.other_miss[2]}</p>
                <p>Game 4: {el.o_b[3]}, {el.m_b[3]}, {el.e_b[3]}, {el.miss[3]}, {el.other_miss[3]}</p>
                <p>Game 5: {el.o_b[4]}, {el.m_b[4]}, {el.e_b[4]}, {el.miss[4]}, {el.other_miss[4]}</p>

                <p>Game 1: {el.o_g[0]}_{el.m_g[0]}_{el.e_g[0]}</p>
                <p>Game 2: {el.o_g[1]}_{el.m_g[1]}_{el.e_g[1]}</p>
                <p>Game 3: {el.o_g[2]}_{el.m_g[2]}_{el.e_g[2]}</p>
                <p>Game 4: {el.o_g[3]}_{el.m_g[3]}_{el.e_g[3]}</p>
                <p>Game 5: {el.o_g[4]}_{el.m_g[4]}_{el.e_g[4]}</p>

            </div>


        </div>
    </>
}
function Check(result, opponent_id, student_all) {
    //const  = student_all[el.oppo[0] ]
    //if(result>0)console.log([result,opponent_id,student_all[parseInt(opponent_id)].name ])
    if (result === 0 || opponent_id === null || opponent_id === undefined || student_all===undefined) return '?'
    if (opponent_id === '') return 'Nghỉ'
    if (result === 1) return ' '
    if (result !== 0 && (student_all[opponent_id] === null || student_all[opponent_id] === undefined)) return 'Sai ID'
    if (result !== 0 && student_all[opponent_id] !== null && student_all[opponent_id] !== undefined) return `${student_all[parseInt(opponent_id)].name} ${student_all[opponent_id].level}`
}

export default Xuat_excel