// 라이브러리 형태로 생성
import React,{ Component } from "react";

class TOC extends Component{
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
        );
    }
}

// 외부에서도 사용 가능하게끔 내용 추가!
export default TOC;