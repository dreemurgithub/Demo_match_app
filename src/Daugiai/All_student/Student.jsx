import React, { useContext, useEffect, useState } from 'react'
import context_data from '../../context_data'
import context_match from '../../context_data/match'
import {url_one} from '../../server'
function Student_state({ id }) {
  const [state, setstate] = useState(null)
  const [timer_update, set_timer_update] = useState(null)
  const [all_student_details, set_all_detail] = useContext(context_data)
  const match = useContext(context_match)
  const [display_but, set_display] = useState({ show: 'none', background_show: '#6495ED' })
  const [order_state, set_order] = useState('0')
  const [delete_state, set_delete] = useState('block')
  function fetch_new_infor(e) {
    // const id_oppo = document.querySelectorAll(`.input_${id}`)[match[0] - 1].value
    // const save_oppo = document.querySelector(`#text${id_oppo}>.save`)
    // if (save_oppo !== null && save_oppo !== undefined && e.target!== document.querySelector(`#text${id}>.save2`)) save_oppo.click()
    //click nút đối thủ sẽ bị lõi, có lẽ là do tạo vòng lặp vĩnh cữu? Hoặc lệnh override lệnh kia, bắt tự click

    const result_nodes = document.querySelectorAll(`.text${id}r_n`)
    const result_arr = all_student_details[id].win_lose ;
    for (let i = 0; i < result_nodes.length; i++) {result_arr[match[0]-1] = result_nodes[match[0]-1].value
      if(result_arr[i]===''&& result_nodes[i].value==='' ) result_arr[i] = result_nodes[i].value}

    const o_note_nodes = document.querySelectorAll(`.text${id}o-`)
    //const o_note_arr = []; for (let i = 0; i < o_note_nodes.length; i++) o_note_arr[i] = o_note_nodes[i].value
    const o_note_arr = all_student_details[id].o_b ;
    for (let i = 0; i < o_note_nodes.length; i++) {o_note_arr[match[0]-1] = o_note_nodes[match[0]-1].value
      if(o_note_arr[i]===''&& o_note_nodes[i].value==='' ) o_note_arr[i] = o_note_nodes[i].value}

    const m_note_nodes = document.querySelectorAll(`.text${id}m-`)
    //const m_note_arr = []; for (let i = 0; i < m_note_nodes.length; i++) m_note_arr[i] = m_note_nodes[i].value
    const m_note_arr = all_student_details[id].m_b ;
    for (let i = 0; i < m_note_nodes.length; i++) {m_note_arr[match[0]-1] = m_note_nodes[match[0]-1].value
      if(m_note_arr[i]===''&& m_note_nodes[i].value==='' ) m_note_arr[i] = m_note_nodes[i].value}

    const e_note_nodes = document.querySelectorAll(`.text${id}e-`)
    //const e_note_arr = []; for (let i = 0; i < e_note_nodes.length; i++) e_note_arr[i] = e_note_nodes[i].value
    const e_note_arr = all_student_details[id].e_b ;
    for (let i = 0; i < e_note_nodes.length; i++) {e_note_arr[match[0]-1] = e_note_nodes[match[0]-1].value
      if(e_note_arr[i]===''&& e_note_nodes[i].value==='' ) e_note_arr[i] = e_note_nodes[i].value}

    const miss_note_nodes = document.querySelectorAll(`.text${id}miss-`)
    //const miss_note_arr = []; for (let i = 0; i < miss_note_nodes.length; i++) miss_note_arr[i] = miss_note_nodes[i].value
    const miss_note_arr = all_student_details[id].miss ;
    for (let i = 0; i < miss_note_nodes.length; i++) {miss_note_arr[match[0]-1] = miss_note_nodes[match[0]-1].value
      if(miss_note_arr[i]===''&& miss_note_nodes[i].value==='' ) miss_note_arr[i] = miss_note_nodes[i].value}

    const o_miss_note_nodes = document.querySelectorAll(`.text${id}o_miss-`)
    //const o_miss_note_arr = []; for (let i = 0; i < o_miss_note_nodes.length; i++) o_miss_note_arr[i] = o_miss_note_nodes[i].value
    const o_miss_note_arr = all_student_details[id].other_miss ;
    for (let i = 0; i < o_miss_note_nodes.length; i++) {o_miss_note_arr[match[0]-1] = o_miss_note_nodes[match[0]-1].value
      if(o_miss_note_arr[i]===''&& o_miss_note_nodes[i].value==='' ) o_miss_note_arr[i] = o_miss_note_nodes[i].value}

    const o_g_note_nodes = document.querySelectorAll(`.text${id}o_g`)
    //const o_g_note_arr = []; for (let i = 0; i < o_g_note_nodes.length; i++) o_g_note_arr[i] = o_g_note_nodes[i].value
    const o_g_note_arr = all_student_details[id].o_g ;
    for (let i = 0; i < o_g_note_nodes.length; i++) {o_g_note_arr[match[0]-1] = o_g_note_nodes[match[0]-1].value
      if(o_g_note_arr[i]===''&& o_g_note_nodes[i].value==='' ) o_g_note_arr[i] = o_g_note_nodes[i].value}

    const m_g_note_nodes = document.querySelectorAll(`.text${id}m_g`)
    //const m_g_note_arr = []; for (let i = 0; i < m_g_note_nodes.length; i++) m_g_note_arr[i] = m_g_note_nodes[i].value
    const m_g_note_arr = all_student_details[id].m_g ;
    for (let i = 0; i < m_g_note_nodes.length; i++) {m_g_note_arr[match[0]-1] = m_g_note_nodes[match[0]-1].value
      if(m_g_note_arr[i]===''&& m_g_note_nodes[i].value==='' ) m_g_note_arr[i] = m_g_note_nodes[i].value}

    const e_g_note_nodes = document.querySelectorAll(`.text${id}e_g`)
    //const e_g_note_arr = []; for (let i = 0; i < e_g_note_nodes.length; i++) e_g_note_arr[i] = e_g_note_nodes[i].value
    const e_g_note_arr = all_student_details[id].e_g ;
    for (let i = 0; i < e_g_note_nodes.length; i++) {e_g_note_arr[match[0]-1] = e_g_note_nodes[match[0]-1].value
      if(e_g_note_arr[i]===''&& e_g_note_nodes[i].value==='' ) e_g_note_arr[i] = e_g_note_nodes[i].value}

    //ok rồi
    const result = state.result
    const pick_ = state.pick
    //mục win/lose hòa này nên thêm "Bỏ" và ngoài ra
    //khi update 1 nơi, setdata tổng sẽ edit cả bên kia và override thua/thắng thành kết quả mặc định
    //cần update 1 bên là cả 2 bên!

    // if (((order_state % 2) === 0 && (len % 2) === 1) || ((order_this % 2) === 1 && (order_oppo - order_this) === -1))
    //   if ((order_state % 2) === 0 && (len % 2) === 1) )

    if ((order_state % 2) === 0) {
      console.log('black')
      pick_[match[0] - 1] = 'black'
      if (result_arr[match[0] - 1] === 'win') {
        result[match[0] - 1] = 2.2 + 0.005 * (5 - match[0] + 1)
      }
      if (result_arr[match[0] - 1] === 'draw') {
        result[match[0] - 1] = 1.1 + 0.002 * (5 - match[0] + 1)
      }
      if (result_arr[match[0] - 1] === 'lose') {
        result[match[0] - 1] = 0.001
      }
      if (result_arr[match[0] - 1] === 'out') {
        result[match[0] - 1] = 1
      }
    }
    if ((order_state % 2) === 1) {
      console.log('white')
      pick_[match[0] - 1] = 'white'
      if (result_arr[match[0] - 1] === 'win') {
        result[match[0] - 1] = 2 + 0.005 * (5 - match[0] + 1)
      }
      if (result_arr[match[0] - 1] === 'draw') {
        result[match[0] - 1] = 0.9 + 0.002 * (5 - match[0] + 1)
      }
      if (result_arr[match[0] - 1] === 'lose') {
        result[match[0] - 1] = 0.001
      }
      if (result_arr[match[0] - 1] === 'out') {
        result[match[0] - 1] = 1
      }

    }

    const body_send = {
      ...state, win_lose: result_arr, pick: pick_,
      result: result, o_b: o_note_arr, m_b: m_note_arr, e_b: e_note_arr,
      miss: miss_note_arr, other_miss: o_miss_note_arr,
      o_g: o_g_note_arr, m_g: o_g_note_arr, e_g: e_g_note_arr,
      sum_diem: result[0] + result[1] + result[2] + result[3] + result[4] + parseInt(state.id) / 10000
    }
    // const new_detail = { ...all_student_details }
    // new_detail[id] = body_send
    // set_all_detail(new_detail)
    //override đối thủ, cần fix mục này
    setTimeout(() => {

      fetch(`${url_one}/write_json/edit`, {
        method: 'PUT', 
        credentials:'include',
        headers: {
          'Content-Type': 'application/json'
        }
        , body: JSON.stringify(body_send)
      }).then(res => res.json()).then(data => {

        const date_span = document.querySelector(`#text${id}_time`)
        date_span.textContent = new Date().toLocaleTimeString()
        setstate(data)

      })//.then(setTimeout(() => console.log(all_student_details), 50))
    }, 1000);
  }

  function sync_result(e) {
    const result_here = e.target
    const id_oppo = document.querySelectorAll(`.input_${id}`)[match[0] - 1].value
    const result_oppo = document.querySelectorAll(`.text${id_oppo}r_n`)[match[0] - 1]
    if (result_here.value === 'win') result_oppo.children[2].selected = 'selected'
    if (result_here.value === '') result_oppo.children[0].selected = 'selected'
    if (result_here.value === 'lose') result_oppo.children[1].selected = 'selected'
    if (result_here.value === 'draw') result_oppo.children[3].selected = 'selected'

  }
  function get_data() {
    const timer_1 = setTimeout(() => {

      console.log('start fetching')
      fetch(`${url_one}/write_json/${id}`, {
        method: 'GET',  mode: 'cors',
            credentials:'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).then(res => res.json()).then(data => {
        console.log('fetch done');
        setstate(data);
      })
    }, 500)
    return () => clearTimeout(timer_1)
  }
  useEffect(get_data, [])
  useEffect(() => { //work
    if (state === null) return
    if (state.sum_diem < 0 && state !== null) {
      set_delete('none')
      set_order('1000')
    }
  }, [state])

  function edit_oppo(e) {
    let id_oppo = e.target.value
    const list = Array.from(document.querySelectorAll(`.input_${id}`))
    const result_list = [list[0].value, list[1].value, list[2].value, list[3].value, list[4].value]
    if (result_list === null || result_list === undefined) return
    let index = list.indexOf(e.target)
    result_list[index] = id_oppo
    setstate({ ...state, oppo: result_list })
    if (id_oppo === '') return
    clearTimeout(timer_update)


    const list_oppo = Array.from(document.querySelectorAll(`.input_${id_oppo}`))
    const result_list_oppo = [list_oppo[0].value, list_oppo[1].value, list_oppo[2].value, list_oppo[3].value, list_oppo[4].value]

    result_list_oppo[index] = id
    const order_this = parseInt(e.target.parentNode.style.order)
    const order_oppo = parseInt(document.querySelector(`#text${id_oppo}`).style.order)
    console.log([order_this, order_oppo])
    const newTimer = setTimeout(() => {
      if (((order_this % 2) === 0 && (order_oppo - order_this) === 1) || ((order_this % 2) === 1 && (order_oppo - order_this) === -1)) {
        console.log('running?')
        localStorage.setItem(`set_oppo_${id_oppo}`, JSON.stringify(result_list_oppo))
        fetch(`${url_one}/write_json/edit`, {
          method: 'PUT',  mode: 'cors',credentials:'include',
          headers: {
            'Content-Type': 'application/json'
          }
          , body: JSON.stringify({ ...state, oppo: result_list })
        }).then(() => {

          setTimeout(() => {
            const date_span = document.querySelector(`#text${id}_time`)
            date_span.textContent = new Date().toLocaleTimeString()

            document.querySelector(`#set_oppo${id_oppo}`).click()

          }, 500);

        })
      }


    }, 500)
    set_timer_update(newTimer)
    //timer_update,set_timer_update

  }
  function user_delete(e) {
    let text = "Chắc chắn xóa bé này không???";
    if (window.confirm(text) === false) return
    const new_detail = { ...all_student_details }
    const new_result = state.result.map(el => { if (el === 0) return -1;else return el })
    const new_win_lose = state.win_lose.map(el => { if (el === '') return 'out';else return el })
    console.log([new_result,new_win_lose])
    // new_detail[id] = {
    //   ...state, sum_diem: -0.0001, result: [-0.0001, -0.0001, -0.0001, -0.0001, -0.0001]
    //   , win_lose: ['out', 'out', 'out', 'out', 'out']
    // }
    new_detail[id] = {
      ...state, sum_diem: -0.0001, result: new_result, win_lose:new_win_lose    }
    console.log(new_detail)
    set_all_detail(new_detail)
    set_delete('none')
    set_order('1000')

    

    fetch(`${url_one}/write_json/edit`, {
      method: 'PUT',  mode: 'cors',credentials:'include',
      headers: {
        'Content-Type': 'application/json'
      }
      ,
       body: JSON.stringify({
        ...state, sum_diem: -0.0001, result: new_result
        , win_lose:new_win_lose
      })
      // body: JSON.stringify({
      //   ...state, sum_diem: -0.0001, result: [-0.0001, -0.0001, -0.0001, -0.0001, -0.0001]
      //   , win_lose: ['out', 'out', 'out', 'out', 'out']
      // })
    }).then(res => res.json()).then(data => {
      // const new_detail = { ...all_student_details }
      // new_detail[id] = data
      // set_all_detail(new_detail)
      setstate(data)
    })
  }
  //if (state !== null && state.sum_diem<0) return <div id={`text${state.id}`} style={{display:'none'}}></div>
  if (state !== null && state !== undefined) return (
    <>
      <div id={`text${state.id}`} className='player' style={{ backgroundColor: display_but.background_show, color: 'white', fontWeight: 'bold', order: order_state, display: delete_state }} >
        <div style={{ backgroundColor: display_but.background_show, color: '#4A235A', display: 'flex', flexDirection: 'column', gap: '0.05em' }}>
          <span style={{ color: '#1B2631' }}>ID:{state.id} - Cấp:{state.level} # { state.sum_diem.toFixed(4)}</span>
          <span>B{Math.floor(order_state / 2) + 1} {state.name}</span>
        </div>
        <button id={`order_${id}`} className='order_player' style={{ display: 'none' }} onClick={() => {
          set_order(localStorage.getItem(id))
        }}>{state.id}</button>
        <button style={{ display: 'none' }} onClick={get_data} className='getdata'>getdata</button>
        <input type="number" style={{ width: '1.5em' }} placeholder='1' min='0' className={`input_${id}`} value={(() => {
          if (state.oppo === null) console.log(state)
          if (state.oppo[0] === null || state.oppo[0] === undefined || state.oppo === null) return '';
          if (state.oppo[0] !== null && state.oppo[0] !== undefined) return state.oppo[0]
        })()} onChange={edit_oppo} />
        <input type="number" style={{ width: '1.5em' }} placeholder='2' min='0' className={`input_${id}`} value={(() => {
          if (state.oppo[1] === null || state.oppo[1] === undefined) return '';
          if (state.oppo[1] !== null && state.oppo[1] !== undefined) return state.oppo[1]
        })()} onChange={edit_oppo} />
        <input type="number" style={{ width: '1.5em' }} placeholder='3' min='0' className={`input_${id}`} value={(() => {
          if (state.oppo[2] === null || state.oppo[2] === undefined) return '';
          if (state.oppo[2] !== null && state.oppo[2] !== undefined) return state.oppo[2]
        })()} onChange={edit_oppo} />
        <input type="number" style={{ width: '1.5em' }} placeholder='4' min='0' className={`input_${id}`} value={(() => {
          if (state.oppo[3] === null || state.oppo[3] === undefined) return '';
          if (state.oppo[3] !== null && state.oppo[3] !== undefined) return state.oppo[3]
        })()} onChange={edit_oppo} />
        <input type="number" style={{ width: '1.5em' }} placeholder='5' min='0' className={`input_${id}`} value={(() => {
          if (state.oppo[4] === null || state.oppo[4] === undefined) return '';
          if (state.oppo[4] !== null && state.oppo[4] !== undefined) return state.oppo[4]
        })()} onChange={edit_oppo} />
        <input type="checkbox" className='tick' id="" onChange={(e) => {
          if (e.target.checked === true) set_display({ show: 'inline', background_show: '#CCCCFF' })
          if (e.target.checked === false) set_display({ show: 'none', background_show: '#6495ED' })
        }} />
        <button onClick={() => {
          fetch(`${url_one}/write_json/edit`, {
            method: 'PUT',  mode: 'cors',credentials:'include',
            headers: {
              'Content-Type': 'application/json'
            }
            , body: JSON.stringify({ ...state, oppo: JSON.parse(localStorage.getItem(`set_oppo_${id}`)) })
          }).then(res => res.json()).then((data) => {
            setstate(data)
            const date_span = document.querySelector(`#text${id}_time`)
            date_span.textContent = new Date().toLocaleTimeString()
          })
        }} style={{ display: 'none' }} id={`set_oppo${id}`}>Set_oppo</button>
        <div>
          <ul className='oppo' style={{ listStyle: 'none', paddingLeft: '0' }}>

            <li className='game0' style={{ display: match[1][0] }}>
              <select id="" style={{ backgroundColor: 'black', color: 'white' }} className={`text${id}r_n result_check`} onChange={sync_result}>
                <option value="" style={{ backgroundColor: 'white' }} ></option>
                <option value="win" style={{ backgroundColor: 'red', color: 'white' }}>Thắng</option>
                <option value="lose" style={{ backgroundColor: 'grey', color: 'white' }}>Thua</option>
                <option value="draw" style={{ backgroundColor: 'yellow', color: 'black' }}>Hòa</option>
                <option value="out" >Out</option>

              </select>
              <select name="o-" id="" className={`text${state.id}o-`}>
                <option value="">-Khai Cuộc-</option>
                <option value="Bỏ trung tâm">Bỏ trung tâm </option>
                <option value="Quên nhập thành">Quên nhập thành </option>
                <option value="Đi tốt biên a/h">Đi tốt biên a/h</option>
                <option value="1 quân nhiều nước">1 quân nhiều nước</option>
                <option value="Đi tốt quá nhiều">Đi tốt quá nhiều</option>
                <option value="Quân bị bắt chết">Quân bị bắt chết</option>
                <option value="Bị ghim nguy hiểm">Bị ghim nguy hiểm</option>
                <option value="Tốt nhập thành cao">Tốt nhập thành cao</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Quân không đường lùi">Quân không đường lùi</option>
              </select>
              <select name="m-" id="" className={`text${state.id}m-`}>
                <option value="">-Trung cuộc-</option>
                <option value="Lỗi kỹ thuật">Lỗi kỹ thuật</option>
                <option value="Bị bắt đôi">Bị bắt đôi</option>
                <option value="Bỏ ăn hơn điểm">Bỏ ăn hơn điểm</option>
                <option value="Ăn quân thua điểm">Ăn quân thua điểm</option>
                <option value="Bị ăn từ đường xa">Bị ăn từ đường xa</option>
                <option value="Không thấy đòn phối hợp địch">Không thấy đòn phối hợp địch</option>
                <option value="Vỡ cánh nhập thành">Vỡ cánh nhập thành</option>
                <option value="Bỏ qua đòn hơn quân/bí">Bỏ qua đòn hơn quân/bí</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Tấn công ko vào vua">Tấn công ko vào vua</option>
              </select>
              <select name="e-" id="" className={`text${state.id}e-`}>
                <option value="">-Tàn cuộc-</option>
                <option value="Hòa hết nước">Hòa hết nước</option>
                <option value="Chiếu vua hậu sai">Chiếu vua hậu sai </option>
                <option value="Chiếu 2 xe sai">Chiếu 2 xe sai</option>
                <option value="Vua xe sai">Vua xe sai</option>
                <option value="Hơn quân, hết tốt">Hơn quân, hết tốt</option>
                <option value="Đếm nước phong Hậu sai">Đếm nước phong Hậu sai</option>
                <option value="Vua tốt sai">Vua tốt sai</option>
                <option value="Không tích cực vua">Không tích cực vua</option>
                <option value="Tốt thông xa sai">Tốt thông xa sai</option>
                <option value="Vua bị hậu bắt đôi">Vua bị hậu bắt đôi</option>
              </select>
              <select name="miss-" id="" className={`text${state.id}miss-`}>
                <option value="">-Bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o_miss-" id="" className={`text${state.id}o_miss-`}>
                <option value="">-Kia bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o+" id="" className={`text${state.id}o_g`}>
                <option value="">+Khai cuộc+</option>
                <option value="O+Chiếm trung tâm">O+Chiếm trung tâm</option>
                <option value="O+Vua an toàn">O+Vua an toàn</option>
                <option value="O+Phòng thủ tích cực">O+Phòng thủ tích cực</option>
                <option value="O+Phát triển quân">O+Phát triển quân</option>
                <option value="O++Quân tích cực, dễ đi">O++Quân tích cực, dễ đi</option>
                <option value="O++Tốt trung tâm chặt">O++Tốt trung tâm chặt</option>
                <option value="O++Đổi quân yếu lấy mạnh">O++Đổi quân yếu lấy mạnh</option>
                <option value="O++Tạo cột mở cho xe">O++Tạo cột mở cho xe</option>

              </select>
              <select name="m+" id="" className={`text${state.id}m_g`}>
                <option value="">+Trung cuộc+</option>
                <option value="M+Không bỏ ăn quân">M+Không bỏ ăn quân</option>
                <option value="M+Không mất quân vô lý">M+Không mất quân vô lý</option>
                <option value="M+Đòn phối hợp 2 nước được">M+Đòn phối hợp 2 nước được</option>
                <option value="M+Bắt chết được Hậu">M+Bắt chết được Hậu</option>
                <option value="M++Tốt dâng cao khóa địch">M++Tốt dâng cao khóa địch</option>
                <option value="M++Biết tổ chức tấn công">M++Biết tổ chức tấn công</option>
                <option value="M++Biết chống nhập thành">M++Biết chống nhập thành</option>
                <option value="M++Phá thành hiệu quả">M++Phá thành hiệu quả</option>

              </select>
              <select name="e+" id="" className={`text${state.id}e_g`}>
                <option value="">+Tàn cuộc+</option>
                <option value="E+Chiếu hết vua Hậu được">E+Chiếu hết vua Hậu được</option>
                <option value="E+Chiếu hết 2 xe được">E+Chiếu hết 2 xe được</option>
                <option value="E+Biết phong Hậu">E+Biết phong Hậu</option>
                <option value="E+Tích cực vua">E+Tích cực vua</option>
                <option value="E++Tấn công vua liên tục">E++Tấn công vua liên tục</option>
                <option value="E++Biết dùng tốt thông xa">E++Biết dùng tốt thông xa</option>
                <option value="E++Vua chiếm trung tâm">E++Vua chiếm trung tâm</option>
                <option value="E++Ăn hết tốt thủ hòa">E++Ăn hết tốt thủ hòa</option>

              </select>


            </li>
            <li className='game1' style={{ display: match[1][1] }}>
              <select id="" style={{ backgroundColor: 'black', color: 'white' }} className={`text${id}r_n result_check`} onChange={sync_result}>
                <option value="" style={{ backgroundColor: 'white' }}></option>
                <option value="win" style={{ backgroundColor: 'red', color: 'white' }} >Thắng</option>

                <option value="lose" style={{ backgroundColor: 'grey', color: 'white' }}>Thua</option>
                <option value="draw" style={{ backgroundColor: 'yellow', color: 'black' }}>Hòa</option>
                <option value="out" >Out</option>

              </select>
              <select name="o-" id="" className={`text${state.id}o-`}>
                <option value="">-Khai Cuộc-</option>
                <option value="Bỏ trung tâm">Bỏ trung tâm </option>
                <option value="Quên nhập thành">Quên nhập thành </option>
                <option value="Đi tốt biên a/h">Đi tốt biên a/h</option>
                <option value="1 quân nhiều nước">1 quân nhiều nước</option>
                <option value="Đi tốt quá nhiều">Đi tốt quá nhiều</option>
                <option value="Quân bị bắt chết">Quân bị bắt chết</option>
                <option value="Bị ghim nguy hiểm">Bị ghim nguy hiểm</option>
                <option value="Tốt nhập thành cao">Tốt nhập thành cao</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Quân không đường lùi">Quân không đường lùi</option>
              </select>
              <select name="m-" id="" className={`text${state.id}m-`}>
                <option value="">-Trung cuộc-</option>
                <option value="Lỗi kỹ thuật">Lỗi kỹ thuật</option>
                <option value="Bị bắt đôi">Bị bắt đôi</option>
                <option value="Bỏ ăn hơn điểm">Bỏ ăn hơn điểm</option>
                <option value="Ăn quân thua điểm">Ăn quân thua điểm</option>
                <option value="Bị ăn từ đường xa">Bị ăn từ đường xa</option>
                <option value="Không thấy đòn phối hợp địch">Không thấy đòn phối hợp địch</option>
                <option value="Vỡ cánh nhập thành">Vỡ cánh nhập thành</option>
                <option value="Bỏ qua đòn hơn quân/bí">Bỏ qua đòn hơn quân/bí</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Tấn công ko vào vua">Tấn công ko vào vua</option>
              </select>
              <select name="e-" id="" className={`text${state.id}e-`}>
                <option value="">-Tàn cuộc-</option>
                <option value="Hòa hết nước">Hòa hết nước</option>
                <option value="Chiếu vua hậu sai">Chiếu vua hậu sai </option>
                <option value="Chiếu 2 xe sai">Chiếu 2 xe sai</option>
                <option value="Vua xe sai">Vua xe sai</option>
                <option value="Hơn quân, hết tốt">Hơn quân, hết tốt</option>
                <option value="Đếm nước phong Hậu sai">Đếm nước phong Hậu sai</option>
                <option value="Vua tốt sai">Vua tốt sai</option>
                <option value="Không tích cực vua">Không tích cực vua</option>
                <option value="Tốt thông xa sai">Tốt thông xa sai</option>
                <option value="Vua bị hậu bắt đôi">Vua bị hậu bắt đôi</option>
              </select>
              <select name="miss-" id="" className={`text${state.id}miss-`}>
                <option value="">-Bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o_miss-" id="" className={`text${state.id}o_miss-`}>
                <option value="">-Kia bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o+" id="" className={`text${state.id}o_g`}>
                <option value="">+Khai cuộc+</option>
                <option value="O+Chiếm trung tâm">O+Chiếm trung tâm</option>
                <option value="O+Vua an toàn">O+Vua an toàn</option>
                <option value="O+Phòng thủ tích cực">O+Phòng thủ tích cực</option>
                <option value="O+Phát triển quân">O+Phát triển quân</option>
                <option value="O++Quân tích cực, dễ đi">O++Quân tích cực, dễ đi</option>
                <option value="O++Tốt trung tâm chặt">O++Tốt trung tâm chặt</option>
                <option value="O++Đổi quân yếu lấy mạnh">O++Đổi quân yếu lấy mạnh</option>
                <option value="O++Tạo cột mở cho xe">O++Tạo cột mở cho xe</option>

              </select>
              <select name="m+" id="" className={`text${state.id}m_g`}>
                <option value="">+Trung cuộc+</option>
                <option value="M+Không bỏ ăn quân">M+Không bỏ ăn quân</option>
                <option value="M+Không mất quân vô lý">M+Không mất quân vô lý</option>
                <option value="M+Đòn phối hợp 2 nước được">M+Đòn phối hợp 2 nước được</option>
                <option value="M+Bắt chết được Hậu">M+Bắt chết được Hậu</option>
                <option value="M++Tốt dâng cao khóa địch">M++Tốt dâng cao khóa địch</option>
                <option value="M++Biết tổ chức tấn công">M++Biết tổ chức tấn công</option>
                <option value="M++Biết chống nhập thành">M++Biết chống nhập thành</option>
                <option value="M++Phá thành hiệu quả">M++Phá thành hiệu quả</option>

              </select>
              <select name="e+" id="" className={`text${state.id}e_g`}>
                <option value="">+Tàn cuộc+</option>
                <option value="E+Chiếu hết vua Hậu được">E+Chiếu hết vua Hậu được</option>
                <option value="E+Chiếu hết 2 xe được">E+Chiếu hết 2 xe được</option>
                <option value="E+Biết phong Hậu">E+Biết phong Hậu</option>
                <option value="E+Tích cực vua">E+Tích cực vua</option>
                <option value="E++Tấn công vua liên tục">E++Tấn công vua liên tục</option>
                <option value="E++Biết dùng tốt thông xa">E++Biết dùng tốt thông xa</option>
                <option value="E++Vua chiếm trung tâm">E++Vua chiếm trung tâm</option>
                <option value="E++Ăn hết tốt thủ hòa">E++Ăn hết tốt thủ hòa</option>

              </select>
            </li>
            <li className='game2' style={{ display: match[1][2] }}>
              <select id="" style={{ backgroundColor: 'black', color: 'white' }} className={`text${id}r_n result_check`} onChange={sync_result}>
                <option value="" style={{ backgroundColor: 'white' }}></option>
                <option value="win" style={{ backgroundColor: 'red', color: 'white' }}>Thắng</option>
                <option value="lose" style={{ backgroundColor: 'grey', color: 'white' }}>Thua</option>
                <option value="draw" style={{ backgroundColor: 'yellow', color: 'black' }}>Hòa</option>
                <option value="out" >Out</option>

              </select>
              <select name="o-" id="" className={`text${state.id}o-`}>
                <option value="">-Khai Cuộc-</option>
                <option value="Bỏ trung tâm">Bỏ trung tâm </option>
                <option value="Quên nhập thành">Quên nhập thành </option>
                <option value="Đi tốt biên a/h">Đi tốt biên a/h</option>
                <option value="1 quân nhiều nước">1 quân nhiều nước</option>
                <option value="Đi tốt quá nhiều">Đi tốt quá nhiều</option>
                <option value="Quân bị bắt chết">Quân bị bắt chết</option>
                <option value="Bị ghim nguy hiểm">Bị ghim nguy hiểm</option>
                <option value="Tốt nhập thành cao">Tốt nhập thành cao</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Quân không đường lùi">Quân không đường lùi</option>
              </select>
              <select name="m-" id="" className={`text${state.id}m-`}>
                <option value="">-Trung cuộc-</option>
                <option value="Lỗi kỹ thuật">Lỗi kỹ thuật</option>
                <option value="Bị bắt đôi">Bị bắt đôi</option>
                <option value="Bỏ ăn hơn điểm">Bỏ ăn hơn điểm</option>
                <option value="Ăn quân thua điểm">Ăn quân thua điểm</option>
                <option value="Bị ăn từ đường xa">Bị ăn từ đường xa</option>
                <option value="Không thấy đòn phối hợp địch">Không thấy đòn phối hợp địch</option>
                <option value="Vỡ cánh nhập thành">Vỡ cánh nhập thành</option>
                <option value="Bỏ qua đòn hơn quân/bí">Bỏ qua đòn hơn quân/bí</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Tấn công ko vào vua">Tấn công ko vào vua</option>
              </select>
              <select name="e-" id="" className={`text${state.id}e-`}>
                <option value="">-Tàn cuộc-</option>
                <option value="Hòa hết nước">Hòa hết nước</option>
                <option value="Chiếu vua hậu sai">Chiếu vua hậu sai </option>
                <option value="Chiếu 2 xe sai">Chiếu 2 xe sai</option>
                <option value="Vua xe sai">Vua xe sai</option>
                <option value="Hơn quân, hết tốt">Hơn quân, hết tốt</option>
                <option value="Đếm nước phong Hậu sai">Đếm nước phong Hậu sai</option>
                <option value="Vua tốt sai">Vua tốt sai</option>
                <option value="Không tích cực vua">Không tích cực vua</option>
                <option value="Tốt thông xa sai">Tốt thông xa sai</option>
                <option value="Vua bị hậu bắt đôi">Vua bị hậu bắt đôi</option>
              </select>
              <select name="miss-" id="" className={`text${state.id}miss-`}>
                <option value="">-Bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o_miss-" id="" className={`text${state.id}o_miss-`}>
                <option value="">-Kia bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o+" id="" className={`text${state.id}o_g`}>
                <option value="">+Khai cuộc+</option>
                <option value="O+Chiếm trung tâm">O+Chiếm trung tâm</option>
                <option value="O+Vua an toàn">O+Vua an toàn</option>
                <option value="O+Phòng thủ tích cực">O+Phòng thủ tích cực</option>
                <option value="O+Phát triển quân">O+Phát triển quân</option>
                <option value="O++Quân tích cực, dễ đi">O++Quân tích cực, dễ đi</option>
                <option value="O++Tốt trung tâm chặt">O++Tốt trung tâm chặt</option>
                <option value="O++Đổi quân yếu lấy mạnh">O++Đổi quân yếu lấy mạnh</option>
                <option value="O++Tạo cột mở cho xe">O++Tạo cột mở cho xe</option>

              </select>
              <select name="m+" id="" className={`text${state.id}m_g`}>
                <option value="">+Trung cuộc+</option>
                <option value="M+Không bỏ ăn quân">M+Không bỏ ăn quân</option>
                <option value="M+Không mất quân vô lý">M+Không mất quân vô lý</option>
                <option value="M+Đòn phối hợp 2 nước được">M+Đòn phối hợp 2 nước được</option>
                <option value="M+Bắt chết được Hậu">M+Bắt chết được Hậu</option>
                <option value="M++Tốt dâng cao khóa địch">M++Tốt dâng cao khóa địch</option>
                <option value="M++Biết tổ chức tấn công">M++Biết tổ chức tấn công</option>
                <option value="M++Biết chống nhập thành">M++Biết chống nhập thành</option>
                <option value="M++Phá thành hiệu quả">M++Phá thành hiệu quả</option>

              </select>
              <select name="e+" id="" className={`text${state.id}e_g`}>
                <option value="">+Tàn cuộc+</option>
                <option value="E+Chiếu hết vua Hậu được">E+Chiếu hết vua Hậu được</option>
                <option value="E+Chiếu hết 2 xe được">E+Chiếu hết 2 xe được</option>
                <option value="E+Biết phong Hậu">E+Biết phong Hậu</option>
                <option value="E+Tích cực vua">E+Tích cực vua</option>
                <option value="E++Tấn công vua liên tục">E++Tấn công vua liên tục</option>
                <option value="E++Biết dùng tốt thông xa">E++Biết dùng tốt thông xa</option>
                <option value="E++Vua chiếm trung tâm">E++Vua chiếm trung tâm</option>
                <option value="E++Ăn hết tốt thủ hòa">E++Ăn hết tốt thủ hòa</option>

              </select>
            </li>
            <li className='game3' style={{ display: match[1][3] }}>
              <select id="" style={{ backgroundColor: 'black', color: 'white' }} className={`text${id}r_n result_check`} onChange={sync_result}>
                <option value="" style={{ backgroundColor: 'white' }}></option>
                <option value="win" style={{ backgroundColor: 'red', color: 'white' }}>Thắng</option>
                <option value="lose" style={{ backgroundColor: 'grey', color: 'white' }}>Thua</option>
                <option value="draw" style={{ backgroundColor: 'yellow', color: 'black' }}>Hòa</option>
                <option value="out" >Out</option>

              </select>
              <select name="o-" id="" className={`text${state.id}o-`}>
                <option value="">-Khai Cuộc-</option>
                <option value="Bỏ trung tâm">Bỏ trung tâm </option>
                <option value="Quên nhập thành">Quên nhập thành </option>
                <option value="Đi tốt biên a/h">Đi tốt biên a/h</option>
                <option value="1 quân nhiều nước">1 quân nhiều nước</option>
                <option value="Đi tốt quá nhiều">Đi tốt quá nhiều</option>
                <option value="Quân bị bắt chết">Quân bị bắt chết</option>
                <option value="Bị ghim nguy hiểm">Bị ghim nguy hiểm</option>
                <option value="Tốt nhập thành cao">Tốt nhập thành cao</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Quân không đường lùi">Quân không đường lùi</option>
              </select>
              <select name="m-" id="" className={`text${state.id}m-`}>
                <option value="">-Trung cuộc-</option>
                <option value="Lỗi kỹ thuật">Lỗi kỹ thuật</option>
                <option value="Bị bắt đôi">Bị bắt đôi</option>
                <option value="Bỏ ăn hơn điểm">Bỏ ăn hơn điểm</option>
                <option value="Ăn quân thua điểm">Ăn quân thua điểm</option>
                <option value="Bị ăn từ đường xa">Bị ăn từ đường xa</option>
                <option value="Không thấy đòn phối hợp địch">Không thấy đòn phối hợp địch</option>
                <option value="Vỡ cánh nhập thành">Vỡ cánh nhập thành</option>
                <option value="Bỏ qua đòn hơn quân/bí">Bỏ qua đòn hơn quân/bí</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Tấn công ko vào vua">Tấn công ko vào vua</option>
              </select>
              <select name="e-" id="" className={`text${state.id}e-`}>
                <option value="">-Tàn cuộc-</option>
                <option value="Hòa hết nước">Hòa hết nước</option>
                <option value="Chiếu vua hậu sai">Chiếu vua hậu sai </option>
                <option value="Chiếu 2 xe sai">Chiếu 2 xe sai</option>
                <option value="Vua xe sai">Vua xe sai</option>
                <option value="Hơn quân, hết tốt">Hơn quân, hết tốt</option>
                <option value="Đếm nước phong Hậu sai">Đếm nước phong Hậu sai</option>
                <option value="Vua tốt sai">Vua tốt sai</option>
                <option value="Không tích cực vua">Không tích cực vua</option>
                <option value="Tốt thông xa sai">Tốt thông xa sai</option>
                <option value="Vua bị hậu bắt đôi">Vua bị hậu bắt đôi</option>
              </select>
              <select name="miss-" id="" className={`text${state.id}miss-`}>
                <option value="">-Bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o_miss-" id="" className={`text${state.id}o_miss-`}>
                <option value="">-Kia bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o+" id="" className={`text${state.id}o_g`}>
                <option value="">+Khai cuộc+</option>
                <option value="O+Chiếm trung tâm">O+Chiếm trung tâm</option>
                <option value="O+Vua an toàn">O+Vua an toàn</option>
                <option value="O+Phòng thủ tích cực">O+Phòng thủ tích cực</option>
                <option value="O+Phát triển quân">O+Phát triển quân</option>
                <option value="O++Quân tích cực, dễ đi">O++Quân tích cực, dễ đi</option>
                <option value="O++Tốt trung tâm chặt">O++Tốt trung tâm chặt</option>
                <option value="O++Đổi quân yếu lấy mạnh">O++Đổi quân yếu lấy mạnh</option>
                <option value="O++Tạo cột mở cho xe">O++Tạo cột mở cho xe</option>

              </select>
              <select name="m+" id="" className={`text${state.id}m_g`}>
                <option value="">+Trung cuộc+</option>
                <option value="M+Không bỏ ăn quân">M+Không bỏ ăn quân</option>
                <option value="M+Không mất quân vô lý">M+Không mất quân vô lý</option>
                <option value="M+Đòn phối hợp 2 nước được">M+Đòn phối hợp 2 nước được</option>
                <option value="M+Bắt chết được Hậu">M+Bắt chết được Hậu</option>
                <option value="M++Tốt dâng cao khóa địch">M++Tốt dâng cao khóa địch</option>
                <option value="M++Biết tổ chức tấn công">M++Biết tổ chức tấn công</option>
                <option value="M++Biết chống nhập thành">M++Biết chống nhập thành</option>
                <option value="M++Phá thành hiệu quả">M++Phá thành hiệu quả</option>

              </select>
              <select name="e+" id="" className={`text${state.id}e_g`}>
                <option value="">+Tàn cuộc+</option>
                <option value="E+Chiếu hết vua Hậu được">E+Chiếu hết vua Hậu được</option>
                <option value="E+Chiếu hết 2 xe được">E+Chiếu hết 2 xe được</option>
                <option value="E+Biết phong Hậu">E+Biết phong Hậu</option>
                <option value="E+Tích cực vua">E+Tích cực vua</option>
                <option value="E++Tấn công vua liên tục">E++Tấn công vua liên tục</option>
                <option value="E++Biết dùng tốt thông xa">E++Biết dùng tốt thông xa</option>
                <option value="E++Vua chiếm trung tâm">E++Vua chiếm trung tâm</option>
                <option value="E++Ăn hết tốt thủ hòa">E++Ăn hết tốt thủ hòa</option>

              </select>
            </li>
            <li className='game4' style={{ display: match[1][4] }}>
              <select id="" style={{ backgroundColor: 'black', color: 'white' }} className={`text${id}r_n result_check`} onChange={sync_result}>
                <option value="" style={{ backgroundColor: 'white' }}></option>
                <option value="win" style={{ backgroundColor: 'red', color: 'white' }}>Thắng</option>
                <option value="lose" style={{ backgroundColor: 'grey', color: 'white' }}>Thua</option>
                <option value="draw" style={{ backgroundColor: 'yellow', color: 'black' }}>Hòa</option>

              </select>
              <select name="o-" id="" className={`text${state.id}o-`}>
                <option value="">-Khai Cuộc-</option>
                <option value="Bỏ trung tâm">Bỏ trung tâm </option>
                <option value="Quên nhập thành">Quên nhập thành </option>
                <option value="Đi tốt biên a/h">Đi tốt biên a/h</option>
                <option value="1 quân nhiều nước">1 quân nhiều nước</option>
                <option value="Đi tốt quá nhiều">Đi tốt quá nhiều</option>
                <option value="Quân bị bắt chết">Quân bị bắt chết</option>
                <option value="Bị ghim nguy hiểm">Bị ghim nguy hiểm</option>
                <option value="Tốt nhập thành cao">Tốt nhập thành cao</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Quân không đường lùi">Quân không đường lùi</option>
              </select>
              <select name="m-" id="" className={`text${state.id}m-`}>
                <option value="">-Trung cuộc-</option>
                <option value="Lỗi kỹ thuật">Lỗi kỹ thuật</option>
                <option value="Bị bắt đôi">Bị bắt đôi</option>
                <option value="Bỏ ăn hơn điểm">Bỏ ăn hơn điểm</option>
                <option value="Ăn quân thua điểm">Ăn quân thua điểm</option>
                <option value="Bị ăn từ đường xa">Bị ăn từ đường xa</option>
                <option value="Không thấy đòn phối hợp địch">Không thấy đòn phối hợp địch</option>
                <option value="Vỡ cánh nhập thành">Vỡ cánh nhập thành</option>
                <option value="Bỏ qua đòn hơn quân/bí">Bỏ qua đòn hơn quân/bí</option>
                <option value="Tốt ta chặn đường chéo tượng">Tốt ta chặn đường chéo tượng</option>
                <option value="Tấn công ko vào vua">Tấn công ko vào vua</option>
              </select>
              <select name="e-" id="" className={`text${state.id}e-`}>
                <option value="">-Tàn cuộc-</option>
                <option value="Hòa hết nước">Hòa hết nước</option>
                <option value="Chiếu vua hậu sai">Chiếu vua hậu sai </option>
                <option value="Chiếu 2 xe sai">Chiếu 2 xe sai</option>
                <option value="Vua xe sai">Vua xe sai</option>
                <option value="Hơn quân, hết tốt">Hơn quân, hết tốt</option>
                <option value="Đếm nước phong Hậu sai">Đếm nước phong Hậu sai</option>
                <option value="Vua tốt sai">Vua tốt sai</option>
                <option value="Không tích cực vua">Không tích cực vua</option>
                <option value="Tốt thông xa sai">Tốt thông xa sai</option>
                <option value="Vua bị hậu bắt đôi">Vua bị hậu bắt đôi</option>
              </select>
              <select name="miss-" id="" className={`text${state.id}miss-`}>
                <option value="">-Bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o_miss-" id="" className={`text${state.id}o_miss-`}>
                <option value="">-Kia bỏ lỡ-</option>
                <option value="Bắt đôi">Bắt đôi</option>
                <option value="Ghim 2 nước">Ghim 2 nước</option>
                <option value="Xiên 2 nước">Xiên 2 nước</option>
                <option value="Chiếu bí 1 nước">Chiếu bí 1 nước</option>
                <option value="Nhiều quân ăn ít quân">Nhiều quân ăn ít quân</option>
                <option value="Tấn công đôi">Tấn công đôi</option>
                <option value="Bắt quân bị ghim">Bắt quân bị ghim</option>
                <option value="Nhử rồi xiên">Nhử rồi xiên</option>
                <option value="Chiếu bí 3 nước">Chiếu bí 3 nước</option>
                <option value="Tiêu diệt quân bảo vệ">Tiêu diệt quân bảo vệ</option>
              </select>
              <select name="o+" id="" className={`text${state.id}o_g`}>
                <option value="">+Khai cuộc+</option>
                <option value="O+Chiếm trung tâm">O+Chiếm trung tâm</option>
                <option value="O+Vua an toàn">O+Vua an toàn</option>
                <option value="O+Phòng thủ tích cực">O+Phòng thủ tích cực</option>
                <option value="O+Phát triển quân">O+Phát triển quân</option>
                <option value="O++Quân tích cực, dễ đi">O++Quân tích cực, dễ đi</option>
                <option value="O++Tốt trung tâm chặt">O++Tốt trung tâm chặt</option>
                <option value="O++Đổi quân yếu lấy mạnh">O++Đổi quân yếu lấy mạnh</option>
                <option value="O++Tạo cột mở cho xe">O++Tạo cột mở cho xe</option>

              </select>
              <select name="m+" id="" className={`text${state.id}m_g`}>
                <option value="">+Trung cuộc+</option>
                <option value="M+Không bỏ ăn quân">M+Không bỏ ăn quân</option>
                <option value="M+Không mất quân vô lý">M+Không mất quân vô lý</option>
                <option value="M+Đòn phối hợp 2 nước được">M+Đòn phối hợp 2 nước được</option>
                <option value="M+Bắt chết được Hậu">M+Bắt chết được Hậu</option>
                <option value="M++Tốt dâng cao khóa địch">M++Tốt dâng cao khóa địch</option>
                <option value="M++Biết tổ chức tấn công">M++Biết tổ chức tấn công</option>
                <option value="M++Biết chống nhập thành">M++Biết chống nhập thành</option>
                <option value="M++Phá thành hiệu quả">M++Phá thành hiệu quả</option>

              </select>
              <select name="e+" id="" className={`text${state.id}e_g`}>
                <option value="">+Tàn cuộc+</option>
                <option value="E+Chiếu hết vua Hậu được">E+Chiếu hết vua Hậu được</option>
                <option value="E+Chiếu hết 2 xe được">E+Chiếu hết 2 xe được</option>
                <option value="E+Biết phong Hậu">E+Biết phong Hậu</option>
                <option value="E+Tích cực vua">E+Tích cực vua</option>
                <option value="E++Tấn công vua liên tục">E++Tấn công vua liên tục</option>
                <option value="E++Biết dùng tốt thông xa">E++Biết dùng tốt thông xa</option>
                <option value="E++Vua chiếm trung tâm">E++Vua chiếm trung tâm</option>
                <option value="E++Ăn hết tốt thủ hòa">E++Ăn hết tốt thủ hòa</option>

              </select>
            </li>
          </ul>

        </div>
        <span style={{ padding: '0.2em', backgroundColor: '#9FE2BF', color: '#17202A', cursor: 'grab' }} onClick={user_delete}>Xóa</span>
        <b style={{ padding: '0.2em', backgroundColor: '#F08080', color: '#17202A' }}>V:{match[0]} {(() => {
          if (state.result[match[0] - 1] === 0) return '?'
          if (state.result[match[0] - 1] > 0) return 'X'
        })()}</b>
        <button style={{ display: display_but.show }} onClick={fetch_new_infor} className='save'>Lưu</button><span id={`text${state.id}_time`}> </span>
        <hr style={{ height: '0.1em', backgroundColor: 'white' }} />
      </div>
    </>
  )
  if (state === null || state === undefined) return null
}



export default Student_state