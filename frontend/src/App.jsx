import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import { Button } from './components/ui/Button';

function App() {
  const handleClick = () => {
    alert("ボタンが押されました！");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>ボタンのテスト</h1>
      {/* 作ったボタンを呼び出す */}
      <Button label="正解を確認する" onClick={handleClick} />
      
      <div style={{ marginTop: "10px" }}>
        <Button label="次の問題へ" onClick={() => console.log("Next")} color="#059669" />
      </div>
    </div>
  );
}

export default App
