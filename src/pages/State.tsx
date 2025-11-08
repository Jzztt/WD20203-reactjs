import React from 'react'
import { useState } from "react";


const State = () => {
   // cú pháp khai báo (var, let, const) + tên biến = giá trị
    let [count, setCount] = useState<number>(0);

    const handleCount = () => {
      setCount((prev: number) => prev + 1);
    };
    // const [state, setState] = useState<kiểu dữ liệu>(giá trị khởi tạo)

    // viết 1 state tên là isShow kiểu boolean, giá trị khởi tạo là false
    const [isShow, setIsShow] = useState<boolean>(false);
    // viêt 1 hàm thay đổi từ false thành true
    const handleChangeStatus = () => {
      setIsShow((prev) => !prev);
    };
    // nếu isShow là fassle thì hiển thị " Đèn Tắt" và ngược lại

    const handleTurnDelay = (ms:number) => {
      setTimeout(() => {
        setIsShow((prev) => !prev);
      }, ms);
    };
    return (
      <>
        <p>Count : {count}</p>
        <button onClick={handleCount}>Increment</button>

        <p>Đèn {isShow ? "Bật" : "Tắt  "}</p>
        <button onClick={handleChangeStatus}>ChangeStatus</button>
        <button onClick={() =>handleTurnDelay(3000)}>5p</button>
      </>
    );
}

export default State